import { SectionHeading } from "@/components/SectionHeading";
import { TikTokGrid } from "@/components/TikTokGrid";
import { ArrowRightIcon, TikTokIcon } from "@/components/icons";
import { site } from "@/data/site";
import { getTikTokVideos } from "@/lib/tiktok";

export async function TikTokSection() {
  const videos = await getTikTokVideos(8);
  if (videos.length === 0) return null;

  return (
    <section id="tiktok" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="TikTok"
            title="Een kijkje in de zaak."
            text={`Humor, vakmanschap en een dag uit het leven van de barbers. Volg @${site.tiktok.handle} voor meer.`}
          />
          <a
            href={site.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-[border-color,background-color] duration-150 hover:border-ink/25 hover:bg-paper-soft md:self-auto"
          >
            <TikTokIcon className="size-5" />
            Volg ons op TikTok
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="pt-12 pb-24 sm:pb-32">
        <TikTokGrid videos={videos} />
      </div>
    </section>
  );
}
