import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { PortableBody } from "@/components/ui/PortableBody";
import { getBlogPost, getBlogPosts, getBlogSlugs } from "@/sanity/queries";

type Params = { slug: string };

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Karl Konsult International`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const all = await getBlogPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* HEADER */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="mx-auto max-w-[820px] px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                <ArrowLeft size={16} weight="bold" /> All guides
              </Link>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                {post.category}
              </span>
              <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl lg:text-[3rem]">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-3 text-sm text-pine-700/60">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1"><Clock size={14} weight="fill" /> {post.read}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COVER */}
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-[2rem] ring-1 ring-emerald-100 shadow-[0_30px_70px_-45px_rgba(21,35,63,0.5)]">
              <Image
                src={post.img}
                alt={post.title}
                width={1000}
                height={560}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* BODY */}
        <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal>
            <PortableBody blocks={post.body} paragraphs={post.bodyParagraphs} />
          </Reveal>

          {/* inline CTA */}
          <Reveal>
            <div className="mt-12 flex flex-col items-start gap-4 rounded-[1.75rem] bg-bone p-7 ring-1 ring-emerald-100 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-pine-900">Want advice on your own plan?</h3>
                <p className="mt-1 text-sm text-pine-700/75">Free counselling, honest guidance, no pressure.</p>
              </div>
              <EnquiryButton size="lg">Book free counselling</EnquiryButton>
            </div>
          </Reveal>
        </article>

        {/* RELATED */}
        <section className="border-t border-emerald-100 bg-bone py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">Keep reading</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        width={500}
                        height={320}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-bold uppercase tracking-wide text-emerald-700">{p.category}</span>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-pine-900">{p.title}</h3>
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
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
