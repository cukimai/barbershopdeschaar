import { HeaderShell } from "@/components/HeaderShell";
import { Picture } from "@/components/Picture";
import { SocialLinks } from "@/components/SocialLinks";
import { PhoneIcon } from "@/components/icons";
import { navigation, site } from "@/data/site";

export function Header() {
  return (
    <HeaderShell
      menu={
        <nav aria-label="Mobiele navigatie" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block border-b border-line py-4 text-lg font-medium text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 pb-2">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-white"
            >
              <PhoneIcon className="size-4" />
              Bel {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3.5 text-base font-semibold text-ink"
            >
              Stuur een WhatsApp
            </a>
            <div className="mt-2 flex items-center justify-between border-t border-line pt-5">
              <span className="text-sm text-muted">Volg ons</span>
              <SocialLinks />
            </div>
          </div>
        </nav>
      }
    >
      <a href="/" className="flex items-center" aria-label={`${site.name} – home`}>
        <Picture
          src="/images/logo-black.png"
          alt={site.name}
          width={166}
          height={70}
          sizes="140px"
          priority
          className="h-12 w-auto sm:h-14"
        />
      </a>

      <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 md:flex">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[15px] font-medium text-ink-soft/80 transition-colors duration-150 hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <SocialLinks size="sm" className="hidden md:flex" />
        <a
          href={`tel:${site.phone}`}
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-brand-dark active:scale-[0.98] sm:inline-flex"
        >
          <PhoneIcon className="size-4" />
          Bel of app
        </a>
      </div>
    </HeaderShell>
  );
}
