import { promises as fs } from "node:fs";
import path from "node:path";
import { fallbackPosts, type InstagramPost } from "@/data/instagram-fallback";

const FEED_PATH = path.join(process.cwd(), "public", "instagram", "feed.json");

/**
 * Leest de Instagram-feed die door `npm run instagram` is opgehaald (public/instagram/feed.json).
 * Bestaat dat bestand niet, dan vallen we terug op de meegeleverde posts zodat de site altijd compleet is.
 * Dit draait tijdens `next build`, dus bezoekers laden nooit iets van Instagram zelf.
 */
export async function getInstagramPosts(limit = 10): Promise<InstagramPost[]> {
  try {
    const raw = await fs.readFile(FEED_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);

    if (Array.isArray(parsed) && parsed.length > 0 && isPostArray(parsed)) {
      return parsed.slice(0, limit);
    }
  } catch {
    // Geen feed opgehaald; fallback gebruiken.
  }

  return fallbackPosts.slice(0, limit);
}

function isPostArray(value: unknown[]): value is InstagramPost[] {
  return value.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      typeof (item as InstagramPost).id === "string" &&
      typeof (item as InstagramPost).image === "string" &&
      typeof (item as InstagramPost).permalink === "string",
  );
}
