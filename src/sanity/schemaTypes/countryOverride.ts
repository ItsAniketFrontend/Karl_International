import { defineType, defineField } from "sanity";
import { destinations } from "@/lib/data";

/**
 * Per-country editable overrides. Staff pick a country and edit the fields that
 * realistically change (intro, costs, universities, scholarships, intakes, FAQs).
 * Every field is OPTIONAL — anything left blank falls back to the built-in
 * content in src/lib/content/*.ts, so a partly-filled country still renders.
 *
 * The deep nested structures (timelines, comparison tables, course grids) stay
 * in code by design — this schema covers the high-churn text/list content only.
 */
export const countryOverride = defineType({
  name: "countryOverride",
  title: "Country Page",
  type: "document",
  fields: [
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      description: "Which country page these edits apply to.",
      options: {
        list: destinations.map((d) => ({ title: d.name, value: d.slug })),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro paragraph",
      type: "text",
      rows: 4,
      description: "Overrides the opening hero paragraph. Leave blank to keep the default.",
    }),
    defineField({
      name: "costTuition",
      title: "Indicative tuition",
      type: "string",
      description: 'e.g. "£14,000–35,000 / year*". Leave blank to keep the default.',
    }),
    defineField({
      name: "costLiving",
      title: "Indicative living cost",
      type: "string",
      description: 'e.g. "£12,000–15,000 / year*".',
    }),
    defineField({
      name: "workRights",
      title: "Work rights summary",
      type: "string",
    }),
    defineField({
      name: "topUniversities",
      title: "Top universities",
      type: "array",
      of: [{ type: "string" }],
      description: "Overrides the university list. Leave empty to keep the default.",
    }),
    defineField({
      name: "popularCourses",
      title: "Popular courses",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "scholarships",
      title: "Scholarships (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Each entry is a paragraph. Overrides the scholarships text.",
    }),
    defineField({
      name: "intakes",
      title: "Intake summaries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Intake name", type: "string" },
            { name: "months", title: "Months", type: "string" },
            { name: "status", title: "Status", type: "string" },
            { name: "summary", title: "Summary", type: "text", rows: 2 },
          ],
          preview: { select: { title: "name", subtitle: "months" } },
        },
      ],
      description:
        "Overrides the intake cards shown on the country page. Leave empty to keep defaults.",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", title: "Question", type: "string" },
            { name: "a", title: "Answer", type: "text", rows: 3 },
          ],
          preview: { select: { title: "q" } },
        },
      ],
      description: "Overrides the FAQ list. Leave empty to keep defaults.",
    }),
  ],
  preview: {
    select: { country: "country" },
    prepare({ country }) {
      const name = destinations.find((d) => d.slug === country)?.name ?? country;
      return { title: name || "Country page", subtitle: "Content override" };
    },
  },
});
