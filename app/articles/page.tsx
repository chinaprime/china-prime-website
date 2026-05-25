import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloatingHeroPanel } from "../../components/floating-hero-panel";
import { articles } from "./data";

export const metadata: Metadata = {
  title: "บทความท่องเที่ยวจีน | CHINA PRIME",
  description: "รวมบทความเกี่ยวกับเที่ยวจีน การเตรียมตัว เลือกแพ็กเกจ และคำแนะนำสำหรับนักเดินทางชาวไทย",
};

const categoryLabels = ["ทั้งหมด", ...Array.from(new Set(articles.map((article) => article.category)))];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#0F172A]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Guilin_Li_River.jpg"
            alt="วิวธรรมชาติจีนสำหรับหน้าบทความ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.94),rgba(16,59,99,0.74)_42%,rgba(16,59,99,0.22)_78%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
              China Travel Journal
            </div>
            <h1 className="ui-display mt-4">
              บทความเที่ยวจีน
              <br />
              สำหรับวางแผนทริปให้ชัดขึ้น
            </h1>
            <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] leading-[1.62] text-white/88 md:text-[1.05rem]">
              รวมคำแนะนำเรื่องเที่ยวจีนสำหรับคนไทย ตั้งแต่เลือกเมือง เลือกฤดูเดินทาง
              ไปจนถึงวิธีเลือกแพ็กเกจให้เหมาะกับสไตล์ของคุณ
            </p>
          </div>
        </div>
      </section>

      <FloatingHeroPanel overlapClassName="-mt-14 sm:-mt-18 lg:-mt-22">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">หมวดบทความ</p>
            <h2 className="mt-2 text-[1.5rem] font-bold tracking-[-0.04em] text-[#13283d] md:text-[1.8rem]">
              เลือกอ่านตามหัวข้อที่สนใจ
            </h2>
          </div>
          <div className="text-sm font-semibold text-[#607086]">มีบทความทั้งหมด {articles.length} บทความ</div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {categoryLabels.map((label, index) => (
            <span
              key={label}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                index === 0
                  ? "bg-[linear-gradient(135deg,#103b63,#184f84)] text-white shadow-[0_14px_28px_rgba(16,59,99,0.18)]"
                  : "border border-white/75 bg-white/86 text-[#456176]"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </FloatingHeroPanel>

      <section className="ui-section pb-14 pt-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Latest Articles</p>
            <h2 className="mt-2 text-[1.9rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.35rem]">
              เริ่มจากเรื่องที่ช่วยให้ตัดสินใจง่ายขึ้น
            </h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-[#103b63]">
            ขอคำแนะนำทริป →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="ui-card overflow-hidden">
              <div className="relative h-52">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 30vw"
                  className={`object-cover transition duration-500 hover:scale-[1.03] ${article.coverImageClassName}`}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-[#8f7348] shadow-[0_10px_24px_rgba(12,25,43,0.12)]">
                  {article.category}
                </span>
              </div>

              <div className="p-4.5 sm:p-5">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#6a7a8f]">
                  <span>{article.publishedAt}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="mt-3 text-[1.3rem] font-bold leading-tight tracking-[-0.03em] text-[#13283d]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-[#516275]">{article.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {article.bullets.map((item) => (
                    <span key={item} className="rounded-full bg-[#f4efe7] px-3 py-1 text-xs font-semibold text-[#35506d]">
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="ui-button ui-button-primary mt-5 inline-flex min-h-11 items-center justify-center px-5"
                >
                  อ่านบทความนี้
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
