#!/usr/bin/env node
/**
 * Haalt de laatste Instagram-berichten op via de Instagram Graph API en slaat ze
 * lokaal op in public/instagram/ (afbeeldingen + feed.json).
 *
 * Waarom lokaal opslaan? Instagram-afbeeldings-URL's verlopen na enkele dagen.
 * Door ze bij de build te downloaden blijft de site altijd werken en snel.
 *
 * Gebruik:
 *   INSTAGRAM_ACCESS_TOKEN=... npm run instagram
 *
 * Zonder token doet dit script niets en blijft de meegeleverde fallback actief.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const LIMIT = Number(process.env.INSTAGRAM_LIMIT ?? 12);
const OUT_DIR = path.join(process.cwd(), "public", "instagram");
const FEED_FILE = path.join(OUT_DIR, "feed.json");

if (!TOKEN) {
  console.log("[instagram] Geen INSTAGRAM_ACCESS_TOKEN gevonden; fallback-posts blijven actief.");
  process.exit(0);
}

const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const apiUrl = new URL("https://graph.instagram.com/me/media");
apiUrl.searchParams.set("fields", fields);
apiUrl.searchParams.set("limit", String(LIMIT));
apiUrl.searchParams.set("access_token", TOKEN);

async function main() {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Instagram API antwoordde met ${response.status}: ${await response.text()}`);
  }

  const { data = [] } = await response.json();
  await mkdir(OUT_DIR, { recursive: true });

  const posts = [];
  for (const item of data) {
    const imageUrl = item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url;
    if (!imageUrl) continue;

    const fileName = `${item.id}.jpg`;
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      console.warn(`[instagram] Afbeelding voor ${item.id} overgeslagen (${imageResponse.status}).`);
      continue;
    }

    await writeFile(path.join(OUT_DIR, fileName), Buffer.from(await imageResponse.arrayBuffer()));

    posts.push({
      id: item.id,
      image: `/instagram/${fileName}`,
      permalink: item.permalink,
      caption: cleanCaption(item.caption),
      type: item.media_type,
      timestamp: item.timestamp,
    });
  }

  await writeFile(FEED_FILE, JSON.stringify(posts, null, 2));
  console.log(`[instagram] ${posts.length} berichten opgeslagen in public/instagram/feed.json`);
}

function cleanCaption(caption = "") {
  return caption
    .replace(/#[\p{L}\p{N}_]+/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 140);
}

main().catch((error) => {
  console.error("[instagram] Mislukt:", error.message);
  process.exit(1);
});
