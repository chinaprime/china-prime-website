import Image from "next/image";
import Link from "next/link";
import { FloatingHeroPanel } from "../../components/floating-hero-panel";
import { siteConfig } from "../site-config";

const heroPoints = ["วางแผนได้ตามใจ", "คุ้มค่า ไม่ยัดเยียด", "ดูแลตลอดการเดินทาง"];

const sideHighlights = [
  {
    title: "ผู้เชี่ยวชาญตัวจริง",
    text: "ดูแลการเดินทางส่วนตัวโดยเฉพาะ",
  },
  {
    title: "บริการพรีเมียม",
    text: "ใส่ใจทุกรายละเอียด",
  },
  {
    title: "ยืดหยุ่น 100%",
    text: "ปรับเปลี่ยนได้ตามใจคุณ",
  },
];

const searchFields = [
  { label: "ปลายทาง", value: "เลือกประเทศ / เมือง" },
  { label: "วันเดินทาง", value: "เลือกวันเดินทาง" },
  { label: "จำนวนผู้เดินทาง", value: "ผู้ใหญ่ 2 ท่าน" },
  { label: "ประเภททริป", value: "เลือกประเภททริป" },
];

const reasons = [
  {
    title: "วางแผนได้เอง",
    text: "เลือกเวลาได้ตามใจ พร้อมสไตล์คุณ",
  },
  {
    title: "รถส่วนตัว",
    text: "เดินทางสะดวกสบาย ปลอดภัย เป็นส่วนตัว",
  },
  {
    title: "ไกด์ดูแลส่วนตัว",
    text: "ได้ไกด์แนะนำใกล้ชิด ดูแลครบ",
  },
  {
    title: "ยืดหยุ่นสูง",
    text: "ปรับเปลี่ยนได้ตามความต้องการ",
  },
  {
    title: "เหมาะกับหลายกลุ่ม",
    text: "เด็กเล็ก ผู้สูงอายุ เที่ยวสบาย",
  },
  {
    title: "บริการพรีเมียม",
    text: "คัดโรงแรม รถ ร้านอาหารแบบครบวงจร",
  },
];

const packages = [
  {
    title: "ปักกิ่ง - กำแพงเมืองจีน 5 วัน",
    meta: ["5 วัน 3 คืน", "เดินทาง 2-8 ท่าน", "ไกด์ส่วนตัว"],
    price: "69,999.-",
    imageClassName: "object-left",
  },
  {
    title: "เซี่ยงไฮ้ - หางโจว - ซูโจว 6 วัน",
    meta: ["6 วัน 5 คืน", "เดินทาง 2-6 ท่าน", "รถตู้ VIP"],
    price: "129,999.-",
    imageClassName: "object-center",
  },
  {
    title: "เฉิงตู - จิ่วจ้ายโกว 6 วัน 5 คืน",
    meta: ["6 วัน 5 คืน", "เดินทาง 2-6 ท่าน", "ไกด์ไทยดูแล"],
    price: "99,999.-",
    imageClassName: "object-right",
  },
  {
    title: "ฮาร์บิน - Snow Town 6 วัน",
    meta: ["6 วัน 5 คืน", "รถตู้ VIP", "เดินทาง 2-10 ท่าน"],
    price: "149,999.-",
    imageClassName: "object-left",
  },
  {
    title: "คุนหมิง - ต้าหลี่ - ลี่เจียง 6 วัน",
    meta: ["6 วัน 5 คืน", "เดินทาง 2-8 ท่าน", "รถส่วนตัวพร้อมคนขับ"],
    price: "119,999.-",
    imageClassName: "object-center",
  },
];

const personas = [
  {
    title: "ครอบครัว",
    text: "เที่ยวสบาย เด็กเล็กและผู้สูงอายุไปได้",
  },
  {
    title: "คู่รัก",
    text: "โรแมนติก เป็นส่วนตัวกว่า",
  },
  {
    title: "กลุ่มเพื่อน",
    text: "เที่ยวสบาย ไม่ต้องกังวลเวลา",
  },
  {
    title: "ผู้สูงอายุ",
    text: "เดินทางสบาย ไม่เร่งรีบเกินไป",
  },
  {
    title: "ทริปบริษัท / VIP",
    text: "ดูแลคุณอย่างมืออาชีพแบบพิเศษ",
  },
];

const customTripSteps = [
  { no: "1", title: "เลือกเมือง", text: "ปลายทางที่อยากไป" },
  { no: "2", title: "เลือกสไตล์เที่ยว", text: "ชิลธรรมชาติ / ถ่ายรูป / ช้อปปิ้ง" },
  { no: "3", title: "เลือกโรงแรม", text: "ระดับที่คุณต้องการ" },
  { no: "4", title: "เลือกรถ", text: "รถส่วนตัว / Alphard / VIP Van" },
  { no: "5", title: "เพิ่มกิจกรรมพิเศษ", text: "ประสบการณ์เปิดไลฟ์สไตล์" },
];

const trustReasons = [
  "ความเป็นส่วนตัว 100%",
  "สะดวกสบายตลอดทริป",
  "ยืดหยุ่น ปรับเปลี่ยนได้",
  "ดูแลใกล้ชิดทุกช่วงเวลา",
  "คุ้มค่า คุ้มราคา",
  "ประสบการณ์ที่ดีตั้งแต่ต้นทาง",
];

const bookingSteps = [
  { title: "คุยความต้องการ", text: "บอกเมืองที่สนใจ วันเดินทาง และจำนวนผู้ร่วมทริป" },
  { title: "รับแผนเที่ยว", text: "รับแพลนเบื้องต้นภายใน 1 วัน" },
  { title: "ปรับจนลงตัว", text: "แก้ไขเส้นทาง / ที่พัก ได้ตามใจ" },
  { title: "ชำระมัดจำ", text: "ยืนยันการเดินทาง พร้อมทีมดูแล" },
  { title: "ออกเดินทาง", text: "ทีมงานดูแลตลอดทริป อุ่นใจทุกช่วงเวลา" },
];

const reviews = [
  {
    name: "คุณสุภาพ",
    quote: "ทริปปักกิ่งครอบครัว ประทับใจมากค่ะ ทุกอย่างดูแลดี เด็ก ๆ สนุก ผู้ใหญ่ไม่เหนื่อย",
  },
  {
    name: "คุณพรทิพย์",
    quote: "ทริปเซี่ยงไฮ้ส่วนตัวโรแมนติกมาก ไกด์เก่ง ดูแลทุกจุด ประทับใจจริง",
  },
  {
    name: "คุณอนุชา",
    quote: "ทริปบริษัทครั้งนี้ครบมาก บริการมืออาชีพ รถดี ที่พักดี ทีมงานตอบไว",
  },
  {
    name: "คุณทิพาภรณ์",
    quote: "พาคุณพ่อคุณแม่เที่ยวเฉิงตูสบายมาก ไม่เหนื่อยเกินไปและบริการดีมาก",
  },
];

const faqItems = [
  "ทัวร์ไพรเวท ต่างจากทัวร์ทั่วไป?",
  "จองทริปส่วนตัวล่วงหน้ากี่วัน?",
  "สามารถปรับเปลี่ยนแผนระหว่างทางได้ไหม?",
  "หากยกเลิกการเดินทาง จะคืนเงินอย่างไร?",
  "มีค่าใช้จ่ายเพิ่มเติมนอกเหนือจากแพ็กเกจหรือไม่?",
  "ได้ผู้ดูแลภาษาไทยหรือไม่?",
];

function BlueSquareIcon() {
  return (
    <div className="ui-icon-panel h-12 w-12">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 3l7 4v5c0 4.2-2.8 7-7 9-4.2-2-7-4.8-7-9V7l7-4Z" />
        <path d="m9.5 12 1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function PrivateToursPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/great-wall-home.jpg"
            alt="หน้าปกทริปไพรเวทกำแพงเมืองจีน"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.92),rgba(16,59,99,0.74)_40%,rgba(16,59,99,0.22)_76%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-14 text-white lg:px-8 lg:pb-36 lg:pt-18">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <div className="max-w-4xl">
              <p className="ui-kicker">ทริปส่วนตัว ในแบบที่เป็นคุณ</p>
              <h1 className="ui-display mt-4">
                เที่ยวสบาย ไร้กังวล
                <br />
                ดั่งใจทุกช่วงเวลา
              </h1>
              <p className="ui-body-lg mt-5 max-w-3xl text-white/90">
                วางแผนทริปส่วนตัว 100% พร้อมทีมงานดูแลแบบพรีเมียม
                ให้คุณเดินทางอย่างสะดวก เป็นส่วนตัว และยืดหยุ่นตามไลฟ์สไตล์
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-[14px] font-medium leading-[1.35]">
                {heroPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/95">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 bg-white/12">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/private-tours"
                  className="ui-button ui-button-primary inline-flex px-7 py-4 transition hover:bg-[#084892]"
                >
                  ดูโปรแกรมไพรเวท
                </Link>
                <Link
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button-success inline-flex px-7 py-4 transition hover:bg-[#12823b]"
                >
                  ปรึกษาเส้นทางฟรี
                </Link>
              </div>
            </div>

            <div className="grid gap-4 lg:pt-2">
              {sideHighlights.map((item) => (
                <article
                  key={item.title}
                  className="ui-card-soft ui-radius-card p-5 text-[#163047] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <BlueSquareIcon />
                    <div>
                      <h2 className="ui-card-title text-[#17334e]">{item.title}</h2>
                      <p className="ui-body mt-1 text-[#6b8095]">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloatingHeroPanel
        overlapClassName="-mt-16 sm:-mt-20 lg:-mt-24"
        panelClassName="ui-radius-panel p-5 md:p-6"
      >
          <h2 className="ui-section-title text-[#17334e]">ค้นหาและสอบถามทริปไพรเวท</h2>
          <div className="mt-5 grid gap-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
            {searchFields.map((field) => (
              <div key={field.label} className="ui-card-soft ui-radius-card px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b8ea3]">{field.label}</p>
                <p className="ui-button mt-2 text-[#163047]">{field.value}</p>
              </div>
            ))}
            <button
              type="button"
              className="ui-button ui-button-primary flex items-center justify-center px-7 py-4 transition hover:bg-[#084892]"
            >
              ค้นหาเส้นทาง
            </button>
          </div>
      </FloatingHeroPanel>

      <section className="ui-section pt-8">
        <h2 className="ui-section-title text-center text-[#17334e]">
          ทำไมต้องเลือกทัวร์ไพรเวท กับ China Prime
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {reasons.map((item) => (
            <article key={item.title} className="ui-card ui-radius-card p-5">
              <BlueSquareIcon />
              <h3 className="ui-card-title mt-4 text-[#17334e]">{item.title}</h3>
              <p className="ui-body mt-2 text-[#6b8095]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section py-12">
        <div className="mb-6">
          <h2 className="ui-section-title text-[#17334e]">
            แพ็กเกจไพรเวทแนะนำ
          </h2>
          <p className="ui-body mt-2 text-[#6b8095]">คัดสรรเส้นทางยอดนิยม พร้อมบริการระดับพรีเมียม</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {packages.map((item) => (
            <article key={item.title} className="ui-card ui-radius-card overflow-hidden">
              <div className="relative h-44">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 20vw"
                  className={`object-cover ${item.imageClassName}`}
                />
                <div className="ui-badge ui-chip absolute left-3 top-3 bg-[#0b56b1] text-white">
                  PRIVATE TOUR
                </div>
              </div>
              <div className="p-4">
                <h3 className="ui-card-title min-h-[4rem] text-[#17334e]">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-2 text-[14px] font-normal leading-[1.6] text-[#6b8095]">
                  {item.meta.map((meta) => (
                    <p key={meta}>• {meta}</p>
                  ))}
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#698099]">เริ่มต้น</p>
                  <p className="ui-price mt-1 text-[#0b56b1]">{item.price}</p>
                </div>
                <Link
                  href="/contact"
                  className="ui-button ui-button-primary mt-4 inline-flex w-full justify-center px-4 py-3 transition hover:bg-[#084892]"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <h2 className="ui-section-title text-[#17334e]">
          ทัวร์ไพรเวท เหมาะกับใคร?
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {personas.map((item, index) => (
            <article key={item.title} className="ui-card ui-radius-card overflow-hidden">
              <div className="relative h-36">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1280px) 33vw, 20vw"
                  className={`object-cover ${index % 3 === 0 ? "object-left" : index % 3 === 1 ? "object-center" : "object-right"}`}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="ui-card-title text-[#17334e]">{item.title}</h3>
                <p className="ui-body mt-2 text-[#6b8095]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <div className="ui-radius-panel ui-shadow-float overflow-hidden bg-[linear-gradient(135deg,#10396f,#0b56b1)] p-6 text-white md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="ui-section-title">ออกแบบทริปในแบบของคุณ</h2>
              <p className="ui-body-lg mt-3 max-w-3xl text-white/88">
                เลือกทุกอย่างได้เอง ตั้งแต่เมืองปลายทาง โรงแรม รถส่วนตัว
                จนถึงกิจกรรมพิเศษที่เหมาะกับไลฟ์สไตล์ของคุณ
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {customTripSteps.map((step, index) => (
                  <article key={step.no} className="ui-radius-card ui-shadow-soft bg-white/96 p-3 text-[#163047]">
                    <div className="ui-radius-card relative h-24 overflow-hidden">
                      <Image
                        src="/images/hero-china-prime.jpg"
                        alt={step.title}
                        fill
                        sizes="(max-width: 1280px) 25vw, 12vw"
                        className={`object-cover ${index % 3 === 0 ? "object-left" : index % 3 === 1 ? "object-center" : "object-right"}`}
                      />
                    </div>
                    <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0b56b1] text-sm font-bold text-white">
                      {step.no}
                    </div>
                    <h3 className="ui-label mt-3 font-semibold text-[#17334e]">{step.title}</h3>
                    <p className="mt-1 text-[12px] font-normal leading-[1.45] text-[#6b8095]">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="ui-radius-card ui-shadow-card bg-white/96 p-6 text-[#163047]">
              <h3 className="ui-section-title text-[28px] text-[#17334e]">
                ให้เราช่วยออกแบบเส้นทางฟรี! ไม่มีค่าใช้จ่าย
              </h3>
              <div className="mt-5 space-y-3 text-[14px] font-medium leading-[1.45] text-[#33506d]">
                <p>✓ วางทริปง่ายขึ้น</p>
                <p>✓ ออกแบบเส้นทางภายใน 1 วัน</p>
                <p>✓ ปรับเปลี่ยนได้ไม่จำกัด</p>
              </div>
              <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-success mt-6 inline-flex px-6 py-4">
                ปรึกษาเส้นทางฟรี
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <h2 className="ui-section-title text-[#17334e]">
          เหตุผลที่ลูกค้าไว้ใจเรา
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {trustReasons.map((item) => (
            <article key={item} className="ui-card ui-radius-card px-4 py-5 text-center">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#20b24b] text-white">
                ✓
              </div>
              <p className="ui-body-strong mt-3 text-[#33506d]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <h2 className="ui-section-title text-[#17334e]">
          ขั้นตอนการจองทริปไพรเวท
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {bookingSteps.map((step, index) => (
            <article key={step.title} className="ui-card ui-radius-card p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b56b1] text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="ui-card-title mt-5 text-[#17334e]">{step.title}</h3>
              <p className="ui-body mt-3 text-[#6b8095]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section ui-section-space">
        <h2 className="ui-section-title text-[#17334e]">
          รีวิวจากลูกค้าที่เดินทางกับเรา
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <article key={review.name} className="ui-card ui-radius-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf4ff] font-extrabold text-[#0b56b1]">
                  {review.name.slice(0, 1)}
                </div>
                <div>
                  <p className="ui-card-title text-[#17334e]">{review.name}</p>
                  <p className="ui-label text-[#6b8095]">Private Tour</p>
                </div>
              </div>
              <p className="mt-4 text-amber-400">★★★★★</p>
              <p className="ui-body mt-3 text-[#6b8095]">{review.quote}</p>
              <div className="relative mt-4 h-24 overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={`ภาพรีวิวของ ${review.name}`}
                  fill
                  sizes="(max-width: 1280px) 25vw, 20vw"
                  className={`object-cover ${index % 2 === 0 ? "object-left" : "object-right"}`}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section pb-16">
        <h2 className="ui-section-title text-[#17334e]">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item}
              className="ui-card ui-radius-card px-5 py-4"
            >
              <summary className="ui-card-title cursor-pointer list-none text-[#17334e] [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{item}</span>
                  <span className="text-[#0b56b1]">⌄</span>
                </div>
              </summary>
              <p className="ui-body mt-3 text-[#6b8095]">
                ทีมงานสามารถให้ข้อมูลเพิ่มเติมเกี่ยวกับราคา เงื่อนไข และการออกแบบเส้นทางแบบส่วนตัว
                ผ่าน LINE หรือโทรศัพท์ก่อนตัดสินใจจอง
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="พื้นหลังสำหรับ CTA หน้าไพรเวททัวร์"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,41,86,0.92),rgba(13,86,177,0.84),rgba(23,163,76,0.72))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 text-white lg:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
            <div>
              <h2 className="ui-section-title">ให้เราดูแลทริปพิเศษของคุณ</h2>
              <p className="ui-body-lg mt-3 max-w-2xl text-white/88">
                ออกแบบได้ทั้งเส้นทาง โรงแรม รถส่วนตัว และประสบการณ์แบบพรีเมียมที่เหมาะกับคุณ
              </p>
            </div>
            <Link
              href={siteConfig.phoneHref}
              className="ui-button ui-button-secondary px-6 py-4 text-center"
            >
              โทรหาเรา {siteConfig.phoneDisplay}
            </Link>
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-success px-6 py-4 text-center"
            >
              ทักแชต LINE {siteConfig.lineId}
            </Link>
            <Link
              href="/contact"
              className="ui-button ui-button-glass px-6 py-4 text-center"
            >
              ปรึกษาเส้นทางฟรี
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
