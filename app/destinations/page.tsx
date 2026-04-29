import Link from "next/link";

const destinations = [
  {
    name: "Shanghai",
    thaiName: "เซี่ยงไฮ้",
    tags: ["Family", "City", "Luxury"],
    description:
      "เมืองทันสมัยสำหรับลูกค้าที่ต้องการความสะดวกสบาย วิวเมืองระดับโลก ร้านอาหารดี ช้อปปิ้ง และโรงแรมทำเลพรีเมียม",
    suitableFor: "เหมาะกับครอบครัว คู่รัก และลูกค้าที่ต้องการทริปเมืองแบบมีระดับ",
  },
  {
    name: "Beijing",
    thaiName: "ปักกิ่ง",
    tags: ["Culture", "Heritage", "Private Guide"],
    description:
      "เส้นทางประวัติศาสตร์จีนที่จัดให้เดินทางแบบไม่เร่งรีบ พร้อมไกด์ดูแลส่วนตัวและรถรับส่งที่เหมาะกับทุกวัย",
    suitableFor: "เหมาะกับครอบครัว ผู้ใหญ่ และลูกค้าที่อยากสัมผัสวัฒนธรรมจีนแท้",
  },
  {
    name: "Hangzhou",
    thaiName: "หางโจว",
    tags: ["Retreat", "Nature", "Premium"],
    description:
      "เมืองธรรมชาติและวัฒนธรรมที่ให้บรรยากาศสงบ สวยงาม และพรีเมียม เหมาะกับทริปพักผ่อนที่ไม่ต้องเร่งรีบ",
    suitableFor: "เหมาะกับลูกค้าที่ต้องการความผ่อนคลาย โรงแรมดี และวิวทะเลสาบซีหู",
  },
  {
    name: "Chengdu",
    thaiName: "เฉิงตู",
    tags: ["Panda", "Food", "Family"],
    description:
      "เมืองแพนด้า อาหารเสฉวน และวัฒนธรรมท้องถิ่นที่เดินทางง่าย เหมาะกับครอบครัวและลูกค้าที่ต้องการทริปสบาย ๆ",
    suitableFor: "เหมาะกับครอบครัว เด็ก และลูกค้าที่ชอบอาหาร วัฒนธรรม และธรรมชาติรอบเมือง",
  },
  {
    name: "Shenzhen",
    thaiName: "เซินเจิ้น",
    tags: ["Modern", "Family", "Business"],
    description:
      "เมืองทันสมัยที่เหมาะกับทริปสั้น ทริปครอบครัว หรือการเดินทางเชื่อมต่อฮ่องกง พร้อมบริการรถส่วนตัว",
    suitableFor: "เหมาะกับลูกค้าธุรกิจ ครอบครัว และผู้ที่ต้องการเมืองทันสมัยเดินทางสะดวก",
  },
  {
    name: "Harbin",
    thaiName: "ฮาร์บิน",
    tags: ["Winter", "Festival", "Scenic"],
    description:
      "เมืองฤดูหนาวที่โดดเด่นด้วยเทศกาลน้ำแข็ง บรรยากาศยุโรปในจีน และประสบการณ์ที่แตกต่างจากเมืองจีนทั่วไป",
    suitableFor: "เหมาะกับลูกค้าที่อยากสัมผัสหิมะ เทศกาลฤดูหนาว และภาพถ่ายสวยระดับพรีเมียม",
  },
  {
    name: "Zhangjiajie",
    thaiName: "จางเจียเจี้ย",
    tags: ["Nature", "Scenic", "Private Tour"],
    description:
      "เส้นทางภูเขาและธรรมชาติอลังการที่ควรวางแผนอย่างละเอียด เพื่อให้ชมวิวได้สวยและเดินทางได้สบายที่สุด",
    suitableFor: "เหมาะกับสายวิว ถ่ายภาพ และลูกค้าที่ต้องการธรรมชาติแบบสะดวกไม่เหนื่อยเกินไป",
  },
  {
    name: "Xinjiang",
    thaiName: "ซินเจียง",
    tags: ["Grand Nature", "Private Route", "Luxury"],
    description:
      "เส้นทางธรรมชาติขนาดใหญ่ที่ต้องอาศัยการวางแผนเฉพาะ ทั้งฤดูกาล ระยะทาง โรงแรม และจังหวะการเดินทาง",
    suitableFor: "เหมาะกับลูกค้าที่ต้องการทริปพิเศษ วิวธรรมชาติยิ่งใหญ่ และประสบการณ์จีนที่แตกต่าง",
  },
];

export default function DestinationsPage() {
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
            Curated China Destinations
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            จุดหมายปลายทางจีนสำหรับทริปส่วนตัวระดับพรีเมียม
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            เลือกเมืองตามสไตล์การเดินทางของคุณ ไม่ว่าจะเป็นครอบครัว วัฒนธรรม ธรรมชาติ
            เมืองทันสมัย หรือเส้นทางพิเศษที่ต้องการการออกแบบอย่างละเอียด
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Private Route Inspiration
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#071a33] md:text-4xl">
            เมืองยอดนิยมที่สามารถออกแบบให้เหมาะกับคุณ
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            แต่ละเมืองมีจังหวะการเดินทางและเสน่ห์ต่างกัน ทีมงานจะช่วยเลือกเส้นทาง โรงแรม รถ และกิจกรรม
            ให้เหมาะกับสมาชิกในทริปของคุณ
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden rounded-[24px] border border-amber-900/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="h-44 bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.36),transparent_32%),linear-gradient(135deg,#071a33,#334155_48%,#c9a45c)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
                  {city.name}
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-amber-700">{city.name}</p>
                <h2 className="mt-2 text-2xl font-bold text-[#071a33]">{city.thaiName}</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {city.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-700/20 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">{city.description}</p>
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {city.suitableFor}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-bold text-[#071a33] transition hover:text-amber-700"
                >
                  ขอแพลนเมืองนี้ →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
