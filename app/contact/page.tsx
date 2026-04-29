import Link from "next/link";

const tripTypes = [
  "Family Private Trip",
  "Luxury Custom Trip",
  "Company Trip",
  "Seasonal China Trip",
  "Honeymoon / Couple Trip",
  "Nature & Scenic Route",
];

const planningChecklist = [
  {
    title: "เมืองหรือเส้นทางที่สนใจ",
    text: "เช่น Shanghai, Beijing, Hangzhou, Chengdu, Xinjiang หรือยังไม่แน่ใจให้ทีมช่วยแนะนำ",
  },
  {
    title: "จำนวนวันและช่วงเดินทาง",
    text: "ระบุเดือนที่อยากไป หรือวันที่เดินทางโดยประมาณ เพื่อช่วยวางจังหวะทริปให้เหมาะสม",
  },
  {
    title: "จำนวนผู้เดินทาง",
    text: "แจ้งจำนวนผู้ใหญ่ เด็ก ผู้สูงอายุ หรือข้อจำกัดพิเศษในการเดินทาง",
  },
  {
    title: "สไตล์ทริปที่ต้องการ",
    text: "ครอบครัว พรีเมียม ถ่ายรูป ธรรมชาติ ช้อปปิ้ง องค์กร หรือพักผ่อนแบบไม่เร่งรีบ",
  },
];

const contactChannels = [
  {
    label: "LINE Official",
    value: "@chinaprime",
    text: "ช่องทางที่เหมาะที่สุดสำหรับส่งรายละเอียดทริป รูปตัวอย่าง และสอบถามเบื้องต้น",
  },
  {
    label: "Facebook",
    value: "China Prime",
    text: "ติดตามไอเดียเส้นทาง รีวิว และอัปเดตเมืองท่องเที่ยวจีนสำหรับลูกค้าคนไทย",
  },
  {
    label: "Email",
    value: "contact@chinaprime.net",
    text: "เหมาะสำหรับลูกค้าองค์กร กรุ๊ปส่วนตัว หรือการขอรายละเอียดอย่างเป็นทางการ",
  },
];

export default function ContactPage() {
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
            Plan Your Private China Journey
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            เริ่มออกแบบทริปจีนส่วนตัวกับ China Prime
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            แจ้งข้อมูลเบื้องต้นของทริป เช่น เมืองที่สนใจ จำนวนวัน จำนวนผู้เดินทาง
            และสไตล์การเดินทาง ทีมงานจะช่วยประเมินเส้นทางและแนะนำแพลนที่เหมาะกับคุณ
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[28px] bg-[#071a33] p-8 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Before We Start
            </p>

            <h2 className="mt-4 text-3xl font-bold">ข้อมูลที่ช่วยให้เราวางแพลนได้แม่นขึ้น</h2>

            <div className="mt-8 space-y-6 text-slate-200">
              {planningChecklist.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/50 text-sm font-bold text-amber-300">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-amber-900/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Direct Contact
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#071a33]">ช่องทางติดต่อทีมงาน</h2>
            <div className="mt-6 grid gap-4">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="rounded-2xl bg-[#f8f5ef] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {channel.label}
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#071a33]">{channel.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{channel.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-amber-900/10 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.07)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Trip Request Form
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#071a33]">ขอแพลนทริปส่วนตัว</h2>
          <p className="mt-3 leading-7 text-slate-600">
            กรอกข้อมูลเบื้องต้นไว้ก่อน ทีมงานจะใช้ข้อมูลนี้เพื่อประเมินเส้นทางและแนะนำแพลนที่เหมาะสม
            สำหรับทริปจีนแบบ Private / Tailor-made
          </p>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">ชื่อผู้ติดต่อ</span>
                <input
                  type="text"
                  placeholder="เช่น คุณกฤษณพล"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">เบอร์ / LINE</span>
                <input
                  type="text"
                  placeholder="ใส่เบอร์หรือ LINE ID"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">เมืองที่สนใจ</span>
                <input
                  type="text"
                  placeholder="เช่น Shanghai, Beijing, Hangzhou"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">ช่วงเดือนเดินทาง</span>
                <input
                  type="text"
                  placeholder="เช่น เมษายน 2026"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">จำนวนวัน</span>
                <input
                  type="text"
                  placeholder="เช่น 5 วัน 4 คืน"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">จำนวนผู้เดินทาง</span>
                <input
                  type="text"
                  placeholder="เช่น ผู้ใหญ่ 4 เด็ก 2"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">ประเภททริป</span>
              <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100">
                {tripTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">รายละเอียดเพิ่มเติม</span>
              <textarea
                rows={5}
                placeholder="เช่น อยากได้โรงแรม 5 ดาว มีผู้สูงอายุ อยากเที่ยวแบบไม่เร่งรีบ"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              />
            </label>

            <div className="rounded-2xl border border-amber-700/20 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
              เมื่อคุณส่งข้อมูล ทีมงานจะนำรายละเอียดไปประเมินเส้นทางและติดต่อกลับเพื่อแนะนำแพลนที่เหมาะสม
              ขั้นถัดไปสามารถเชื่อมฟอร์มนี้เข้ากับ Google Sheet หรือ CRM ได้
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
              >
                ส่งข้อมูลขอแพลน
              </button>
              <Link
                href="https://line.me/R/ti/p/@chinaprime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-sm bg-green-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/20 transition hover:bg-green-400"
              >
                คุยทาง LINE แทน
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
