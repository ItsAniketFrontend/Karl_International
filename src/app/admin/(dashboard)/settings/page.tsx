import { getOrCreateSiteSettings } from "./actions";
import { SiteSettingsForm } from "@/components/admin/SiteSettingsForm";

export default async function SiteSettingsPage() {
  const settings = await getOrCreateSiteSettings();

  return (
    <div>
      <h1 className="text-2xl font-bold text-pine-900">Site Settings</h1>
      <p className="mt-1 text-sm text-pine-700/65">
        Contact info and social links shown across the site. Leave a field blank to keep the
        built-in default.
      </p>
      <div className="mt-6">
        <SiteSettingsForm settings={settings} />
      </div>
    </div>
  );
}
