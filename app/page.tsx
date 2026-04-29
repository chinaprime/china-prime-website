import Image from "next/image";
import Link from "next/link";

const featuredPrograms = [
  {
    eyebrow: "Shanghai Private Escape",
    title: "เซี่ยงไฮ้ส่วนตัวสำหรับสายพรีเมียม",
    duration: "4 วัน 3 คืน",
    highlight: "เมืองทันสมัย · วิวริมแม่น้ำ · โรงแรมทำเลดี",
    description:
      "เส้นทางที่ออกแบบให้สัมผัสเซี่ยงไฮ้อย่างมีระดับ ทั้งวิว The Bund ย่านช้อปปิ้ง ร้านอาหาร และการเดินทางด้วยรถส่วนตัว",
  },
  {
    eyebrow: "Beijing Heritage Private Tour",
    title: "ปักกิ่งสายวัฒนธรรมสำหรับครอบครัว",
    duration: "5 วัน 4 คืน",
    highlight: "กำแพงเมืองจีน · พระราชวังต้องห้าม · ไกด์ดูแลส่วนตัว",
    description:
      "เหมาะกับลูกค้าที่ต้องการสัมผัสประวัติศาสตร์จีนอย่างลึกซึ้ง โดยจัดจังหวะทริปให้สบายและเหมาะกับทุกวัย",
  },
  {
    eyebrow: "Hangzhou Premium Retreat",
    title: "หางโจวพักผ่อนหรูใกล้ธรรมชาติ",
    duration: "3 วัน 2 คืน",
    highlight: "ทะเลสาบซีหู · เมืองเก่า · จังหวะทริปไม่เร่งรีบ",
    description:
      "เส้นทางพักผ่อนสำหรับลูกค้าที่ต้องการความสงบ วิวสวย โรงแรมดี และประสบการณ์จีนที่ละเมียดกว่าทริปทั่วไป",
  },
  {
    eyebrow: "Xinjiang Grand Scenic Journey",
    title: "ซินเจียงเส้นทางธรรมชาติระดับพิเศษ",
    duration: "8 วัน 7 คืน",
    highlight: "ภูเขา · ทะเลสาบ · ทุ่งหญ้า · Private Route",
    description:
      "ทริปธรรมชาติขนาดใหญ่สำหรับลูกค้าที่ต้องการประสบการณ์แตกต่าง พร้อมวางเส้นทางให้เหมาะกับฤดูกาลและสภาพการเดินทางจริง",
  },
];

const privateServices = [
  {
    title: "รถส่วนตัวและคนขับดูแลเส้นทาง",
    text: "จัดรถส่วนตัวตามจำนวนผู้เดินทาง พร้อมวางเวลาให้เหมาะกับจังหวะของแต่ละวัน",
  },
  {
    title: "ไกด์และทีมประสานงานไทย-จีน",
    text: "ช่วยสื่อสาร จัดการรายละเอียดหน้างาน และดูแลความเรียบร้อยตลอดทริป",
  },
  {
    title: "ออกแบบโรงแรมและทำเลเข้าพัก",
    text: "แนะนำโซนที่พักให้เหมาะกับเส้นทาง ความสะดวก และภาพลักษณ์ของทริป",
  },
  {
    title: "ดูแลครอบครัว เด็ก และผู้สูงอายุ",
    text: "จัดจังหวะการเดินทางให้ไม่เร่งรีบ ลดความเหนื่อย และเพิ่มความสบายระหว่างทริป",
  },
  {
    title: "Concierge Support ก่อนและระหว่างเดินทาง",
    text: "ทีมงานช่วยติดตามรายละเอียดสำคัญ ตั้งแต่ก่อนออกเดินทางจนจบทริป",
  },
];

const processSteps = [
  {
    step: "01",
    title: "ปรึกษาความต้องการ",
    text: "แจ้งเมืองที่อยากไป จำนวนผู้เดินทาง ช่วงเวลา งบประมาณ และสไตล์ทริปที่ต้องการ",
  },
  {
    step: "02",
    title: "ออกแบบเส้นทางเฉพาะคุณ",
    text: "ทีมงานจัดแผนการเดินทาง โรงแรม รถ ไกด์ และกิจกรรมให้เหมาะกับกลุ่มของคุณ",
  },
  {
    step: "03",
    title: "ปรับรายละเอียดก่อนยืนยัน",
    text: "สามารถปรับเส้นทาง โรงแรม หรือกิจกรรมได้จนกว่าจะเหมาะกับความต้องการ",
  },
  {
    step: "04",
    title: "เดินทางพร้อมทีมดูแล",
    text: "ระหว่างทริปมีทีมงานช่วยประสานงาน เพื่อให้การเดินทางราบรื่นและสบายใจ",
  },
];

const reviews = [
  {
    quote:
      "เดินทางกับครอบครัวมีเด็กและผู้สูงอายุ ทีมงานจัดแผนให้ไม่เหนื่อยเกินไป รถสะดวก ไกด์ดูแลดีมาก ทุกอย่างเป็นระบบและสบายใจค่ะ",
    name: "คุณณัฐธิดา",
    trip: "Shanghai Family Trip",
  },
  {
    quote:
      "ชอบตรงที่ปรับแผนได้ตามความต้องการ ไม่ใช่ทัวร์ที่ต้องตามคนอื่นตลอด ทีมงานตอบไวและช่วยจัดรายละเอียดให้ครบ",
    name: "คุณพงศกร",
    trip: "Beijing Private Journey",
  },
  {
    quote:
      "ทริปเฉิงตูประทับใจมาก เด็ก ๆ ชอบแพนด้า ผู้ใหญ่ก็ไม่เหนื่อย เพราะจัดเวลาเดินทางดี มีคนดูแลตลอด",
    name: "คุณศิริพร",
    trip: "Chengdu Family Trip",
  },
];

const searchFields = [
  "เมืองหรือเส้นทางที่สนใจ",
  "สไตล์การเดินทาง",
  "ช่วงเวลาเดินทาง",
  "จำนวนผู้ร่วมเดินทาง",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071a33] text-white">
      <section className="relative overflow-hidden bg-[#071a33]">
        <Image
          src="/images/hero-china-prime.jpg"
          alt="China Prime private luxury China travel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,0.98),rgba(7,26,51,0.82)_46%,rgba(7,26,51,0.28)),linear-gradient(180deg,rgba(7,26,51,0.12),rgba(7,26,51,0.96))]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_40%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#071a33] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-4xl border-l border-amber-300/60 pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Luxury China Private Tour
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl">
              ทริปจีนระดับพรีเมียม
              <br />
              ที่ออกแบบเฉพาะคุณ
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Private Tour สำหรับลูกค้าคนไทย พร้อมรถส่วนตัว ไกด์ภาษาไทย/จีน
              และทีมดูแลครบตั้งแต่การวางแผนจนจบทริป
              ทุกเส้นทางถูกออกแบบให้เหมาะกับจังหวะการเดินทางของคุณ
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-7 py-3 text-sm font-bold text-slate-950 shadow-xl hover:from-amber-200 hover:to-amber-500"
              >
                ปรึกษาทริปส่วนตัว
              </Link>
              <Link
                href="/sample-itineraries"
                className="rounded-sm border border-white/30 px-7 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                ดูตัวอย่างทริประดับพรีเมียม
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300">
              ดูแลทริปจีนแบบส่วนตัวสำหรับครอบครัวและกรุ๊ประดับพรีเมียม
              ด้วยทีมประสานงานไทย-จีนและการออกแบบเส้นทางแบบ Tailor-made
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-[#071a33]/90 p-4 shadow-2xl backdrop-blur md:p-5">
            <div className="grid gap-3 md:grid-cols-[repeat(4,1fr)_auto]">
              {searchFields.map((field) => (
                <div key={field} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs font-semibold text-amber-300">{field}</p>
                  <p className="mt-2 text-sm text-slate-300">ระบุ{field}</p>
                </div>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-4 text-sm font-bold text-slate-950 hover:from-amber-200 hover:to-amber-500"
              >
                ออกแบบแผนทริป
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Why China Prime
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              การดูแลที่ออกแบบมาเพื่อทริปจีนแบบ Private / Luxury Tour
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              เราให้ความสำคัญกับรายละเอียด ความยืดหยุ่น และจังหวะการเดินทางที่เหมาะกับลูกค้าแต่ละกลุ่ม
              เพื่อให้ทุกทริปแตกต่างจากการเดินทางแบบทั่วไป
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "ทริปออกแบบเฉพาะคุณ",
                subtitle: "Tailor-made Experience",
                text: "วางแผนเส้นทาง กิจกรรม และจังหวะการเดินทางให้ตรงกับไลฟ์สไตล์ของคุณโดยเฉพาะ",
                iconPath: "M12 3l7 4v6c0 5-3.5 8-7 8s-7-3-7-8V7l7-4z",
              },
              {
                title: "ทีมดูแลส่วนตัวตลอดทริป",
                subtitle: "Private Concierge Service",
                text: "มีทีมงานและไกด์ภาษาไทยดูแลตั้งแต่ก่อนเดินทาง ระหว่างทริป จนจบการเดินทาง",
                iconPath: "M5 11a7 7 0 0114 0v3a3 3 0 01-3 3h-1m-6 0H8a3 3 0 01-3-3v-3z",
              },
              {
                title: "ยืดหยุ่น ปรับแผนได้จริง",
                subtitle: "Flexible Private Journey",
                text: "ปรับเปลี่ยนแผนตามสถานการณ์จริง เพื่อให้ทุกช่วงเวลาสะดวกและราบรื่นที่สุด",
                iconPath: "M4 7h11l-3-3m3 3l-3 3M20 17H9l3 3m-3-3l3-3",
              },
              {
                title: "เหมาะสำหรับครอบครัวและลูกค้าพรีเมียม",
                subtitle: "Premium Family Travel",
                text: "วางแผนแบบไม่เร่งรีบ รองรับทั้งเด็ก ผู้สูงอายุ และกลุ่มเดินทางส่วนตัว",
                iconPath: "M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 12c1.657 0 3-1.343 3-3S9.657 6 8 6 5 7.343 5 9s1.343 3 3 3zM3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3.5 2.5-6 5-6s5 2.5 5 6",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[22px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-white/[0.09]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-300 transition duration-300 group-hover:border-amber-300 group-hover:text-amber-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-amber-200">{item.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-6 py-20 text-[#1f2933] lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="group overflow-hidden rounded-[28px] border border-amber-900/10 bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/50">
            <div className="min-h-[520px] rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.32),transparent_34%),linear-gradient(135deg,#071a33,#334155_48%,#c9a45c)]" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Meet Your China Travel Designer
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#071a33] md:text-5xl">
              ดูแลโดยทีมที่เข้าใจจีน
              <br />
              และเข้าใจลูกค้าคนไทย
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              China Prime ช่วยออกแบบทริปจีนแบบส่วนตัวสำหรับลูกค้าคนไทย
              โดยเน้นความสะดวก ความปลอดภัย และจังหวะการเดินทางที่เหมาะกับแต่ละครอบครัว
              ตั้งแต่การเลือกเมือง วางเส้นทาง จัดรถ ไกด์ โรงแรม
              ไปจนถึงการประสานงานระหว่างทริป
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "เข้าใจการเดินทางในจีนและความต้องการของลูกค้าคนไทย",
                "วางแผนทริปแบบ Tailor-made ไม่ใช่แพ็กเกจสำเร็จรูป",
                "ดูแลรายละเอียดก่อนเดินทางและระหว่างทริปอย่างเป็นระบบ",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
            >
              ปรึกษาทริปกับทีม China Prime
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#071a33] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Curated Private Journeys
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold">
                เส้นทางจีนที่คัดสรรสำหรับลูกค้าระดับพรีเมียม
              </h2>
            </div>
            <Link
              href="/sample-itineraries"
              className="rounded-sm border border-amber-300/60 px-5 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-slate-950"
            >
              ดูโปรแกรมทั้งหมด →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredPrograms.map((program, index) => (
              <div
                key={program.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-1 hover:border-amber-300/50"
              >
                <div className="h-48 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.42),transparent_30%),linear-gradient(135deg,#0f172a,#334155_45%,#b45309)] p-5">
                  <p className="text-sm font-semibold text-amber-200">0{index + 1}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                    {program.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-white">{program.title}</h3>
                  <p className="mt-3 text-sm text-amber-200">{program.duration}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{program.highlight}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{program.description}</p>
                  <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-amber-300">
                    ขอออกแบบเส้นทางนี้ →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Luxury Experience
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold">
            ประสบการณ์เดินทางที่เหนือกว่าทัวร์ทั่วไป
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            เราให้ความสำคัญกับทุกรายละเอียด ตั้งแต่รถรับส่ง ไกด์ส่วนตัว โรงแรม ร้านอาหาร
            ไปจนถึงจังหวะการเดินทาง เพื่อให้ทริปของคุณสะดวกและพิเศษที่สุด
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {privateServices.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="mb-5 h-32 rounded-xl bg-gradient-to-br from-[#071a33] via-slate-500 to-amber-300" />
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#071a33]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/private-tours"
              className="inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-7 py-3 text-sm font-bold text-slate-950 hover:from-amber-200 hover:to-amber-500"
            >
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-bold">เริ่มต้นออกแบบทริปส่วนตัวได้ง่าย ๆ</h2>
            <p className="mt-5 leading-8 text-slate-600">
              เพียงบอกความต้องการของคุณ ทีมงานจะช่วยออกแบบเส้นทางและดูแลรายละเอียดให้ครบทุกขั้นตอน
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="group relative rounded-[22px] border border-slate-200 bg-slate-50 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-white"
              >
                <p className="text-4xl font-bold text-amber-500/80">{item.step}</p>
                <h3 className="mt-5 text-xl font-bold text-[#071a33]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
            >
              เริ่มปรึกษาทริปส่วนตัว
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Client Reviews
            </p>
            <h2 className="mt-4 text-4xl font-bold">เสียงจากลูกค้าที่เดินทางกับเรา</h2>
            <p className="mt-5 leading-8 text-slate-300">
              ประสบการณ์จากลูกค้าคนไทยที่เลือกเดินทางจีนแบบส่วนตัว พร้อมทีมงานดูแลตลอดทริป
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[22px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <p className="text-5xl font-bold leading-none text-amber-300">“</p>
                <p className="mt-4 text-sm leading-7 text-slate-200">{review.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="mt-1 text-sm text-amber-200">{review.trip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] border border-amber-300/20 bg-white/[0.06] p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Begin Your China Journey
            </p>
            <h2 className="mt-4 text-4xl font-bold">ให้เราช่วยออกแบบทริปจีนที่เหมาะกับคุณที่สุด</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              บอกความต้องการของคุณ แล้วทีมงานจะช่วยแนะนำเส้นทาง เมืองที่เหมาะสม
              และรูปแบบการเดินทางที่ตรงกับสไตล์ของคุณ
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://line.me/R/ti/p/@chinaprime"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-green-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/20 transition hover:bg-green-400"
              >
                ปรึกษาทริปทาง LINE
              </Link>
              <Link
                href="/sample-itineraries"
                className="rounded-sm border border-white/25 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                ดูตัวอย่างเส้นทาง
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
