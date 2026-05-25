import Image from "next/image";
import Link from "next/link";
import { FloatingHeroPanel } from "../../components/floating-hero-panel";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "รถ ไกด์ ล่าม | CHINA PRIME",
  description:
    "บริการรถพร้อมคนขับ ไกด์ท้องถิ่น และล่ามส่วนตัวสำหรับเที่ยวจีนหรือเดินทางธุรกิจ เลือกใช้เฉพาะบริการที่ต้องการได้",
};

type IconProps = {
  className?: string;
};

function CarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M5 16V9.8c0-.7.36-1.35.95-1.72l4.55-2.84a2 2 0 0 1 2.1 0l4.55 2.84c.59.37.95 1.02.95 1.72V16" />
      <path d="M4 16h16" />
      <path d="m6.5 16-.8 3h12.6l-.8-3" />
      <circle cx="8.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GuideIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="7" r="3.25" />
      <path d="M6.5 19.5v-1.4c0-2.54 2.96-4.6 6.5-4.6s6.5 2.06 6.5 4.6v1.4" />
      <path d="M4 10.75h4.25" />
      <path d="M15.75 10.75H20" />
    </svg>
  );
}

function InterpreterIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4.75 6.75h9.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H9.9l-3.4 2.75v-2.75H4.75a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z" />
      <path d="M18 8.75h1.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H17.5V21l-3.05-2.5" />
      <path d="M7.5 12h4" />
    </svg>
  );
}

function ComboIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M3.5 15.5v-4.8c0-.64.33-1.22.88-1.56l3.77-2.33a1.8 1.8 0 0 1 1.88 0l3.77 2.33c.55.34.88.92.88 1.56v4.8" />
      <path d="M2.75 15.5h12.5" />
      <circle cx="7" cy="16" r=".95" fill="currentColor" stroke="none" />
      <circle cx="11" cy="16" r=".95" fill="currentColor" stroke="none" />
      <circle cx="18.25" cy="8.25" r="2.25" />
      <path d="M15.5 18.25c0-2 2.02-3.62 4.5-3.62s4.5 1.62 4.5 3.62" />
    </svg>
  );
}

function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 20s6-5.37 6-10a6 6 0 1 0-12 0c0 4.63 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function CalendarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M7 4.5v3" />
      <path d="M17 4.5v3" />
      <rect x="4" y="6.5" width="16" height="13" rx="2.5" />
      <path d="M4 10.5h16" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="9" cy="8.5" r="2.75" />
      <circle cx="16.5" cy="9.5" r="2.25" />
      <path d="M4.5 18.5c0-2.58 2.25-4.67 5-4.67s5 2.09 5 4.67" />
      <path d="M15 17.75c.3-1.84 1.9-3.18 3.95-3.18 1 0 1.9.31 2.55.84" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.75v5l3.25 1.75" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12.5 4.2 4.2L19 7.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const heroHighlights = [
  "ยืดหยุ่นตามโปรแกรม",
  "เลือกเฉพาะบริการที่ต้องการ",
  "ทีมงานคัดสรรมืออาชีพ",
  "ดูแลจริงก่อนและระหว่างทริป",
];

const sideCards = [
  {
    title: "รถพร้อมคนขับ",
    text: "เดินทางสะดวก ปลอดภัย",
    icon: CarIcon,
  },
  {
    title: "ไกด์ท้องถิ่น",
    text: "พาเที่ยวใกล้ชิด เข้าใจท้องถิ่น",
    icon: GuideIcon,
  },
  {
    title: "ล่ามมืออาชีพ",
    text: "สื่อสารลื่นไหล มั่นใจทุกงาน",
    icon: InterpreterIcon,
  },
];

const serviceTabs = [
  { label: "รถส่วนตัว", icon: CarIcon },
  { label: "ไกด์ส่วนตัว", icon: GuideIcon },
  { label: "ล่ามส่วนตัว", icon: InterpreterIcon },
  { label: "แพ็กคู่บริการ (รถ+ไกด์ / รถ+ล่าม)", icon: ComboIcon },
];

const searchFields = [
  { label: "เมือง / ประเทศปลายทาง", value: "เลือกปลายทาง", icon: PinIcon },
  { label: "วันที่ใช้งาน", value: "เลือกวันที่", icon: CalendarIcon },
  { label: "จำนวนผู้เดินทาง", value: "ผู้ใหญ่ 2 ท่าน", icon: UsersIcon },
  { label: "ประเภทบริการ", value: "เลือกรูปแบบ", icon: ComboIcon },
  { label: "ภาษา (สำหรับไกด์/ล่าม)", value: "เลือกภาษา", icon: InterpreterIcon },
  { label: "ระยะเวลาใช้งาน", value: "เลือกชั่วโมง / วัน", icon: ClockIcon },
];

const audiences = [
  {
    title: "มีตั๋วและโรงแรมแล้ว",
    text: "แค่ต้องการรถรับส่งหรือทีมดูแลระหว่างทริป",
    imagePosition: "object-left",
  },
  {
    title: "ต้องการรถรับส่งเฉพาะบางวัน",
    text: "รับส่งสนามบิน / ท่องเที่ยว / เดินทางธุรกิจ",
    imagePosition: "object-center",
  },
  {
    title: "อยากมีไกด์ช่วยพาเที่ยว",
    text: "เที่ยวสบาย เข้าใจประวัติศาสตร์และวัฒนธรรม",
    imagePosition: "object-right",
  },
  {
    title: "ต้องการล่ามสำหรับธุรกิจ",
    text: "งานแสดงสินค้า / โรงงาน / ประชุม / เอกสารสำคัญ",
    imagePosition: "object-[center_28%]",
  },
];

const serviceCards = [
  {
    title: "จองรถพร้อมคนขับ",
    points: ["รถหลายขนาดตามจำนวนผู้เดินทาง", "คนขับสุภาพ ตรงเวลา", "รับส่งสนามบินและเที่ยวตามแผน", "เลือกจุดแวะและเวลาได้"],
    accent: "blue",
    image: "/images/hero-china-prime.jpg",
    imagePosition: "object-left",
  },
  {
    title: "จองไกด์ส่วนตัว",
    points: ["ไกด์ท้องถิ่นมีประสบการณ์", "ช่วยพาเที่ยวและจัดลำดับเวลา", "สื่อสารไทย / อังกฤษ / จีน", "เหมาะกับเที่ยวสบายแบบยืดหยุ่น"],
    accent: "blue",
    image: "/images/hero-china-prime.jpg",
    imagePosition: "object-[center_35%]",
  },
  {
    title: "จองล่ามส่วนตัว",
    points: ["ล่ามมืออาชีพหลายภาษา", "รองรับประชุม โรงงาน และงานธุรกิจ", "ช่วยประสานงานระหว่างวัน", "สื่อสารมั่นใจไม่สะดุด"],
    accent: "green",
    image: "/images/founder-china-prime.jpg",
    imagePosition: "object-center",
  },
  {
    title: "แพ็กคู่ รถ + ไกด์/ล่าม",
    points: ["บริการครบในครั้งเดียว", "นัดหมายง่าย ติดต่อทีมเดียว", "จัดตารางเดินทางได้ลงตัว", "เหมาะทั้งเที่ยวและธุรกิจ"],
    accent: "orange",
    image: "/images/hero-china-prime.jpg",
    imagePosition: "object-right",
  },
] as const;

const vehicles = [
  {
    title: "Sedan (1-3 ท่าน)",
    facts: ["สัมภาระ 2-3 ใบ", "เหมาะกับคู่รัก / นักเดินทางเดี่ยว", "มีน้ำดื่ม", "ประกันพื้นฐาน"],
    price: "1,600.- / วัน",
    imagePosition: "object-left",
  },
  {
    title: "MPV 5-7 ที่นั่ง",
    facts: ["สัมภาระ 4-6 ใบ", "เหมาะกับครอบครัว / กลุ่มเล็ก", "มีน้ำดื่ม", "ประกันพื้นฐาน"],
    price: "2,200.- / วัน",
    imagePosition: "object-center",
  },
  {
    title: "VIP Van (9-12 ที่นั่ง)",
    facts: ["สัมภาระ 8-10 ใบ", "เหมาะกับกรุ๊ปท่องเที่ยว", "มีน้ำดื่ม", "ประกันพื้นฐาน"],
    price: "3,800.- / วัน",
    imagePosition: "object-right",
  },
  {
    title: "Mini Bus (13-20 ที่นั่ง)",
    facts: ["สัมภาระ 10-15 ใบ", "เหมาะกับคณะ / องค์กร", "มีน้ำดื่ม", "ประกันพื้นฐาน"],
    price: "5,500.- / วัน",
    imagePosition: "object-[center_32%]",
  },
];

const peopleCards = [
  {
    name: "คุณแอน",
    role: "ไกด์ท้องถิ่น",
    details: ["ภาษา: ไทย, อังกฤษ, จีน", "พื้นที่: กรุงเทพฯ, อยุธยา, พัทยา", "รีวิว: 4.9 (129 รีวิว)"],
    status: "ออนไลน์",
    imagePosition: "object-[center_14%]",
  },
  {
    name: "คุณบอม",
    role: "ไกด์ท้องถิ่น",
    details: ["ภาษา: ไทย, จีน, อังกฤษ", "พื้นที่: เชียงใหม่, เชียงราย", "รีวิว: 4.9 (96 รีวิว)"],
    status: "ออนไลน์",
    imagePosition: "object-[center_18%]",
  },
  {
    name: "คุณกิ๊ฟ",
    role: "ล่ามภาษาอังกฤษ",
    details: ["ภาษา: ไทย, อังกฤษ", "งาน: ประชุม / โรงงาน / เจรจาธุรกิจ", "รีวิว: 5.0 (74 รีวิว)"],
    status: "ออนไลน์",
    imagePosition: "object-[center_20%]",
  },
  {
    name: "คุณแต๋ว",
    role: "ล่ามภาษาจีน",
    details: ["ภาษา: ไทย, จีน, อังกฤษ", "งาน: แสดงสินค้า / โรงงาน", "รีวิว: 4.9 (61 รีวิว)"],
    status: "ออนไลน์",
    imagePosition: "object-[center_16%]",
  },
];

const servicePicker = [
  { title: "รถส่วนตัวเที่ยว", text: "เดินทางสะดวก เลือกเส้นทางเอง", icon: CarIcon },
  { title: "ไกด์ท้องถิ่นส่วนตัว", text: "พาเที่ยวใกล้ชิด เข้าใจท้องถิ่น", icon: GuideIcon },
  { title: "ล่ามส่วนตัวมืออาชีพ", text: "สื่อสารมั่นใจทุกสถานการณ์", icon: InterpreterIcon },
  { title: "รถ + ไกด์", text: "เดินทางสะดวก เที่ยวครบ", icon: ComboIcon },
  { title: "รถ + ล่าม", text: "เดินทาง + สื่อสาร ครบในครั้งเดียว", icon: ComboIcon },
];

const benefits = [
  "คัดสรรคนขับและไกด์คุณภาพ",
  "ตรงเวลา ปลอดภัย",
  "ยืดหยุ่น ปรับเปลี่ยนได้",
  "มีทีมสำรองหากมีปัญหา",
  "รถสะอาด ไม่ซับซ้อน",
  "ดูแลฉุกเฉิน 24/7",
];

const steps = [
  { step: "1", title: "เลือกบริการ", text: "เลือกรถ ไกด์ หรือบริการที่ต้องการ" },
  { step: "2", title: "แจ้งวันและรายละเอียด", text: "ส่งวันใช้งาน เมือง และรูปแบบการเดินทาง" },
  { step: "3", title: "รับใบเสนอราคา / ยืนยัน", text: "ตรวจสอบราคาและยืนยันการจอง" },
  { step: "4", title: "ออกเดินทาง", text: "ทีมงานดูแลตรงเวลา พร้อมใช้งานจริง" },
];

const reviews = [
  {
    label: "รถพร้อมคนขับ",
    name: "คุณอนงค์",
    quote: "รถสะอาด คนขับสุภาพ ตรงเวลา พาเที่ยวครบและขับนิ่มมาก",
  },
  {
    label: "ไกด์ท้องถิ่น",
    name: "คุณบี",
    quote: "ไกด์เป็นกันเอง อธิบายละเอียด เที่ยวสนุกและเข้าใจสถานที่มากขึ้น",
  },
  {
    label: "ล่ามพูดคุย",
    name: "คุณกร",
    quote: "ล่ามมืออาชีพมาก ช่วยประสานงานได้ดี ทำให้งานราบรื่นจริง ๆ",
  },
  {
    label: "รถ + ไกด์",
    name: "คุณมาลา",
    quote: "แพ็กคู่นี้คุ้มและสะดวกมาก ไม่ต้องจัดการหลายเจ้าเองเลย",
  },
];

const serviceAccentStyles = {
  blue: {
    border: "border-[#0b56b1]/70",
    button: "bg-[#0b56b1] hover:bg-[#084892]",
    badge: "bg-[#edf4ff] text-[#0b56b1]",
  },
  green: {
    border: "border-[#1ea84d]/70",
    button: "bg-[#1ea84d] hover:bg-[#15863c]",
    badge: "bg-[#edf9f0] text-[#1a9444]",
  },
  orange: {
    border: "border-[#f59a18]/70",
    button: "bg-[#f59a18] hover:bg-[#d98308]",
    badge: "bg-[#fff4e5] text-[#d57a00]",
  },
} as const;

const reviewBadgeClasses = [
  "bg-[#1fa84c]",
  "bg-[#0b56b1]",
  "bg-[#16a34a]",
  "bg-[#f59a18]",
];

const headingClassName = "text-center text-[1.8rem] font-extrabold tracking-[-0.045em] text-[#17334e] md:text-[2.45rem]";
const sectionClassName = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function SampleItinerariesPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="บริการรถ ไกด์ และล่ามส่วนตัว"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.95),rgba(16,59,99,0.76)_44%,rgba(16,59,99,0.24)_78%,rgba(16,59,99,0.08))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.22),transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-22 pt-10 text-white sm:px-6 lg:px-8 lg:pb-30 lg:pt-14">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
                Flexible Ground Service
              </div>
              <p className="mt-4 text-[1.35rem] font-semibold tracking-[-0.03em] text-white/92 md:text-[2rem]">
                มีตั๋วเครื่องบินแล้ว? มีโรงแรมแล้ว?
              </p>
              <h1 className="mt-3 max-w-[9ch] text-[1.95rem] font-extrabold leading-[0.98] tracking-[-0.055em] md:max-w-none md:text-[4.55rem]">
                จองแค่รถ ไกด์
                <br />
                หรือล่ามก็ได้
              </h1>
              <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] leading-[1.62] text-white/90 md:text-[1.08rem]">
                เลือกใช้เฉพาะวันที่ต้องการ เพื่อให้การเดินทางของคุณสะดวกสบาย
                และมีทีมช่วยดูแลในจุดที่จำเป็นจริง
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/95">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/28 bg-white/12">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="ui-button ui-button-primary inline-flex min-h-12 items-center justify-center px-7 py-3.5"
                >
                  ขอใบเสนอราคา
                </Link>
                <Link
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button-success inline-flex min-h-12 items-center justify-center px-7 py-3.5"
                >
                  ทัก LINE ปรึกษาฟรี
                </Link>
              </div>
            </div>

            <div className="grid gap-3.5 lg:pl-6">
              {sideCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-[24px] border border-white/55 bg-white/95 p-4 sm:p-5 text-[#163047] shadow-[0_18px_40px_rgba(8,52,102,0.13)] backdrop-blur"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1] shadow-[0_8px_18px_rgba(11,86,177,0.1)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-[1.2rem] font-extrabold tracking-[-0.03em] text-[#17334e]">{card.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-[#6b8095]">{card.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FloatingHeroPanel
        overlapClassName="-mt-14 sm:-mt-16 lg:-mt-20"
        panelClassName="rounded-[28px] p-0"
      >
          <div className="grid gap-2 border-b border-[#e5eefb] p-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:p-4">
            {serviceTabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.label}
                  type="button"
                  className={`flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3 text-center text-sm font-bold transition ${
                    index === 0 ? "bg-[#0b56b1] text-white" : "bg-[#f7faff] text-[#44617d]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-[repeat(6,minmax(0,1fr))_230px] xl:p-5">
            {searchFields.map((field) => {
              const Icon = field.icon;

              return (
                <div
                  key={field.label}
                  className="rounded-[20px] border border-[#e1ecfb] bg-[#fbfdff] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                >
                  <div className="flex items-center gap-2 text-[#0b56b1]">
                    <Icon className="h-4.5 w-4.5" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a8ea5]">{field.label}</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#163047]">{field.value}</p>
                </div>
              );
            })}

            <button
              type="button"
              className="inline-flex min-h-[62px] items-center justify-center gap-2 rounded-[20px] bg-[#0b56b1] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_34px_rgba(11,86,177,0.24)] transition hover:bg-[#084892]"
            >
              <ArrowIcon className="h-4 w-4" />
              ค้นหา / ขอใบเสนอราคา
            </button>
          </div>
      </FloatingHeroPanel>

      <section className={`${sectionClassName} pt-10 lg:pt-12`}>
        <h2 className={headingClassName}>เหมาะสำหรับใคร?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[22px] border border-[#deebfa] bg-white shadow-[0_14px_34px_rgba(13,56,105,0.05)]"
            >
              <div className="relative h-36">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className={`object-cover ${item.imagePosition}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,45,89,0)_5%,rgba(9,45,89,0.18)_100%)]" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#17334e]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#6b8095]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClassName} py-12`}>
        <h2 className={headingClassName}>บริการของเรา</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => {
            const accent = serviceAccentStyles[card.accent];

            return (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[22px] border-2 ${accent.border} bg-white shadow-[0_18px_44px_rgba(13,56,105,0.06)]`}
              >
                <div className="relative h-44">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    className={`object-cover ${card.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,45,89,0.02),rgba(9,45,89,0.28))]" />
                </div>
                <div className="p-5">
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold ${accent.badge}`}>
                    บริการแนะนำ
                  </span>
                  <h3 className="mt-3 text-[1.55rem] font-extrabold tracking-[-0.04em] text-[#17334e]">{card.title}</h3>
                  <div className="mt-4 space-y-2.5 text-sm leading-6 text-[#62778d]">
                    {card.points.map((point) => (
                      <div key={point} className="flex gap-2.5">
                        <span className="mt-1 text-[#0b56b1]">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white transition ${accent.button}`}
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${sectionClassName} pb-12`}>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-[2rem] font-extrabold tracking-[-0.045em] text-[#17334e] md:text-[2.35rem]">
            รถที่แนะนำสำหรับการเดินทาง
          </h2>
          <Link href="/contact" className="hidden text-sm font-bold text-[#0b56b1] md:block">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.title}
              className="overflow-hidden rounded-[22px] border border-[#deebfa] bg-white shadow-[0_18px_44px_rgba(13,56,105,0.06)]"
            >
              <div className="relative h-44">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={vehicle.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className={`object-cover ${vehicle.imagePosition}`}
                />
              </div>
              <div className="p-4.5">
                <h3 className="text-[1.22rem] font-extrabold tracking-[-0.03em] text-[#17334e]">{vehicle.title}</h3>
                <div className="mt-3 grid gap-2 text-sm leading-6 text-[#62778d]">
                  {vehicle.facts.map((fact) => (
                    <div key={fact} className="flex gap-2.5">
                      <span className="mt-1 text-[#0b56b1]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-right text-[1.55rem] font-extrabold tracking-[-0.04em] text-[#0b56b1]">
                  {vehicle.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClassName} pb-12`}>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-[2rem] font-extrabold tracking-[-0.045em] text-[#17334e] md:text-[2.35rem]">
            ไกด์และล่ามแนะนำ
          </h2>
          <Link href="/contact" className="hidden text-sm font-bold text-[#0b56b1] md:block">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {peopleCards.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-[22px] border border-[#deebfa] bg-white shadow-[0_16px_38px_rgba(13,56,105,0.05)]"
            >
              <div className="grid sm:grid-cols-[132px_1fr]">
                <div className="relative min-h-[220px] sm:min-h-[190px]">
                  <Image
                    src="/images/founder-china-prime.jpg"
                    alt={person.name}
                    fill
                    sizes="132px"
                    className={`object-cover ${person.imagePosition}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[1.22rem] font-extrabold tracking-[-0.03em] text-[#17334e]">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#0b56b1]">{person.role}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-[#6b8095]">
                    {person.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#edf9f0] px-3 py-1 text-xs font-bold text-[#1b9845]">
                    <span className="h-2 w-2 rounded-full bg-[#1b9845]" />
                    {person.status}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClassName} pb-12`}>
        <h2 className={headingClassName}>เลือกบริการและแพ็กเกจที่ใช่สำหรับคุณ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {servicePicker.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[22px] border border-[#deebfa] bg-white p-5 text-center shadow-[0_14px_34px_rgba(13,56,105,0.05)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b8095]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${sectionClassName} pb-12`}>
        <h2 className={headingClassName}>ทำไมต้องจองกับ China Prime</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {benefits.map((item) => (
            <article
              key={item}
              className="rounded-[20px] border border-[#deebfa] bg-white px-4 py-5 text-center shadow-[0_12px_28px_rgba(13,56,105,0.04)]"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5ff] text-[#0b56b1]">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#33506d]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClassName} pb-16`}>
        <h2 className={headingClassName}>ขั้นตอนการจองง่ายๆ</h2>
        <div className="mt-6 grid gap-4 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.step}
              className="relative rounded-[22px] border border-[#deebfa] bg-white p-5 shadow-[0_14px_32px_rgba(13,56,105,0.05)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b56b1] text-lg font-extrabold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#6b8095]">{step.text}</p>
              {index < steps.length - 1 ? (
                <div className="pointer-events-none absolute -right-2 top-10 hidden xl:block text-[#0b56b1]">
                  <ArrowIcon className="h-5 w-5" />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClassName} pb-16`}>
        <h2 className={headingClassName}>รีวิวจากลูกค้าที่ใช้บริการ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="rounded-[22px] border border-[#deebfa] bg-white p-5 shadow-[0_16px_38px_rgba(13,56,105,0.05)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold text-white ${reviewBadgeClasses[index]}`}>
                  {review.label}
                </span>
                <span className="text-sm tracking-[0.15em] text-[#f6b21a]">★★★★★</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#6b8095]">“{review.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#deebfa]">
                  <Image
                    src="/images/founder-china-prime.jpg"
                    alt={review.name}
                    fill
                    sizes="44px"
                    className={`object-cover ${index % 2 === 0 ? "object-[center_15%]" : "object-[center_25%]"}`}
                  />
                </div>
                <p className="font-bold text-[#17334e]">{review.name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="พื้นหลังส่วนติดต่อบริการรถ ไกด์ ล่าม"
            fill
            sizes="100vw"
            className="object-cover object-[center_36%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,46,92,0.94),rgba(10,74,146,0.88),rgba(26,164,76,0.72))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.34fr_0.34fr_0.34fr] lg:items-center">
            <div>
              <h2 className="text-[1.95rem] font-extrabold tracking-[-0.05em] md:text-[3.15rem]">
                มีตั๋วแล้ว มีโรงแรมแล้ว
                <br />
                เดี๋ยวเรื่องรถ ไกด์ ล่าม ให้เราดูแล
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/88 md:text-base">
                ส่งโปรแกรมมา เราแนะนำบริการที่เหมาะกับคุณฟรี ช่วยจัดตารางและประเมินการใช้งานเบื้องต้นให้ก่อน
              </p>
            </div>

            <Link
              href={siteConfig.phoneHref}
              className="rounded-[20px] bg-white px-5 py-4 text-center text-sm font-bold text-[#0b56b1]"
            >
              โทรหาเรา
              <span className="mt-1 block text-lg font-extrabold">{siteConfig.phoneDisplay}</span>
            </Link>

            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[20px] bg-[#1fa84c] px-5 py-4 text-center text-sm font-bold text-white"
            >
              แชต LINE
              <span className="mt-1 block text-lg font-extrabold">{siteConfig.lineId}</span>
            </Link>

            <Link
              href="/contact"
              className="rounded-[20px] border border-white/26 bg-white/10 px-5 py-4 text-center text-sm font-bold text-white backdrop-blur"
            >
              ส่งข้อความ
              <span className="mt-1 block text-base font-semibold text-white/90">ตอบกลับไว ไม่มีค่าใช้จ่าย</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
