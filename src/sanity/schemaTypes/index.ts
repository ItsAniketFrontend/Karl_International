import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { newsItem } from "./newsItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, newsItem],
};
