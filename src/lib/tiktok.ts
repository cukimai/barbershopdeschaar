import { promises as fs } from "node:fs";
import path from "node:path";
import videos from "@/data/tiktok-videos.json";
import { site } from "@/data/site";

export type TikTokVideo = {
  id: string;
  url: string;
  /** Pad binnen /public */
  image: string;
  caption: string;
};

const THUMB_DIR = path.join(process.cwd(), "public", "tiktok");

/**
 * Bouwt de lijst TikTok-video's uit src/data/tiktok-videos.json.
 * Alleen video's met een thumbnail in public/tiktok/<id>.jpg worden getoond,
 * zodat een vergeten afbeelding nooit een kapotte kaart oplevert.
 */
export async function getTikTokVideos(limit = 8): Promise<TikTokVideo[]> {
  const available = await Promise.all(
    videos.map(async (video) => {
      try {
        await fs.access(path.join(THUMB_DIR, `${video.id}.jpg`));
        return {
          id: video.id,
          url: `${site.tiktok.url}/video/${video.id}`,
          image: `/tiktok/${video.id}.jpg`,
          caption: video.caption,
        } satisfies TikTokVideo;
      } catch {
        return null;
      }
    }),
  );

  return available.filter((video): video is TikTokVideo => video !== null).slice(0, limit);
}
