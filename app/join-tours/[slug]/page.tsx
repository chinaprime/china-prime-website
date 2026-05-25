import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJoinTourBySlug, joinTours } from "../data";
import { getFoodSummary } from "../food-summary";
import { getAvailabilityMeta, getDisplayTravelDates, getInquiryHref } from "../sales-utils";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return joinTours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getJoinTourBySlug(slug);

  if (!tour) {
    return {
      title: "ไม่พบโปรแกรมจอยทัวร์ | CHINA PRIME",
    };
  }

  return {
    title: `${tour.title} | CHINA PRIME`,
    description: `${tour.highlight} เดินทาง ${tour.duration} ราคาเริ่มต้น ${tour.price}`,
  };
}

function DetailIcon({ kind }: { kind: "duration" | "food" | "location" | "calendar" | "shield" | "users" }) {
  const className = "h-5 w-5";

  if (kind === "duration") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.7v4.7l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "food") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M7 4v7" strokeLinecap="round" />
        <path d="M10 4v7" strokeLinecap="round" />
        <path d="M7 8.5h3" strokeLinecap="round" />
        <path d="M8.5 11v9" strokeLinecap="round" />
        <path d="M15 4c1.6 1.5 2.4 3.2 2.4 5.1 0 1.8-.8 3.4-2.4 4.7V20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "location") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 20s5.5-5.1 5.5-10A5.5 5.5 0 1 0 6.5 10c0 4.9 5.5 10 5.5 10Z" />
        <circle cx="12" cy="10" r="1.9" />
      </svg>
    );
  }

  if (kind === "users") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="8.75" cy="9" r="2.5" />
        <circle cx="15.75" cy="9.5" r="2" />
        <path d="M4.5 18.5c0-2.5 1.92-4.5 4.25-4.5S13 16 13 18.5" />
        <path d="M14 18c.25-1.7 1.64-2.9 3.5-2.9.95 0 1.8.3 2.4.8" />
      </svg>
    );
  }

  if (kind === "shield") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 3l7 4v5c0 4.2-2.8 7-7 9-4.2-2-7-4.8-7-9V7l7-4Z" />
        <path d="m9.5 12 1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3.8v3.4M16 3.8v3.4M4 9.5h16" strokeLinecap="round" />
    </svg>
  );
}

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

const exclusionItems = [
  "ตั๋วเครื่องบินและภาษีสนามบิน (ถ้าไม่ระบุรวมในโปรแกรม)",
  "ค่าทิปหัวหน้าทัวร์ / ไกด์ / คนขับ ตามเงื่อนไขโปรแกรม",
  "ค่าใช้จ่ายส่วนตัว เช่น มินิบาร์ ซักรีด หรือเมนูสั่งเพิ่ม",
  "ค่าใช้จ่ายที่เกิดจากการเปลี่ยนแปลงนอกเหนือโปรแกรม",
];

const bookingNotes = [
  { title: "เช็กที่นั่งก่อนโอน", text: "ทีมงานจะช่วยเช็กสถานะที่นั่งและยืนยันรอบเดินทางล่าสุดให้ก่อนทุกครั้ง" },
  { title: "มัดจำเพื่อยืนยันสิทธิ์", text: "หลังเลือกโปรแกรมแล้ว สามารถชำระมัดจำเพื่อยืนยันการจองตามเงื่อนไขของรอบนั้น" },
  { title: "มีทีมดูแลก่อนเดินทาง", text: "หลังจองแล้วจะได้รับข้อมูลเตรียมตัว เอกสาร และการนัดหมายก่อนวันเดินทาง" },
];

const tourFaqItems = [
  {
    question: "โปรแกรมนี้รวมตั๋วเครื่องบินหรือไม่?",
    answer: "ทีมงานจะเช็กให้ตามรอบที่คุณสนใจว่ารวมตั๋วเครื่องบินแล้วหรือเป็นราคา land only เพื่อให้คุณตัดสินใจได้ชัดก่อนจอง",
  },
  {
    question: "ถ้าต้องการเช็กที่นั่ง ต้องทำอย่างไร?",
    answer: "กดปุ่มเช็กราคา/ที่นั่ง หรือส่งวันเดินทางที่สะดวกทาง LINE แล้วทีมงานจะช่วยเช็กสถานะล่าสุดให้ก่อนทุกครั้ง",
  },
  {
    question: "ถ้าต้องการพักเดี่ยวหรือเพิ่มคืนทำได้ไหม?",
    answer: "หลายโปรแกรมสามารถขอพักเดี่ยว เพิ่มคืน หรือปรับบริการบางส่วนได้ โดยทีมงานจะช่วยประเมินค่าใช้จ่ายเพิ่มเติมให้ก่อนยืนยัน",
  },
  {
    question: "หลังจองแล้วต้องเตรียมอะไรบ้าง?",
    answer: "หลังยืนยันจอง คุณจะได้รับรายละเอียดการชำระเงิน เอกสารก่อนเดินทาง สิ่งที่ควรเตรียม และการนัดหมายก่อนบินจากทีมงาน",
  },
];

const reviewProfiles = [
  { name: "คุณณัฐพร", city: "กรุงเทพฯ" },
  { name: "คุณกิตติพงษ์", city: "เชียงใหม่" },
  { name: "คุณสุภาภรณ์", city: "ขอนแก่น" },
];

function getTourReviews(tour: NonNullable<ReturnType<typeof getJoinTourBySlug>>) {
  return [
    {
      ...reviewProfiles[0],
      quote: `ทริป ${tour.title} จัดจังหวะดีมาก ไกด์ดูแลดีและช่วยประสานทุกอย่างให้สบายขึ้นเยอะ ประทับใจเรื่อง ${tour.locations[0]} มากครับ`,
    },
    {
      ...reviewProfiles[1],
      quote: `ชอบที่โปรแกรมนี้มีทั้ง ${tour.locations[0]} และ ${tour.locations[1]} ครบในทริปเดียว อาหารโอเค เดินทางไม่เหนื่อยเกินไป เหมาะกับคนอยากเที่ยวจีนแบบไม่ต้องวางแผนเอง`,
    },
  ];
}

function getRelatedTours(currentTour: NonNullable<ReturnType<typeof getJoinTourBySlug>>) {
  return joinTours
    .filter((item) => item.slug !== currentTour.slug)
    .map((item) => {
      const sameDestination = item.destination === currentTour.destination ? 3 : 0;
      const sharedMenus = item.menuTags.filter((tag) => currentTour.menuTags.includes(tag)).length;
      const closeDuration = Math.abs(item.durationDays - currentTour.durationDays) <= 1 ? 1 : 0;

      return {
        ...item,
        score: sameDestination + sharedMenus + closeDuration,
      };
    })
    .sort((a, b) => b.score - a.score || a.priceValue - b.priceValue)
    .slice(0, 3);
}

export default async function JoinTourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getJoinTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const availability = getAvailabilityMeta(tour.bookedCount);
  const departureDates = getDisplayTravelDates(tour.travelMonths);
  const inquiryHref = getInquiryHref(tour);
  const reviewHref = `/reviews?trip=${encodeURIComponent(tour.slug)}&destination=${encodeURIComponent(tour.destination)}`;
  const reviews = getTourReviews(tour);
  const relatedTours = getRelatedTours(tour);
  const quickFacts = [
    { label: "ระยะเวลา", value: tour.duration, kind: "duration" as const },
    { label: "ปลายทาง", value: tour.destination, kind: "location" as const },
    { label: "แนวอาหาร", value: getFoodSummary(tour), kind: "food" as const },
    { label: "เหมาะกับ", value: tour.suitableFor.slice(0, 2).join(" / "), kind: "users" as const },
  ];

  return (
    <main className="min-h-screen bg-[#f4efe7] pb-24 text-[#0F172A] xl:pb-0">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${tour.imageClassName}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.96),rgba(16,59,99,0.82)_42%,rgba(16,59,99,0.22)_80%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Link href="/join-tours" className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-sm transition hover:bg-white/14">
            <span>←</span>
            กลับไปหน้าจอยทัวร์
          </Link>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.42fr] xl:items-start">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f3ddbf] backdrop-blur-sm">
                  {tour.code}
                </span>
                <span className="rounded-full bg-[#16A34A] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  {tour.tag}
                </span>
                <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${availability.className}`}>
                  {availability.sublabel}
                </span>
              </div>

              <h1 className="ui-display mt-4 max-w-[10ch] sm:max-w-none">{tour.title}</h1>
              <p className="ui-copy-max ui-copy-tight mt-4 text-[15px] leading-[1.62] text-white/88 md:text-[1.04rem]">
                {tour.subtitle} พร้อมไฮไลต์ {tour.highlight.toLowerCase()} ในจังหวะเดินทางที่สบาย
                เหมาะกับคนที่อยากได้โปรแกรมชัด เที่ยวง่าย และตัดสินใจจองได้เร็ว
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/92">
                {tour.salesBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/28 bg-white/12">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{badge}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/28 bg-white/12">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>จองแล้ว {tour.bookedCount} คน</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={inquiryHref} className="ui-button ui-button-secondary inline-flex min-h-12 items-center justify-center px-6 py-3.5">
                  เช็กราคา/ที่นั่งรอบนี้
                </Link>
                <Link
                  href="https://line.me/R/ti/p/@chinaprime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button-success inline-flex min-h-12 items-center justify-center px-6 py-3.5"
                >
                  คุยทาง LINE ทันที
                </Link>
              </div>
            </div>

            <aside className="ui-card overflow-hidden p-4 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8f7348]">ราคาเริ่มต้น</p>
              <p className="mt-2 text-[2.4rem] font-extrabold tracking-[-0.05em] text-[#103b63]">{tour.price}</p>
              <p className="mt-2 text-sm font-semibold text-[#17334E]">{availability.label}</p>
              <p className="mt-1 text-sm text-[#64748B]">รอบใกล้สุด {departureDates[0]}</p>

              <div className="mt-4 space-y-3 rounded-[22px] bg-[#f7f3ec] p-3.5 sm:p-4">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#103b63]">
                      <DetailIcon kind={item.kind} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f7348]">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#17334E]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2.5">
                <Link href={inquiryHref} className="ui-button ui-button-primary inline-flex min-h-11 w-full items-center justify-center px-4">
                  ขอโปรแกรมเต็ม
                </Link>
                <Link href={reviewHref} className="ui-button ui-button-secondary inline-flex min-h-11 w-full items-center justify-center px-4">
                  ดูรีวิวทริปนี้
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="ui-section -mt-10 relative z-10 pb-12 lg:-mt-12">
        <div className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
          <article className="ui-card p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Departure Snapshot</p>
                <h2 className="mt-2 text-[1.7rem] font-bold tracking-[-0.04em] text-[#13283d]">รอบเดินทางและสถานะที่นั่ง</h2>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${availability.className}`}>{availability.label}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {departureDates.map((item) => (
                <span key={item} className="rounded-full bg-[#f4efe7] px-3 py-1.5 text-xs font-semibold text-[#35506d]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 rounded-[22px] bg-[#f8fbff] p-4">
              <p className="ui-copy-tight text-sm leading-[1.65] text-[#516275]">
                ทีมงานจะช่วยเช็กสถานะที่นั่งจริง เงื่อนไขรอบล่าสุด และแนะนำจังหวะจองที่เหมาะที่สุดก่อนคุณยืนยันเสมอ
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] bg-[#f8fbff] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f7348]">เหมาะกับ</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tour.suitableFor.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#35506d]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[20px] bg-[#f8fbff] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f7348]">โลเคชันเด่น</p>
                <div className="mt-2 space-y-2">
                  {tour.locations.slice(0, 3).map((location) => (
                    <div key={location} className="flex items-start gap-2 text-sm text-[#35506d]">
                      <span className="mt-0.5 text-[#103b63]">
                        <DetailIcon kind="location" />
                      </span>
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="ui-panel-accent p-6 sm:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">Why This Route Sells</p>
            <h2 className="mt-2 text-[1.8rem] font-bold tracking-[-0.05em] md:text-[2.4rem]">
              โปรแกรมนี้เหมาะกับคนที่อยากเที่ยวจีนแบบจองง่าย คุ้มเวลา และไม่ต้องวางแผนเอง
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/84 md:text-base">
              จุดเด่นของโปรแกรมนี้คือรวม {tour.locations.slice(0, 2).join(" และ ")} ไว้ในทริปเดียว
              พร้อมระยะเวลา {tour.duration} ที่เหมาะกับคนทำงานและครอบครัวที่อยากเที่ยวแบบสบายใจ
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-[22px] border border-white/12 bg-white/8 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f3ddbf]">Highlight</p>
                <p className="mt-2 text-sm leading-7 text-white/88">{tour.highlight}</p>
              </div>
              <div className="rounded-[22px] border border-white/12 bg-white/8 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f3ddbf]">Food</p>
                <p className="mt-2 text-sm leading-7 text-white/88">{tour.food}</p>
              </div>
              <div className="rounded-[22px] border border-white/12 bg-white/8 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f3ddbf]">Fit</p>
                <p className="mt-2 text-sm leading-7 text-white/88">{tour.suitableFor.join(" / ")}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]">
          <article className="ui-card p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Included Service</p>
                <h2 className="mt-2 text-[1.8rem] font-bold tracking-[-0.04em] text-[#13283d]">สิ่งที่รวมในโปรแกรม</h2>
              </div>
              <span className="rounded-full bg-[#f4efe7] px-3 py-1 text-xs font-semibold text-[#35506d]">อ่านง่ายก่อนตัดสินใจ</span>
            </div>

            <div className="mt-5 grid gap-3">
              {tour.included.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[20px] bg-[#f8fbff] px-4 py-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#103b63] text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-7 text-[#475569]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="ui-card p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Before Booking</p>
                <h2 className="mt-2 text-[1.8rem] font-bold tracking-[-0.04em] text-[#13283d]">สิ่งที่ยังไม่รวม</h2>
              </div>
              <span className="rounded-full bg-[#fff5ea] px-3 py-1 text-xs font-semibold text-[#b35c14]">เช็กเงื่อนไขได้ก่อนโอน</span>
            </div>

            <div className="mt-5 grid gap-3">
              {exclusionItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[20px] bg-[#fff8f2] px-4 py-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#d97706] text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 6v6m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-7 text-[#475569]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="ui-card p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Daily Flow</p>
              <h2 className="mt-2 text-[1.95rem] font-bold tracking-[-0.05em] text-[#13283d]">ภาพรวมโปรแกรมรายวัน</h2>
            </div>
            <Link href={inquiryHref} className="text-sm font-semibold text-[#103b63]">
              ขอไฟล์โปรแกรมเต็ม →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tour.itinerary.map((item) => (
              <article key={item.day} className="ui-card-soft p-5">
                <p className="text-sm font-semibold tracking-[0.06em] text-[#103b63]">{item.day}</p>
                <h3 className="mt-2 text-[1.1rem] font-bold tracking-[-0.03em] text-[#17334E]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#64748B]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="ui-panel-accent p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">Booking Support</p>
            <h2 className="mt-2 text-[1.8rem] font-bold tracking-[-0.05em] md:text-[2.35rem]">ทีมงานช่วยคุณตัดสินใจก่อนจองอย่างไรบ้าง</h2>
            <div className="mt-6 grid gap-3">
              {bookingNotes.map((item) => (
                <article key={item.title} className="rounded-[22px] border border-white/12 bg-white/8 p-4">
                  <h3 className="text-[1.05rem] font-bold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/82">{item.text}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="ui-card p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Real Feedback</p>
                <h2 className="mt-2 text-[1.85rem] font-bold tracking-[-0.05em] text-[#13283d]">เสียงจากคนที่เคยไปทริปนี้</h2>
              </div>
              <Link href={reviewHref} className="text-sm font-semibold text-[#103b63]">
                ดูรีวิวทั้งหมด →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <article key={`${review.name}-${review.city}`} className="ui-card-soft p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103b63] text-sm font-extrabold text-white">
                      {review.name.slice(3, 4)}
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold tracking-[-0.03em] text-[#17334E]">{review.name}</h3>
                      <p className="text-sm text-[#64748B]">{review.city}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <StarRow />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">“{review.quote}”</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="ui-card p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">FAQ</p>
              <h2 className="mt-2 text-[1.95rem] font-bold tracking-[-0.05em] text-[#13283d]">คำถามก่อนจองโปรแกรมนี้</h2>
            </div>
            <Link href={inquiryHref} className="text-sm font-semibold text-[#103b63]">
              ให้ทีมช่วยตอบก่อน →
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {tourFaqItems.map((item) => (
              <details key={item.question} className="group rounded-[18px] border border-[#E2E8F0] bg-[#F8FBFF] px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#35506D] [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="text-[#7A8EA5] transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="ui-card p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Related Tours</p>
              <h2 className="mt-2 text-[1.95rem] font-bold tracking-[-0.05em] text-[#13283d]">ถ้าชอบทริปนี้ คุณอาจสนใจโปรแกรมเหล่านี้ด้วย</h2>
            </div>
            <Link href="/join-tours" className="text-sm font-semibold text-[#103b63]">
              กลับไปดูทั้งหมด →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {relatedTours.map((item) => (
              <article key={item.slug} className="ui-card-soft overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1280px) 100vw, 33vw" className={`object-cover ${item.imageClassName}`} />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-[#16A34A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[1.08rem] font-bold tracking-[-0.03em] text-[#17334E]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.highlight}</p>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7348]">ราคาเริ่มต้น</p>
                      <p className="mt-1 text-[1.45rem] font-extrabold tracking-[-0.04em] text-[#103b63]">{item.price}</p>
                    </div>
                    <Link href={`/join-tours/${item.slug}`} className="ui-button ui-button-primary inline-flex min-h-10 items-center justify-center px-4 py-2.5">
                      ดูรายละเอียด
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section pb-12">
        <div className="ui-panel-accent p-6 sm:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.06fr_0.32fr_0.32fr] lg:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">Ready To Book</p>
              <h2 className="mt-2 text-[1.95rem] font-bold tracking-[-0.05em] md:text-[2.55rem]">
                ถ้าทริปนี้ตรงใจ ให้ทีมงานช่วยเช็กที่นั่งและราคาอัปเดตให้ก่อนตัดสินใจ
              </h2>
              <p className="mt-3 text-sm leading-8 text-white/84 md:text-base">
                ส่งช่วงวันเดินทาง งบประมาณ และจำนวนผู้เดินทางมาได้เลย ทีมงานจะช่วยสรุปรอบที่เหมาะและขั้นตอนยืนยันให้แบบรวดเร็ว
              </p>
            </div>

            <Link href={inquiryHref} className="ui-button ui-button-secondary inline-flex min-h-12 items-center justify-center px-5">
              เช็กราคา/ที่นั่ง
            </Link>
            <Link href="https://line.me/R/ti/p/@chinaprime" target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-12 items-center justify-center px-5">
              คุยทาง LINE
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#DCE8FA] bg-white/96 px-4 py-3 shadow-[0_-10px_28px_rgba(15,23,42,0.08)] backdrop-blur xl:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f7348]">ราคาเริ่มต้น</p>
            <p className="truncate text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#103b63]">{tour.price}</p>
            <p className="truncate text-[11px] text-[#64748B]">{availability.label} • รอบใกล้สุด {departureDates[0]}</p>
          </div>
          <div className="grid shrink-0 gap-2 sm:grid-cols-2">
            <Link href={inquiryHref} className="ui-button ui-button-primary inline-flex min-h-11 items-center justify-center px-4 py-3">
              เช็กราคา
            </Link>
            <Link
              href="https://line.me/R/ti/p/@chinaprime"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-success inline-flex min-h-11 items-center justify-center px-4 py-3"
            >
              แชท LINE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
