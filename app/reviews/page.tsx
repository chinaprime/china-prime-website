import Link from "next/link";

const reviews = [
  {
    quote:
      "เดินทางกับครอบครัวมีเด็กและผู้สูงอายุ ทีมงานจัดแผนให้ไม่เหนื่อยเกินไป รถสะดวก ไกด์ดูแลดีมาก ทุกอย่างเป็นระบบและสบายใจค่ะ",
    name: "คุณณัฐธิดา",
    trip: "Shanghai Family Trip",
    tags: ["Family", "Private Car", "Thai Guide"],
  },
  {
    quote:
      "ชอบตรงที่ปรับแผนได้ตามความต้องการ ไม่ใช่ทัวร์ที่ต้องตามคนอื่นตลอด ทีมงานตอบไวและช่วยจัดรายละเอียดให้ครบ",
    name: "คุณพงศกร",
    trip: "Beijing Private Journey",
    tags: ["Culture", "Flexible Plan", "Private Tour"],
  },
  {
    quote:
      "ทริปเฉิงตูประทับใจมาก เด็ก ๆ ชอบแพนด้า ผู้ใหญ่ก็ไม่เหนื่อย เพราะจัดเวลาเดินทางดี มีคนดูแลตลอด",
    name: "คุณศิริพร",
    trip: "Chengdu Family Trip",
    tags: ["Panda", "Family", "Comfort"],
  },
  {
    quote:
      "ประทับใจการประสานงานมาก ทีมช่วยแนะนำโรงแรม เส้นทาง และร้านอาหารให้เหมาะกับสไตล์ของเรา ทำให้ทริปดูพิเศษกว่าที่คิด",
    name: "คุณอรพรรณ",
    trip: "Hangzhou Premium Retreat",
    tags: ["Premium", "Hotel", "Retreat"],
  },
  {
    quote:
      "ไปจางเจียเจี้ยแบบส่วนตัวแล้วรู้สึกคุ้มค่ามาก เพราะทีมช่วยจัดเวลาเดินทางและจุดพักได้ดี ไม่เหนื่อยเกินไปแต่ได้เห็นวิวครบ",
    name: "คุณธนกฤต",
    trip: "Zhangjiajie Scenic Journey",
    tags: ["Nature", "Scenic", "Private Route"],
  },
  {
    quote:
      "เป็นทริปจีนที่สบายใจที่สุดตั้งแต่เคยเดินทางมา มีทีมช่วยดูแลเรื่องภาษา การเดินทาง และรายละเอียดเล็ก ๆ ทำให้ทั้งครอบครัวเดินทางง่ายขึ้นมาก",
    name: "คุณมณีรัตน์",
    trip: "Private China Journey",
    tags: ["Concierge", "Family", "Luxury"],
  },
];

export default function ReviewsPage() {
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
            Client Reviews
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            เสียงจากลูกค้าที่เดินทางกับ China Prime
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            ประสบการณ์จากลูกค้าคนไทยที่เลือกเดินทางจีนแบบส่วนตัว พร้อมทีมงานช่วยดูแลรายละเอียด
            ตั้งแต่การวางแผน เส้นทาง รถ ไกด์ ไปจนถึงการประสานงานระหว่างทริป
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Trusted Private Journeys
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#071a33] md:text-4xl">
            ความประทับใจจากทริปจีนแบบส่วนตัว
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            รีวิวเหล่านี้สะท้อนสิ่งที่เราให้ความสำคัญที่สุด คือความสะดวก ความปลอดภัย
            ความยืดหยุ่น และการดูแลที่เหมาะกับลูกค้าแต่ละกลุ่ม
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group rounded-[24px] border border-amber-900/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <p className="text-6xl font-bold leading-none text-amber-500/80">“</p>
              <p className="mt-4 leading-8 text-slate-700">{review.quote}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-700/20 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <p className="font-bold text-[#071a33]">{review.name}</p>
                <p className="mt-1 text-sm font-semibold text-amber-700">{review.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-amber-300/20 bg-white/[0.06] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Begin Your Private China Journey
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              ให้เราช่วยออกแบบทริปจีนที่เหมาะกับคุณที่สุด
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              บอกความต้องการของคุณ แล้วทีมงานจะช่วยแนะนำเส้นทาง เมืองที่เหมาะสม
              และรูปแบบการเดินทางที่ตรงกับสไตล์ของคุณ
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 md:items-end">
            <Link
              href="https://line.me/R/ti/p/@chinaprime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-sm bg-green-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/20 transition hover:bg-green-400"
            >
              ปรึกษาทริปทาง LINE
            </Link>
            <Link
              href="/sample-itineraries"
              className="inline-flex justify-center rounded-sm border border-white/25 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              ดูตัวอย่างเส้นทาง
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
