import type { StructureResolver } from "sanity/structure";

/**
 * Studio sidebar layout. Groups content (Blog, News) separately from
 * Enquiry Leads, and sorts leads newest-first for staff.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .schemaType("blogPost")
        .child(S.documentTypeList("blogPost").title("Blog Posts")),
      S.listItem()
        .title("News & Updates")
        .schemaType("newsItem")
        .child(S.documentTypeList("newsItem").title("News & Updates")),
      S.listItem()
        .title("Country Pages")
        .schemaType("countryOverride")
        .child(S.documentTypeList("countryOverride").title("Country Pages")),
      S.divider(),
      S.listItem()
        .title("Enquiry Leads")
        .schemaType("lead")
        .child(
          S.documentTypeList("lead")
            .title("Enquiry Leads")
            .defaultOrdering([{ field: "submittedAt", direction: "desc" }]),
        ),
    ]);
