import { defineType, defineField } from "sanity";

/**
 * Site-wide contact info + social links — a singleton document (one instance
 * only, enforced in the Studio structure). Every field is OPTIONAL; anything
 * left blank falls back to the built-in defaults in
 * src/sanity/site-settings.ts, so a partly-filled document never breaks a page.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      description: 'Displayed number, e.g. "+91 97723 00000".',
    }),
    defineField({
      name: "phoneDial",
      title: "Phone number (dial format)",
      type: "string",
      description: 'Digits only with country code, e.g. "+919772300000". Used for tel: links.',
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp number (dial format)",
      type: "string",
      description: 'Digits only with country code, no plus sign, e.g. "919772300000". Used for wa.me links.',
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Office address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "officeHours",
      title: "Office hours",
      type: "string",
      description: 'e.g. "Mon to Sat · 10:00 AM to 7:00 PM".',
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "object",
      description: "Leave any field blank to hide/skip that platform's link (existing default still shows).",
      fields: [
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "youtube", title: "YouTube URL", type: "url" },
        { name: "whatsapp", title: "WhatsApp URL", type: "url" },
        { name: "x", title: "X (Twitter) URL", type: "url" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings", subtitle: "Contact info & social links" };
    },
  },
});
