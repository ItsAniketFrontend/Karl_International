import { defineType, defineField } from "sanity";

/**
 * Enquiry lead — one document per enquiry-form submission. Created server-side
 * by /api/enquiry (never from the browser). Fields are read-only in the Studio:
 * staff view submissions, they don't author them.
 */
export const lead = defineType({
  name: "lead",
  title: "Enquiry Lead",
  type: "document",
  readOnly: true,
  // Hide the "create new" button — leads only come from the website form.
  __experimental_omnisearch_visibility: false,
  fields: [
    defineField({ name: "name", title: "Full name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "city", title: "Current city", type: "string" }),
    defineField({ name: "age", title: "Age", type: "string" }),
    defineField({ name: "qualification", title: "Highest qualification", type: "string" }),
    defineField({ name: "degree", title: "Degree / course", type: "string" }),
    defineField({ name: "destination", title: "Preferred destination", type: "string" }),
    defineField({ name: "intake", title: "Preferred intake", type: "string" }),
    defineField({ name: "score", title: "IELTS / PTE score", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4 }),
    defineField({
      name: "source",
      title: "Submitted from",
      type: "string",
      description: "Which page the enquiry came from.",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      destination: "destination",
      phone: "phone",
      submittedAt: "submittedAt",
    },
    prepare({ name, destination, phone, submittedAt }) {
      const when = submittedAt
        ? new Date(submittedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "";
      return {
        title: name || "Unknown",
        subtitle: [destination, phone, when].filter(Boolean).join(" · "),
      };
    },
  },
});
