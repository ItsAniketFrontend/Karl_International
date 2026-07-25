import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { getBlogPosts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Study Abroad Blog | Guides on Visas, IELTS, Scholarships & MBBS — Karl Konsult",
  description:
    "Plain-language study abroad guides from Karl Konsult International, overseas education consultants in Jaipur — visas, IELTS/PTE, scholarships, MBBS abroad and country intakes.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;

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
                Guides &amp; insights
              </span>
              <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]">
                Study abroad, <span className="text-emerald-600">explained clearly</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-700">
                Honest, jargon-free guides on visas, IELTS &amp; PTE, scholarships, MBBS
                abroad and choosing the right country — written by counsellors who do this
                every day.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FEATURED */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-emerald-100 transition-all duration-300 hover:shadow-[0_30px_70px_-40px_rgba(21,35,63,0.5)] lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Image
                    src={featured.img}
                    alt={featured.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 backdrop-blur">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center gap-3 text-sm text-pine-700/60">
                    <span>{featured.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={14} weight="fill" /> {featured.read}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-pine-900 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-pine-700/80">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    Read the guide
                    <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* GRID */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={500}
                        height={320}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 backdrop-blur">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-xs text-pine-700/55">
                        <span>{post.date}</span>
                        <span className="inline-flex items-center gap-1"><Clock size={12} weight="fill" /> {post.read}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-pine-900">{post.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-pine-700/75">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                        Read more
                        <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Have a question a guide didn&apos;t answer?
                </h2>
                <p className="relative max-w-xl text-white/70">
                  Book a free counselling session and get honest, personalised advice for
                  your study abroad plans.
                </p>
                <div className="relative">
                  <EnquiryButton variant="ghost" size="lg">Book free counselling</EnquiryButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
