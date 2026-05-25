import Link from "next/link";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "การจองและชำระเงิน | CHINA PRIME",
  description: "ขั้นตอนการจอง ชำระมัดจำ ยืนยันการเดินทาง และการประสานงานก่อนออกทริปกับ China Prime",
};

const bookingSteps = [
  {
    title: "1. สอบถามและรับคำแนะนำ",
    text: "แจ้งเมืองที่สนใจ ช่วงเวลาเดินทาง จำนวนผู้เดินทาง และรูปแบบบริการที่ต้องการผ่านโทรศัพท์ LINE อีเมล หรือฟอร์มบนเว็บไซต์",
  },
  {
    title: "2. รับโปรแกรมหรือใบเสนอราคา",
    text: "ทีมงานจะสรุปเส้นทาง รายละเอียดบริการ ราคาเบื้องต้น และเงื่อนไขสำคัญให้ตรวจสอบก่อนตัดสินใจ",
  },
  {
    title: "3. ยืนยันการจองและชำระมัดจำ",
    text: "เมื่อยืนยันบริการ ลูกค้าจะได้รับรายละเอียดการชำระเงินและยอดมัดจำที่ใช้ล็อกที่นั่งหรือบริการภาคพื้น",
  },
  {
    title: "4. ส่งหลักฐานการชำระเงิน",
    text: "หลังชำระเงิน กรุณาส่งสลิปหรือหลักฐานการโอนผ่าน LINE หรืออีเมลเพื่อให้ทีมงานตรวจสอบและยืนยันรายการ",
  },
  {
    title: "5. รับเอกสารก่อนเดินทาง",
    text: "ก่อนวันเดินทาง ลูกค้าจะได้รับเอกสารยืนยัน โปรแกรมเดินทาง และข้อมูลผู้ประสานงานที่เกี่ยวข้อง",
  },
];

const paymentNotes = [
  "ยอดมัดจำและกำหนดชำระแตกต่างกันตามประเภทบริการ สายการบิน โรงแรม และเงื่อนไขของพาร์ตเนอร์",
  "สำหรับจอยทัวร์ที่มีที่นั่งจำกัด แนะนำให้ยืนยันและชำระมัดจำโดยเร็วเพื่อรักษาสิทธิ์",
  "ในกรณีไพรเวททัวร์หรือบริการเฉพาะทาง ทีมงานอาจต้องประเมินราคาเป็นรายเคสก่อนยืนยันยอดชำระ",
];

export default function BookingPaymentPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="ui-section py-12 lg:py-14">
        <div className="ui-card mx-auto max-w-5xl p-6 sm:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Booking & Payment</p>
          <h1 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.6rem]">
            การจองและชำระเงิน
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#607086] md:text-base">
            หน้าเอกสารนี้สรุปขั้นตอนการจองเพื่อให้ลูกค้าเข้าใจ flow การทำงานของ {siteConfig.brandName} ได้ชัดเจนขึ้น ตั้งแต่การสอบถามราคา การยืนยันบริการ ไปจนถึงการรับเอกสารก่อนเดินทาง
          </p>

          <div className="mt-8 grid gap-4">
            {bookingSteps.map((step) => (
              <article key={step.title} className="ui-card-soft p-5">
                <h2 className="text-lg font-bold tracking-[-0.03em] text-[#17334e]">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#607086]">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="ui-card-soft p-5">
              <h2 className="text-lg font-bold tracking-[-0.03em] text-[#17334e]">หมายเหตุเรื่องการชำระเงิน</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#607086]">
                {paymentNotes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="ui-panel-accent p-5">
              <h2 className="text-lg font-bold tracking-[-0.03em] text-white">ช่องทางยืนยันการจอง</h2>
              <p className="mt-2 text-sm leading-7 text-white/84">
                เมื่อต้องการรับโปรแกรมล่าสุด เช็กราคา หรือขอใบเสนอราคา สามารถส่งข้อมูลได้ผ่าน LINE หรือฟอร์มติดต่อบนเว็บไซต์ ทีมงานจะช่วยสรุปรายละเอียดและขั้นตอนที่เหมาะกับบริการที่คุณเลือก
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
                  ขอใบเสนอราคา
                </Link>
                <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
                  ส่งสลิป / สอบถามผ่าน LINE
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
