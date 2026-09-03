"use server";

import { revalidatePath } from "next/cache";
import { writeClient } from "@/sanity/write-client";

export type SiteSettingsDoc = {
  _id: string;
  phone?: string;
  phoneDial?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  officeHours?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
    x?: string;
  };
};

const SETTINGS_ID = "siteSettings";

export async function getOrCreateSiteSettings(): Promise<SiteSettingsDoc> {
  const existing = await writeClient.fetch<SiteSettingsDoc | null>(
    `*[_type == "siteSettings" && _id == $id][0]{
      _id, phone, phoneDial, whatsapp, email, address, officeHours, socialLinks
    }`,
    { id: SETTINGS_ID },
  );
  if (existing) return existing;

  await writeClient.createIfNotExists({ _id: SETTINGS_ID, _type: "siteSettings" });
  return { _id: SETTINGS_ID };
}

export async function saveSiteSettings(formData: FormData) {
  const phone = String(formData.get("phone") || "");
  const phoneDial = String(formData.get("phoneDial") || "");
  const whatsapp = String(formData.get("whatsapp") || "");
  const email = String(formData.get("email") || "");
  const address = String(formData.get("address") || "");
  const officeHours = String(formData.get("officeHours") || "");

  const socialLinks: Record<string, string> = {};
  for (const key of ["instagram", "facebook", "linkedin", "youtube", "whatsapp", "x"]) {
    const value = String(formData.get(`social_${key}`) || "");
    if (value) socialLinks[key] = value;
  }

  const doc: { _id: string; _type: string } & Record<string, unknown> = {
    _id: SETTINGS_ID,
    _type: "siteSettings",
  };
  if (phone) doc.phone = phone;
  if (phoneDial) doc.phoneDial = phoneDial;
  if (whatsapp) doc.whatsapp = whatsapp;
  if (email) doc.email = email;
  if (address) doc.address = address;
  if (officeHours) doc.officeHours = officeHours;
  if (Object.keys(socialLinks).length) doc.socialLinks = socialLinks;

  await writeClient.createOrReplace(doc);

  revalidatePath("/", "layout");
}
