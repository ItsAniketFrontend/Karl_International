import { defineType, defineField } from "sanity";
import { destinations } from "@/lib/data";

/**
 * Per-intake editable landing pages (/study-abroad/[country]/[intake]).
 * Staff pick a country + intake slug and edit any field — everything here is
 * OPTIONAL. Anything left blank falls back to the built-in content in
 * src/lib/content/*.ts, so a partly-filled (or absent) doc never breaks the
 * page. Pre-populate via `npm run migrate:intakes` to make the existing live
 * content editable from day one.
 */
export const intakePage = defineType({
  name: "intakePage",
  title: "Intake Page",
  type: "document",
  fields: [
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      description: "Which country this intake belongs to.",
      options: {
        list: destinations.map((d) => ({ title: d.name, value: d.slug })),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intakeSlug",
      title: "Intake slug",
      type: "string",
      description: 'Matches the intake\'s URL slug, e.g. "september-intake-2027".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "name",
      title: "Intake name",
      type: "string",
      description: 'e.g. "September Intake". Leave blank to keep the default.',
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      description: 'e.g. "Autumn / Fall".',
    }),
    defineField({
      name: "months",
      title: "Months",
      type: "string",
      description: 'e.g. "September – October 2027".',
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: 'e.g. "Main intake" or "Secondary intake".',
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
      description: "1-2 line teaser used on the country page.",
    }),
    defineField({
      name: "intro",
      title: "Intro paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: "Opening paragraphs of the intake landing page.",
    }),
    defineField({
      name: "whatIsIt",
      title: "\"What is this intake?\" paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({
      name: "whyChoose",
      title: "Why choose this intake",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        },
      ],
    }),
    defineField({
      name: "timeline",
      title: "Application timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "period", title: "Period", type: "string" },
            {
              name: "tasks",
              title: "Tasks",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: { select: { title: "period", subtitle: "tasks.0" } },
        },
      ],
    }),
    defineField({
      name: "deadlines",
      title: "Deadlines (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "courseCategories",
      title: "Course categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "category", title: "Category", type: "string" },
            {
              name: "courses",
              title: "Courses",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: { select: { title: "category", subtitle: "courses.0" } },
        },
      ],
    }),
    defineField({
      name: "universities",
      title: "Universities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "note", title: "Note", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "note" } },
        },
      ],
    }),
    defineField({
      name: "eligibility",
      title: "Eligibility",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            {
              name: "points",
              title: "Points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: { select: { title: "label", subtitle: "points.0" } },
        },
      ],
    }),
    defineField({
      name: "englishTests",
      title: "English tests",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "documents",
      title: "Documents",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applySteps",
      title: "How to apply (steps)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "title", subtitle: "desc" } },
        },
      ],
    }),
    defineField({
      name: "scholarships",
      title: "Scholarships (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "comparison",
      title: "Comparison table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "factor", title: "Factor", type: "string" },
            { name: "thisIntake", title: "This intake", type: "string" },
            { name: "mainIntake", title: "Main intake", type: "string" },
          ],
          preview: { select: { title: "factor", subtitle: "thisIntake" } },
        },
      ],
      description: "Comparison vs the country's main intake.",
    }),
    defineField({
      name: "comparisonMainLabel",
      title: "Comparison main-intake label",
      type: "string",
      description: 'e.g. "September Intake".',
    }),
    defineField({
      name: "verdict",
      title: "Verdict paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: '"Is this intake a good choice?" paragraphs.',
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
    }),
  ],
  preview: {
    select: { country: "country", name: "name", intakeSlug: "intakeSlug" },
    prepare({ country, name, intakeSlug }) {
      const countryName = destinations.find((d) => d.slug === country)?.name ?? country;
      return {
        title: name || intakeSlug || "Intake page",
        subtitle: countryName ? `${countryName} — Intake page` : "Intake page",
      };
    },
  },
});
