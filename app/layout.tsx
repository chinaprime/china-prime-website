import type { Metadata } from "next";
import Link from "next/link";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-main",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/destinations", label: "จุดหมายปลายทาง" },
  { href: "/private-tours", label: "ทริปส่วนตัว" },
  { href: "/sample-itineraries", label: "ตัวอย่างเส้นทาง" },
  { href: "/reviews", label: "รีวิวลูกค้า" },
];

const footerNavItems = [
  ...navItems,
  { href: "/about", label: "เกี่ยวกับเรา" },
];

const footerDestinations = ["Shanghai", "Beijing", "Chengdu", "Hangzhou", "Zhangjiajie", "Shenzhen"];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/15 bg-[#050f24]/95 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-tight outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
        >
          <span className="text-lg font-bold tracking-[0.18em] text-amber-300 transition group-hover:text-amber-200">
            CHINA PRIME
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
            Private China Tour Designer
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] font-semibold text-slate-200 md:flex lg:gap-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-amber-300">
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-5 py-2.5 text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
          >
            ปรึกษาทริป
          </Link>
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-sm border border-amber-300/30 px-3 py-2 text-xs font-bold text-amber-200 transition hover:border-amber-300 hover:text-amber-100 [&::-webkit-details-marker]:hidden">
            <span>เมนู</span>
            <span className="flex h-4 w-4 flex-col justify-center gap-1">
              <span className="h-0.5 w-4 rounded-full bg-current transition group-open:translate-y-1.5 group-open:rotate-45" />
              <span className="h-0.5 w-4 rounded-full bg-current transition group-open:opacity-0" />
              <span className="h-0.5 w-4 rounded-full bg-current transition group-open:-translate-y-1.5 group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-full mt-4 w-72 overflow-hidden rounded-2xl border border-amber-300/20 bg-[#050f24] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)]">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-600 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
              >
                ปรึกษาทริป
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function FloatingLineButton() {
  return (
    <Link
      href="https://line.me/R/ti/p/@chinaprime"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-sm bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-green-950/30 transition hover:-translate-y-0.5 hover:bg-green-400"
    >
      LINE ปรึกษาทริป
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-amber-300/15 bg-[#050f24] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-[0.18em] text-amber-300">CHINA PRIME</span>
            <span className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              Private China Tour Designer
            </span>
          </Link>
          <p className="mt-6 max-w-md leading-7 text-slate-300">
            บริการออกแบบทริปจีนแบบส่วนตัวสำหรับลูกค้าคนไทย เน้นความสะดวก ความปลอดภัย
            และประสบการณ์เดินทางระดับพรีเมียม
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Explore
          </h3>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            {footerNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-amber-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Destinations
          </h3>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            {footerDestinations.map((destination) => (
              <Link
                key={destination}
                href="/destinations"
                className="transition hover:text-amber-300"
              >
                {destination}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Contact
          </h3>
          <div className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
            <p>LINE: @chinaprime</p>
            <p>Facebook: China Prime</p>
            <p>Email: contact@chinaprime.net</p>
            <p>โทร: ระบุเบอร์โทรของคุณ</p>
            <p>เวลาทำการ: ทุกวัน 09:00–20:00</p>
          </div>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
          >
            วางแผนทริปกับเรา
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} China Prime. All rights reserved.
      </div>
    </footer>
  );
}

export const metadata: Metadata = {
  title: "China Prime | Private China Tour Designer",
  description:
    "บริการวางแผนทริปจีนแบบส่วนตัวสำหรับลูกค้าคนไทย ดูแลรถ ไกด์ โรงแรม และเส้นทางครบทุกขั้นตอน",
  keywords: [
    "China Prime",
    "ทัวร์จีนส่วนตัว",
    "เที่ยวจีน",
    "private china tour",
    "ทริปจีนครอบครัว",
    "จัดทริปจีน",
  ],
  openGraph: {
    title: "China Prime | Private China Tour Designer",
    description:
      "ออกแบบทริปจีนแบบส่วนตัวสำหรับครอบครัวและกรุ๊ปพรีเมียม พร้อมทีมดูแลภาษาไทยและจีน",
    type: "website",
    locale: "th_TH",
    siteName: "China Prime",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-slate-50 font-sans text-slate-900">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingLineButton />
      </body>
    </html>
  );
}
