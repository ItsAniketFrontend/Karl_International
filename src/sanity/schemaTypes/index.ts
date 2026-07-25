import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { newsItem } from "./newsItem";
import { lead } from "./lead";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, newsItem, lead],
};
