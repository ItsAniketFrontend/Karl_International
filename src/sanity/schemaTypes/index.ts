import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { newsItem } from "./newsItem";
import { lead } from "./lead";
import { countryOverride } from "./countryOverride";
import { intakePage } from "./intakePage";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, newsItem, lead, countryOverride, intakePage, siteSettings],
};
