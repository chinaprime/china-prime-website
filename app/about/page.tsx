import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "เกี่ยวกับเรา | CHINA PRIME",
  description:
    "รู้จักทีม China Prime ผู้เชี่ยวชาญด้านทัวร์จีนสำหรับลูกค้าคนไทย พร้อมข้อมูลบริษัท ช่องทางติดต่อ และแนวคิดการออกแบบทริป",
};

const strengths = [
  {
    title: "เข้าใจลูกค้าคนไทย",
    text: "เราออกแบบทริปให้เข้ากับสไตล์ของคนไทย ทั้งครอบครัว กลุ่มส่วนตัว และลูกค้าที่ต้องการความสะดวกเป็นพิเศษ",
  },
  {
    title: "ประสานงานไทย-จีน",
    text: "ช่วยลดความกังวลเรื่องภาษา การจอง และรายละเอียดหน้างาน เพื่อให้ทริปจีนราบรื่นขึ้น",
  },
  {
    title: "วางแผนแบบ Tailor-made",
    text: "ทุกเส้นทางปรับได้ตามจำนวนวัน งบประมาณ สมาชิกในทริป และจังหวะการเดินทางที่เหมาะกับแต่ละกลุ่ม",
  },
  {
    title: "ดูแลครบทุกขั้นตอน",
    text: "ตั้งแต่เลือกเมือง วางเส้นทาง จัดรถ ไกด์ โรงแรม ร้านอาหาร ไปจนถึงการประสานงานระหว่างเดินทาง",
  },
];

const values = [
  "ไม่ออกแบบทริปให้แน่นเกินไปจนเสียประสบการณ์",
  "ให้ความสำคัญกับความปลอดภัยและความสะดวกของผู้เดินทาง",
  "เลือกบริการให้เหมาะกับระดับความสบายที่ลูกค้าต้องการ",
  "สื่อสารชัดเจน ตรงไปตรงมา และดูแลรายละเอียดอย่างเป็นระบบ",
];

const companyFacts = [
  { label: "ชื่อบริษัท", value: siteConfig.companyNameTh },
  { label: "ชื่อภาษาอังกฤษ", value: siteConfig.companyNameEn },
  { label: "เบอร์โทรศัพท์", value: siteConfig.phoneDisplay },
  { label: "อีเมล", value: siteConfig.email },
  { label: "LINE Official", value: siteConfig.lineId },
  { label: "เวลาทำการ", value: siteConfig.weekdayHoursLong },
  { label: "วันหยุดสุดสัปดาห์", value: siteConfig.weekendHoursLong },
  { label: "ใบอนุญาตนำเที่ยว", value: siteConfig.travelLicenseNumber },
];

const promiseItems = [
  { label: "ประสบการณ์ที่ตั้งใจออกแบบ", value: "Tailor-made" },
  { label: "ดูแลโดยทีมงานคนไทย", value: "Thai-led service" },
  { label: "โฟกัสเส้นทางจีนโดยเฉพาะ", value: "China specialist" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#13283d]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/founder-china-prime.jpg"
            alt="ทีมงาน China Prime"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.94),rgba(16,59,99,0.78)_42%,rgba(16,59,99,0.26)_76%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-sm transition hover:bg-white/14">
              <span>←</span>
              กลับหน้าแรก
            </Link>
            <div className="mt-6 inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
              About China Prime
            </div>
            <h1 className="ui-display mt-4 max-w-[12ch] sm:max-w-4xl">
              ทีมออกแบบทริปจีนส่วนตัว
              <br />
              สำหรับลูกค้าคนไทย
            </h1>
            <p className="ui-copy-max ui-copy-tight mt-5 text-[15px] leading-[1.62] text-white/88 md:text-[1.05rem]">
              China Prime คือทีมวางแผนทริปจีนสำหรับลูกค้าคนไทยที่ต้องการความสะดวก ความปลอดภัย
              และประสบการณ์เดินทางที่ออกแบบให้เหมาะกับตัวเองจริง
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {promiseItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.08)_100%)] px-4 py-3.5 backdrop-blur-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">{item.label}</p>
                  <p className="mt-2 text-[1.15rem] font-bold tracking-[-0.03em] text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section pt-10 lg:pt-12">
        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="ui-panel-accent p-6 sm:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf]">Our Positioning</p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-[-0.05em] md:text-[2.6rem]">
              ออกแบบทริปจีนส่วนตัว
              <br />
              ให้เหมาะกับคนไทยจริง
            </h2>
            <p className="ui-copy-narrow ui-copy-tight mt-4 text-sm leading-7 text-white/84 md:text-base">
              เราไม่ได้เน้นแค่ขายแพ็กเกจสำเร็จรูป แต่เน้นออกแบบประสบการณ์เดินทางให้เหมาะกับเวลา สมาชิกในทริป และระดับความสบายที่ลูกค้าต้องการจริง
            </p>

            <div className="mt-6 rounded-[26px] border border-white/14 bg-white/8 p-4.5 sm:p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ddbf]">Service Philosophy</p>
              <p className="ui-copy-narrow mt-3 text-sm leading-7 text-white/84 md:text-base">
                ทริปที่ดีไม่ใช่แค่ไปครบทุกจุด แต่ต้องเดินทางสบาย จังหวะดี และทำให้ลูกค้ามั่นใจตลอดเส้นทาง
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <article key={item.title} className="ui-card ui-card-pad h-full">
                <div className="ui-icon-panel h-12 w-12" />
                <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.03em] text-[#13283d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#607086]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section py-12 lg:py-14">
        <div className="ui-card-soft p-6 sm:p-7">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8f7348]">How We Design Your Journey</p>
            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.6rem]">
              หลักการออกแบบทริปที่เราให้ความสำคัญ
            </h2>
            <p className="ui-copy-max ui-copy-tight mt-4 text-sm leading-7 text-[#607086] md:text-base">
              เราเชื่อว่าทริปส่วนตัวควรสบายใจตั้งแต่เริ่มวางแผนจนจบทริป ทุกคำแนะนำจึงอิงจากการเดินทางจริงและความเหมาะสมของลูกค้า
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <article key={value} className="ui-card p-5">
                <p className="text-[2rem] font-bold tracking-[-0.05em] text-[#8f7348]">0{index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-[#516275]">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section pb-12 lg:pb-14">
        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="ui-card-soft p-6 sm:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8f7348]">Company Information</p>
            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.5rem]">
              ข้อมูลบริษัทและช่องทางติดต่อ
            </h2>
            <p className="ui-copy-max ui-copy-tight mt-4 text-sm leading-7 text-[#607086] md:text-base">
              สำหรับลูกค้าที่ต้องการตรวจสอบข้อมูลก่อนตัดสินใจ เรารวมรายละเอียดธุรกิจและช่องทางติดต่อไว้ในจุดเดียวเพื่อให้สอบถามและประสานงานได้ง่ายขึ้น
            </p>

            <div className="mt-6 ui-card p-5">
              <p className="font-semibold text-[#13283d]">{siteConfig.addressLines[0]}</p>
              <p className="mt-1 text-sm leading-7 text-[#607086]">{siteConfig.addressLines[1]}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href={siteConfig.phoneHref} className="ui-button ui-button-primary inline-flex min-h-11 items-center justify-center px-5">
                  โทร {siteConfig.phoneDisplay}
                </Link>
                <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-success inline-flex min-h-11 items-center justify-center px-5">
                  ทัก LINE
                </Link>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {companyFacts.map((fact) => (
              <article key={fact.label} className="ui-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">{fact.label}</p>
                <p className="mt-3 text-[1rem] font-bold leading-7 text-[#13283d]">{fact.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section pb-14">
        <div className="ui-panel-accent grid gap-5 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf]">Start with China Prime</p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-[-0.05em] md:text-[2.6rem]">
              พร้อมออกแบบทริปจีนที่เหมาะกับคุณแล้วหรือยัง?
            </h2>
            <p className="ui-copy-narrow ui-copy-tight mt-4 text-sm leading-7 text-white/84 md:text-base">
              แจ้งเมืองที่อยากไป จำนวนวัน จำนวนผู้เดินทาง และสไตล์ที่ต้องการ ทีมงานจะช่วยแนะนำแนวทางที่เหมาะกับคุณ
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
              ขอคำแนะนำทริป
            </Link>
            <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
              ทัก LINE {siteConfig.lineId}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
