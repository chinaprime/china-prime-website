"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { JoinTour } from "./data";
import { getFoodSummary } from "./food-summary";
import { getAvailabilityMeta, getDisplayTravelDates, getInquiryHref, getMonthRank } from "./sales-utils";

const quickBrowseMenus = [
  {
    key: "ขายดี",
    title: "จอยทัวร์ขายดี",
    text: "รวมโปรแกรมยอดนิยมที่คนสอบถามเยอะและมีรอบเดินทางชัดเจน",
  },
  {
    key: "ธรรมชาติ",
    title: "ทริปดูธรรมชาติ",
    text: "เหมาะกับคนที่ชอบภูเขา ทะเลสาบ วิวอลังการ และจุดถ่ายภาพสวย",
  },
  {
    key: "เมืองใหญ่",
    title: "ทริปเมืองใหญ่",
    text: "สำหรับคนที่อยากเที่ยวเมืองดัง ช้อปง่าย เดินทางสะดวก และคาเฟ่เยอะ",
  },
  {
    key: "ครอบครัว",
    title: "ทริปครอบครัว",
    text: "โปรแกรมสบาย จังหวะเที่ยวไม่แน่นเกินไป และเหมาะกับทุกวัย",
  },
  {
    key: "หนาว",
    title: "ทริปรับอากาศหนาว",
    text: "รวมเส้นทางหิมะ เมืองหนาว และเทศกาลฤดูหนาวที่คนไทยนิยม",
  },
  {
    key: "คุมงบ",
    title: "ทริปคุมงบ",
    text: "เน้นทัวร์ราคาคุ้มค่า ดูงบง่าย และเริ่มต้นไม่สูงเกินไป",
  },
];

const searchTabs = ["ค้นหาทั่วไป", "ค้นหาตามโซน", "ค้นหาตามสายการบิน", "ค้นหาตามเดือน/ปี", "ค้นหาตามเทศกาล"] as const;

const textWrapClassName = "overflow-hidden [overflow-wrap:anywhere] [word-break:break-word]";

function getCompactTravelDateChips(travelMonths: string[]) {
  const dates = getDisplayTravelDates(travelMonths);
  const visibleDates = dates.slice(0, 2);
  const remainingCount = Math.max(0, dates.length - visibleDates.length);

  return { visibleDates, remainingCount };
}

function TourInfoIcon({ kind }: { kind: "duration" | "highlight" | "food" | "location" | "calendar" }) {
  const common = "h-4.5 w-4.5";

  if (kind === "duration") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.7v4.7l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "highlight") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="m12 3 2.2 4.9 5.3.45-4 3.5 1.2 5.15L12 14.3l-4.7 2.7 1.2-5.15-4-3.5 5.3-.45L12 3Z" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "food") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M7 4v7" strokeLinecap="round" />
        <path d="M10 4v7" strokeLinecap="round" />
        <path d="M7 8.5h3" strokeLinecap="round" />
        <path d="M8.5 11v9" strokeLinecap="round" />
        <path d="M15 4c1.6 1.5 2.4 3.2 2.4 5.1 0 1.8-.8 3.4-2.4 4.7V20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "location") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 20s5.5-5.1 5.5-10A5.5 5.5 0 1 0 6.5 10c0 4.9 5.5 10 5.5 10Z" />
        <circle cx="12" cy="10" r="1.9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3.8v3.4M16 3.8v3.4M4 9.5h16" strokeLinecap="round" />
    </svg>
  );
}

function getBadgeClassName(badge: string) {
  if (badge === "ขายดี") {
    return "ui-badge-warning";
  }

  if (badge === "เหลือไม่กี่ที่") {
    return "ui-badge-danger";
  }

  if (badge === "ใหม่") {
    return "ui-badge-success";
  }

  return "ui-badge-info";
}

function PillBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`ui-badge ui-chip ${textWrapClassName} ${className}`}
    >
      {children}
    </span>
  );
}

function SearchSelectField({
  label,
  value,
  onChange,
  className = "",
  compact = false,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={`block font-medium leading-[1.3] text-[#6D829B] ${compact ? "mb-1 text-[10px]" : "mb-2 text-[13px]"}`}>{label}</span>
      <div
        className={`flex items-center gap-3 rounded-[16px] border border-[#D9E5F2] bg-white px-4 transition focus-within:border-[#8CB3E3] focus-within:shadow-[0_0_0_3px_rgba(11,78,162,0.06)] ${
          compact ? "min-h-[44px]" : "min-h-[56px]"
        }`}
      >
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 appearance-none bg-transparent text-[13px] font-medium leading-[1.35] text-[#17324D] outline-none"
        >
          {children}
        </select>
        <span className="flex shrink-0 items-center justify-center text-[#4A6482]">
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.1">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </label>
  );
}

function QuickMenuCard({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[18px] border px-4 py-3 text-left transition ${
        active
          ? "border-[#C9DCF6] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] shadow-[0_10px_22px_rgba(15,23,42,0.05)]"
          : "border-[#E3ECF6] bg-white hover:border-[#D5E3F3] hover:bg-[#FBFDFF]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`h-9 w-1.5 rounded-full transition ${active ? "bg-[#0B4EA2]" : "bg-[#E9F0F8]"}`} />
        <div className="min-w-0">
          <h3 className={`text-[14px] font-semibold leading-[1.35] ${active ? "text-[#0F3F77]" : "text-[#17334E]"} ${textWrapClassName}`}>{title}</h3>
        </div>
      </div>
    </button>
  );
}

function TourInfoBox({
  kind,
  label,
  value,
  valueClassName = "",
  tone = "blue",
  children,
}: {
  kind: "duration" | "highlight" | "food" | "location" | "calendar";
  label: string;
  value?: string;
  valueClassName?: string;
  tone?: "blue" | "orange" | "green";
  children?: React.ReactNode;
}) {
  const toneClassName =
    tone === "orange" ? "bg-[#FFF8F1] text-[#F97316]" : tone === "green" ? "bg-[#F2FBF6] text-[#16A34A]" : "bg-[#F5F9FF] text-[#0B4EA2]";

  return (
    <div className="ui-radius-card flex min-h-[60px] items-start gap-2 border border-[#E8EEF6] bg-[#F8FBFF] p-2.5">
      <span className={`flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg ${toneClassName}`}>
        <TourInfoIcon kind={kind} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium leading-[1.25] text-[#6A7B90]">{label}</p>
        {children ?? (
          <p className={`mt-0.5 text-[13px] font-medium leading-[1.4] text-[#334155] ${textWrapClassName} ${valueClassName}`}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function TourCard({
  tour,
  ranking,
}: {
  tour: JoinTour;
  ranking: number;
}) {
  const availability = getAvailabilityMeta(tour.bookedCount);
  const { visibleDates, remainingCount } = getCompactTravelDateChips(tour.travelMonths);

  return (
    <article className="ui-card ui-radius-panel overflow-hidden ui-shadow-soft">
      <div className="grid overflow-hidden md:grid-cols-[144px_minmax(0,1fr)] xl:grid-cols-[156px_minmax(0,1fr)]">
        <div className="relative min-h-[160px] md:min-h-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 144px, 156px"
            className={`object-cover ${tour.imageClassName}`}
          />
          <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
            <PillBadge className="bg-[#16A34A] text-white">{tour.tag}</PillBadge>
            <PillBadge className="ui-shadow-card bg-white/92 text-[#0B4EA2] backdrop-blur-sm">
              จองแล้ว {tour.bookedCount} คน
            </PillBadge>
          </div>
        </div>

        <div className="p-3.5">
          <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_148px] xl:gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#0B4EA2] px-2 text-[12px] font-semibold leading-none text-white">
                  {ranking}
                </span>
                <p className="text-[13px] font-medium leading-[1.25] text-[#7A8EA5]">{tour.code}</p>
              </div>

              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {tour.salesBadges.map((badge) => (
                  <PillBadge key={badge} className={getBadgeClassName(badge)}>
                    {badge}
                  </PillBadge>
                ))}
                <PillBadge className="ui-badge-info">{tour.destination}</PillBadge>
                <PillBadge className={availability.className}>{availability.sublabel}</PillBadge>
              </div>

              <h3 className={`mt-2 max-w-[38ch] text-[18px] font-bold leading-[1.35] text-[#0F172A] md:text-[20px] xl:text-[21px] ${textWrapClassName}`}>
                {tour.title}
              </h3>
              <p className={`mt-1 text-[14px] font-normal leading-[1.6] text-[#64748B] ${textWrapClassName}`}>
                {tour.subtitle}
              </p>

              <div className="mt-2.5 grid gap-1.5 md:grid-cols-2">
                <TourInfoBox kind="duration" label="ระยะเวลา" value={tour.duration} tone="blue" />
                <TourInfoBox kind="food" label="อาหาร" value={getFoodSummary(tour)} tone="orange" />
                <TourInfoBox kind="highlight" label="ไฮไลต์" tone="green">
                  <p className={`mt-0.5 line-clamp-2 text-[13px] font-medium leading-[1.4] text-[#334155] ${textWrapClassName}`}>
                    {tour.highlight}
                  </p>
                </TourInfoBox>
                <TourInfoBox kind="calendar" label="วันเดินทาง" tone="blue">
                  <div className="mt-0.5 flex flex-wrap gap-1">
                    {visibleDates.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex rounded-full border border-[#DCE8F8] bg-white px-2 py-0.5 text-[11px] font-medium leading-[1.3] text-[#17334E] ${textWrapClassName}`}
                      >
                        {item}
                      </span>
                    ))}
                    {remainingCount > 0 ? (
                      <span className="inline-flex rounded-full border border-[#DCE8F8] bg-[#F4F8FD] px-2 py-0.5 text-[11px] font-medium leading-[1.3] text-[#295D8E]">
                        +อีก {remainingCount} รอบ
                      </span>
                    ) : null}
                  </div>
                </TourInfoBox>
              </div>
            </div>

            <div className="ui-card-soft ui-radius-card flex min-h-full flex-col justify-between p-2.5">
              <div>
                <p className="text-[12px] font-medium leading-[1.25] text-[#6A7B90]">สถานะที่นั่ง</p>
                <p className={`mt-1 text-[13px] font-semibold leading-[1.3] ${availability.className} inline-flex rounded-full px-2.5 py-0.75`}>
                  {availability.label}
                </p>
                <p className={`mt-1 text-[13px] font-normal leading-[1.5] text-[#64748B] ${textWrapClassName}`}>
                  พร้อมเช็กที่นั่งก่อนโอนจอง และยืนยันรอบเดินทางกับทีมงานได้ทันที
                </p>
              </div>

              <div className="mt-2 border-t border-[#DCE6F3] pt-2">
                <p className="text-[12px] font-medium leading-[1.25] text-[#6A7B90]">ราคาเริ่มต้น</p>
                <p className="mt-1 text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#0B4EA2] md:text-[26px]">
                  {tour.price}
                </p>
                <p className="mt-0.5 text-[12px] font-normal leading-[1.45] text-[#64748B]">ต่อท่าน ราคาขึ้นอยู่กับรอบเดินทางและเงื่อนไขโปรแกรม</p>

                <div className="mt-2 grid gap-1.5">
                  <Link
                    href={`/join-tours/${tour.slug}`}
                  className="ui-button ui-button-primary inline-flex min-h-9.5 items-center justify-center px-3 py-2 transition hover:-translate-y-0.5 hover:bg-[#073B7A]"
                  >
                    ดูรายละเอียด
                  </Link>
                  <Link
                    href={getInquiryHref(tour)}
                    className="ui-button ui-button-secondary inline-flex min-h-9.5 items-center justify-center px-3 py-2 transition hover:bg-[#EEF5FB]"
                  >
                    เช็กราคา/ที่นั่ง
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function JoinTourBrowser({ tours }: { tours: JoinTour[] }) {
  const toursPerPage = 10;
  const [activeSearchTab, setActiveSearchTab] = useState<(typeof searchTabs)[number]>("ค้นหาทั่วไป");
  const [destination, setDestination] = useState("ทั้งหมด");
  const [month, setMonth] = useState("ทั้งหมด");
  const [budget, setBudget] = useState("ทั้งหมด");
  const [duration, setDuration] = useState("ทั้งหมด");
  const [menuFilter, setMenuFilter] = useState("ทั้งหมด");
  const [sortBy, setSortBy] = useState("แนะนำมาก่อน");
  const [currentPage, setCurrentPage] = useState(1);

  const destinations = useMemo(
    () => ["ทั้งหมด", ...Array.from(new Set(tours.map((tour) => tour.destination)))],
    [tours],
  );
  const months = useMemo(
    () => ["ทั้งหมด", ...Array.from(new Set(tours.flatMap((tour) => tour.travelMonths)))],
    [tours],
  );

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const destinationMatch = destination === "ทั้งหมด" || tour.destination === destination;
      const monthMatch = month === "ทั้งหมด" || tour.travelMonths.includes(month);
      const budgetMatch =
        budget === "ทั้งหมด" ||
        (budget === "ต่ำกว่า 30,000" && tour.priceValue < 30000) ||
        (budget === "30,000 - 35,000" && tour.priceValue >= 30000 && tour.priceValue <= 35000) ||
        (budget === "มากกว่า 35,000" && tour.priceValue > 35000);
      const durationMatch =
        duration === "ทั้งหมด" ||
        (duration === "4 วัน" && tour.durationDays <= 4) ||
        (duration === "5-6 วัน" && tour.durationDays >= 5 && tour.durationDays <= 6) ||
        (duration === "7 วันขึ้นไป" && tour.durationDays >= 7);
      const menuMatch = menuFilter === "ทั้งหมด" || tour.menuTags.includes(menuFilter);

      return destinationMatch && monthMatch && budgetMatch && durationMatch && menuMatch;
    });
  }, [budget, destination, duration, menuFilter, month, tours]);

  const sortedTours = useMemo(() => {
    const list = [...filteredTours];

    if (sortBy === "ราคาต่ำไปสูง") {
      list.sort((a, b) => a.priceValue - b.priceValue);
      return list;
    }

    if (sortBy === "ราคาสูงไปต่ำ") {
      list.sort((a, b) => b.priceValue - a.priceValue);
      return list;
    }

    if (sortBy === "ใกล้ออกเดินทาง") {
      list.sort((a, b) => getMonthRank(a.travelMonths) - getMonthRank(b.travelMonths));
      return list;
    }

    list.sort((a, b) => {
      const aFeatured = a.salesBadges.includes("ขายดี") || a.salesBadges.includes("แนะนำ") ? 0 : 1;
      const bFeatured = b.salesBadges.includes("ขายดี") || b.salesBadges.includes("แนะนำ") ? 0 : 1;

      if (aFeatured !== bFeatured) {
        return aFeatured - bFeatured;
      }

      return b.bookedCount - a.bookedCount;
    });

    return list;
  }, [filteredTours, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedTours.length / toursPerPage));
  const paginatedTours = sortedTours.slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage);
  const activeFilterCount = [destination, month, budget, duration].filter((value) => value !== "ทั้งหมด").length + (menuFilter !== "ทั้งหมด" ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

  function resetFilters() {
    setActiveSearchTab("ค้นหาทั่วไป");
    setDestination("ทั้งหมด");
    setMonth("ทั้งหมด");
    setBudget("ทั้งหมด");
    setDuration("ทั้งหมด");
    setMenuFilter("ทั้งหมด");
    setSortBy("แนะนำมาก่อน");
    setCurrentPage(1);
  }

  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-5 pb-14 sm:px-6 lg:-mt-24 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start xl:gap-7">
        <aside className="space-y-5 xl:sticky xl:top-28">
          <article className="ui-card-soft ui-radius-panel bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFE_100%)] p-4.5 md:p-5.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[12px] font-medium leading-[1.3] text-[#6A81A0]">เลือกดูตามความสนใจ</p>
                <h2 className="mt-1.5 text-[20px] font-bold leading-[1.35] tracking-[-0.03em] text-[#163047]">เมนูจอยทัวร์</h2>
              </div>
              <Link href="/contact" className="hidden text-[12px] font-semibold text-[#0B4EA2] xl:block">
                ให้ทีมงานช่วย →
              </Link>
            </div>

            <div className="mt-4.5 space-y-2">
              {quickBrowseMenus.map((item) => {
                const isActive = menuFilter === item.key;

                return (
                  <QuickMenuCard
                    key={item.key}
                    title={item.title}
                    active={isActive}
                    onClick={() => {
                      setMenuFilter((current) => (current === item.key ? "ทั้งหมด" : item.key));
                      setCurrentPage(1);
                    }}
                  />
                );
              })}
            </div>
          </article>
        </aside>

        <div>
          <article className="ui-card-soft ui-radius-panel overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-4 md:p-4.5">
            <div>
              <div className="flex flex-wrap gap-2 border-b border-[#E6EEF8] pb-2">
                {searchTabs.map((tab) => {
                  const isActive = activeSearchTab === tab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveSearchTab(tab)}
                      className={`relative inline-flex min-h-[34px] items-center justify-center rounded-t-[16px] px-4.5 text-[12px] font-semibold transition ${
                        isActive
                          ? "bg-white text-[#0B4EA2] shadow-[0_10px_20px_rgba(15,23,42,0.05)]"
                          : "bg-[#EEF4FA] text-[#6D8098] hover:bg-[#E7EEF7] hover:text-[#35506D]"
                      }`}
                    >
                      {tab}
                      {isActive ? <span className="absolute inset-x-5 bottom-0 h-[2px] rounded-full bg-[#0B4EA2]" /> : null}
                    </button>
                  );
                })}
              </div>

              <div className="mt-2.5 rounded-[22px] border border-[#E4ECF7] bg-[linear-gradient(180deg,rgba(246,250,255,0.95)_0%,rgba(255,255,255,0.96)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-sm">
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#E7EFF8] pb-2">
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="inline-flex items-center rounded-full bg-[#E9F3FF] px-2.5 py-1 font-semibold text-[#0B4EA2]">
                      พบ {filteredTours.length} โปรแกรม
                    </span>
                    <span className="font-medium text-[#6A7F99]">
                      {hasActiveFilters ? `กำลังกรองอยู่ ${activeFilterCount} ตัวเลือก` : "เลือกช่วงเดินทางที่สนใจได้ทันที"}
                    </span>
                  </div>
                  {hasActiveFilters ? (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-[12px] font-semibold text-[#0B4EA2] transition hover:text-[#073B7A]"
                    >
                      ล้างตัวกรอง
                    </button>
                  ) : null}
                </div>

                <div className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-[1.15fr_1.05fr_0.95fr_0.9fr_124px] xl:items-end">
                  <SearchSelectField compact label="เลือกเมือง" value={destination} onChange={(value) => {
                    setDestination(value);
                    setCurrentPage(1);
                  }}>
                    <option value="ทั้งหมด">ทุกเมือง</option>
                    {destinations.filter((item) => item !== "ทั้งหมด").map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </SearchSelectField>

                  <SearchSelectField compact label="วันเดินทาง" value={month} onChange={(value) => {
                    setMonth(value);
                    setCurrentPage(1);
                  }}>
                    <option value="ทั้งหมด">ทุกช่วงเวลา</option>
                    {months.filter((item) => item !== "ทั้งหมด").map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </SearchSelectField>

                  <SearchSelectField compact label="งบประมาณ" value={budget} onChange={(value) => {
                    setBudget(value);
                    setCurrentPage(1);
                  }}>
                    <option value="ทั้งหมด">ทุกช่วงราคา</option>
                    <option value="ต่ำกว่า 30,000">ต่ำกว่า 30,000</option>
                    <option value="30,000 - 35,000">30,000 - 35,000</option>
                    <option value="มากกว่า 35,000">มากกว่า 35,000</option>
                  </SearchSelectField>

                  <SearchSelectField compact label="ระยะเวลา" value={duration} onChange={(value) => {
                    setDuration(value);
                    setCurrentPage(1);
                  }}>
                    <option value="ทั้งหมด">ทุกแบบ</option>
                    <option value="4 วัน">4 วัน</option>
                    <option value="5-6 วัน">5-6 วัน</option>
                    <option value="7 วันขึ้นไป">7 วันขึ้นไป</option>
                  </SearchSelectField>

                  <button
                    type="button"
                    onClick={() => setCurrentPage(1)}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[16px] border border-[#179444] bg-[linear-gradient(135deg,#18A84D,#109640)] px-4 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(22,163,74,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(22,163,74,0.16)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="11" cy="11" r="6.25" />
                      <path d="m16 16 4 4" strokeLinecap="round" />
                    </svg>
                    ค้นหา
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[30px] font-bold leading-[1.35] tracking-[-0.04em] text-[#0F172A] md:text-[34px]">จอยทัวร์ยอดนิยม</h2>
              <p className={`mt-2 text-[15px] font-normal leading-[1.72] text-[#64748B] ${textWrapClassName}`}>
                ดูภาพรวมทัวร์ก่อนตัดสินใจได้ทันที ทั้งไฮไลต์ อาหาร ช่วงเดินทาง และราคาเริ่มต้น
              </p>
            </div>
            <Link href="/contact" className="hidden text-[14px] font-semibold text-[#0B4EA2] md:block">
              ขอโปรแกรมทั้งหมด →
            </Link>
          </div>

          <div className="ui-card-soft ui-radius-card mt-5 flex flex-col gap-2 px-5 py-4 text-[14px] md:flex-row md:items-center md:justify-between md:px-6">
            <p className="font-semibold leading-[1.5] text-[#17334E]">
              ทัวร์ทั้งหมดในระบบ: <span className="text-[#0B4EA2]">{tours.length}</span> โปรแกรม
            </p>
            <p className="font-normal leading-[1.65] text-[#64748B]">
              รอบใกล้สุด {paginatedTours[0] ? getDisplayTravelDates(paginatedTours[0].travelMonths)[0] : "-"} • หน้าที่ {currentPage} จาก{" "}
              {totalPages} • แสดงสูงสุด {toursPerPage} รายการต่อหน้า
            </p>
          </div>

          {filteredTours.length === 0 ? (
            <div className="ui-card ui-radius-panel ui-shadow-soft mt-6 border-dashed border-[#BFD4F4] px-6 py-10 text-center">
              <h3 className="text-[22px] font-bold leading-[1.35] tracking-[-0.03em] text-[#17334E]">ยังไม่พบโปรแกรมที่ตรงกับตัวกรองนี้</h3>
              <p className="mt-3 text-[15px] leading-[1.72] text-[#64748B]">
                ลองเปลี่ยนเดือนเดินทาง งบประมาณ หรือกดล้างตัวกรอง เพื่อดูโปรแกรมอื่นเพิ่มเติม
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="ui-button ui-button-primary mt-5 inline-flex min-h-12 items-center justify-center px-5 py-3"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-6">
                {paginatedTours.map((tour, index) => (
                  <TourCard key={tour.slug} tour={tour} ranking={(currentPage - 1) * toursPerPage + index + 1} />
                ))}
              </div>

              {totalPages > 1 ? (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                    className="ui-button ui-button-secondary inline-flex min-h-12 items-center justify-center px-4 py-3 transition hover:bg-[#EEF5FB] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    ← ก่อนหน้า
                  </button>
                  <div className="ui-button ui-button-primary inline-flex min-h-12 items-center justify-center px-5 py-3">
                    หน้า {currentPage} / {totalPages}
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages}
                    className="ui-button ui-button-secondary inline-flex min-h-12 items-center justify-center px-4 py-3 transition hover:bg-[#EEF5FB] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    ถัดไป →
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
