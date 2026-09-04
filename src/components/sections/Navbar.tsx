import { getSiteSettings } from "@/sanity/site-settings";
import { NavbarClient } from "@/components/sections/NavbarClient";

/**
 * Server wrapper: fetches the CMS header logo (falling back to the built-in
 * /logo.png if unset) and renders the client component. Import and mount
 * this — not NavbarClient directly — so every page picks up CMS edits.
 */
export async function Navbar() {
  const { logoUrl } = await getSiteSettings();
  return <NavbarClient logoUrl={logoUrl} />;
}
