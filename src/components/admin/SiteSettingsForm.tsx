"use client";

import { Field, inputBase, SubmitButton } from "@/components/admin/form";
import { ImageField } from "@/components/admin/ImageField";
import type { SiteSettingsDoc } from "@/app/admin/(dashboard)/settings/actions";
import { saveSiteSettings, uploadSiteSettingsImage } from "@/app/admin/(dashboard)/settings/actions";
import { defaultSiteSettings } from "@/sanity/site-settings";

export function SiteSettingsForm({ settings }: { settings: SiteSettingsDoc }) {
  return (
    <form action={saveSiteSettings} className="flex max-w-2xl flex-col gap-5">
      <p className="-mt-1 text-xs text-pine-700/55">
        Grayed-out text shows the value currently live on the site. Type in a field to override it.
      </p>

      <h2 className="font-bold text-pine-900">Logo</h2>
      <ImageField
        label="Header logo"
        hint="Shown in the site header. Leave unset to keep the built-in logo."
        hiddenFieldName="logoJson"
        currentAssetRef={settings.logo?.asset?._ref}
        uploadAction={uploadSiteSettingsImage}
      />
      <ImageField
        label="Footer logo"
        hint="Shown in the footer on a dark background — use a white/light version. Leave unset to keep the built-in logo."
        hiddenFieldName="logoFooterJson"
        currentAssetRef={settings.logoFooter?.asset?._ref}
        uploadAction={uploadSiteSettingsImage}
        previewClassName="h-16 w-40 !bg-pine-900"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Phone number" htmlFor="phone" hint='Displayed, e.g. "+91 97723 00000"'>
          <input
            id="phone"
            name="phone"
            defaultValue={settings.phone || ""}
            placeholder={defaultSiteSettings.phone}
            className={inputBase}
          />
        </Field>
        <Field label="Phone (dial format)" htmlFor="phoneDial" hint="Digits + country code, e.g. +919772300000">
          <input
            id="phoneDial"
            name="phoneDial"
            defaultValue={settings.phoneDial || ""}
            placeholder={defaultSiteSettings.phoneDial}
            className={inputBase}
          />
        </Field>
      </div>

      <Field label="WhatsApp number (dial format)" htmlFor="whatsapp" hint="No plus sign, e.g. 919772300000">
        <input
          id="whatsapp"
          name="whatsapp"
          defaultValue={settings.whatsapp || ""}
          placeholder={defaultSiteSettings.whatsapp}
          className={inputBase}
        />
      </Field>

      <Field label="Email address" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={settings.email || ""}
          placeholder={defaultSiteSettings.email}
          className={inputBase}
        />
      </Field>

      <Field label="Office address" htmlFor="address">
        <textarea
          id="address"
          name="address"
          defaultValue={settings.address || ""}
          placeholder={defaultSiteSettings.address}
          rows={2}
          className={`${inputBase} resize-y`}
        />
      </Field>

      <Field label="Office hours" htmlFor="officeHours" hint='e.g. "Mon to Sat · 10:00 AM to 7:00 PM"'>
        <input
          id="officeHours"
          name="officeHours"
          defaultValue={settings.officeHours || ""}
          placeholder={defaultSiteSettings.officeHours}
          className={inputBase}
        />
      </Field>

      <h2 className="mt-2 font-bold text-pine-900">Social links</h2>
      <p className="-mt-3 text-xs text-pine-700/55">
        Leave any field blank to hide/skip that platform&apos;s link.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Instagram URL" htmlFor="social_instagram">
          <input
            id="social_instagram"
            name="social_instagram"
            type="url"
            defaultValue={settings.socialLinks?.instagram || ""}
            className={inputBase}
          />
        </Field>
        <Field label="Facebook URL" htmlFor="social_facebook">
          <input
            id="social_facebook"
            name="social_facebook"
            type="url"
            defaultValue={settings.socialLinks?.facebook || ""}
            className={inputBase}
          />
        </Field>
        <Field label="LinkedIn URL" htmlFor="social_linkedin">
          <input
            id="social_linkedin"
            name="social_linkedin"
            type="url"
            defaultValue={settings.socialLinks?.linkedin || ""}
            className={inputBase}
          />
        </Field>
        <Field label="YouTube URL" htmlFor="social_youtube">
          <input
            id="social_youtube"
            name="social_youtube"
            type="url"
            defaultValue={settings.socialLinks?.youtube || ""}
            className={inputBase}
          />
        </Field>
        <Field label="WhatsApp URL" htmlFor="social_whatsapp">
          <input
            id="social_whatsapp"
            name="social_whatsapp"
            type="url"
            defaultValue={settings.socialLinks?.whatsapp || ""}
            className={inputBase}
          />
        </Field>
        <Field label="X (Twitter) URL" htmlFor="social_x">
          <input
            id="social_x"
            name="social_x"
            type="url"
            defaultValue={settings.socialLinks?.x || ""}
            className={inputBase}
          />
        </Field>
      </div>

      <div>
        <SubmitButton label="Save settings" pendingLabel="Saving…" />
      </div>
    </form>
  );
}
