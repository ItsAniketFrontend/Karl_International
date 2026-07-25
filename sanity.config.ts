"use client";

/**
 * Sanity Studio config. Mounts at /studio (see src/app/studio/[[...tool]]/page.tsx).
 * This is the admin dashboard your staff log into to manage content.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "karl-konsult",
  title: "Karl Konsult CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
