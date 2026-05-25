import Link from "next/link";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "นโยบายยกเลิกและคืนเงิน | CHINA PRIME",
  description: "เงื่อนไขการเปลี่ยนแปลง ยกเลิก และคืนเงินของบริการท่องเที่ยวกับ China Prime",
};

const cancellationSections = [
  {
    title: "การเปลี่ยนแปลงก่อนเดินทาง",
    text: "การเปลี่ยนชื่อผู้เดินทาง เปลี่ยนวันเดินทาง หรือเปลี่ยนบริการ อาจมีค่าใช้จ่ายเพิ่มเติมตามเงื่อนไขของสายการบิน โรงแรม หรือพาร์ตเนอร์ภาคพื้น กรุณาติดต่อทีมงานโดยเร็วที่สุดเพื่อประเมินผลกระทบก่อนยืนยันการเปลี่ยนแปลง",
  },
  {
    title: "การยกเลิกโดยลูกค้า",
    text: "การคืนเงินขึ้นอยู่กับช่วงเวลาที่ยกเลิก ประเภทบริการ และค่าใช้จ่ายที่เกิดขึ้นจริงแล้ว เช่น ตั๋วเครื่องบิน ที่พัก หรือค่าดำเนินการที่ยืนยันกับพาร์ตเนอร์ไปแล้ว",
  },
  {
    title: "กรณีเหตุสุดวิสัย",
    text: "หากเกิดเหตุการณ์ที่อยู่นอกเหนือการควบคุม เช่น สภาพอากาศ เหตุฉุกเฉิน การปิดสถานที่ หรือข้อจำกัดจากหน่วยงานรัฐ ทีมงานจะช่วยประสานงานเพื่อหาแนวทางที่เหมาะสมที่สุดให้ลูกค้า",
  },
];

const practicalNotes = [
  "แจ้งยกเลิกหรือเปลี่ยนแปลงทันทีที่ทราบ เพื่อเพิ่มโอกาสในการรักษาสิทธิ์หรือประเมินทางเลือกอื่น",
  "เก็บเอกสารการชำระเงินและเอกสารยืนยันการจองไว้ทุกครั้ง เพื่อใช้ประกอบการประสานงาน",
  "สำหรับโปรแกรมที่มีที่นั่งจำกัดหรือเกี่ยวข้องกับฤดูกาลท่องเที่ยว อาจมีเงื่อนไขเฉพาะเพิ่มเติมจากผู้ให้บริการ",
];

export default function CancellationRefundPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="ui-section py-12 lg:py-14">
        <div className="ui-card mx-auto max-w-5xl p-6 sm:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Cancellation & Refund</p>
          <h1 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.6rem]">
            นโยบายยกเลิกและคืนเงิน
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#607086] md:text-base">
            China Prime พยายามดูแลให้ลูกค้าได้รับข้อมูลที่ชัดเจนก่อนยืนยันบริการทุกครั้ง อย่างไรก็ตาม เงื่อนไขการยกเลิกและคืนเงินอาจแตกต่างกันตามประเภทของโปรแกรมและข้อกำหนดของผู้ให้บริการแต่ละราย
          </p>

          <div className="mt-8 grid gap-4">
            {cancellationSections.map((section) => (
              <article key={section.title} className="ui-card-soft p-5">
                <h2 className="text-lg font-bold tracking-[-0.03em] text-[#17334e]">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#607086]">{section.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="ui-card-soft p-5">
              <h2 className="text-lg font-bold tracking-[-0.03em] text-[#17334e]">คำแนะนำก่อนแจ้งยกเลิก</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#607086]">
                {practicalNotes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="ui-panel-accent p-5">
              <h2 className="text-lg font-bold tracking-[-0.03em] text-white">ต้องการให้ทีมช่วยประเมินเคส?</h2>
              <p className="mt-2 text-sm leading-7 text-white/84">
                หากต้องการเปลี่ยนวันเดินทาง ยกเลิก หรือสอบถามยอดคืนโดยประมาณ กรุณาส่งรหัสโปรแกรมและหลักฐานการจองให้ทีมงาน เพื่อให้เราช่วยตรวจสอบเงื่อนไขล่าสุดจากผู้ให้บริการ
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
                  ติดต่อทีมงาน
                </Link>
                <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
                  ส่งข้อมูลผ่าน LINE
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
