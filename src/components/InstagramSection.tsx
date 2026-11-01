import { Picture } from "@/components/Picture";
import { ScrollRow } from "@/components/ScrollRow";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, InstagramIcon, PlayIcon } from "@/components/icons";
import { site } from "@/data/site";
import { getInstagramPosts } from "@/lib/instagram";

export async function InstagramSection() {
  const posts = await getInstagramPosts(10);
  if (posts.length === 0) return null;

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
        <ScrollRow label="Recente Instagram-berichten">
          {posts.map((post) => (
            <li key={post.id} className="w-[268px] shrink-0 snap-start sm:w-[284px]">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink-soft"
              >
                <Picture
                  src={post.image}
                  alt={post.caption || `Instagram-bericht van ${site.name}`}
                  fill
                  sizes="284px"
                  draggable={false}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                {post.type === "VIDEO" && (
                  <span
                    className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                    aria-hidden="true"
                  >
                    <PlayIcon className="size-4" />
                  </span>
                )}
                {post.caption && (
                  <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-4 text-sm font-medium text-white/90">
                    {post.caption}
                  </p>
                )}
              </a>
            </li>
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}
