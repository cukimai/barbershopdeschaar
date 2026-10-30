# Barbershop De Schaar — website

Strakke, snelle one-page website voor [Barbershop De Schaar](https://barbershopdeschaar.nl) in 's-Heerenberg.
Gebouwd met **Next.js (React) + TypeScript + Tailwind CSS**, volledig statisch geëxporteerd: deploybaar op elke webhost.
Zusterproject van de site van Barbershop De Achterhoek (zelfde codebasis, andere data en huisstijl).

## Snel starten

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statische site in ./out
```

## Gegevens aanpassen

Alle teksten, openingstijden, diensten, prijzen en contactgegevens staan in **`src/data/site.ts`**.
Pas daar iets aan en de hele site (inclusief SEO-metadata en Google-gestructureerde data) volgt.

- **Prijzen:** `priceList` en `services` (doorgegeven door de eigenaar op 30 oktober 2026: knippen € 26, kinderen € 23, verder conform de prijslijst van 1 november 2025).
- **Openingstijden:** `hours` (dag 0 = zondag). De "Nu geopend"-badge rekent live in tijdzone Europe/Amsterdam.
- **Huisstijl:** kleuren in `src/app/globals.css` (`--color-brand` rood, `--color-brand-light` blauw uit de barber pole).

## Pagina's

- `/` — homepage (alle secties, FAQ met FAQPage-schema)
- `/herenkapper-s-heerenberg/`, `/barbier-baard-s-heerenberg/`, `/kapper-zonder-afspraak-s-heerenberg/`, `/barbershop-montferland-omgeving/` — lokale SEO-landingspagina's. Inhoud in `src/data/pages.ts`; nieuwe pagina = nieuw object (sitemap en footer volgen automatisch).
- `/privacy/` — privacyverklaring (nodig vanwege Google Maps- en TikTok-embeds).

## Instagram-feed koppelen

De carrousel toont standaard de meegeleverde posts uit `src/data/instagram-fallback.ts`. Voor een live feed:

1. Instagram-account omzetten naar Business/Creator en koppelen aan de Facebook-pagina.
2. In [Meta for Developers](https://developers.facebook.com/) een app met product *Instagram* en een long-lived access token.
3. `.env.example` → `.env`, token invullen, `npm run instagram` (draait ook automatisch vóór `npm run build`).

## TikTok-video's

Video-ID's met omschrijving in `src/data/tiktok-videos.json`; thumbnail als `public/tiktok/<id>.jpg` (staand, 4:5). Zonder thumbnail wordt de video overgeslagen. De speler laadt pas na een klik.

## Deployen

**Live-situatie:** Plesk-server van fusey.nl (`mail.fusey.nl:8443`), domein `barbershopdeschaar.nl`, document root `/site`. De oude WordPress-site staat in `/httpdocs` (rollback = document root terugzetten op `httpdocs`).

**Nieuwe versie live zetten (3 stappen):**

1. Push naar `main`. GitHub Actions bouwt de site en publiceert `site.zip` in de release **latest**:
   `https://github.com/cukimai/BarbershopDeSchaar/releases/download/latest/site.zip`
2. Plesk → *Files* → map `site` → **+** → *Import file via URL* → plak bovenstaande URL.
3. Vink `site.zip` aan → *Archive* → *Extract Files* → **Replace existing files** aan → OK. Verwijder daarna de zip.

`public/.htaccess` regelt op Apache de 404-pagina, caching en compressie.

## Bovenaan in Google in 's-Heerenberg

1. **Google Bedrijfsprofiel**: de website-URL staat nu fout (nlnavimap.top) — zet die op `https://barbershopdeschaar.nl`. Categorie "Barbershop" + "Herenkapper", openingstijden gelijk aan de site, diensten met prijzen, wekelijks een foto of post.
2. **Reviews** blijven vragen en beantwoorden (4,9 ★ met 463 reviews is een sterk fundament).
3. **Search Console**: eigendom verifiëren en `https://barbershopdeschaar.nl/sitemap.xml` indienen.
4. **Eén telefoonnummer overal**: 06 19 31 31 67. In de TikTok-bio staat nu 0610313167 (typefout).
5. **Lokale vermeldingen**: Montferland-ondernemersverenigingen, Kappers.nl-profiel met foto's.

## Nog te controleren door de eigenaar

- **Openingstijden**: de oude website zei "maandag gesloten"; Google Bedrijfsprofiel en het bordje in de zaak zeggen "maandag 13:00–18:00". De site volgt Google (7 dagen open). Donderdag: Google 18:00, bordje 20:00 — site volgt Google. Pas `hours` aan als dat niet klopt.

## Afbeeldingen

- `public/images/logo-*.png`, `mark-black.png` en iconen: afgeleid van het logo van de oude website en het Instagram-profiel.
- Overige foto's: eigen foto's van de zaak via het Google Bedrijfsprofiel. Vervangen kan door een bestand met dezelfde naam te overschrijven.
- `public/instagram/*.jpg`, `public/tiktok/*.jpg`: stills van eigen posts.
