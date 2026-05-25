import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DestinationSection from "./components/destination-section";
import HomeSearchPanel from "./components/home-search-panel";
import { joinTours } from "./join-tours/data";
import {
  getHomeDestinationTabs,
  getHomeFeaturedDestinations,
  getHomeFeaturedTours,
} from "./join-tours/home-selectors";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  title: "China Prime | ทัวร์จีน ไพรเวททัวร์ จอยทัวร์ และบริการรถ ไกด์ ล่าม",
  description:
    "รวมทัวร์จีนยอดนิยม ทั้งจอยทัวร์ ไพรเวททัวร์ และบริการรถพร้อมคนขับ ไกด์ และล่าม สำหรับเที่ยวพักผ่อนและเดินทางธุรกิจในจีน",
};

const chinaImages = {
  hero: "/images/great-wall-home.jpg",
  cta: "https://commons.wikimedia.org/wiki/Special:FilePath/Guilin_Li_River.jpg",
};

const trustChips = [
  "ผู้เชี่ยวชาญทัวร์จีน",
  "ราคาชัดเจน เช็กจริง",
  "ดูแลต่อเนื่อง 24 ชม.",
];

const heroBenefits = [
  { title: "ทัวร์คุณภาพ", text: "คัดโปรแกรมและบริการที่พร้อมใช้งานจริง" },
  { title: "ราคาคุ้มค่า", text: "ช่วยเลือกทริปให้เหมาะกับงบและสไตล์" },
  { title: "ดูแลใส่ใจ", text: "มีทีมงานช่วยก่อนเดินทางและระหว่างทริป" },
];

const tourTypeCards = [
  {
    title: "ทัวร์จอยกรุ๊ป",
    subtitle: "เดินทางง่าย มีวันออกชัดเจน คุมงบได้สบาย",
    description:
      "เหมาะกับคนที่อยากได้โปรแกรมพร้อมเดินทาง มีหัวหน้าทัวร์ดูแล และเลือกทริปได้จากโปรแกรมขายจริงของระบบ",
    bullets: ["มีวันเดินทางแน่นอน", "คุมงบง่าย", "เลือกจากโปรแกรมยอดนิยมได้ทันที"],
    chips: ["ขายดี", "พร้อมขายจริง", "เหมาะกับมือใหม่"],
    button: "ดูทัวร์จอยกรุ๊ป",
    href: "/join-tours",
    image: joinTours.find((tour) => tour.destination === "เซี่ยงไฮ้")?.image ?? chinaImages.cta,
    iconColor: "text-[#0B4EA2]",
    buttonClassName: "ui-button-primary",
  },
  {
    title: "ทัวร์ไพรเวท",
    subtitle: "ยืดหยุ่นกว่า ออกแบบให้ตรงกับกลุ่มของคุณ",
    description:
      "เหมาะกับครอบครัว กลุ่มเพื่อน หรือทริปพิเศษที่ต้องการกำหนดเมือง โรงแรม และจังหวะเที่ยวได้เองมากขึ้น",
    bullets: ["ปรับเส้นทางได้", "เลือกโรงแรมและรถได้", "เหมาะกับครอบครัวและกลุ่มส่วนตัว"],
    chips: ["พรีเมียม", "ยืดหยุ่นสูง", "เริ่มต้นง่าย"],
    button: "ดูทัวร์ส่วนตัว",
    href: "/private-tours",
    image: joinTours.find((tour) => tour.destination === "ปักกิ่ง")?.image ?? chinaImages.cta,
    iconColor: "text-[#166534]",
    buttonClassName: "ui-button-success",
  },
];

const trustBarItems = [
  { title: "ประสบการณ์กว่า 10 ปี", text: "ดูแลทริปจีนสำหรับลูกค้าคนไทยอย่างต่อเนื่อง" },
  { title: "มั่นใจการเดินทาง", text: "ช่วยเช็กโปรแกรม รอบเดินทาง และข้อมูลก่อนจอง" },
  { title: "ทีมงานมืออาชีพ", text: "ประสานงานให้เข้าใจง่ายตั้งแต่เริ่มต้น" },
  { title: "ราคาโปร่งใส", text: "ไม่มีค่าใช้จ่ายซ่อนเร้นและแจ้งรายละเอียดชัดเจน" },
  { title: "บริการหลังการขาย", text: "มีทีมช่วยติดตามก่อนออกเดินทางและระหว่างทริป" },
];

const whyChooseUsItems = [
  { title: "ผู้เชี่ยวชาญทัวร์จีน", text: "โฟกัสเส้นทางจีนโดยเฉพาะและคัดโปรแกรมจากประสบการณ์จริง" },
  { title: "ทีมงานมืออาชีพ", text: "ช่วยสรุปตัวเลือกให้เข้าใจง่ายและเหมาะกับแผนเดินทางของคุณ" },
  { title: "ไม่บังคับช้อปปิ้ง", text: "คัดเส้นทางที่เน้นประสบการณ์และความคุ้มค่าของทริปเป็นหลัก" },
  { title: "ราคาคุ้มค่า", text: "เลือกโรงแรม อาหาร และบริการให้สมดุลกับงบประมาณที่วางไว้" },
  { title: "ดูแลตลอด 24 ชม.", text: "มีทีมงานช่วยประสานก่อนเดินทาง ระหว่างทริป และหลังการขาย" },
];

const homeServiceItems = [
  {
    title: "ทัวร์จอยกรุ๊ป",
    text: "โปรแกรมพร้อมขาย เลือกรอบเดินทางได้ง่าย",
    href: "/join-tours",
    tone: "blue" as const,
    kind: "group" as const,
  },
  {
    title: "ทัวร์ไพรเวท",
    text: "ปรับเส้นทางให้เหมาะกับครอบครัวหรือกลุ่มส่วนตัว",
    href: "/private-tours",
    tone: "green" as const,
    kind: "route" as const,
  },
  {
    title: "ตั๋วเครื่องบิน",
    text: "ช่วยประสานแผนการเดินทางให้ลงตัวกับทริป",
    href: "/contact",
    tone: "blue" as const,
    kind: "flight" as const,
  },
  {
    title: "โรงแรมที่พัก",
    text: "เลือกที่พักให้เหมาะกับทำเลและระดับความสบาย",
    href: "/contact",
    tone: "orange" as const,
    kind: "hotel" as const,
  },
  {
    title: "วีซ่าจีน",
    text: "ช่วยแนะนำเอกสารและขั้นตอนให้เตรียมตัวง่ายขึ้น",
    href: "/contact",
    tone: "green" as const,
    kind: "document" as const,
  },
  {
    title: "ประกันเดินทาง",
    text: "เพิ่มความมั่นใจก่อนออกเดินทางทุกทริป",
    href: "/contact",
    tone: "blue" as const,
    kind: "shield" as const,
  },
];

const bookingSteps = [
  { number: "1", title: "เลือกทัวร์", text: "ดูโปรแกรมหรือบอกสไตล์ทริปที่ต้องการ" },
  { number: "2", title: "ติดต่อเรา", text: "ส่งวันเดินทาง งบ และจำนวนผู้เดินทาง" },
  { number: "3", title: "ยืนยันการจอง", text: "รับรายละเอียดและเช็กเงื่อนไขก่อนมัดจำ" },
  { number: "4", title: "เตรียมตัวเดินทาง", text: "รับข้อมูลเอกสารและการนัดหมายก่อนบิน" },
  { number: "5", title: "ออกเดินทาง", text: "เดินทางอย่างมั่นใจพร้อมทีมงานช่วยดูแล" },
];

const reviewCards = [
  {
    name: "คุณวันพร",
    route: "ปักกิ่ง 5 วัน 4 คืน",
    quote: "ทีมงานช่วยเลือกทริปให้เหมาะกับผู้สูงอายุในบ้านมากขึ้น ทำให้เที่ยวสบายและมั่นใจก่อนจองค่ะ",
  },
  {
    name: "คุณกิตติพงษ์",
    route: "จางเจียเจี้ย 6 วัน 5 คืน",
    quote: "โปรแกรมคุ้มค่า ไกด์ดูแลดี และมีทีมงานช่วยตอบคำถามก่อนเดินทางเร็วมาก ทำให้ตัดสินใจง่ายขึ้นครับ",
  },
  {
    name: "คุณสุภาภรณ์",
    route: "เซี่ยงไฮ้-หางโจว 4 วัน 3 คืน",
    quote: "ชอบที่ข้อมูลชัด ราคาเข้าใจง่าย และมีตัวเลือกให้เปรียบเทียบก่อนจอง ทำให้รู้สึกมืออาชีพมากค่ะ",
  },
];

const faqItems = [
  "ต้องเตรียมเอกสารอะไรบ้างในการเดินทาง?",
  "ทัวร์รวมอะไรบ้าง และไม่รวมอะไรบ้าง?",
  "สามารถยกเลิกการจองได้หรือไม่?",
  "เด็กสามารถเดินทางได้อายุเท่าไหร่?",
  "หากเจ็บป่วยระหว่างทริป มีบริการช่วยเหลือหรือไม่?",
  "การชำระเงิน มีวิธีไหนบ้าง?",
];

const popularHomeTours = getHomeFeaturedTours(joinTours, 5);
const featuredDestinations = getHomeFeaturedDestinations(joinTours, 8);
const destinationTabs = getHomeDestinationTabs(featuredDestinations);
const heroDestinationOptions = Array.from(new Set(joinTours.map((tour) => tour.destination))).sort();
const heroMonthOptions = Array.from(new Set(joinTours.flatMap((tour) => tour.travelMonths))).sort();
const topSellingTours = popularHomeTours.slice(0, 3);

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 12.5 4 4L19 7.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="m12 3.8 2.5 5.08 5.6.82-4.05 3.95.96 5.58L12 16.6l-5 2.63.96-5.58L3.9 9.7l5.6-.82L12 3.8Z" />
        </svg>
      ))}
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="ui-icon-circle h-12 w-12">{children}</span>;
}

function SectionHeader({
  title,
  description,
  eyebrow,
  align = "left",
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8f7348]">{eyebrow}</p>
      ) : null}
      <h2 className={`ui-section-title mt-3 text-[#0F172A] ${align === "center" ? "text-center" : ""}`}>{title}</h2>
      {description ? (
        <p className={`ui-body mt-3 text-[#607086] ${align === "center" ? "ui-copy-max mx-auto text-center" : "ui-copy-max"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function WhyChooseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 3l7 4v5c0 4.2-2.8 7-7 9-4.2-2-7-4.8-7-9V7l7-4Z" />
      <path d="m9.5 12 1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({
  kind,
  tone,
}: {
  kind: "group" | "route" | "flight" | "hotel" | "document" | "shield";
  tone: "blue" | "green" | "orange";
}) {
  const toneClassName =
    tone === "green"
      ? "bg-[#ECFDF3] text-[#15803D]"
      : tone === "orange"
        ? "bg-[#FFF7ED] text-[#C96A10]"
        : "bg-[#EEF5FF] text-[#0B4EA2]";

  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-[18px] ${toneClassName}`}>
      <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.9">
        {kind === "group" ? (
          <>
            <circle cx="8.5" cy="9" r="2.5" />
            <circle cx="15.5" cy="8.5" r="2.25" />
            <path d="M4.5 18c0-2.45 2.08-4.45 4.64-4.45S13.8 15.55 13.8 18" />
            <path d="M14.25 17.35c.4-1.65 1.92-2.85 3.84-2.85 1.08 0 2.06.38 2.8 1.02" />
          </>
        ) : kind === "route" ? (
          <>
            <path d="M5 18c2.1-3.7 4.2-5.55 6.3-5.55 2.05 0 3.38 1.58 5.08 1.58 1.16 0 2.36-.72 3.62-2.15" />
            <path d="M6.25 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" />
            <path d="M18 13.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" />
          </>
        ) : kind === "flight" ? (
          <>
            <path d="M20 6 4.5 12l5.4 1.5L12 19l1.9-4.2L20 6Z" />
            <path d="M9.9 13.5 20 6" strokeLinecap="round" />
          </>
        ) : kind === "hotel" ? (
          <>
            <path d="M5 17V8.8c0-.64.3-1.24.82-1.62l4.68-3.4a2 2 0 0 1 2.32 0l4.68 3.4c.52.38.82.98.82 1.62V17" />
            <path d="M4 17h16" />
            <path d="M9 17v-4h6v4" />
          </>
        ) : kind === "document" ? (
          <>
            <path d="M8 4.5h6l4 4v10.75A1.75 1.75 0 0 1 16.25 21h-8.5A1.75 1.75 0 0 1 6 19.25v-13A1.75 1.75 0 0 1 7.75 4.5Z" />
            <path d="M14 4.5v4h4" />
            <path d="M9 13h6M9 16.5h4.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M12 3l7 4v5c0 4.2-2.8 7-7 9-4.2-2-7-4.8-7-9V7l7-4Z" />
            <path d="m9.5 12 1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </span>
  );
}

function FAQItem({ question }: { question: string }) {
  return (
    <details className="ui-card group px-5 py-4">
      <summary className="ui-button flex cursor-pointer list-none items-center justify-between gap-3 text-[#334155] [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="text-[#64748B] transition group-open:rotate-180">⌄</span>
      </summary>
      <p className="ui-body mt-3 text-[#64748B]">
        ทีมงาน CHINA PRIME พร้อมอธิบายรายละเอียดเพิ่มเติมให้ครบถ้วนก่อนจอง
        ทั้งเรื่องโปรแกรมทัวร์ เงื่อนไขการเดินทาง และการดูแลระหว่างทริป
      </p>
    </details>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#0F172A]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={chinaImages.hero}
            alt="กำแพงเมืองจีนและเส้นขอบฟ้าของมหานครจีน"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(5,43,79,0.95)_0%,rgba(7,59,102,0.84)_40%,rgba(7,59,102,0.26)_78%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,230,204,0.22),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 pb-32 pt-12 text-white sm:px-6 lg:px-8 lg:pb-40 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.62fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
                Premium China Travel Platform
              </div>
              <h1 className="ui-display mt-4 max-w-[10ch] sm:max-w-none">
                ทัวร์จีนครบในที่เดียว
                <br />
                ทั้งไพรเวท จอยทัวร์
                <br />
                และบริการเสริม
              </h1>
              <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] font-medium leading-[1.7] text-white/90 md:text-[1.1rem]">
                เลือกได้ทั้งทริปส่วนตัว จอยทัวร์ และบริการรถพร้อมคนขับ ไกด์ หรือล่าม
                สำหรับเที่ยวพักผ่อนและเดินทางธุรกิจในจีน
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[14px] font-medium text-white/96">
                {trustChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 bg-white/12">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="ui-button inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-[#103b63] shadow-[0_18px_40px_rgba(8,26,47,0.16)] transition hover:-translate-y-0.5 hover:bg-[#FDFBF8] sm:w-auto"
                >
                  ขอคำแนะนำทริป
                </Link>
                <Link
                  href="/join-tours"
                  className="ui-button ui-button-glass inline-flex min-h-12 w-full items-center justify-center px-6 py-3.5 transition hover:-translate-y-0.5 hover:bg-white/18 sm:w-auto"
                >
                  ดูทัวร์ทั้งหมด
                </Link>
              </div>
            </div>

            <div className="ui-radius-panel border border-white/14 bg-white/10 p-5 shadow-[0_28px_60px_rgba(5,43,79,0.2)] backdrop-blur-lg">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">Top Picks This Season</p>
              <div className="mt-4 space-y-3">
                {topSellingTours.map((tour, index) => (
                  <div
                    key={tour.slug}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[20px] border border-white/12 bg-white/8 px-3.5 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-sm font-extrabold text-[#073B66]">
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">{tour.title}</p>
                      <p className="mt-1 truncate text-xs text-white/72">{tour.duration} • {tour.destination}</p>
                    </div>
                    <span className="rounded-full bg-[#F3E6CC] px-2.5 py-1 text-[10px] font-semibold text-[#7b5a25]">
                      {tour.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {heroBenefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.1)_100%)] px-4 py-4"
                  >
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-[12px] leading-5 text-white/76">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-[1200px] px-4 sm:px-6 lg:-mt-18 lg:px-8">
        <div className="rounded-[30px] border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,248,245,0.98)_100%)] p-4 shadow-[0_30px_72px_rgba(8,26,47,0.16)] backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8f7348]">Search Tours</p>
              <h2 className="mt-1 text-[1.35rem] font-bold tracking-[-0.04em] text-[#10263d] md:text-[1.6rem]">
                ค้นหาทัวร์หรือบริการที่เหมาะกับคุณ
              </h2>
            </div>
            <p className="text-sm text-[#64748B]">เริ่มจากปลายทาง ประเภททัวร์ และช่วงเดินทางที่สนใจ</p>
          </div>
          <HomeSearchPanel destinations={heroDestinationOptions} months={heroMonthOptions} />
        </div>
      </section>

      <section className="ui-section pt-10 lg:pt-12">
        <div className="grid gap-5 xl:grid-cols-2">
          {tourTypeCards.map((card) => (
            <article
              key={card.title}
              className="ui-card grid h-full overflow-hidden border border-[#E2EAF4] md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 36vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,30,66,0.04)_0%,rgba(9,30,66,0.28)_100%)]" />
              </div>
              <div className="flex h-full flex-col p-5 md:p-6">
                <p className={`text-[12px] font-semibold uppercase tracking-[0.2em] ${card.iconColor}`}>Tour Type</p>
                <h2 className="mt-2 text-[2rem] font-bold leading-[1.08] tracking-[-0.05em] text-[#10263d]">
                  {card.title}
                </h2>
                <p className="mt-2 text-[16px] font-semibold leading-[1.5] text-[#334155]">{card.subtitle}</p>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#64748B]">{card.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#E4ECF6] bg-[#F8FBFF] px-3 py-1.5 text-[12px] font-medium text-[#4E637D]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-5 space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-[14px] font-medium text-[#334155]">
                      <span className={`${card.iconColor} mt-0.5`}>
                        <CheckIcon />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className={`ui-button ${card.buttonClassName} mt-auto inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-white transition hover:-translate-y-0.5`}
                >
                  {card.button}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section pt-6">
        <div className="grid gap-4 rounded-[28px] border border-[#DFE8F4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:grid-cols-2 xl:grid-cols-5">
          {trustBarItems.map((item) => (
            <article key={item.title} className="flex items-start gap-3">
              <IconBadge>
                <WhyChooseIcon />
              </IconBadge>
              <div>
                <h3 className="ui-label font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-1 text-[12px] leading-[1.6] text-[#64748B]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="popular-tours" className="ui-section ui-section-space pt-10">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Popular Tours"
            title="ทัวร์ยอดนิยม"
            description="รวมโปรแกรมขายดีที่พร้อมใช้งานจริงจากระบบเดิม ทั้งเส้นทางเมืองใหญ่ ธรรมชาติ และทริปสำหรับครอบครัว"
          />
          <Link href="/join-tours" className="ui-button text-[#0B4EA2]">
            ดูทัวร์ทั้งหมด →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {popularHomeTours.map((tour) => (
            <article key={tour.slug} className="ui-card flex h-full flex-col overflow-hidden border border-[#E2EAF4]">
              <div className="relative h-52">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 20vw"
                  className={`object-cover ${tour.imageClassName}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,30,66,0.02)_0%,rgba(9,30,66,0.32)_100%)]" />
                <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(8,26,47,0.12)] ${tour.badgeClassName}`}>
                    {tour.tag}
                  </span>
                  <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold text-[#0B4EA2] shadow-[0_10px_24px_rgba(8,26,47,0.12)] backdrop-blur-sm">
                    {tour.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  {tour.salesBadges.slice(0, 2).map((badge) => (
                    <span key={badge} className="rounded-full bg-[#F3E6CC] px-2.5 py-1 text-[10px] font-semibold text-[#7B5A25]">
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-[1.15rem] font-bold leading-[1.35] tracking-[-0.03em] text-[#10263d]">{tour.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#64748B]">{tour.subtitle}</p>

                <div className="mt-4 space-y-2 rounded-[18px] bg-[#F7FAFE] px-3.5 py-3.5 text-[12px] font-medium text-[#5B6E86]">
                  {tour.meta.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0B4EA2]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B90AC]">ราคาเริ่มต้น</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <p className="ui-price text-[#0B4EA2]">{tour.price}</p>
                      <p className="text-[12px] text-[#7B90AC]">/ ท่าน</p>
                    </div>
                    <span className="rounded-full bg-[#EEF5FF] px-3 py-1.5 text-[12px] font-semibold text-[#0B4EA2]">
                      จองแล้ว {tour.bookedCount}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  <Link
                    href={tour.detailHref}
                    className="ui-button ui-button-primary inline-flex min-h-11 w-full items-center justify-center px-4 py-3 transition hover:-translate-y-0.5"
                  >
                    ดูรายละเอียด
                  </Link>
                  <Link
                    href={tour.inquiryHref}
                    className="ui-button inline-flex min-h-10 w-full items-center justify-center rounded-2xl border border-[#DCE7F4] bg-white px-4 py-2.5 text-[#0B4EA2] transition hover:bg-[#F6FAFF]"
                  >
                    {tour.inquiryLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DestinationSection tabs={destinationTabs} destinations={featuredDestinations} />

      <section className="ui-section ui-section-space">
        <div className="mb-6">
          <SectionHeader
            eyebrow="Why China Prime"
            title="ทำไมต้องเลือกเดินทางกับเรา"
            description="เราออกแบบทริปจีนให้ดูโปร่ง น่าเชื่อถือ และตัดสินใจง่ายขึ้น ด้วยข้อมูลที่ชัดเจนและทีมงานที่ช่วยดูแลจริง"
            align="center"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseUsItems.map((item) => (
            <article key={item.title} className="ui-card ui-card-pad text-center">
              <div className="ui-icon-circle mx-auto mb-4 h-14 w-14">
                <WhyChooseIcon />
              </div>
              <h3 className="ui-card-title text-[#0F172A]">{item.title}</h3>
              <p className="ui-body mt-2 text-[#64748B]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <div className="rounded-[32px] border border-[#DDE8F5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] px-5 py-8 shadow-[0_22px_54px_rgba(15,23,42,0.05)] sm:px-7 lg:px-8">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Services"
              title="บริการของเรา"
              description="นอกจากทัวร์จอยกรุ๊ปและทัวร์ส่วนตัว เรายังช่วยประสานบริการเสริมที่ทำให้การเดินทางไปจีนสะดวกขึ้นทั้งก่อนและระหว่างทริป"
            />
            <Link href="/contact" className="ui-button text-[#0B4EA2]">
              สอบถามบริการทั้งหมด →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[24px] border border-[#E2EAF4] bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(15,23,42,0.1)]"
              >
                <ServiceIcon kind={item.kind} tone={item.tone} />
                <h3 className="mt-4 text-[1.15rem] font-bold tracking-[-0.03em] text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#64748B]">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B4EA2] transition group-hover:gap-3">
                  ดูรายละเอียด
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <SectionHeader
          eyebrow="Booking Process"
          title="ขั้นตอนการจองง่ายๆ"
          description="ออกแบบ flow ให้เข้าใจง่ายสำหรับลูกค้าที่เพิ่งเริ่มวางแผนทริปจีนและต้องการคุยกับทีมงานแบบตรงประเด็น"
          align="center"
        />

        <div className="mt-6 rounded-[28px] border border-[#DDE8F5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] px-5 py-5 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
          <div className="grid gap-4 lg:grid-cols-5">
            {bookingSteps.map((step, index) => (
              <div key={step.number} className="relative flex gap-4 rounded-[22px] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E6CC] text-sm font-extrabold text-[#7B5A25]">
                  {step.number}
                </span>
                <div>
                  <h3 className="ui-card-title text-[#0F172A]">{step.title}</h3>
                  <p className="ui-body mt-1 text-[#64748B]">{step.text}</p>
                </div>
                {index < bookingSteps.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B4EA2] text-white lg:flex">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Customer Reviews"
            title="รีวิวจากลูกค้า"
            description="คำบอกเล่าจากลูกค้าที่เคยใช้บริการจริง ช่วยให้เห็นภาพการดูแลและจังหวะการเดินทางก่อนตัดสินใจ"
          />
          <Link href="/reviews" className="ui-button text-[#0B4EA2]">
            ดูรีวิวทั้งหมด →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviewCards.map((review) => (
            <article key={review.name} className="ui-card ui-card-pad h-full">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E2E8F0]">
                  <Image
                    src="/images/founder-china-prime.jpg"
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
                <div>
                  <h3 className="ui-label font-semibold text-[#0F172A]">{review.name}</h3>
                  <p className="text-[12px] font-medium leading-[1.4] text-[#64748B]">{review.route}</p>
                </div>
              </div>
              <div className="mt-4">
                <StarRow />
              </div>
              <p className="ui-body mt-4 text-[#475569]">“{review.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section pb-16">
        <SectionHeader
          eyebrow="FAQ"
          title="คำถามที่พบบ่อย"
          description="ถ้ายังไม่แน่ใจเรื่องการจอง เอกสาร หรือเงื่อนไขการเดินทาง สามารถเริ่มจากคำถามที่ลูกค้าถามบ่อยได้ที่นี่"
          align="center"
        />

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {faqItems.map((item) => (
            <FAQItem key={item} question={item} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={chinaImages.cta}
            alt="ภูเขาและวิวธรรมชาติของจีน"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(5,43,79,0.94)_0%,rgba(7,59,102,0.82)_50%,rgba(22,163,74,0.68)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F3E6CC]">Ready To Plan</p>
              <h2 className="ui-section-title mt-3 text-white">อยากเที่ยวจีนแบบไหน เราจัดให้ได้ตามใจคุณ</h2>
              <p className="ui-body-lg ui-copy-max mt-3 text-white/88">
                ปรึกษาฟรี ไม่มีค่าใช้จ่าย พร้อมช่วยเลือกเส้นทาง โปรแกรม และบริการเสริมที่เหมาะกับคุณจริง
              </p>
            </div>

            <Link
              href={siteConfig.phoneHref}
              className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-6 py-3 transition hover:-translate-y-0.5 hover:bg-[#f8fbff]"
            >
              โทรหาเรา {siteConfig.phoneDisplay}
            </Link>
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-success inline-flex min-h-11 items-center justify-center px-6 py-3 transition hover:-translate-y-0.5 hover:bg-[#12823b]"
            >
              แชททาง LINE {siteConfig.lineId}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
