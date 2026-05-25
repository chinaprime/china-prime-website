import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "ไม่พบบทความ | CHINA PRIME" };
  }

  return {
    title: `${article.title} | CHINA PRIME`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#0F172A]">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <Link href="/articles" className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,76,129,0.12)] bg-white/80 px-4 py-2 text-sm font-semibold text-[#103b63]">
          <span>←</span>
          กลับไปหน้าบทความ
        </Link>

        <article className="ui-card mt-5 overflow-hidden">
          <div className="relative h-[300px] sm:h-[420px]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className={`object-cover ${article.coverImageClassName}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,47,0.08),rgba(8,26,47,0.64))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <span className="rounded-full border border-white/16 bg-white/16 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{article.category}</span>
              <h1 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-0.05em] sm:text-[2.8rem]">{article.title}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/85">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-[1.05rem] leading-8 text-[#334155]">{article.excerpt}</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {article.bullets.map((item) => (
                <span key={item} className="rounded-full bg-[#f4efe7] px-3 py-1.5 text-sm font-semibold text-[#35506d]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-[1.45rem] font-extrabold tracking-[-0.03em] text-[#0F172A]">{section.heading}</h2>
                  <div className="mt-3 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#475569]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="ui-panel-accent mt-10 px-6 py-6 text-white">
              <h3 className="text-[1.5rem] font-extrabold tracking-[-0.04em]">อยากให้เราช่วยเลือกเส้นทางที่เหมาะกับคุณไหม?</h3>
              <p className="mt-2 text-sm leading-7 text-white/88">
                ทีมงาน CHINA PRIME ช่วยเลือกเมือง ช่วงเดินทาง และรูปแบบทัวร์ให้เหมาะกับงบและเวลาของคุณได้
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
                  ขอคำแนะนำทริป
                </Link>
                <Link
                  href="https://line.me/R/ti/p/@chinaprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5"
                >
                  คุยทาง LINE
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
