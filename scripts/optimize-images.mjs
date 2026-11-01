/**
 * Maakt van elke bronafbeelding in /public moderne, kleinere varianten (AVIF + WebP)
 * in meerdere breedtes en schrijft een manifest naar src/data/images.generated.json.
 *
 * De site is een statische export (geen image-server), dus dit gebeurt vooraf:
 *   npm run images        (handmatig)
 *   npm run build         (automatisch via prebuild)
 *
 * Bestaande varianten die nieuwer zijn dan de bron worden overgeslagen.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const MANIFEST_PATH = path.join(ROOT, "src", "data", "images.generated.json");

/** Standaardbreedtes (sluiten aan op gangbare schermen en pixeldichtheden). */
const DEFAULT_WIDTHS = [384, 640, 828, 1080, 1280, 1600, 1920];

const AVIF_QUALITY = 48;
const WEBP_QUALITY = 74;

/**
 * Per map: welke bestanden en eventueel afwijkende breedtes.
 * `upscaleTo` staat vergroten toe (alleen voor de hero, zodat ook brede schermen scherp genoeg zijn).
 */
const SOURCES = [
  { dir: "images", match: /\.(jpe?g|png)$/i, exclude: /^(og|mark-black)\./ },
  { dir: "instagram", match: /\.jpe?g$/i, widths: [384, 640] },
  { dir: "tiktok", match: /\.jpe?g$/i, widths: [384, 640] },
];

const OVERRIDES = {
  "/images/hero.jpg": { widths: [828, 1080, 1280, 1600, 1920], upscaleTo: 1920, avifQuality: 42 },
    "/images/hero-mobile.jpg": { widths: [480, 640, 828, 900], avifQuality: 34 },
  // Dienstkaarten liggen onder een donkere gradient; lagere kwaliteit valt niet op.
  "/images/service-knippen.jpg": { avifQuality: 38 },
  "/images/service-baard.jpg": { avifQuality: 38 },
  "/images/service-vip.jpg": { avifQuality: 38 },
  "/images/service-kinderen.jpg": { avifQuality: 38 },
  "/images/logo-black.png": { widths: [192, 384] },
  "/images/logo-white.png": { widths: [192, 384] },
};

async function isFresh(target, sourceMtime) {
  try {
    const stat = await fs.stat(target);
    return stat.mtimeMs >= sourceMtime;
  } catch {
    return false;
  }
}

async function processFile(dir, file, source) {
  const absolute = path.join(PUBLIC_DIR, dir, file);
  const publicPath = `/${dir}/${file}`;
  const override = OVERRIDES[publicPath] ?? {};
  const meta = await sharp(absolute).metadata();
  const sourceWidth = meta.width ?? 0;
  const sourceHeight = meta.height ?? 0;
  const maxWidth = override.upscaleTo ?? sourceWidth;
  const stat = await fs.stat(absolute);

  const wanted = (override.widths ?? source.widths ?? DEFAULT_WIDTHS).filter((w) => w <= maxWidth);
  if (wanted.length === 0 || (wanted[wanted.length - 1] < sourceWidth && !override.widths && !source.widths)) {
    wanted.push(Math.min(sourceWidth, maxWidth));
  }
  const widths = [...new Set(wanted)].sort((a, b) => a - b);

  const base = file.replace(/\.[^.]+$/, "");
  const variants = { avif: [], webp: [] };
  let generated = 0;

  for (const width of widths) {
    const height = override.aspect ? Math.round(width / override.aspect) : Math.round((sourceHeight * width) / sourceWidth);
    for (const format of ["avif", "webp"]) {
      const outName = `${base}-${width}.${format}`;
      const outPath = path.join(PUBLIC_DIR, dir, outName);
      variants[format].push({ src: `/${dir}/${outName}`, width, height });

      if (await isFresh(outPath, stat.mtimeMs)) continue;

      let pipeline = sharp(absolute).resize({
        width,
        height: override.aspect ? Math.round(width / override.aspect) : undefined,
        fit: "cover",
        position: "centre",
        withoutEnlargement: !override.upscaleTo,
        kernel: "lanczos3",
      });
      pipeline =
        format === "avif"
          ? pipeline.avif({ quality: override.avifQuality ?? AVIF_QUALITY, effort: 6, chromaSubsampling: "4:2:0" })
          : pipeline.webp({ quality: override.webpQuality ?? WEBP_QUALITY, effort: 5 });
      await pipeline.toFile(outPath);
      generated += 1;
    }
  }

  return {
    entry: [publicPath, { width: sourceWidth, height: sourceHeight, avif: variants.avif, webp: variants.webp }],
    generated,
  };
}

async function main() {
  const manifest = {};
  let generated = 0;

  for (const source of SOURCES) {
    const dirPath = path.join(PUBLIC_DIR, source.dir);
    const files = (await fs.readdir(dirPath)).filter(
      (file) => source.match.test(file) && !(source.exclude && source.exclude.test(file)),
    );

    const results = await Promise.all(
      files.map((file) =>
        processFile(source.dir, file, source).catch((error) => {
          throw new Error(`[images] ${source.dir}/${file}: ${error.message}`);
        }),
      ),
    );

    for (const result of results) {
      const [key, value] = result.entry;
      manifest[key] = value;
      generated += result.generated;
    }
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(
    `[images] ${Object.keys(sorted).length} bronbestanden, ${generated} nieuwe varianten → src/data/images.generated.json`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
