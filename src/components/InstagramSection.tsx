import { InstagramCarousel } from "@/components/InstagramCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, InstagramIcon } from "@/components/icons";
import { site } from "@/data/site";
import { getInstagramPosts } from "@/lib/instagram";

export async function InstagramSection() {
  const posts = await getInstagramPosts(10);

  return (
    <section id="instagram" className="scroll-mt-20 overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Instagram"
            title="Vers van de stoel."
            text={`Volg @${site.instagram.handle} voor het laatste werk, acties en een kijkje achter de schermen.`}
          />
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,border-color] duration-150 hover:border-white/40 hover:bg-white/10 md:self-auto"
          >
            <InstagramIcon className="size-5" />
            Volg ons
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="pt-12 pb-24 sm:pb-32">
        <InstagramCarousel posts={posts} />
      </div>
    </section>
  );
}
