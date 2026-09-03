import { groq } from "next-sanity";
import { client } from "./client";

/**
 * Site-wide contact info + social links. Fetches the singleton `siteSettings`
 * document and merges any filled-in fields on top of the hardcoded defaults
 * below (the values that shipped before the CMS existed). Empty/missing
 * fields fall back to the defaults, so a partly-filled or absent document
 * never breaks a page.
 */

export type SiteSettings = {
  phone: string;
  phoneDial: string;
  whatsapp: string;
  email: string;
  address: string;
  officeHours: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
    x?: string;
  };
};

export const defaultSiteSettings: SiteSettings = {
  phone: "+91 97723 00000",
  phoneDial: "+919772300000",
  whatsapp: "919772300000",
  email: "hello@karlkonsult.com",
  address: "3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001",
  officeHours: "Mon to Sat · 10:00 AM to 7:00 PM",
  socialLinks: {},
};

type Override = Partial<Omit<SiteSettings, "socialLinks">> & {
  socialLinks?: SiteSettings["socialLinks"];
};

const SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  phone, phoneDial, whatsapp, email, address, officeHours,
  socialLinks
}`;

async function fetchOverride(): Promise<Override | null> {
  try {
    return await client.fetch<Override | null>(SETTINGS_QUERY, {}, {
      next: { revalidate: 60 },
    });
  } catch {
    return null;
  }
}

const nonEmpty = (v: string | undefined | null): v is string => !!v && v.trim() !== "";

export async function getSiteSettings(): Promise<SiteSettings> {
  const o = await fetchOverride();
  if (!o) return defaultSiteSettings;

  return {
    phone: nonEmpty(o.phone) ? o.phone : defaultSiteSettings.phone,
    phoneDial: nonEmpty(o.phoneDial) ? o.phoneDial : defaultSiteSettings.phoneDial,
    whatsapp: nonEmpty(o.whatsapp) ? o.whatsapp : defaultSiteSettings.whatsapp,
    email: nonEmpty(o.email) ? o.email : defaultSiteSettings.email,
    address: nonEmpty(o.address) ? o.address : defaultSiteSettings.address,
    officeHours: nonEmpty(o.officeHours) ? o.officeHours : defaultSiteSettings.officeHours,
    socialLinks: {
      instagram: nonEmpty(o.socialLinks?.instagram) ? o.socialLinks!.instagram : undefined,
      facebook: nonEmpty(o.socialLinks?.facebook) ? o.socialLinks!.facebook : undefined,
      linkedin: nonEmpty(o.socialLinks?.linkedin) ? o.socialLinks!.linkedin : undefined,
      youtube: nonEmpty(o.socialLinks?.youtube) ? o.socialLinks!.youtube : undefined,
      whatsapp: nonEmpty(o.socialLinks?.whatsapp) ? o.socialLinks!.whatsapp : undefined,
      x: nonEmpty(o.socialLinks?.x) ? o.socialLinks!.x : undefined,
    },
  };
}
