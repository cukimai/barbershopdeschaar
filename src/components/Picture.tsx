import { preload } from "react-dom";
import manifest from "@/data/images.generated.json";

export type ImageVariant = { src: string; width: number; height: number };
export type ImageEntry = { width: number; height: number; avif: ImageVariant[]; webp: ImageVariant[] };

const images = manifest as Record<string, ImageEntry>;

/** Geeft de vooraf gegenereerde varianten van een bronafbeelding (zie scripts/optimize-images.mjs). */
export function getImage(src: string): ImageEntry | undefined {
  return images[src];
}

/** Bouwt een `srcset`-string uit varianten: "a-640.avif 640w, a-828.avif 828w". */
export function toSrcSet(variants: ImageVariant[]): string {
  return variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ");
}

type Props = {
  /** Pad van de bronafbeelding in /public, bijvoorbeeld "/images/hero.jpg" */
  src: string;
  alt: string;
  /** Verplicht: hoe breed de afbeelding op het scherm is, zodat de browser de juiste variant kiest. */
  sizes: string;
  /** Vult het (relatief gepositioneerde) ouder-element, zoals `fill` bij next/image. */
  fill?: boolean;
  /** Weergavebreedte en -hoogte in CSS-pixels (voor niet-`fill` afbeeldingen). */
  width?: number;
  height?: number;
  /** Boven de vouw: direct laden, hoge prioriteit en een preload in de <head>. */
  priority?: boolean;
  className?: string;
  draggable?: boolean;
};

/**
 * Responsieve afbeelding met AVIF en WebP (en de originele JPG/PNG als terugval).
 * Werkt zonder image-server en dus ook in de statische export.
 */
export function Picture({ src, alt, sizes, fill = false, width, height, priority = false, className = "", draggable }: Props) {
  const entry = getImage(src);
  const imgClassName = fill ? `absolute inset-0 size-full ${className}`.trim() : className;
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  if (!entry) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- statische export zonder image-server
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        draggable={draggable}
        className={imgClassName}
      />
    );
  }

  const displayWidth = width ?? entry.width;
  const displayHeight = height ?? Math.round((entry.height * displayWidth) / entry.width);
  const avifSrcSet = toSrcSet(entry.avif);
  const webpSrcSet = toSrcSet(entry.webp);

  if (priority) {
    preload(entry.avif[entry.avif.length - 1].src, {
      as: "image",
      type: "image/avif",
      imageSrcSet: avifSrcSet,
      imageSizes: sizes,
      fetchPriority: "high",
    });
  }

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        width={displayWidth}
        height={displayHeight}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        draggable={draggable}
        className={imgClassName}
      />
    </picture>
  );
}
