import Image from "next/image";
import Link from "next/link";
import { joinTours } from "./data";
import { JoinTourBrowser } from "./join-tour-browser";

const chinaImages = {
  hero: "/images/great-wall-home.jpg",
  guilin: "https://commons.wikimedia.org/wiki/Special:FilePath/Guilin_Li_River.jpg",
};

const highlights = ["เดินทางเป็นกลุ่มคุ้มค่า", "ไกด์ดูแลตลอดทริป", "โปรแกรมชัดเจน เดินทางง่าย", "มีทีมงานช่วยก่อนและหลังจอง"];

const featureCards = [
  { title: "ราคาคุ้มค่า", text: "แชร์ค่าใช้จ่ายกับกรุ๊ป เดินทางสบายในงบพอดี" },
  { title: "มีวันเดินทางแน่นอน", text: "เลือกโปรแกรมแล้ววางแผนตั๋วและวันลาได้ง่าย" },
  { title: "ไกด์ดูแลตลอดทริป", text: "มีทีมงานคอยพาเที่ยวและดูแลเรื่องหน้างาน" },
  { title: "เหมาะกับมือใหม่", text: "ไม่ต้องวางแผนละเอียดเองก็เที่ยวจีนได้สบาย" },
];

const personaCards = [
  { title: "มือใหม่เที่ยวจีน", text: "อยากไปจีนแต่ไม่อยากวางแผนเองทั้งหมด" },
  { title: "เพื่อนและครอบครัวเล็ก", text: "อยากได้ทริปคุ้มค่า เดินทางง่าย มีเพื่อนร่วมทริป" },
  { title: "คนอยากคุมงบ", text: "เลือกแพ็กเกจชัดเจน งบไม่บานปลาย" },
  { title: "สายเที่ยวสบาย", text: "มีไกด์ดูแลและโปรแกรมแน่นแบบไม่ต้องคิดเยอะ" },
];

const includedItems = [
  { title: "วันเดินทางชัดเจน", text: "มีรอบเดินทางให้เลือกง่าย วางแผนลางานและจองล่วงหน้าได้สะดวก" },
  { title: "ทีมงานดูแลก่อนจอง", text: "ช่วยคัดโปรแกรมที่เหมาะกับงบ เวลาเดินทาง และสไตล์เที่ยวของคุณ" },
  { title: "หัวหน้าทัวร์ / ไกด์", text: "มีทีมงานคอยดูแลระหว่างทริป ลดความกังวลเรื่องภาษาและการเดินทาง" },
  { title: "โปรแกรมคัดแล้ว", text: "คัดเส้นทางที่เที่ยวจริง เดินทางจริง และเป็นที่นิยมของลูกค้าไทย" },
  { title: "ราคาเริ่มต้นชัดเจน", text: "ดูงบประมาณคร่าว ๆ ได้ตั้งแต่หน้าแรก ก่อนตัดสินใจสอบถามต่อ" },
  { title: "ช่วยเช็กที่นั่งให้", text: "ทักมาสอบถามแล้วทีมงานช่วยเช็กรอบเดินทางและสถานะที่นั่งให้ทันที" },
];

const salesSupportCards = [
  { title: "เลือกทริปง่ายขึ้น", text: "แยกข้อมูลหลักให้เห็นตั้งแต่หน้าแรก ทั้งไฮไลต์ อาหาร ช่วงเดินทาง และราคา" },
  { title: "ตัดสินใจเร็วขึ้น", text: "ไม่ต้องกดเข้าไปหลายชั้นก็เห็นก่อนว่าทริปไหนตรงกับความสนใจของคุณ" },
  { title: "พร้อมปิดการขาย", text: "มี CTA ชัดเจนสำหรับสอบถามรอบเดินทาง ราคา และขอโปรแกรมฉบับล่าสุด" },
];

const steps = [
  { no: "1", title: "เลือกโปรแกรม", text: "ดูเส้นทางและวันเดินทางที่ตรงใจ" },
  { no: "2", title: "สอบถาม / จอง", text: "เช็กที่นั่งว่างและรายละเอียดเพิ่มเติม" },
  { no: "3", title: "ชำระมัดจำ", text: "ยืนยันสิทธิ์เข้าร่วมทริปตามรอบเดินทาง" },
  { no: "4", title: "เตรียมเอกสาร", text: "รับข้อมูลเดินทางและคำแนะนำก่อนบิน" },
];

const faqItems = [
  "จอยทัวร์เหมาะกับใคร?",
  "รวมตั๋วเครื่องบินแล้วหรือยัง?",
  "มีหัวหน้าทัวร์หรือไกด์ดูแลไหม?",
  "เลือกที่นั่งหรือห้องพักได้หรือไม่?",
  "ถ้าจองแล้วต้องการยกเลิกทำอย่างไร?",
  "ต้องมีวีซ่าหรือเอกสารอะไรบ้าง?",
];

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 12.5 4 4L19 7.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlueIcon() {
  return (
    <div className="ui-icon-circle h-12 w-12">
      <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 3l7 4v5c0 4.2-2.8 7-7 9-4.2-2-7-4.8-7-9V7l7-4Z" />
        <path d="m9.5 12 1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FAQItem({ question }: { question: string }) {
  return (
    <details className="ui-card ui-radius-card group px-4 py-3">
      <summary className="ui-button flex cursor-pointer list-none items-center justify-between gap-3 text-[#334155] [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="text-[#64748B] transition group-open:rotate-180">⌄</span>
      </summary>
      <p className="ui-body mt-3 text-[#64748B]">
        ทีมงาน CHINA PRIME พร้อมอธิบายรายละเอียดจอยทัวร์จีนให้ครบถ้วน ทั้งเรื่องวันเดินทาง เงื่อนไขการจอง
        ห้องพัก และเอกสารก่อนออกเดินทาง
      </p>
    </details>
  );
}

export default function JoinToursPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#0F172A]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={chinaImages.hero} alt="กำแพงเมืองจีนสำหรับหน้าจอยทัวร์" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.92),rgba(16,59,99,0.74)_40%,rgba(16,59,99,0.2)_76%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.22),transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-12 text-white sm:px-6 lg:px-8 lg:pb-32 lg:pt-16">
          <div className="max-w-4xl">
            <p className="text-[15px] font-semibold leading-[1.35] tracking-[-0.02em] md:text-[17px]">เที่ยวจีนเป็นกลุ่ม เดินทางง่าย</p>
            <h1 className="mt-3 max-w-3xl text-[40px] font-bold leading-[1.08] tracking-[-0.05em] md:text-[64px]">
              จอยทัวร์จีน
              <br />
              สนุก คุ้มค่า สบายใจ
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] font-normal leading-[1.7] text-white/92 md:text-[17px]">
              รวมโปรแกรมจอยทัวร์จีนยอดนิยม เดินทางตามรอบจริง มีไกด์ดูแลตลอดทริป
              เหมาะทั้งมือใหม่เที่ยวจีนและคนที่อยากคุมงบแบบไม่ต้องวางแผนเองทั้งหมด
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[13px] font-medium leading-[1.35] text-white/96 md:text-[14px]">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/12">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="ui-button ui-button-primary inline-flex min-h-12 items-center justify-center px-6 py-3.5 transition hover:-translate-y-0.5 hover:bg-[#073B7A]"
              >
                สอบถามโปรแกรมจอยทัวร์
              </Link>
              <Link
                href="https://line.me/R/ti/p/@chinaprime"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-success inline-flex min-h-12 items-center justify-center px-6 py-3.5 transition hover:-translate-y-0.5 hover:bg-[#12823b]"
              >
                แชททาง LINE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JoinTourBrowser tours={joinTours} />

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item) => (
            <article key={item.title} className="ui-card ui-radius-card p-5">
              <BlueIcon />
              <h2 className="mt-4 text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#17334E]">{item.title}</h2>
              <p className="mt-2 text-[14px] font-normal leading-[1.65] text-[#6B7C93]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="ui-panel-accent ui-radius-panel px-6 py-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">โปรแกรมแนะนำ</p>
            <h2 className="mt-2 text-[28px] font-bold leading-[1.3] tracking-[-0.03em] md:text-[34px]">จองไว ได้รอบสวย เที่ยวจีนแบบสบายใจ</h2>
            <p className="mt-2 text-[14px] font-normal leading-[1.65] text-white/85">เช็กวันเดินทาง โปรโมชั่นรอบใหม่ และเงื่อนไขการจองกับทีมงานได้ฟรี</p>
          </div>
          <Link href="/contact" className="ui-button ui-button-secondary mt-4 inline-flex md:mt-0 px-5 py-3">
            ขอโปรแกรมล่าสุด
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="ui-card-soft ui-radius-panel p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.03em] text-[#16A34A]">พร้อมสำหรับการขายจริง</p>
              <h2 className="mt-2 text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-[#0F172A] md:text-[34px]">ลูกค้าจะได้เห็นอะไรบ้างก่อนทักมาจอง</h2>
            </div>
            <Link href="/contact" className="text-[14px] font-semibold text-[#0B4EA2]">ขอโปรแกรมล่าสุด →</Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {salesSupportCards.map((item) => (
              <article key={item.title} className="ui-card-soft ui-radius-card p-5">
                <h3 className="text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#17334E]">{item.title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.7] text-[#64748B]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-[#0F172A] md:text-[34px]">จองจอยทัวร์กับเราแล้วได้อะไรบ้าง</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {includedItems.map((item) => (
            <article key={item.title} className="ui-card ui-radius-card p-5">
              <div className="ui-icon-circle h-11 w-11">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#17334E]">{item.title}</h3>
              <p className="mt-2 text-[14px] font-normal leading-[1.7] text-[#64748B]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-[#0F172A] md:text-[34px]">จอยทัวร์เหมาะกับใคร?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {personaCards.map((item) => (
            <article key={item.title} className="ui-card ui-radius-card p-5">
              <BlueIcon />
              <h3 className="mt-4 text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#17334E]">{item.title}</h3>
              <p className="mt-2 text-[14px] font-normal leading-[1.65] text-[#6B7C93]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-[#0F172A] md:text-[34px]">ขั้นตอนการจองจอยทัวร์</h2>
        <div className="ui-card ui-radius-card mt-6 px-5 py-5">
          <div className="grid gap-4 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
            {steps.map((step, index) => (
              <div key={step.no} className="relative flex items-start gap-4 rounded-2xl px-2 py-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B4EA2] text-sm font-extrabold text-white">
                  {step.no}
                </span>
                <div>
                  <h3 className="text-[16px] font-bold leading-[1.35] tracking-[-0.02em] text-[#0F172A]">{step.title}</h3>
                  <p className="mt-1 text-[14px] font-normal leading-[1.65] text-[#64748B]">{step.text}</p>
                </div>
                {index < steps.length - 1 ? <span className="absolute -right-2 top-5 hidden text-[#0B4EA2] xl:block">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="ui-panel-accent ui-radius-panel px-6 py-7 md:flex md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72">พร้อมให้ทีมงานช่วยปิดการขาย</p>
            <h2 className="mt-2 text-[28px] font-bold leading-[1.3] tracking-[-0.03em] md:text-[34px]">ยังไม่แน่ใจว่าควรเลือกทริปไหน? ให้เราช่วยจับคู่โปรแกรมที่เหมาะกับคุณ</h2>
            <p className="mt-2 text-[14px] font-normal leading-[1.7] text-white/88">
              บอกช่วงเดินทาง งบประมาณ จำนวนผู้เดินทาง และสไตล์เที่ยวที่ชอบ
              ทีมงานจะช่วยคัดโปรแกรมจอยทัวร์ที่เหมาะที่สุดให้ทันที
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0 md:justify-end">
            <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5 py-3">
              ขอคำแนะนำทริป
            </Link>
            <Link href="https://line.me/R/ti/p/@chinaprime" target="_blank" rel="noopener noreferrer" className="ui-button ui-button-success inline-flex min-h-11 items-center justify-center px-5 py-3">
              ส่งงบและวันเดินทางทาง LINE
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-[2.1rem] font-extrabold tracking-[-0.05em] text-[#0F172A] md:text-[2.5rem]">คำถามที่พบบ่อย</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqItems.map((question) => (
            <FAQItem key={question} question={question} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={chinaImages.guilin} alt="กุ้ยหลินสำหรับแบนเนอร์ปิดท้าย" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,122,0.88),rgba(22,163,74,0.46))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-[2.2rem] font-extrabold tracking-[-0.05em] md:text-[3rem]">พร้อมออกเดินทางกับจอยทัวร์จีนหรือยัง?</h2>
          <p className="mt-3 text-base leading-8 text-white/92 md:text-[1.08rem]">ปรึกษาฟรี ไม่มีค่าใช้จ่าย พร้อมช่วยเลือกเส้นทางและรอบเดินทางที่เหมาะกับคุณ</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-12 items-center justify-center px-6 py-3.5">
              โทรหาเรา 02-123-4567
            </Link>
            <Link href="https://line.me/R/ti/p/@chinaprime" target="_blank" rel="noopener noreferrer" className="ui-button ui-button-success inline-flex min-h-12 items-center justify-center px-6 py-3.5">
              แชททาง LINE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
