/**
 * The embedded Sanity Studio — your CMS dashboard, at /studio.
 * Non-technical staff log in here to manage Blog posts and News.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export const metadata = {
  title: "Karl Konsult CMS",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
