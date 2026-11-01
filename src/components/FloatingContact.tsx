import { FloatingContactBar } from "@/components/FloatingContactBar";
import { site } from "@/data/site";

/** Zwevende bel- en WhatsApp-knop; de gegevens komen van de server, de interactie uit FloatingContactBar. */
export function FloatingContact() {
  return <FloatingContactBar phone={site.phone} phoneDisplay={site.phoneDisplay} whatsappUrl={site.whatsappUrl} />;
}
