import Link from "next/link";

const tours = [
  {
    eyebrow: "Family Private Trip",
    title: "ทริปจีนส่วนตัวสำหรับครอบครัว",
    tags: ["Family", "Private Car", "Thai Guide"],
    text: "ออกแบบเส้นทางให้เหมาะกับครอบครัวที่มีเด็ก ผู้สูงอายุ หรือสมาชิกหลายวัย เน้นความสบาย ไม่เร่งรีบ และมีทีมดูแลรายละเอียดตลอดทริป",
    details: ["จังหวะเดินทางไม่แน่นเกินไป", "เลือกรถและโรงแรมให้เหมาะกับครอบครัว", "ปรับกิจกรรมตามอายุและความสนใจ"],
  },
  {
    eyebrow: "Luxury Custom Trip",
    title: "ทริปจีนพรีเมียมที่ออกแบบเฉพาะคุณ",
    tags: ["Luxury", "Tailor-made", "Premium Hotel"],
    text: "เหมาะสำหรับลูกค้าที่ต้องการทริปจีนแบบมีระดับ เลือกโรงแรม ทำเล รถ ร้านอาหาร และประสบการณ์ที่สอดคล้องกับไลฟ์สไตล์ของคุณ",
    details: ["เลือกโรงแรมและทำเลระดับพรีเมียม", "ออกแบบ route เฉพาะกลุ่ม", "เพิ่มประสบการณ์พิเศษตามความต้องการ"],
  },
  {
    eyebrow: "Company & Incentive Trip",
    title: "ทริปองค์กรและกรุ๊ปส่วนตัว",
    tags: ["Corporate", "Incentive", "Group Service"],
    text: "วางแผนทริปองค์กร ดูงาน หรือ incentive trip อย่างเป็นระบบ พร้อมการประสานงานรถ โรงแรม ร้านอาหาร และตารางเดินทางที่ชัดเจน",
    details: ["วางกำหนดการเป็นระบบ", "รองรับกรุ๊ปส่วนตัวและองค์กร", "ประสานงานหน้างานแบบมืออาชีพ"],
  },
  {
    eyebrow: "Seasonal China Journey",
    title: "ทริปจีนตามฤดูกาลและเส้นทางพิเศษ",
    tags: ["Seasonal", "Scenic", "Nature"],
    text: "ออกแบบเส้นทางตามฤดูกาล เช่น หิมะ ใบไม้เปลี่ยนสี ดอกไม้ เมืองหนาว หรือธรรมชาติขนาดใหญ่ที่ต้องวางแผนเวลาเดินทางอย่างละเอียด",
    details: ["เลือกช่วงเวลาที่เหมาะกับฤดูกาล", "วางเส้นทางให้ลดความเหนื่อย", "เหมาะกับสายวิวและถ่ายภาพ"],
  },
  {
    eyebrow: "Honeymoon / Couple Trip",
    title: "ทริปคู่รักและฮันนีมูนในจีน",
    tags: ["Couple", "Romantic", "Private"],
    text: "ออกแบบทริปสำหรับคู่รักที่ต้องการบรรยากาศพิเศษ โรงแรมดี ร้านอาหารเหมาะกับโอกาสสำคัญ และเส้นทางที่มีความเป็นส่วนตัว",
    details: ["เลือกเมืองและโรงแรมให้เหมาะกับคู่รัก", "จัดจังหวะทริปแบบสบายและเป็นส่วนตัว", "เพิ่มมื้อพิเศษหรือกิจกรรมเฉพาะโอกาส"],
  },
  {
    eyebrow: "Nature & Scenic Route",
    title: "เส้นทางธรรมชาติและวิวระดับพรีเมียม",
    tags: ["Nature", "Scenic", "Private Route"],
    text: "เหมาะสำหรับลูกค้าที่ต้องการสัมผัสธรรมชาติจีนแบบสะดวก มีรถส่วนตัว ทีมดูแล และแผนเดินทางที่คำนึงถึงระยะทางจริง",
    details: ["เหมาะกับ Zhangjiajie, Xinjiang, Harbin", "วางแผนเวลาเดินทางและจุดพัก", "เน้นวิวสวยโดยไม่เหนื่อยเกินไป"],
  },
];

export default function PrivateToursPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1f2933]">
      <section className="relative overflow-hidden bg-[#071a33] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(201,164,92,0.24),transparent_32%),linear-gradient(135deg,#071a33,#050f24)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f5ef] to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <Link href="/" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
            ← กลับหน้าแรก
          </Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Private & Tailor-made Tours
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            ทริปจีนแบบส่วนตัวที่ออกแบบตามไลฟ์สไตล์ของคุณ
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            เลือกรูปแบบการเดินทางที่เหมาะกับคุณ แล้วให้ทีม China Prime ช่วยออกแบบเส้นทาง รถ ไกด์ โรงแรม
            และจังหวะการเดินทางให้ลงตัวสำหรับทุกสมาชิกในทริป
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Choose Your Private Travel Style
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#071a33] md:text-4xl">
            บริการทริปส่วนตัวสำหรับลูกค้าคนไทยระดับพรีเมียม
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            ไม่ใช่แพ็กเกจสำเร็จรูป แต่เป็นการออกแบบประสบการณ์เดินทางตามวัตถุประสงค์ของแต่ละกลุ่ม
            พร้อมทีมประสานงานไทย-จีนและการดูแลแบบ Private Tour
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="group rounded-[24px] border border-amber-900/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                {tour.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-[#071a33]">{tour.title}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {tour.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-700/20 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 leading-7 text-slate-600">{tour.text}</p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold text-[#071a33]">รายละเอียดที่ดูแลให้</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  {tour.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
              >
                ปรึกษาทริปประเภทนี้
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-amber-300/20 bg-white/[0.06] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Tailor-made Consultation
            </p>
            <h2 className="mt-4 text-4xl font-bold">ยังไม่แน่ใจว่าควรเลือกทริปแบบไหน?</h2>
            <p className="mt-5 leading-8 text-slate-300">
              แจ้งเมืองที่สนใจ จำนวนวัน จำนวนผู้เดินทาง และสไตล์ที่ต้องการ ทีมงานจะช่วยแนะนำรูปแบบทริป
              ที่เหมาะกับคุณก่อนเริ่มออกแบบเส้นทางอย่างละเอียด
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              href="/contact"
              className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
            >
              เริ่มปรึกษาทริปส่วนตัว
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
