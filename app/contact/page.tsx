import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site-config";
import { ContactForm } from "./contact-form";

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type IconProps = {
  className?: string;
};

function PhoneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M6.5 4.75h2.25c.44 0 .83.3.93.73l.78 3.38a1 1 0 0 1-.28.94L8.7 11.28a13.05 13.05 0 0 0 4.01 4.01l1.48-1.48a1 1 0 0 1 .94-.28l3.38.78c.43.1.73.49.73.93v2.25c0 .55-.45 1-1 1h-1.5C10.3 18.5 5.5 13.7 5.5 7.25v-1.5c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function LineIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 4C7.03 4 3 7.34 3 11.45c0 2.38 1.33 4.5 3.4 5.87l-.78 2.82a.55.55 0 0 0 .8.62l3.33-1.93c.72.12 1.46.18 2.25.18 4.97 0 9-3.34 9-7.55S16.97 4 12 4Zm-4.18 8.04H6.7V9.13h1.12Zm2.8 0H9.5V9.13h1.12v1.77h1.77v1.14Zm2.88 0h-1.12V9.13h1.12Zm3.8-1.85h-1.77v.72h1.77v1.13h-2.9V9.13h2.9Z" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5 7 7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.75v4.75l3.2 1.85" />
    </svg>
  );
}

function SocialIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <path d="M10.5 10.25V9.2c0-1 .8-1.7 1.8-1.7h1.2" />
      <path d="M11.4 13.95v-3.7" />
      <path d="M9.6 11.65h3.6" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 20s6-5.37 6-10a6 6 0 1 0-12 0c0 4.63 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function ChatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4.75 6.75h14.5a2 2 0 0 1 2 2v6.25a2 2 0 0 1-2 2H11.1L7 20v-3H4.75a2 2 0 0 1-2-2V8.75a2 2 0 0 1 2-2Z" />
      <path d="M8 11.25h8" />
      <path d="M8 14.25h5" />
    </svg>
  );
}

function UsersIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="8.75" cy="9" r="2.5" />
      <circle cx="15.75" cy="9.5" r="2" />
      <path d="M4.5 18.5c0-2.5 1.92-4.5 4.25-4.5S13 16 13 18.5" />
      <path d="M14 18c.25-1.7 1.64-2.9 3.5-2.9.95 0 1.8.3 2.4.8" />
    </svg>
  );
}

function CarIcon({ className = "h-6 w-6" }: IconProps) {
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

function RouteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="7" cy="16.5" r="2.25" />
      <circle cx="17" cy="7.5" r="2.25" />
      <path d="M9.1 15.2c2.6-2.95 3.6-4.1 5.8-6.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 5h-1A2.5 2.5 0 0 0 3 7.5v1" />
      <path d="M17.5 19h1a2.5 2.5 0 0 0 2.5-2.5v-1" />
    </svg>
  );
}

function HotelIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M4 18V7.5A1.5 1.5 0 0 1 5.5 6H9v12" />
      <path d="M9 10h10a1 1 0 0 1 1 1v7" />
      <path d="M4 18h16" />
      <path d="M12 13h3" />
      <path d="M12 16h3" />
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

function ChevronIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m8 10 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const channelCards = [
  {
    title: "โทรหาเรา",
    value: siteConfig.phoneDisplay,
    detail: siteConfig.weekdayHoursLong,
    icon: PhoneIcon,
    color: "text-[#0b56b1]",
    bg: "bg-[#eef5ff]",
  },
  {
    title: "แอด LINE",
    value: siteConfig.lineId,
    detail: "ตอบไว ภายใน 10 นาที",
    icon: LineIcon,
    color: "text-[#18a744]",
    bg: "bg-[#edf9f0]",
  },
  {
    title: "อีเมล",
    value: siteConfig.email,
    detail: siteConfig.responsePromise,
    icon: MailIcon,
    color: "text-[#0b56b1]",
    bg: "bg-[#eef5ff]",
  },
  {
    title: "เวลาทำการ",
    value: "จันทร์ - ศุกร์",
    detail: "09:00 - 18:00 น.",
    icon: ClockIcon,
    color: "text-[#0b56b1]",
    bg: "bg-[#eef5ff]",
  },
  {
    title: "ติดตามเรา",
    value: "Facebook / IG / YouTube",
    detail: "อัปเดตโปรฯ และรีวิวใหม่ๆ",
    icon: SocialIcon,
    color: "text-[#0b56b1]",
    bg: "bg-[#eef5ff]",
  },
  {
    title: "ที่ตั้งสำนักงาน",
    value: siteConfig.officeShort,
    detail: siteConfig.officeLandmark,
    icon: PinIcon,
    color: "text-[#e54b4b]",
    bg: "bg-[#fff1f1]",
  },
];

const ownerChecks = [
  "ประสบการณ์วางแผนการเดินทางมากกว่า 15 ปี",
  "ให้บริการลูกค้ามากกว่า 10,000 ท่าน",
  "ออกแบบทริปได้ทั้งแบบท่องเที่ยวและงานธุรกิจ",
  "พูดคุยและประเมินเบื้องต้นกับทีมจริงได้ทันที",
];

const serviceTypes = [
  { title: "จอยทัวร์", text: "ทัวร์คุณภาพดี ราคาคุ้มค่า มีไกด์ดูแลตลอดทริป", icon: UsersIcon },
  { title: "ไพรเวททัวร์", text: "เที่ยวส่วนตัว อิสระ ออกแบบเส้นทางได้เอง", icon: RouteIcon },
  { title: "จองรถพร้อมคนขับ", text: "รถใหม่ คนขับมืออาชีพ ปลอดภัย ตรงเวลา", icon: CarIcon },
  { title: "ไกด์ / ล่ามส่วนตัว", text: "ไกด์ท้องถิ่น / ล่ามมืออาชีพ สื่อสารมั่นใจ", icon: ChatIcon },
  { title: "วางแผนทริป", text: "วางแผนครบ จบง่าย ประหยัดเวลา ไม่ยุ่งยาก", icon: RouteIcon },
  { title: "ตั๋ว / โรงแรม", text: "ตั๋วเครื่องบินและโรงแรมราคาพิเศษ บริการครบ", icon: HotelIcon },
];

const trustReasons = [
  "ตอบกลับรวดเร็ว ภายใน 10 นาทีในเวลาทำการ",
  "ทีมงานมืออาชีพ เชี่ยวชาญเส้นทางจริง",
  "ออกแบบทริปได้ตามคุณ ผู้ใหญ่ ทุกช่วงวัย",
  "ยืดหยุ่น ปรับได้ ไม่มีแพ็กเกจบังคับ",
  "ดูแลหลังการเดินทางเสมอ อุ่นใจ มีคนประสานต่อ",
];

const faqItems = [
  "สามารถติดต่อสอบถามได้ช่องทางไหนบ้าง?",
  "นานแค่ไหนหลังส่งข้อความจะมีคนติดต่อกลับ?",
  "ทางบริษัทออกใบเสนอราคาได้หรือไม่?",
  "มีบริการจองแบบเร่งด่วนได้ไหม?",
  "ให้คำปรึกษาฟรีหรือไม่?",
  "สามารถขอวิดีโอคอลคุยรายละเอียดได้หรือไม่?",
];

function readQueryValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

function getPrefilledService(topic: string) {
  if (topic === "join-tour") {
    return "จอยทัวร์";
  }

  if (topic === "private-tour") {
    return "ไพรเวททัวร์";
  }

  return "เลือกประเภทบริการ";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const topic = readQueryValue(query.topic);
  const title = readQueryValue(query.title);
  const departure = readQueryValue(query.departure);
  const selectedService = getPrefilledService(topic);
  const tripLabel = title ? `สนใจโปรแกรม ${title}` : "";
  const tripDetails = title
    ? `สนใจโปรแกรม ${title}${departure ? `\nวันเดินทางที่สนใจ: ${departure}` : ""}\nรบกวนเช็กราคาและที่นั่งล่าสุดให้ด้วยครับ/ค่ะ`
    : "";

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="ติดต่อทีมผู้เชี่ยวชาญวางแผนทริป"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.94),rgba(16,59,99,0.76)_42%,rgba(16,59,99,0.22)_76%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-10 text-white sm:px-6 lg:px-8 lg:pb-22 lg:pt-14">
          <div className="max-w-3xl">
            <h1 className="ui-display max-w-[11ch] sm:max-w-none">
              ติดต่อเรา
              <br />
              วางแผนเที่ยวกับผู้เชี่ยวชาญ
            </h1>
            <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] leading-[1.62] text-white/92 md:text-[1.08rem]">
              สอบถามจอยทัวร์ ไพรเวททัวร์ ไกด์ ล่าม หรือรถพร้อมคนขับ
              เราพร้อมช่วยวางแผนทุกการเดินทางให้คุณ
            </p>
            <p className="mt-2 text-lg font-bold text-[#f6ca3a]">
              ติดต่อเราได้แม้ว่าคุณจะจองตั๋วเครื่องบินและโรงแรมแล้ว
            </p>
            <p className="mt-1.5 text-[15px] leading-6 text-white/88">เราดูแลเฉพาะบริการที่คุณต้องการได้</p>
            {tripLabel ? (
              <div className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/96 backdrop-blur-sm">
                {tripLabel}
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0b56b1] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_32px_rgba(11,86,177,0.28)] transition hover:bg-[#084892]"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
                โทรหาเรา
              </Link>
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#19a948] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_32px_rgba(25,169,72,0.24)] transition hover:bg-[#15863b]"
              >
                <LineIcon className="h-4.5 w-4.5" />
                แอด LINE
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b56b1] shadow-[0_16px_32px_rgba(255,255,255,0.18)] transition hover:bg-[#eef5ff]"
              >
                <ChatIcon className="h-4.5 w-4.5" />
                ส่งข้อความ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <h2 className="text-lg font-extrabold tracking-[-0.03em] text-[#163e72]">
          ช่องทางการติดต่อที่สะดวกที่สุดสำหรับคุณ
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {channelCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[22px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_28px_rgba(13,56,105,0.05)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-[18px] ${card.bg} ${card.color}`}>
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">{card.title}</h3>
                <p className="mt-2 text-[1.05rem] font-bold leading-7 text-[#0b56b1]">{card.value}</p>
                <p className="mt-1 text-sm leading-6 text-[#6b8095]">{card.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[#dde8f8] bg-white shadow-[0_18px_44px_rgba(13,56,105,0.06)]">
          <div className="grid gap-0 xl:grid-cols-[1.15fr_1.25fr_0.95fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/founder-china-prime.jpg"
                alt="ผู้ก่อตั้งและที่ปรึกษาการเดินทาง"
                fill
                sizes="(max-width: 1280px) 100vw, 33vw"
                className="object-cover object-[center_18%]"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold text-[#0b56b1]">แนะนำผู้ที่คุยด้วย China Prime</p>
              <h2 className="mt-2 text-[2.2rem] font-extrabold leading-tight tracking-[-0.05em] text-[#163e72]">
                กฤษณพล เกียรติวีโรจน์
              </h2>
              <p className="mt-2 text-lg font-semibold text-[#4a6785]">ผู้ก่อตั้ง / ที่ปรึกษาการเดินทาง</p>
              <p className="mt-5 text-sm leading-7 text-[#61758a]">
                ผมและทีมงานตั้งใจช่วยให้การเดินทางของคุณง่ายขึ้น ไม่ว่าจะเป็นจอยทัวร์
                ไพรเวททัวร์ ไกด์ ล่าม รถพร้อมคนขับ หรือการวางแผนทริปในภาพรวม
                เราช่วยสรุปเรื่องยากให้ตัดสินใจได้ชัดและตรงกับความต้องการจริง
              </p>

              <div className="mt-6 grid gap-3 text-sm text-[#48627c]">
                {ownerChecks.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 text-[#18a744]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="rounded-[22px] border border-[#dce7f7] bg-[#fbfdff] p-5 shadow-[0_10px_28px_rgba(13,56,105,0.05)]">
                <h3 className="text-center text-xl font-extrabold tracking-[-0.03em] text-[#163e72]">
                  ติดต่อผู้ก่อตั้งโดยตรง
                </h3>
                <div className="mt-5 grid gap-3">
                  <Link
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b56b1] px-4 py-3.5 text-sm font-bold text-white"
                  >
                    <PhoneIcon className="h-4.5 w-4.5" />
                    โทรหา คุณกฤษณพล
                  </Link>
                  <Link
                    href={siteConfig.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19a948] px-4 py-3.5 text-sm font-bold text-white"
                  >
                    <LineIcon className="h-4.5 w-4.5" />
                    แอด LINE ส่วนตัว
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cfe0f7] bg-white px-4 py-3.5 text-sm font-bold text-[#0b56b1]"
                  >
                    <MailIcon className="h-4.5 w-4.5" />
                    ส่งอีเมลถึงผู้ก่อตั้ง
                  </Link>
                </div>
                <p className="mt-5 text-center text-sm leading-7 text-[#6b8095]">
                  ถ้าต้องการคุยเรื่องทริปแบบตรงประเด็น
                  <br />
                  คุณสามารถติดต่อทีมผู้ก่อตั้งได้โดยตรง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.16fr_0.84fr] lg:px-8">
        <div>
          <h2 className="text-xl font-extrabold tracking-[-0.03em] text-[#163e72]">ส่งข้อความถึงเรา</h2>
          <p className="mt-1 text-sm text-[#6b8095]">
            กรอกข้อมูลเบื้องต้น แล้วทีมงานจะติดต่อกลับโดยเร็วที่สุด
            {tripLabel ? ` ตอนนี้เราเตรียมหัวข้อสำหรับ ${tripLabel} ไว้ให้แล้ว` : ""}
          </p>

          <div className="mt-4 rounded-[24px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)] sm:p-6">
            <ContactForm
              defaultService={selectedService}
              defaultTripLabel={tripLabel}
              defaultDeparture={departure}
              defaultDetails={tripDetails}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-extrabold tracking-[-0.03em] text-[#163e72]">สอบถามบริการที่คุณสนใจ</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {serviceTypes.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-[22px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1]">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b8095]">{service.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-4 rounded-[22px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <p className="text-sm leading-7 text-[#58708a]">
              แม้คุณจะจองตั๋วเครื่องบินและโรงแรมแล้ว เราก็ยังช่วยเฉพาะบริการที่ต้องการได้
              เช่น รถ ไกด์ ล่าม หรือทริปธุรกิจเฉพาะทาง
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.05fr_0.55fr_0.7fr]">
          <article className="rounded-[24px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <h2 className="text-xl font-extrabold tracking-[-0.03em] text-[#17334e]">ข้อมูลสำนักงาน</h2>
            <div className="mt-4 flex gap-3">
              <span className="mt-1 text-[#0b56b1]">
                <PinIcon className="h-5 w-5" />
              </span>
              <div className="text-sm leading-7 text-[#61758a]">
                <p className="font-bold text-[#17334e]">{siteConfig.companyNameTh}</p>
                <p>{siteConfig.addressLines[0]}</p>
                <p>{siteConfig.addressLines[1]}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7faff] px-4 py-3 text-sm font-semibold text-[#0b56b1]">
                ใกล้ BTS อโศก
                <span className="mt-1 block text-xs font-medium text-[#6b8095]">ทางออก 3</span>
              </div>
              <div className="rounded-2xl bg-[#f7faff] px-4 py-3 text-sm font-semibold text-[#0b56b1]">
                นัดคุยสะดวก
                <span className="mt-1 block text-xs font-medium text-[#6b8095]">ติดต่อก่อนเข้าพบ</span>
              </div>
            </div>
          </article>

          <article className="relative min-h-[255px] overflow-hidden rounded-[24px] border border-[#dde8f8] bg-[linear-gradient(180deg,#f1f7ff,#ffffff)] shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute left-8 top-10 h-[1px] w-[78%] bg-[#bfd3ef]" />
              <div className="absolute left-10 top-20 h-[1px] w-[70%] bg-[#c9dbf3]" />
              <div className="absolute left-6 top-32 h-[1px] w-[82%] bg-[#bfd3ef]" />
              <div className="absolute left-16 top-44 h-[1px] w-[68%] bg-[#c9dbf3]" />
              <div className="absolute left-24 top-6 h-[76%] w-[1px] bg-[#c9dbf3]" />
              <div className="absolute left-44 top-4 h-[80%] w-[1px] bg-[#bfd3ef]" />
              <div className="absolute left-72 top-12 h-[70%] w-[1px] bg-[#c9dbf3]" />
            </div>
            <div className="absolute left-[46%] top-[43%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b56b1] text-white shadow-[0_12px_24px_rgba(11,86,177,0.3)]">
              <PinIcon className="h-6 w-6" />
            </div>
            <div className="absolute left-[48%] top-[56%] -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0b56b1] shadow-[0_8px_20px_rgba(13,56,105,0.12)]">
              China Prime Office
            </div>
          </article>

          <article className="rounded-[24px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <h2 className="text-lg font-extrabold tracking-[-0.03em] text-[#17334e]">เวลาทำการ</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#61758a]">
              <div>
                <p className="font-semibold text-[#17334e]">จันทร์ - ศุกร์</p>
                <p>09:00 - 18:00 น.</p>
              </div>
              <div>
                <p className="font-semibold text-[#17334e]">เสาร์ - อาทิตย์</p>
                <p>10:00 - 17:00 น.</p>
              </div>
              <div className="pt-2 text-[#0b56b1]">
                <p>รถไฟฟ้า BTS อโศก (ทางออก 3)</p>
                <p>รถไฟใต้ดิน MRT สุขุมวิท (ทางออก 1)</p>
                <p>มีที่จอดรถในอาคาร</p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[24px] border border-[#dde8f8] bg-white shadow-[0_12px_30px_rgba(13,56,105,0.05)]">
            <div className="relative h-full min-h-[255px]">
              <Image
                src="/images/hero-china-prime.jpg"
                alt="ให้คำปรึกษาออนไลน์ได้ทั่วประเทศ"
                fill
                sizes="(max-width: 1280px) 100vw, 20vw"
                className="object-cover object-[center_62%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,53,106,0.04),rgba(8,53,106,0.7))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h2 className="text-xl font-extrabold tracking-[-0.03em]">ให้คำปรึกษาออนไลน์ได้ทั่วประเทศ</h2>
              <p className="mt-2 text-sm leading-6 text-white/90">
                  ไม่ว่าสะดวกคุยจากที่ไหนก็เริ่มได้ ผ่านโทรศัพท์ LINE หรือวิดีโอคอล
                  ทีมงานพร้อมช่วยคุณตั้งแต่เริ่มต้น
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-[1.65rem] font-extrabold tracking-[-0.04em] text-[#163e72]">
          ทำไมลูกค้าจึงไว้วางใจ China Prime
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {trustReasons.map((item) => (
            <article
              key={item}
              className="rounded-[22px] border border-[#dde8f8] bg-white p-5 shadow-[0_12px_30px_rgba(13,56,105,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#eef5ff] text-[#0b56b1]">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#35506d]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <h2 className="text-[1.65rem] font-extrabold tracking-[-0.04em] text-[#163e72]">คำถามที่พบบ่อย (FAQ)</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item}
              className="group rounded-[18px] border border-[#dde8f8] bg-white px-5 py-4 shadow-[0_10px_26px_rgba(13,56,105,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#35506d] [&::-webkit-details-marker]:hidden">
                <span>{item}</span>
                <span className="text-[#7a8fa8] transition group-open:rotate-180">
                  <ChevronIcon className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-[#6b8095]">
                ทีมงานจะช่วยแนะนำช่องทางและรูปแบบบริการที่เหมาะกับคำถามของคุณ
                เริ่มได้ทั้งทางโทรศัพท์ LINE หรือฟอร์มหน้านี้ แล้วเราจะช่วยพาไปขั้นถัดไปให้
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-china-prime.jpg"
            alt="CTA ติดต่อทีม China Prime"
            fill
            sizes="100vw"
            className="object-cover object-[center_55%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,47,94,0.94),rgba(8,72,140,0.88),rgba(22,134,59,0.72))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 text-white sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.3fr_0.3fr_0.32fr] lg:items-center">
            <div>
              <h2 className="text-[2rem] font-extrabold tracking-[-0.05em] md:text-[2.6rem]">
                พร้อมออกเดินทางไปกับ China Prime แล้วหรือยัง?
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/88 md:text-base">
                ติดต่อเราวันนี้ เพื่อเริ่มวางแผนทริปที่เหมาะกับคุณที่สุด
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
              className="rounded-[20px] bg-[#19a948] px-5 py-4 text-center text-sm font-bold text-white"
            >
              แอด LINE
              <span className="mt-1 block text-lg font-extrabold">{siteConfig.lineId}</span>
            </Link>

            <Link
              href="/contact"
              className="rounded-[20px] border border-white/26 bg-white/10 px-5 py-4 text-center text-sm font-bold text-white backdrop-blur"
            >
              ส่งข้อความ
              <span className="mt-1 block text-base font-semibold text-white/90">ปรึกษาเส้นทางฟรี</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
