import Link from "next/link";
import { siteConfig } from "../site-config";

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | CHINA PRIME",
  description: "รายละเอียดการเก็บ ใช้ และดูแลข้อมูลส่วนบุคคลของลูกค้าที่ติดต่อหรือใช้บริการกับ China Prime",
};

const privacySections = [
  {
    title: "1. ข้อมูลที่เราเก็บ",
    items: [
      "ข้อมูลติดต่อ เช่น ชื่อ เบอร์โทร อีเมล หรือ LINE ID",
      "ข้อมูลการเดินทาง เช่น เส้นทางที่สนใจ ช่วงเวลาเดินทาง งบประมาณ และจำนวนผู้เดินทาง",
      "ข้อมูลที่ลูกค้าแจ้งเพิ่มเติมผ่านแบบฟอร์ม โทรศัพท์ LINE อีเมล หรือการนัดหมาย",
    ],
  },
  {
    title: "2. วัตถุประสงค์ในการใช้ข้อมูล",
    items: [
      "ให้คำปรึกษา แนะนำโปรแกรม และจัดทำใบเสนอราคาที่เหมาะกับความต้องการของลูกค้า",
      "ติดต่อกลับเพื่อยืนยันข้อมูลการเดินทาง การชำระเงิน และเอกสารที่เกี่ยวข้อง",
      "ดูแลบริการหลังการขาย การเปลี่ยนแปลงการเดินทาง และการช่วยเหลือระหว่างทริป",
    ],
  },
  {
    title: "3. การเปิดเผยข้อมูล",
    items: [
      "เราเปิดเผยข้อมูลเท่าที่จำเป็นต่อการให้บริการ เช่น สายการบิน โรงแรม พาร์ตเนอร์ภาคพื้น และผู้ให้บริการขนส่ง",
      "เราไม่ขายข้อมูลส่วนบุคคลให้บุคคลภายนอก",
      "ในกรณีที่กฎหมายกำหนด เราอาจต้องเปิดเผยข้อมูลต่อหน่วยงานที่มีอำนาจตามกฎหมาย",
    ],
  },
  {
    title: "4. การเก็บรักษาและความปลอดภัย",
    items: [
      "เราเก็บข้อมูลไว้เท่าที่จำเป็นต่อการให้บริการและการดำเนินงานภายใน",
      "จำกัดการเข้าถึงข้อมูลเฉพาะทีมงานที่เกี่ยวข้องกับการขาย การประสานงาน และการดูแลลูกค้า",
      "ทบทวนและลบข้อมูลที่ไม่จำเป็นตามรอบการทำงานของบริษัท",
    ],
  },
  {
    title: "5. สิทธิของเจ้าของข้อมูล",
    items: [
      "ลูกค้าสามารถขอแก้ไข อัปเดต หรือขอลบข้อมูลส่วนบุคคลที่เคยให้ไว้ได้",
      "ลูกค้าสามารถขอทราบรายละเอียดการใช้ข้อมูลของตนเองได้ตามสมควร",
      "หากไม่ต้องการรับการติดต่อทางการตลาดเพิ่มเติม สามารถแจ้งทีมงานได้ทุกเมื่อ",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#163047]">
      <section className="ui-section py-12 lg:py-14">
        <div className="ui-card mx-auto max-w-5xl p-6 sm:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8f7348]">Privacy Policy</p>
          <h1 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.6rem]">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#607086] md:text-base">
            {siteConfig.companyNameTh} ให้ความสำคัญกับการดูแลข้อมูลส่วนบุคคลของลูกค้าอย่างเหมาะสม ข้อมูลที่ส่งผ่านเว็บไซต์ โทรศัพท์ อีเมล หรือ LINE จะถูกใช้เพื่อการให้บริการ การประสานงาน และการดูแลการเดินทางของลูกค้าเป็นหลัก
          </p>

          <div className="mt-8 space-y-5">
            {privacySections.map((section) => (
              <section key={section.title} className="ui-card-soft p-5">
                <h2 className="text-lg font-bold tracking-[-0.03em] text-[#17334e]">{section.title}</h2>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[#607086]">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="ui-panel-accent mt-8 p-5 sm:p-6">
            <h2 className="text-lg font-bold tracking-[-0.03em] text-white">ติดต่อเกี่ยวกับข้อมูลส่วนบุคคล</h2>
            <p className="mt-2 text-sm leading-7 text-white/84">
              หากต้องการสอบถาม แก้ไข หรือลบข้อมูลส่วนบุคคล สามารถติดต่อเราได้ทางอีเมล {siteConfig.email} หรือโทร {siteConfig.phoneDisplay}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
                ติดต่อทีมงาน
              </Link>
              <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
                ทัก LINE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
