import { defineType, defineField } from "sanity";

export const newsItem = defineType({
  name: "newsItem",
  title: "News / Announcement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Intake Alert", "Visa Update", "Scholarship", "Event", "Announcement"],
      },
      initialValue: "Announcement",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "A short summary shown on the news list.",
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pinned",
      title: "Pin to top",
      type: "boolean",
      description: "Show this news item first, regardless of date.",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Full details (optional)",
      type: "array",
      of: [{ type: "block" }],
      description: "Optional longer text. Leave empty for a summary-only notice.",
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedDesc",
      by: [
        { field: "pinned", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
