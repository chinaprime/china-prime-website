import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { footerPolicyItems, siteConfig } from "./site-config";

const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/join-tours", label: "ทัวร์จีน" },
  { href: "/private-tours", label: "ทัวร์ส่วนตัว" },
  { href: "/sample-itineraries", label: "บริการของเรา" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/articles", label: "บทความ" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const topBarChecks = [
  "ผู้เชี่ยวชาญทัวร์จีน",
  "ทัวร์คุณภาพ ดูแลครบทุกการเดินทาง",
  "วางแผนง่าย คุยกับทีมงานได้จริง",
];

const footerMenuItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/join-tours", label: "ทัวร์จีน" },
  { href: "/private-tours", label: "ทัวร์ส่วนตัว" },
  { href: "/sample-itineraries", label: "บริการของเรา" },
  { href: "/#destinations", label: "จุดหมายปลายทาง" },
  { href: "/articles", label: "บทความ" },
  { href: "/reviews", label: "รีวิวลูกค้า" },
];

const footerServiceItems = [
  { href: "/join-tours", label: "ทัวร์จอยกรุ๊ป" },
  { href: "/private-tours", label: "ทัวร์ไพรเวท" },
  { href: "/sample-itineraries", label: "รถพร้อมคนขับ" },
  { href: "/sample-itineraries", label: "ไกด์ / ล่าม" },
  { href: "/contact", label: "ตั๋วเครื่องบิน" },
  { href: "/contact", label: "โรงแรม / วีซ่า" },
];

const footerDestinationItems = [
  { href: "/#destinations", label: "ปักกิ่ง" },
  { href: "/#destinations", label: "เซี่ยงไฮ้" },
  { href: "/#destinations", label: "เฉิงตู" },
  { href: "/#destinations", label: "จางเจียเจี้ย" },
  { href: "/#destinations", label: "กุ้ยหลิน" },
  { href: "/#destinations", label: "ฮาร์บิน" },
];

function CheckMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 12.5 4 4L19 7.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M6.5 4.75h2.25c.44 0 .83.3.93.73l.78 3.38a1 1 0 0 1-.28.94L8.7 11.28a13.05 13.05 0 0 0 4.01 4.01l1.48-1.48a1 1 0 0 1 .94-.28l3.38.78c.43.1.73.49.73.93v2.25c0 .55-.45 1-1 1h-1.5C10.3 18.5 5.5 13.7 5.5 7.25v-1.5c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {["f", "◎", "▶", "♪"].map((item) => (
        <span
          key={item}
          className="ui-badge flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white/95 backdrop-blur-sm transition hover:bg-white/14"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/8 bg-[#081a2f] text-white">
        <div className="ui-label mx-auto hidden h-10 max-w-7xl items-center justify-between px-4 sm:flex lg:px-8">
          <div className="flex items-center gap-5 text-white/82">
            {topBarChecks.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckMiniIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-white/75">
            <span>{siteConfig.weekdayHoursShort}</span>
            <span>{siteConfig.phoneDisplay}</span>
            <span className="uppercase tracking-[0.18em] text-white/55">Social</span>
            <SocialIcons />
            <span>TH</span>
          </div>
        </div>
      </div>

      <div className="border-b border-[rgba(8,26,47,0.08)] bg-[rgba(250,247,242,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-3 px-4 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 max-w-[220px] flex-1 flex-col justify-center leading-tight outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]/45 lg:max-w-none lg:flex-none"
          >
            <span className="text-[1.2rem] font-bold tracking-[-0.05em] text-[#103b63] transition group-hover:text-[#0a395f] sm:text-[1.45rem] lg:text-[1.9rem]">
              CHINA PRIME
            </span>
            <span className="mt-1 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7b6a53] sm:text-[9px] lg:text-[10px] lg:tracking-[0.24em]">
              <span className="inline-block h-1 w-1 rounded-full bg-[#c3a16c]" />
              Curated China Journeys
            </span>
          </Link>

          <nav className="hidden items-center gap-6 rounded-full border border-white/70 bg-white/72 px-5 py-3 text-[14px] font-semibold text-[#334155] shadow-[0_18px_40px_rgba(12,25,43,0.06)] xl:flex">
            {navItems.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="transition hover:text-[#0f4c81]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-start gap-3 rounded-full border border-white/70 bg-white/68 px-4 py-2.5 text-[#0F172A] shadow-[0_14px_34px_rgba(12,25,43,0.05)]">
              <span className="mt-1 text-[#0f4c81]">
                <PhoneIcon />
              </span>
              <div className="leading-tight">
                <p className="text-[1.0625rem] font-bold tracking-[-0.02em] text-[#103b63]">{siteConfig.phoneDisplay}</p>
                <p className="ui-label mt-0.5 text-[#6c7a8d]">{siteConfig.weekdayHoursShort}</p>
              </div>
            </div>

            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-success inline-flex h-11 items-center px-5 transition hover:-translate-y-0.5 hover:bg-[#15724e]"
            >
              LINE
            </Link>
            <Link
              href="/contact"
              className="ui-button ui-button-primary inline-flex h-11 items-center px-5 transition hover:-translate-y-0.5 hover:bg-[#0a395f]"
            >
              ขอใบเสนอราคา
            </Link>
          </div>

          <details className="group relative shrink-0 xl:hidden">
            <summary className="ui-label flex cursor-pointer list-none items-center gap-2 rounded-full border border-[rgba(15,76,129,0.14)] bg-white/72 px-3.5 py-2.5 font-semibold text-[#0f4c81] shadow-[0_14px_28px_rgba(12,25,43,0.06)] [&::-webkit-details-marker]:hidden">
              <span>เมนู</span>
              <span className="flex h-4 w-4 flex-col justify-center gap-1">
                <span className="h-0.5 w-4 rounded-full bg-current transition group-open:translate-y-1.5 group-open:rotate-45" />
                <span className="h-0.5 w-4 rounded-full bg-current transition group-open:opacity-0" />
                <span className="h-0.5 w-4 rounded-full bg-current transition group-open:-translate-y-1.5 group-open:-rotate-45" />
              </span>
            </summary>

            <div className="ui-radius-panel ui-shadow-float absolute right-0 top-full mt-4 w-80 overflow-hidden border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(249,245,239,0.96)_100%)] p-3">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className="ui-button rounded-2xl px-4 py-3 text-[#334155] transition hover:bg-white hover:text-[#0f4c81]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid gap-2">
                <Link
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button-success rounded-full px-4 py-3 text-center"
                >
                  แชททาง LINE
                </Link>
                <Link
                  href="/contact"
                  className="ui-button ui-button-primary rounded-full px-4 py-3 text-center"
                >
                  ขอใบเสนอราคา
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#081a2f] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(195,161,108,0.18),transparent_44%)]" />
      <div className="pointer-events-none absolute right-[-12%] top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(123,195,212,0.15),transparent_68%)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="mb-10 grid gap-4 rounded-[28px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:px-7">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#c3a16c]">Premium Support</p>
            <h2 className="mt-2 text-[1.9rem] font-bold tracking-[-0.04em] text-white">พร้อมช่วยวางแผนทริปจีนให้เหมาะกับงบและสไตล์ของคุณ</h2>
          </div>
          <div className="text-white/78">
            <p className="ui-label uppercase tracking-[0.18em] text-white/50">Contact</p>
            <p className="mt-2 text-[1.15rem] font-semibold text-white">{siteConfig.phoneDisplay}</p>
            <p className="mt-1 text-sm">{siteConfig.email}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="ui-button ui-button-primary inline-flex min-h-11 items-center justify-center px-5">
              ขอใบเสนอราคา
            </Link>
            <Link href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-glass inline-flex min-h-11 items-center justify-center px-5">
              แชทกับทีมงานทาง LINE
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.72fr_0.72fr_0.82fr_0.82fr_1fr]">
          <div>
            <Link href="/" className="inline-flex flex-col leading-tight">
              <span className="text-[1.75rem] font-bold tracking-[-0.04em] text-white">CHINA PRIME</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c3a16c]">
                Curated China Journeys
              </span>
            </Link>
            <p className="ui-body mt-5 max-w-sm text-white/72">
              เราเชี่ยวชาญทัวร์จีนคุณภาพ บริการจัดทริปส่วนตัวและจอยทัวร์จีนโดยทีมงานคนไทย
              พร้อมดูแลครบทุกขั้นตอน
            </p>
            <SocialIcons className="mt-5" />
          </div>

          <div>
            <h3 className="ui-label uppercase tracking-[0.18em] text-white/55">เมนูหลัก</h3>
            <div className="ui-body mt-5 grid gap-3 text-white/75">
              {footerMenuItems.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} className="transition hover:text-[#f5dcc0]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="ui-label uppercase tracking-[0.18em] text-white/55">เส้นทางยอดนิยมของจีน</h3>
            <div className="ui-body mt-5 grid gap-3 text-white/75">
              {footerDestinationItems.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} className="transition hover:text-[#f5dcc0]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="ui-label uppercase tracking-[0.18em] text-white/55">บริการของเรา</h3>
            <div className="ui-body mt-5 grid gap-3 text-white/75">
              {footerServiceItems.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} className="transition hover:text-[#f5dcc0]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="ui-label uppercase tracking-[0.18em] text-white/55">ข้อมูลสำคัญ</h3>
            <div className="ui-body mt-5 grid gap-3 text-white/75">
              {footerPolicyItems.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} className="transition hover:text-[#f5dcc0]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="ui-label uppercase tracking-[0.18em] text-white/55">ติดต่อเรา</h3>
            <div className="ui-body mt-5 space-y-3 text-white/75">
              <p>{siteConfig.addressLines[0]}</p>
              <p>{siteConfig.addressLines[1]}</p>
              <p>{siteConfig.phoneDisplay}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.lineId}</p>
              <p>ใบอนุญาตประกอบธุรกิจนำเที่ยว {siteConfig.travelLicenseNumber}</p>
            </div>
          </div>
        </div>

        <div className="ui-label mt-10 border-t border-white/12 pt-5 text-center text-white/52">
          © {siteConfig.footerCopyrightYear} {siteConfig.companyNameEn} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "CHINA PRIME | ทัวร์จีนคุณภาพ",
  description:
    "เว็บไซต์ขายทัวร์จีนโดยเฉพาะ ทั้งไพรเวททัวร์ จอยทัวร์ โปรแกรมเที่ยวจีน และบริการวางแผนการเดินทางครบวงจร",
  keywords: ["China Prime", "ทัวร์จีน", "ไพรเวททัวร์จีน", "จอยทัวร์จีน", "เที่ยวจีน"],
  openGraph: {
    title: "CHINA PRIME | ทัวร์จีนคุณภาพ",
    description:
      "เชี่ยวชาญทัวร์จีนโดยเฉพาะ คัดเส้นทางจริง รีวิวจริง พร้อมทีมงานคนไทยดูแลทุกขั้นตอน",
    type: "website",
    locale: "th_TH",
    siteName: "CHINA PRIME",
    url: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#f4efe7] font-sans text-slate-900">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
