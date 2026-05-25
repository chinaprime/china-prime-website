import Image from "next/image";
import Link from "next/link";
import { FloatingHeroPanel } from "../../components/floating-hero-panel";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "รีวิวลูกค้า | CHINA PRIME",
  description:
    "รวมรีวิวจากลูกค้าที่ใช้บริการทัวร์จีน จอยทัวร์ ไพรเวททัวร์ และบริการเสริมของ China Prime เพื่อช่วยตัดสินใจก่อนจอง",
};

type ReviewsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type IconProps = {
  className?: string;
};

function StarRow({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 text-[#f6b21a] ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="m12 3.8 2.5 5.08 5.6.82-4.05 3.95.96 5.58L12 16.6l-5 2.63.96-5.58L3.9 9.7l5.6-.82L12 3.8Z" />
        </svg>
      ))}
    </div>
  );
}

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12.5 4.2 4.2L19 7.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8.5 6.8a.75.75 0 0 1 1.14-.64l8.05 5.2a.75.75 0 0 1 0 1.28l-8.05 5.2a.75.75 0 0 1-1.14-.64V6.8Z" />
    </svg>
  );
}

function QuoteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M9.5 6.5C6.94 7.34 5.5 9.5 5.5 12.58v3.92h5.5v-5H8.8c.18-1.62 1.07-2.77 2.7-3.5V6.5Zm8 0c-2.56.84-4 3-4 6.08v3.92H19v-5h-2.2c.18-1.62 1.07-2.77 2.7-3.5V6.5Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M6.5 4.75h2.25c.44 0 .83.3.93.73l.78 3.38a1 1 0 0 1-.28.94L8.7 11.28a13.05 13.05 0 0 0 4.01 4.01l1.48-1.48a1 1 0 0 1 .94-.28l3.38.78c.43.1.73.49.73.93v2.25c0 .55-.45 1-1 1h-1.5C10.3 18.5 5.5 13.7 5.5 7.25v-1.5c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function LineIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 4C7.03 4 3 7.34 3 11.45c0 2.38 1.33 4.5 3.4 5.87l-.78 2.82a.55.55 0 0 0 .8.62l3.33-1.93c.72.12 1.46.18 2.25.18 4.97 0 9-3.34 9-7.55S16.97 4 12 4Zm-4.18 8.04H6.7V9.13h1.12Zm2.8 0H9.5V9.13h1.12v1.77h1.77v1.14Zm2.88 0h-1.12V9.13h1.12Zm3.8-1.85h-1.77v.72h1.77v1.13h-2.9V9.13h2.9Z" />
    </svg>
  );
}

function ChatIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4.75 6.75h14.5a2 2 0 0 1 2 2v6.25a2 2 0 0 1-2 2H11.1L7 20v-3H4.75a2 2 0 0 1-2-2V8.75a2 2 0 0 1 2-2Z" />
      <path d="M8 11.25h8" />
      <path d="M8 14.25h5" />
    </svg>
  );
}

const summaryStats = [
  { label: "คะแนนเฉลี่ยโดยรวม", value: "4.9", suffix: "/ 5", note: "จากลูกค้า 12,458 รีวิว", stars: true },
  { label: "รีวิวทั้งหมด", value: "12,458+", note: "รีวิวจากนักเดินทาง" },
  { label: "ลูกค้าเดินทางซ้ำ", value: "87%", note: "ใช้บริการซ้ำอีก" },
  { label: "บริการตรงเวลา", value: "98.6%", note: "ออกเดินทางตรงเวลา" },
  { label: "ความพึงพอใจ", value: "99%", note: "ลูกค้าพึงพอใจมาก" },
];

const scoreBars = [
  { stars: "5 ดาว", value: 11220, width: "92%" },
  { stars: "4 ดาว", value: 892, width: "36%" },
  { stars: "3 ดาว", value: 179, width: "12%" },
  { stars: "2 ดาว", value: 43, width: "6%" },
  { stars: "1 ดาว", value: 24, width: "4%" },
];

const featuredReviews = [
  {
    name: "คุณนิภาพร พ.",
    location: "ครอบครัว 4 คน • กรุงเทพฯ",
    quote:
      "ทริปปักกิ่ง 5 วัน ประทับใจมากค่ะ วางแผนดีมาก โรงแรมดี อาหารอร่อย ไกด์ดูแลครบ แนะนำที่เที่ยวละเอียด",
    tags: ["จอยทัวร์", "ปักกิ่ง"],
    date: "14 เม.ย. 67",
    imagePosition: "object-left",
    relatedDestinations: ["ปักกิ่ง"],
    relatedTrips: ["beijing-5d4n"],
  },
  {
    name: "คุณธนวรรธ K.",
    location: "คู่รัก • เชียงใหม่",
    quote:
      "ไกด์ดูแลดีตั้งแต่ต้นจนจบทริป เซี่ยงไฮ้กับหางโจวจัดจังหวะดี ถ่ายรูปสวย เดินทางง่าย แนะนำดีมากครับ",
    tags: ["จอยทัวร์", "เซี่ยงไฮ้"],
    date: "02 พ.ค. 67",
    imagePosition: "object-center",
    relatedDestinations: ["เซี่ยงไฮ้"],
    relatedTrips: ["shanghai-hangzhou-4d3n"],
  },
  {
    name: "คุณสุภาวดี T.",
    location: "ครอบครัว 6 คน • ชลบุรี",
    quote:
      "พ่อแม่อายุ 70 ไปด้วย สบายใจเลยค่ะ ทีมจัดให้สะดวกมาก โปรแกรมเฉิงตู-จิ่วจ้ายโกวไม่รีบเกินไป ขอบคุณทีมงานค่ะ",
    tags: ["จอยทัวร์", "เฉิงตู"],
    date: "20 มิ.ย. 67",
    imagePosition: "object-right",
    relatedDestinations: ["เฉิงตู"],
    relatedTrips: ["chengdu-jiuzhaigou-6d5n"],
  },
  {
    name: "คุณเกศารัตน์ S.",
    location: "กรุ๊ปเพื่อน 5 คน • ขอนแก่น",
    quote:
      "จางเจียเจี้ยวิวอลังการมาก เที่ยวสบาย ไม่รีบยาก บริการดี โรงแรมดี เที่ยวสนุก ประทับใจทุกอย่าง",
    tags: ["จอยทัวร์", "จีน"],
    date: "11 เม.ย. 67",
    imagePosition: "object-[center_35%]",
    relatedDestinations: ["จางเจียเจี้ย"],
    relatedTrips: ["zhangjiajie-6d5n"],
  },
];

const filterChips = ["ทั้งหมด", "จอยทัวร์", "ไพรเวททัวร์", "รถพร้อมคนขับ", "ไกด์ / ล่าม", "ครอบครัว", "คู่รัก", "กรุ๊ปเพื่อน"];

const reviewGrid = [
  {
    name: "คุณศิริกานต์",
    city: "กรุงเทพฯ",
    quote: "บริการดีมาก ทีมงานมืออาชีพ ตอบไว สบายใจตั้งแต่ก่อนเดินทาง ทริปปักกิ่งจัดครบมาก",
    tags: ["จอยทัวร์", "ปักกิ่ง"],
    date: "25 เม.ย. 67",
    imagePosition: "object-left",
    relatedDestinations: ["ปักกิ่ง"],
    relatedTrips: ["beijing-5d4n"],
  },
  {
    name: "คุณภัทรศิริ",
    city: "นครราชสีมา",
    quote: "เฉิงตู-จิ่วจ้ายโกวคุณภาพดีมาก ไม่เหนื่อยเกินไป โรงแรมสวย ไกด์น่ารัก",
    tags: ["จอยทัวร์", "เฉิงตู"],
    date: "18 เม.ย. 67",
    imagePosition: "object-center",
    relatedDestinations: ["เฉิงตู"],
    relatedTrips: ["chengdu-jiuzhaigou-6d5n"],
  },
  {
    name: "คุณอารยา",
    city: "ระยอง",
    quote: "ผู้จัดตารางเก่ง เดินทางไม่ล้า ดูแลรายละเอียดครบจนผู้ใหญ่ประทับใจมากสำหรับปักกิ่ง",
    tags: ["จอยทัวร์", "ปักกิ่ง"],
    date: "10 พ.ค. 67",
    imagePosition: "object-right",
    relatedDestinations: ["ปักกิ่ง"],
    relatedTrips: ["beijing-5d4n"],
  },
  {
    name: "คุณธนิย์ชนก",
    city: "เชียงใหม่",
    quote: "ชื่นชอบจุดถ่ายรูปที่แนะนำมาก มีเวลาเที่ยวกำลังดี ถ่ายรูปจางเจียเจี้ยออกมาสวยทุกมุม",
    tags: ["จอยทัวร์", "จางเจียเจี้ย"],
    date: "21 เม.ย. 67",
    imagePosition: "object-[center_25%]",
    relatedDestinations: ["จางเจียเจี้ย"],
    relatedTrips: ["zhangjiajie-6d5n"],
  },
  {
    name: "คุณมนธรา",
    city: "กรุงเทพฯ",
    quote: "ทุกอย่างลงตัวดี 6 วัน ประสานงานได้ตลอดทาง ไกด์ใจดีมาก บริการเต็มที่ ทริปฮาร์บินสนุกมาก",
    tags: ["จอยทัวร์", "ฮาร์บิน"],
    date: "05 พ.ค. 67",
    imagePosition: "object-[center_38%]",
    relatedDestinations: ["ฮาร์บิน"],
    relatedTrips: ["harbin-6d4n"],
  },
  {
    name: "คุณปาริชาต",
    city: "สงขลา",
    quote: "ไกด์เก่งเรื่องภาษาและโซนช้อปปิ้งมาก ช่วยอำนวยความสะดวกดีมากสำหรับเซี่ยงไฮ้",
    tags: ["ไกด์ / ล่าม", "จีน"],
    date: "15 มิ.ย. 67",
    imagePosition: "object-left",
    relatedDestinations: ["เซี่ยงไฮ้"],
    relatedTrips: ["shanghai-hangzhou-4d3n"],
  },
  {
    name: "คุณนันทนา",
    city: "อุดรธานี",
    quote: "ใจดีช่วยจัดตารางให้เหมาะกับผู้สูงอายุจริง ๆ เดินน้อยลงแต่เที่ยวครบ เหมาะกับเฉิงตูมาก",
    tags: ["ไกด์ / ล่าม", "จีน"],
    date: "23 เม.ย. 67",
    imagePosition: "object-center",
    relatedDestinations: ["เฉิงตู"],
    relatedTrips: ["chengdu-jiuzhaigou-6d5n"],
  },
  {
    name: "คุณกนกพร",
    city: "ชลบุรี",
    quote: "ได้รูปเยอะและเช็กอินครบทีม อยากกลับไปใช้บริการอีกแน่นอน โดยเฉพาะจางเจียเจี้ย",
    tags: ["จอยทัวร์", "จางเจียเจี้ย"],
    date: "12 พ.ค. 67",
    imagePosition: "object-right",
    relatedDestinations: ["จางเจียเจี้ย"],
    relatedTrips: ["zhangjiajie-6d5n"],
  },
  {
    name: "คุณธนภัทร",
    city: "กรุงเทพฯ",
    quote: "ทีมดูแลตรงเวลามากทุกวัน โปรแกรมฮาร์บินหน้างานลื่นไหล ใช้งานจริงแล้วสบายใจ",
    tags: ["จอยทัวร์", "ฮาร์บิน"],
    date: "08 มิ.ย. 67",
    imagePosition: "object-[center_40%]",
    relatedDestinations: ["ฮาร์บิน"],
    relatedTrips: ["harbin-6d4n"],
  },
  {
    name: "คุณพรวรรณี",
    city: "นครปฐม",
    quote: "ชอบที่ตอบไวและอธิบายครบตั้งแต่ก่อนจอง ทำให้ตัดสินใจง่ายและสบายใจมากสำหรับปักกิ่ง",
    tags: ["จอยทัวร์", "ปักกิ่ง"],
    date: "29 เม.ย. 67",
    imagePosition: "object-[center_28%]",
    relatedDestinations: ["ปักกิ่ง"],
    relatedTrips: ["beijing-5d4n"],
  },
];

const galleryImages = new Array(8).fill(null).map((_, index) => ({
  id: index,
  title: `ภาพบรรยากาศ ${index + 1}`,
  imagePosition: index % 4 === 0 ? "object-left" : index % 4 === 1 ? "object-center" : index % 4 === 2 ? "object-right" : "object-[center_35%]",
}));

const videoReviews = [
  { title: "ทริปเซี่ยงไฮ้คู่รัก 5 วัน", duration: "01:45", author: "คุณอิงอิง ซี. • กรุงเทพฯ" },
  { title: "เที่ยวเฉิงตูพร้อมผู้ใหญ่ 6 วัน", duration: "01:32", author: "คุณธนวรรธ K. • เชียงใหม่" },
  { title: "ทริปปักกิ่งครอบครัว 5 วัน", duration: "01:10", author: "คุณกฤษณาวดี S. • ขอนแก่น" },
];

const reviewCategories = [
  { title: "ครอบครัว", text: "ปลอดภัย สะดวกสบาย ทุกช่วงวัย", count: "รีวิว (1,254)" },
  { title: "คู่รัก", text: "โรแมนติก เป็นส่วนตัว มีภาพสวย", count: "รีวิว (2,134)" },
  { title: "ผู้สูงอายุ", text: "เดินทางสบาย ไม่เหนื่อยเกินไป", count: "รีวิว (967)" },
  { title: "เที่ยวกับเพื่อน", text: "สนุก ครบทุกโปรแกรม ไม่ต้องกังวลเวลา", count: "รีวิว (2,567)" },
  { title: "นักธุรกิจ", text: "บริการมืออาชีพ ตรงเวลา สะดวกทุกนัดหมาย", count: "รีวิว (756)" },
];

const trustReasons = [
  "ตอบไว 24 ชม. ก่อน/ระหว่างทริป",
  "วางแผนตรงใจ ออกแบบทริปเฉพาะคุณ",
  "ทีมงานมืออาชีพ ประสบการณ์สูงกว่า 15 ปี",
  "รถและไกด์คุณภาพ คัดสรรอย่างมั่นใจ",
  "ดูแลตลอดทริป มีทีมประสานตลอดเวลา",
  "แก้ปัญหาหน้างานได้ดี พร้อมช่วยเหลือทุกสถานการณ์",
];

const compareRows = [
  { question: "ความกังวลของลูกค้า", answer: "สิ่งที่ China Prime ทำให้คุณมั่นใจ" },
  { question: "กลัวจองทัวร์ราคาแพง แต่บริการไม่ดี?", answer: "เราคัดรีวิวจริงจากลูกค้ามากกว่า 55% ของลูกค้าจองซ้ำ เพราะงานดีจริง" },
  { question: "มีเด็กและผู้สูงอายุไปด้วย จะเหนื่อยไหม?", answer: "ทีม Support 24 ชม. ทันใจ รถต่าง ๆ และเส้นทางที่ลงตัว" },
  { question: "เที่ยวไม่เป็น กลัวเดินทางไปเอง?", answer: "โปรแกรมยืดหยุ่น ไม่บังคับช้อป มีไกด์คอยดูแลใกล้ชิด" },
  { question: "กลัวมีค่าใช้จ่ายแอบแฝง?", answer: "ราคาชัดเจน รวมทุกอย่าง ไม่มีค่าใช้จ่ายซ่อนเร้น" },
  { question: "เปลี่ยนแผน หรือยกเลิกได้ไหม?", answer: "เงื่อนไขยืดหยุ่น ยกเลิก/เปลี่ยนแปลงได้ตามเงื่อนไข" },
];

const assurancePoints = ["จองง่าย ปลอดภัย", "ยกเลิกได้ภายใต้เงื่อนไข", "ยืนยันจริง พร้อมทีมดูแลทุกครั้ง"];

const photoStrip = new Array(10).fill(null).map((_, index) => ({
  id: index,
  imagePosition: index % 3 === 0 ? "object-left" : index % 3 === 1 ? "object-center" : "object-right",
}));

const faqItems = [
  "รีวิวทั้งหมดเป็นรีวิวจากลูกค้าจริงหรือไม่?",
  "สามารถดูรีวิวของทริปเฉพาะเส้นทางที่สนใจได้หรือไม่?",
  "หากมีปัญหาระหว่างทริป China Prime ช่วยอย่างไร?",
  "คะแนนรีวิวของ China Prime มาจากไหน?",
  "สามารถติดต่อเจ้าของรีวิวบางท่านเพื่อสอบถามต่อได้หรือไม่?",
  "การจองมีความปลอดภัยแค่ไหน?",
];

function readQueryValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const query = await searchParams;
  const trip = readQueryValue(query.trip);
  const destination = readQueryValue(query.destination);
  const hasTripContext = Boolean(trip || destination);

  const filteredFeaturedReviews = hasTripContext
    ? featuredReviews.filter((review) => {
        const tripMatch = trip ? review.relatedTrips?.includes(trip) : true;
        const destinationMatch = destination ? review.relatedDestinations?.includes(destination) : true;

        return tripMatch || destinationMatch;
      })
    : featuredReviews;

  const filteredReviewGrid = hasTripContext
    ? reviewGrid.filter((review) => {
        const tripMatch = trip ? review.relatedTrips?.includes(trip) : true;
        const destinationMatch = destination ? review.relatedDestinations?.includes(destination) : true;

        return tripMatch || destinationMatch;
      })
    : reviewGrid;

  const visibleFeaturedReviews = filteredFeaturedReviews.length > 0 ? filteredFeaturedReviews : featuredReviews;
  const visibleReviewGrid = filteredReviewGrid.length > 0 ? filteredReviewGrid : reviewGrid;

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="รีวิวลูกค้าจริงจาก China Prime"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.94),rgba(16,59,99,0.78)_46%,rgba(16,59,99,0.22)_78%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
              Verified Client Stories
            </div>
            <p className="mt-4 text-[1.45rem] font-bold tracking-[-0.04em] md:text-[2rem]">รีวิวจริง จากลูกค้าตัวจริง</p>
            <h1 className="ui-display mt-2 max-w-[9ch] md:max-w-none">
              รีวิวที่ช่วยให้
              <br />
              ตัดสินใจได้มั่นใจขึ้น
            </h1>
            <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] leading-[1.62] text-white/90 md:text-[1.08rem]">
              ลูกค้ากว่า 50,000+ คนเดินทางอย่างมั่นใจ ด้วยบริการที่ดูแลจริง
              และมาตรฐานที่ใส่ใจทุกขั้นตอน
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/reviews"
                className="ui-button ui-button-primary inline-flex min-h-12 items-center justify-center px-7 py-3.5"
              >
                ดูรีวิวทั้งหมด
              </Link>
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-success inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3.5"
              >
                <LineIcon className="h-4.5 w-4.5" />
                ปรึกษาแผนเที่ยว
              </Link>
            </div>

            {hasTripContext ? (
              <div className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/96 backdrop-blur-sm">
                กำลังแสดงรีวิวที่เกี่ยวข้องกับ {destination || "โปรแกรมที่คุณเลือก"}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <FloatingHeroPanel overlapClassName="-mt-12 sm:-mt-16 lg:-mt-20" panelClassName="rounded-[30px] p-4 md:p-6">
          <div className="grid gap-6 xl:grid-cols-[repeat(5,minmax(0,1fr))_1.18fr]">
            {summaryStats.map((item) => (
              <article key={item.label} className="border-b border-[#edf3fb] pb-5 last:border-b-0 xl:border-b-0 xl:border-r xl:border-[#edf3fb] xl:pb-0 xl:pr-5 last:xl:border-r-0">
                <p className="text-sm font-semibold text-[#5f7892]">{item.label}</p>
                <div className="mt-2 flex items-end gap-2 text-[#0b56b1]">
                  <span className="text-[3rem] font-extrabold leading-none tracking-[-0.06em]">{item.value}</span>
                  {item.suffix ? <span className="pb-1 text-xl font-bold">{item.suffix}</span> : null}
                </div>
                {item.stars ? <StarRow className="mt-2" /> : null}
                <p className="mt-2 text-sm leading-6 text-[#6b8095]">{item.note}</p>
              </article>
            ))}

            <article>
              <p className="text-sm font-semibold text-[#5f7892]">คะแนนรายดาว</p>
              <div className="mt-4 space-y-3">
                {scoreBars.map((bar) => (
                  <div key={bar.stars} className="grid grid-cols-[42px_1fr_54px] items-center gap-3 text-xs font-semibold text-[#5f7892]">
                    <span>{bar.stars}</span>
                    <div className="h-2.5 rounded-full bg-[#eef4fd]">
                      <div className="h-2.5 rounded-full bg-[#0b56b1]" style={{ width: bar.width }} />
                    </div>
                    <span className="text-right">{bar.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
      </FloatingHeroPanel>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ff] text-[#0b56b1]">
            <QuoteIcon className="h-5 w-5" />
          </span>
          <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">เสียงจากลูกค้าที่ไปจริง</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-4">
          {visibleFeaturedReviews.map((review) => (
            <article
              key={review.name}
              className="overflow-hidden rounded-[24px] border border-[#dce8fa] bg-white shadow-[0_14px_34px_rgba(13,56,105,0.05)]"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-extrabold tracking-[-0.03em] text-[#17334e]">{review.name}</h3>
                    <p className="mt-1 text-sm text-[#6b8095]">{review.location}</p>
                  </div>
                  <StarRow />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#61758a]">“{review.quote}”</p>
              </div>
              <div className="grid grid-cols-2 gap-1 px-5">
                <div className="relative h-24 overflow-hidden rounded-tl-[18px] rounded-br-[18px]">
                  <Image
                    src="/images/hero-china-prime.jpg"
                    alt={review.tags[0]}
                    fill
                    sizes="160px"
                    className={`object-cover ${review.imagePosition}`}
                  />
                </div>
                <div className="relative h-24 overflow-hidden rounded-tr-[18px] rounded-bl-[18px]">
                  <Image
                    src="/images/founder-china-prime.jpg"
                    alt={review.tags[1]}
                    fill
                    sizes="160px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="flex flex-wrap gap-2">
                  {review.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-bold text-[#0b56b1]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#7b8ea3]">{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((chip, index) => (
              <button
                key={chip}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  index === 0 ? "bg-[#0b56b1] text-white" : "border border-[#d6e4f8] bg-white text-[#53708c]"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="rounded-full border border-[#d6e4f8] bg-white px-4 py-2 text-sm font-bold text-[#35506d]"
          >
            ล่าสุด
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {visibleReviewGrid.map((review) => (
            <article
              key={`${review.name}-${review.date}`}
              className="overflow-hidden rounded-[22px] border border-[#dce8fa] bg-white shadow-[0_12px_28px_rgba(13,56,105,0.05)]"
            >
              <div className="p-4.5">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#dce8fa]">
                    <Image
                      src="/images/founder-china-prime.jpg"
                      alt={review.name}
                      fill
                      sizes="40px"
                      className="object-cover object-[center_18%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#17334e]">{review.name}</h3>
                    <p className="text-xs text-[#7a8fa8]">{review.city}</p>
                  </div>
                </div>
                <StarRow className="mt-3" />
                <p className="mt-3 text-sm leading-6 text-[#61758a]">“{review.quote}”</p>
              </div>
              <div className="relative h-28">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={review.name}
                  fill
                  sizes="240px"
                  className={`object-cover ${review.imagePosition}`}
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4.5">
                <div className="flex flex-wrap gap-2">
                  {review.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#eef5ff] px-2.5 py-1 text-[10px] font-bold text-[#0b56b1]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-[#7b8ea3]">{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#0b56b1] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#084892]"
          >
            ปรึกษาทริปที่เหมาะกับคุณ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">ภาพบรรยากาศจากทริปจริง</h2>
          <Link href="/contact" className="text-sm font-bold text-[#0b56b1]">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1.15fr_1fr_1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative h-22 overflow-hidden rounded-[16px]">
                <Image
                  src="/images/hero-china-prime.jpg"
                  alt={image.title}
                  fill
                  sizes="120px"
                  className={`object-cover ${image.imagePosition}`}
                />
              </div>
            ))}
          </div>

          {videoReviews.map((video, index) => (
            <article
              key={video.title}
              className={`relative overflow-hidden rounded-[22px] border border-[#dce8fa] shadow-[0_14px_34px_rgba(13,56,105,0.05)] ${index === 0 ? "md:col-span-1" : ""}`}
            >
              <div className="relative h-full min-h-[190px]">
                <Image
                  src={index === 1 ? "/images/founder-china-prime.jpg" : "/images/hero-china-prime.jpg"}
                  alt={video.title}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  className={index === 1 ? "object-cover object-[center_18%]" : "object-cover object-center"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,53,106,0.05),rgba(8,53,106,0.74))]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-[#0b56b1] shadow-[0_12px_30px_rgba(13,56,105,0.18)]">
                    <PlayIcon className="h-8 w-8" />
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <p className="max-w-[80%] text-sm font-bold leading-6">{video.title}</p>
                    <span className="rounded-full bg-[#17334e]/70 px-2 py-1 text-[10px] font-bold">{video.duration}</span>
                  </div>
                  <p className="mt-2 text-xs text-white/84">{video.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">รีวิวตามสไตล์นักเดินทาง</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {reviewCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[22px] border border-[#dce8fa] bg-white p-5 shadow-[0_12px_28px_rgba(13,56,105,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1]">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#61758a]">{category.text}</p>
              <p className="mt-3 text-sm font-bold text-[#0b56b1]">{category.count}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">เหตุผลที่ลูกค้าไว้ใจเรา</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {trustReasons.map((reason) => (
            <article
              key={reason}
              className="rounded-[22px] border border-[#dce8fa] bg-white p-5 text-center shadow-[0_12px_28px_rgba(13,56,105,0.05)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1]">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#35506d]">{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.32fr_0.68fr]">
          <article className="rounded-[24px] border border-[#dce8fa] bg-white shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <div className="rounded-t-[24px] bg-[#0b56b1] px-5 py-3 text-sm font-bold text-white">
              ก่อนจอง ลูกค้ากังวลเรื่องไหนบ้าง?
            </div>
            <div className="divide-y divide-[#edf3fb]">
              {compareRows.map((row) => (
                <div key={row.question} className="grid gap-2 px-5 py-4 md:grid-cols-[0.9fr_1.1fr]">
                  <p className="text-sm font-semibold text-[#35506d]">{row.question}</p>
                  <p className="text-sm leading-6 text-[#61758a]">{row.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-[#dce8fa] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <h2 className="text-xl font-extrabold tracking-[-0.03em] text-[#0b56b1]">รับประกันความมั่นใจ 100%</h2>
            <div className="mt-5 flex justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#f6c13b] bg-[#fff9e8] text-center text-[#0b56b1] shadow-[0_10px_24px_rgba(246,193,59,0.22)]">
                <div>
                  <p className="text-2xl font-extrabold leading-none">100%</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.12em]">GUARANTEE</p>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm text-[#61758a]">
              {assurancePoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-0.5 text-[#18a744]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">ภาพจากนักเดินทางของเรา</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
          {photoStrip.map((photo) => (
            <div key={photo.id} className="relative h-26 overflow-hidden rounded-[18px] border border-[#dce8fa] bg-white shadow-[0_10px_24px_rgba(13,56,105,0.04)]">
              <Image
                src={photo.id % 4 === 1 ? "/images/founder-china-prime.jpg" : "/images/hero-china-prime.jpg"}
                alt={`ภาพนักเดินทาง ${photo.id + 1}`}
                fill
                sizes="220px"
                className={photo.id % 4 === 1 ? "object-cover object-[center_18%]" : `object-cover ${photo.imagePosition}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#163e72]">คำถามที่พบบ่อยก่อนดูรีวิว</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item}
              className="group rounded-[18px] border border-[#dce8fa] bg-white px-5 py-4 shadow-[0_10px_26px_rgba(13,56,105,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#35506d] [&::-webkit-details-marker]:hidden">
                <span>{item}</span>
                <span className="text-[#7a8fa8] transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-[#6b8095]">
                รีวิวในหน้านี้มาจากลูกค้าที่ใช้บริการจริง เราคัดทั้งประสบการณ์ ข้อเสนอแนะ
                และรายละเอียดที่ช่วยให้ลูกค้าใหม่ตัดสินใจได้มั่นใจขึ้น
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="พร้อมออกเดินทางไปกับ China Prime"
            fill
            sizes="100vw"
            className="object-cover object-[center_55%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.95),rgba(16,59,99,0.88),rgba(29,143,99,0.76))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 text-white sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.3fr_0.3fr_0.32fr] lg:items-center">
            <div>
              <h2 className="text-[2rem] font-extrabold tracking-[-0.05em] md:text-[2.6rem]">
                พร้อมออกเดินทางไปกับ China Prime แล้วหรือยัง?
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/88 md:text-base">
                ให้เราช่วยวางแผนทริปที่เหมาะกับคุณ ด้วยทีมงานที่ดูแลจริงทุกขั้นตอน
              </p>
            </div>

            <Link href={siteConfig.phoneHref} className="rounded-[20px] bg-white px-5 py-4 text-center text-sm font-bold text-[#0b56b1]">
              <span className="inline-flex items-center gap-2">
                <PhoneIcon className="h-4.5 w-4.5" />
                โทรหาเรา
              </span>
              <span className="mt-1 block text-lg font-extrabold">{siteConfig.phoneDisplay}</span>
            </Link>

            <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-[20px] bg-[#19a948] px-5 py-4 text-center text-sm font-bold text-white">
              <span className="inline-flex items-center gap-2">
                <LineIcon className="h-4.5 w-4.5" />
                ทัก LINE
              </span>
              <span className="mt-1 block text-lg font-extrabold">{siteConfig.lineId}</span>
            </Link>

            <Link href="/contact" className="rounded-[20px] border border-white/26 bg-white/10 px-5 py-4 text-center text-sm font-bold text-white backdrop-blur">
              <span className="inline-flex items-center gap-2">
                <ChatIcon className="h-4.5 w-4.5" />
                ส่งข้อความ
              </span>
              <span className="mt-1 block text-base font-semibold text-white/90">ขอรับคำแนะนำฟรี</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
