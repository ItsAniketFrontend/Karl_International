import { defaultSiteSettings, getSiteSettings } from "@/sanity/site-settings";
import { StickyActionsClient } from "@/components/ui/StickyActionsClient";

/**
 * Server wrapper: fetches CMS contact info (falling back to the defaults if
 * unset) and renders the client component. Import and mount this — not
 * StickyActionsClient directly — so every page picks up CMS edits.
 */
export async function StickyActions() {
  const { phoneDial, whatsapp } = await getSiteSettings();
  return (
    <StickyActionsClient
      phone={phoneDial || defaultSiteSettings.phoneDial}
      whatsapp={whatsapp || defaultSiteSettings.whatsapp}
    />
  );
}
