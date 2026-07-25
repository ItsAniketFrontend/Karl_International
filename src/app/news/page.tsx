import type { Metadata } from "next";
import { Megaphone, PushPin, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { PortableBody } from "@/components/ui/PortableBody";
import { getNews } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "News & Updates | Karl Konsult International — Study Abroad Consultants in Jaipur",
  description:
    "Latest news, intake alerts, visa updates and scholarship announcements from Karl Konsult International, overseas education consultants in Jaipur.",
};

export const revalidate = 60;

export default async function NewsPage() {
  const news = await getNews();

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[22%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[12%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                <Megaphone size={15} weight="fill" />
                News &amp; updates
              </span>
              <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]">
                Latest <span className="text-emerald-600">news &amp; alerts</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-700">
                Intake alerts, visa updates, scholarship deadlines and announcements —
                everything you need to stay ahead of your study abroad plans.
              </p>
            </Reveal>
          </div>
        </section>

        {/* NEWS LIST */}
        <section className="py-12 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            {news.length === 0 ? (
              <Reveal>
                <div className="rounded-[2rem] border border-dashed border-emerald-200 bg-bone p-12 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Megaphone size={28} weight="fill" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-bold text-pine-900">
                    No news yet — check back soon
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-pine-700/75">
                    We&apos;ll post intake alerts, visa updates and scholarship
                    announcements here. In the meantime, book a free counselling session.
                  </p>
                  <div className="mt-6">
                    <EnquiryButton size="lg">Book free counselling</EnquiryButton>
                  </div>
                </div>
              </Reveal>
            ) : (
              <div className="space-y-6">
                {news.map((item, i) => (
                  <Reveal key={item.slug} delay={(i % 4) * 0.05}>
                    <article className="rounded-[1.75rem] bg-white p-6 ring-1 ring-emerald-100 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                          {item.category}
                        </span>
                        {item.pinned && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-600">
                            <PushPin size={11} weight="fill" /> Pinned
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-sm text-pine-700/55">
                          <CalendarBlank size={14} weight="fill" /> {item.date}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-xl font-bold leading-snug text-pine-900 sm:text-2xl">
                        {item.title}
                      </h2>
                      <p className="mt-2 leading-relaxed text-pine-700/80">{item.summary}</p>
                      {item.body && item.body.length > 0 && (
                        <div className="mt-4 border-t border-emerald-100 pt-4 text-base">
                          <PortableBody blocks={item.body} paragraphs={null} />
                        </div>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
