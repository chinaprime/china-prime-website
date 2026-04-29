import Link from "next/link";

const itineraries = [
  {
    eyebrow: "Shanghai Family Luxury 4D3N",
    title: "เซี่ยงไฮ้สำหรับครอบครัวที่ต้องการความสะดวกสบาย",
    tags: ["Family", "City", "Luxury"],
    summary:
      "เส้นทางเมืองทันสมัยที่ผสมผสานวิว The Bund ช้อปปิ้ง คาเฟ่ ร้านอาหารดี และกิจกรรมที่เหมาะกับทั้งเด็กและผู้ใหญ่",
    days: [
      "Day 1: รับสนามบิน เช็กอินโรงแรม เดินเล่น The Bund แบบไม่เร่งรีบ",
      "Day 2: เลือก Disneyland หรือเส้นทาง city lifestyle ตามสไตล์ครอบครัว",
      "Day 3: ช้อปปิ้ง คาเฟ่ ร้านอาหาร และจุดถ่ายภาพเมืองยอดนิยม",
      "Day 4: พักผ่อนก่อนส่งสนามบิน หรือเพิ่มกิจกรรมช่วงเช้า",
    ],
  },
  {
    eyebrow: "Beijing Heritage Private Journey 5D4N",
    title: "ปักกิ่งสายวัฒนธรรมพร้อมไกด์ส่วนตัว",
    tags: ["Culture", "Private Guide", "Heritage"],
    summary:
      "สัมผัสเสน่ห์ประวัติศาสตร์จีนแบบไม่เร่งรีบ พร้อมรถรับส่ง ไกด์ดูแล และการจัดเส้นทางที่เหมาะกับผู้เดินทางทุกวัย",
    days: [
      "Day 1: รับสนามบิน เช็กอิน และเดินเล่นย่านเมืองเก่าตามเวลาเดินทาง",
      "Day 2: พระราชวังต้องห้าม จัตุรัสเทียนอันเหมิน และย่านวัฒนธรรม",
      "Day 3: กำแพงเมืองจีนแบบ private route พร้อมรถส่วนตัว",
      "Day 4: พระราชวังฤดูร้อน หรือกิจกรรมครอบครัวตามความสนใจ",
      "Day 5: พักผ่อน ซื้อของฝาก และส่งสนามบิน",
    ],
  },
  {
    eyebrow: "Chengdu Panda & Lifestyle Escape 5D4N",
    title: "เฉิงตูแพนด้า อาหาร และไลฟ์สไตล์แบบสบาย",
    tags: ["Panda", "Food", "Family"],
    summary:
      "ทริปเฉิงตูที่รวมแพนด้า อาหารท้องถิ่น วัฒนธรรมเมือง และธรรมชาติรอบเมือง เหมาะกับครอบครัวและกลุ่มส่วนตัว",
    days: [
      "Day 1: รับสนามบิน เช็กอิน และเดินเล่นย่านไท่กู่หลี่หรือถนนคนเดิน",
      "Day 2: ศูนย์อนุรักษ์แพนด้า ร้านอาหารเสฉวน และคาเฟ่เมืองเฉิงตู",
      "Day 3: เลือก Leshan Giant Buddha หรือเส้นทางธรรมชาติรอบเมือง",
      "Day 4: วัฒนธรรมท้องถิ่น ช้อปปิ้ง และมื้อพิเศษตามสไตล์ลูกค้า",
      "Day 5: พักผ่อนก่อนส่งสนามบิน",
    ],
  },
  {
    eyebrow: "Zhangjiajie Scenic Private Route 5D4N",
    title: "จางเจียเจี้ยเส้นทางธรรมชาติแบบ Private Tour",
    tags: ["Nature", "Scenic", "Private Tour"],
    summary:
      "เส้นทางธรรมชาติสุดอลังการที่ต้องวางแผนอย่างละเอียด เพื่อให้ชมวิวสวย ลดความเหนื่อย และเดินทางได้สะดวกที่สุด",
    days: [
      "Day 1: รับสนามบินหรือสถานีรถไฟ เช็กอิน และพักผ่อน",
      "Day 2: Zhangjiajie National Forest Park พร้อมจัดลำดับจุดชมวิวอย่างเหมาะสม",
      "Day 3: Tianmen Mountain และเส้นทางชมวิวสำคัญแบบไม่เร่งรีบ",
      "Day 4: Glass Bridge หรือเส้นทางธรรมชาติอื่นตามความเหมาะสม",
      "Day 5: พักผ่อนและส่งสนามบินหรือสถานีรถไฟ",
    ],
  },
];

export default function SampleItinerariesPage() {
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
            Curated Sample Itineraries
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            ตัวอย่างเส้นทางจีนที่ออกแบบอย่างพิถีพิถัน
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            เลือกชมไอเดียทริปจีนยอดนิยมสำหรับครอบครัว กลุ่มส่วนตัว และลูกค้าที่ต้องการความสะดวกสบายเหนือระดับ
            ทุกเส้นทางสามารถปรับตามจำนวนวัน เมืองที่สนใจ และสไตล์การเดินทางของคุณ
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Private Route Ideas
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#071a33] md:text-4xl">
            แพลนตัวอย่างสำหรับเริ่มออกแบบทริปส่วนตัว
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            ตัวอย่างเหล่านี้เป็นโครงเส้นทางเบื้องต้น ทีมงานสามารถปรับโรงแรม รถ ไกด์ ร้านอาหาร และกิจกรรมให้เหมาะกับคุณได้
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {itineraries.map((trip) => (
            <div
              key={trip.title}
              className="group overflow-hidden rounded-[24px] border border-amber-900/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.28),transparent_34%),linear-gradient(135deg,#071a33,#0f172a)] p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                  {trip.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">{trip.title}</h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {trip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-300/30 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-slate-600">{trip.summary}</p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold text-[#071a33]">ตัวอย่างลำดับการเดินทาง</p>
                  <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {trip.days.map((day) => (
                      <li key={day} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                        <span>{day}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
                  >
                    ขอปรับแพลนนี้
                  </Link>
                  <Link
                    href="/private-tours"
                    className="inline-flex rounded-sm border border-slate-300 px-6 py-3 text-sm font-bold text-[#071a33] transition hover:border-amber-600 hover:text-amber-700"
                  >
                    ดูรูปแบบทริปส่วนตัว
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-amber-300/20 bg-white/[0.06] p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Tailor Your Journey
          </p>
          <h2 className="mt-4 text-4xl font-bold">ทุกแพลนสามารถปรับให้เหมาะกับคุณได้</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            แจ้งเมืองที่สนใจ จำนวนวัน จำนวนผู้เดินทาง และระดับความสะดวกที่ต้องการ
            ทีมงานจะช่วยออกแบบเส้นทางใหม่ให้เหมาะกับทริปของคุณโดยเฉพาะ
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
          >
            ปรึกษาเพื่อออกแบบเส้นทาง
          </Link>
        </div>
      </section>
    </main>
  );
}
