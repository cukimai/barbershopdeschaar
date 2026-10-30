import type { Metadata } from "next";
import Link from "next/link";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Hoe ${site.name} omgaat met persoonsgegevens op deze website: geen tracking, geen formulieren, alleen wat nodig is voor Google Maps en TikTok.`,
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

const updated = "30 oktober 2026";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="inhoud" className="flex-1 bg-white">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <nav aria-label="Kruimelpad" className="text-sm text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Privacy
              </li>
            </ol>
          </nav>

          <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-brand uppercase">Privacy</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">Privacyverklaring</h1>
          <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: {updated}</p>

          <div className="mt-10 space-y-10 text-lg leading-relaxed text-muted [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section className="space-y-4">
              <h2>Wie zijn wij</h2>
              <p>
                {site.name}, gevestigd aan de {site.address.street}, {site.address.postalCode} {site.address.city}.
                Bereikbaar via {site.phoneDisplay}. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens
                zoals beschreven in deze verklaring.
              </p>
            </section>

            <section className="space-y-4">
              <h2>Welke gegevens verzamelt deze website</h2>
              <p>
                Zo min mogelijk. Deze website heeft geen contactformulier, geen account en geen online boekingssysteem.
                We gebruiken geen analytics- of advertentiecookies en plaatsen zelf geen cookies.
              </p>
              <p>
                Neem je contact met ons op via telefoon of WhatsApp, dan verwerken we je telefoonnummer en de inhoud
                van je bericht om je afspraak of vraag af te handelen. Die gegevens bewaren we niet langer dan daarvoor
                nodig is.
              </p>
            </section>

            <section className="space-y-4">
              <h2>Ingesloten diensten van derden</h2>
              <p>Op enkele plekken tonen we inhoud van andere partijen. Zij kunnen daarbij gegevens verwerken:</p>
              <ul>
                <li>
                  <strong className="text-ink">Google Maps</strong> op de contactsectie, om onze locatie te tonen. Google
                  kan hierbij je IP-adres en apparaatgegevens verwerken. Zie het{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4"
                  >
                    privacybeleid van Google
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-ink">TikTok</strong>: video&apos;s worden pas geladen nadat je zelf op een video
                  klikt. Daarna geldt het{" "}
                  <a
                    href="https://www.tiktok.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4"
                  >
                    privacybeleid van TikTok
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-ink">Instagram-afbeeldingen</strong> worden door onszelf gehost; er wordt
                  niets van Instagram geladen totdat je op een bericht klikt en naar Instagram gaat.
                </li>
                <li>
                  <strong className="text-ink">WhatsApp</strong>: klik je op de WhatsApp-knop, dan open je WhatsApp
                  zelf. Daarop is het privacybeleid van WhatsApp van toepassing.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2>Hosting en beveiliging</h2>
              <p>
                De website wordt via een beveiligde verbinding (HTTPS) aangeboden. Onze hostingpartij kan technische
                logbestanden bijhouden (zoals IP-adres en tijdstip) om de website veilig en beschikbaar te houden.
              </p>
            </section>

            <section className="space-y-4">
              <h2>Jouw rechten</h2>
              <p>
                Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Neem daarvoor
                contact met ons op via {site.phoneDisplay} of kom langs in de zaak. Ben je het niet eens met hoe wij met
                je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>

            <section className="space-y-4">
              <h2>Wijzigingen</h2>
              <p>
                We kunnen deze verklaring aanpassen, bijvoorbeeld als de website nieuwe functies krijgt. De actuele
                versie staat altijd op deze pagina.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
