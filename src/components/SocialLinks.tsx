import { FacebookBrandIcon, InstagramBrandIcon, TikTokBrandIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

type Props = {
  /** "light" op witte achtergrond, "dark" op zwarte achtergrond */
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
};

const links = [
  { label: "Instagram", href: site.instagram.url, Icon: InstagramBrandIcon },
  { label: "TikTok", href: site.tiktok.url, Icon: TikTokBrandIcon },
  { label: "Facebook", href: site.facebookUrl, Icon: FacebookBrandIcon },
];

/** Rij met social-media-iconen in hun eigen merkkleuren; herbruikbaar in header, menu en footer. */
export function SocialLinks({ tone = "light", size = "md", className = "" }: Props) {
  // TikTok-glyph is zwart op licht en wit op donker; Instagram en Facebook zijn altijd in kleur.
  const shell =
    tone === "dark"
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-paper-soft text-ink hover:bg-ink/10";
  const dims = size === "sm" ? "size-9" : "size-11";
  const icon = size === "sm" ? "size-[18px]" : "size-[22px]";

  return (
    <ul className={`flex items-center gap-2 ${className}`} aria-label="Social media">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.shortName} op ${label}`}
            title={label}
            className={`flex ${dims} items-center justify-center rounded-full transition-[background-color,transform] duration-150 hover:scale-105 ${shell}`}
          >
            <Icon className={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
