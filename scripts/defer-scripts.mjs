/**
 * Nabewerking van de statische export (out/): de JavaScript-bundels van Next.js
 * worden pas geladen nadat de pagina volledig is weergegeven (window 'load').
 *
 * Waarom: de site is vrijwel volledig statische HTML. Zonder deze stap concurreren
 * ~150 kB aan scripts met de hero-afbeelding en het lettertype om de bandbreedte,
 * terwijl ze pas nodig zijn voor kleine interacties (menu, "nu geopend", kaart).
 * Zo wordt de grootste afbeelding (LCP) merkbaar eerder getoond op trage verbindingen.
 *
 * De `async`-scripts zijn volgordeonafhankelijk (de Turbopack-runtime wacht tot alle
 * benodigde chunks aanwezig zijn), dus later injecteren verandert niets aan de werking.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

const SCRIPT_TAG = /<script src="(\/_next\/static\/[^"]+)" async=""><\/script>/g;
const PRELOAD_TAG = /<link rel="preload" as="script"[^>]*href="\/_next\/static\/[^"]+"[^>]*\/>/g;

async function* htmlFiles(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

function loader(urls) {
  const list = JSON.stringify(urls);
  return (
    "<script>(function(){" +
    `var s=${list};` +
    "function l(){for(var i=0;i<s.length;i++){var e=document.createElement('script');e.src=s[i];e.async=true;document.head.appendChild(e)}}" +
    // Na 'load' nog 300 ms wachten: de hero-afbeelding is dan gedecodeerd en geschilderd.
    "function w(){setTimeout(l,300)}" +
    "if(document.readyState==='complete'){w()}else{window.addEventListener('load',w)}" +
    "})();</script>"
  );
}

async function processFile(file) {
  const html = await fs.readFile(file, "utf8");
  const urls = [];
  let next = html.replace(SCRIPT_TAG, (_match, url) => {
    urls.push(url);
    return "";
  });
  if (urls.length === 0) return false;

  next = next.replace(PRELOAD_TAG, "");

  const closing = next.lastIndexOf("</body>");
  if (closing === -1) throw new Error(`[defer-scripts] Geen </body> gevonden in ${file}`);
  next = `${next.slice(0, closing)}${loader(urls)}${next.slice(closing)}`;

  await fs.writeFile(file, next);
  return true;
}

let count = 0;
for await (const file of htmlFiles(OUT_DIR)) {
  if (await processFile(file)) count += 1;
}
console.log(`[defer-scripts] ${count} HTML-bestanden aangepast: scripts laden na 'load'.`);
