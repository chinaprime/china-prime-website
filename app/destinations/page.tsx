import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site-config";

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
    <main className="min-h-screen bg-[#f4efe7] text-[#13283d]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/great-wall-home.jpg"
            alt="จุดหมายปลายทางในจีน"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,47,0.94),rgba(16,59,99,0.76)_42%,rgba(16,59,99,0.24)_76%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,161,108,0.24),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-14">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-sm transition hover:bg-white/14">
              <span>←</span>
              กลับหน้าแรก
            </Link>
            <div className="mt-6 inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf] backdrop-blur-sm">
              Curated China Destinations
            </div>
            <h1 className="ui-display mt-4 max-w-[12ch] sm:max-w-4xl">
              จุดหมายปลายทางจีน
              <br />
              สำหรับทริปส่วนตัวระดับพรีเมียม
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-white/88 md:text-[1.08rem]">
              เลือกเมืองตามสไตล์การเดินทางของคุณ ไม่ว่าจะเป็นครอบครัว วัฒนธรรม ธรรมชาติ เมืองทันสมัย หรือเส้นทางพิเศษที่ต้องการการออกแบบอย่างละเอียด
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section py-10 lg:py-12">
        <div className="max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8f7348]">Private Route Inspiration</p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.05em] text-[#13283d] md:text-[2.6rem]">
            เมืองยอดนิยมที่สามารถออกแบบให้เหมาะกับคุณ
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#607086] md:text-base">
            แต่ละเมืองมีจังหวะการเดินทางและเสน่ห์ต่างกัน ทีมงานจะช่วยเลือกเส้นทาง โรงแรม รถ และกิจกรรมให้เหมาะกับสมาชิกในทริปของคุณ
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <article key={city.name} className="ui-card overflow-hidden">
              <div className={`h-44 p-5 ${index % 3 === 0 ? "bg-[radial-gradient(circle_at_top,rgba(195,161,108,0.3),transparent_30%),linear-gradient(135deg,#081a2f,#214768_48%,#7bc3d4)]" : index % 3 === 1 ? "bg-[radial-gradient(circle_at_top,rgba(195,161,108,0.24),transparent_30%),linear-gradient(135deg,#081a2f,#184f84_48%,#c3a16c)]" : "bg-[radial-gradient(circle_at_top,rgba(123,195,212,0.25),transparent_30%),linear-gradient(135deg,#081a2f,#34536f_48%,#9aa8b8)]"}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{city.name}</p>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#8f7348]">{city.name}</p>
                <h2 className="mt-2 text-[1.8rem] font-bold tracking-[-0.04em] text-[#13283d]">{city.thaiName}</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {city.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[rgba(195,161,108,0.28)] bg-[#fbf6ed] px-3 py-1 text-xs font-semibold text-[#8f7348]">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-[#607086]">{city.description}</p>
                <p className="mt-4 rounded-[20px] bg-[#f5efe5] p-4 text-sm leading-6 text-[#516275]">
                  {city.suitableFor}
                </p>

                <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#103b63] transition hover:text-[#8f7348]">
                  ขอแพลนเมืองนี้ →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="ui-panel-accent mt-10 grid gap-4 p-6 sm:p-7 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f3ddbf]">Need Help Choosing?</p>
            <h3 className="mt-3 text-[1.8rem] font-bold tracking-[-0.05em] md:text-[2.3rem]">ยังไม่แน่ใจว่าจะเริ่มเมืองไหนดี?</h3>
            <p className="mt-3 text-sm leading-8 text-white/84 md:text-base">
              บอกงบ จำนวนวัน และสไตล์ที่ชอบ แล้วทีมงานจะช่วยคัดเมืองและเส้นทางที่เหมาะที่สุดให้
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/contact" className="ui-button ui-button-secondary inline-flex min-h-11 items-center justify-center px-5">
              ขอคำแนะนำทริป
            </Link>
            <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
              คุยทาง LINE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
