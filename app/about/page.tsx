import Link from "next/link";

const strengths = [
  {
    title: "เข้าใจลูกค้าคนไทย",
    text: "เราออกแบบทริปโดยคำนึงถึงสไตล์การเดินทางของคนไทย ทั้งครอบครัว กลุ่มส่วนตัว และลูกค้าที่ต้องการความสะดวกสบายเป็นพิเศษ",
  },
  {
    title: "ประสานงานไทย-จีน",
    text: "ช่วยลดความกังวลเรื่องภาษา การเดินทาง การจอง และรายละเอียดหน้างาน เพื่อให้ทริปจีนราบรื่นขึ้น",
  },
  {
    title: "วางแผนแบบ Tailor-made",
    text: "ทุกเส้นทางสามารถปรับตามจำนวนวัน งบประมาณ สมาชิกในทริป และจังหวะการเดินทางที่เหมาะกับลูกค้าแต่ละกลุ่ม",
  },
  {
    title: "ดูแลครบทุกขั้นตอน",
    text: "ตั้งแต่การเลือกเมือง วางเส้นทาง จัดรถ ไกด์ โรงแรม ร้านอาหาร ไปจนถึงการประสานงานระหว่างเดินทาง",
  },
];

const values = [
  "ไม่ออกแบบทริปให้แน่นเกินไปจนเสียประสบการณ์",
  "ให้ความสำคัญกับความปลอดภัยและความสะดวกของผู้เดินทาง",
  "เลือกบริการให้เหมาะกับระดับความสบายที่ลูกค้าต้องการ",
  "สื่อสารชัดเจน ตรงไปตรงมา และดูแลรายละเอียดอย่างเป็นระบบ",
];

export default function AboutPage() {
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
            About China Prime
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            ทีมออกแบบทริปจีนส่วนตัวสำหรับลูกค้าคนไทย
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            China Prime คือทีมวางแผนและประสานงานทริปจีนแบบ Private Tour สำหรับลูกค้าที่ต้องการความสะดวก
            ความปลอดภัย และประสบการณ์เดินทางที่ออกแบบเฉพาะตัว ไม่ใช่ทัวร์ทั่วไป
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[28px] bg-[#071a33] p-8 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Our Positioning
          </p>
          <h2 className="mt-4 text-4xl font-bold">Luxury China Private Tour สำหรับคนไทย</h2>
          <p className="mt-5 leading-8 text-slate-300">
            เราไม่ได้เน้นการขายแพ็กเกจสำเร็จรูป แต่ให้ความสำคัญกับการออกแบบประสบการณ์เดินทางให้เหมาะกับลูกค้าแต่ละกลุ่ม
            โดยคำนึงถึงเวลา สมาชิกในทริป ความสะดวก และภาพรวมของการเดินทางจริง
          </p>

          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-white/[0.06] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Service Philosophy
            </p>
            <p className="mt-4 leading-8 text-slate-200">
              ทริปจีนที่ดีไม่ใช่แค่การพาไปครบทุกสถานที่ แต่ต้องเป็นทริปที่เดินทางสบาย มีจังหวะที่เหมาะสม
              และทำให้ลูกค้ารู้สึกมั่นใจตลอดเส้นทาง
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-amber-900/10 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl border border-amber-600/25 bg-amber-50" />
              <h3 className="text-xl font-bold text-[#071a33]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              How We Design Your Journey
            </p>
            <h2 className="mt-4 text-4xl font-bold text-[#071a33]">
              หลักการออกแบบทริปที่เราให้ความสำคัญ
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              เราเชื่อว่าทริปส่วนตัวควรให้ความรู้สึกสบายใจตั้งแต่เริ่มวางแผนจนจบทริป
              ทุกคำแนะนำจึงต้องอิงจากการเดินทางจริงและความเหมาะสมของลูกค้า
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value}
                className="rounded-[22px] border border-slate-200 bg-[#f8f5ef] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <p className="text-3xl font-bold text-amber-600">0{index + 1}</p>
                <p className="mt-5 text-sm leading-7 text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-amber-300/20 bg-white/[0.06] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Start with China Prime
            </p>
            <h2 className="mt-4 text-4xl font-bold">พร้อมออกแบบทริปจีนที่เหมาะกับคุณแล้วหรือยัง?</h2>
            <p className="mt-5 leading-8 text-slate-300">
              แจ้งเมืองที่อยากไป จำนวนวัน จำนวนผู้เดินทาง และสไตล์ที่ต้องการ
              ทีมงานจะช่วยแนะนำแนวทางการเดินทางที่เหมาะกับคุณ
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              href="/contact"
              className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
            >
              ปรึกษาทริปส่วนตัว
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
