import type { JoinTour } from "./data";

const monthOrder: Record<string, number> = {
  "ม.ค.": 1,
  "ก.พ.": 2,
  "มี.ค.": 3,
  "เม.ย.": 4,
  "พ.ค.": 5,
  "มิ.ย.": 6,
  "ก.ค.": 7,
  "ส.ค.": 8,
  "ก.ย.": 9,
  "ต.ค.": 10,
  "พ.ย.": 11,
  "ธ.ค.": 12,
  "ทุกเดือน": 0,
};

export function getDisplayTravelDates(travelMonths: string[]) {
  if (travelMonths.includes("ทุกเดือน")) {
    return ["07-10 มิ.ย. 69", "21-24 มิ.ย. 69", "05-08 ก.ค. 69"];
  }

  const ranges = ["06-10", "15-19", "24-28"];

  return travelMonths.slice(0, 3).map((month, index) => `${ranges[index] ?? "06-10"} ${month} 69`);
}

export function getAvailabilityMeta(bookedCount: number) {
  const seatsLeft = Math.max(2, 20 - bookedCount);

  if (seatsLeft <= 4) {
    return {
      seatsLeft,
      label: `เหลือ ${seatsLeft} ที่`,
      sublabel: "ใกล้เต็ม",
      className: "bg-[#FEE2E2] text-[#B91C1C]",
    };
  }

  if (seatsLeft <= 8) {
    return {
      seatsLeft,
      label: `เหลือ ${seatsLeft} ที่`,
      sublabel: "กำลังได้รับความนิยม",
      className: "bg-[#FFF3D6] text-[#B45309]",
    };
  }

  return {
    seatsLeft,
    label: `เหลือ ${seatsLeft} ที่`,
    sublabel: "เปิดรับจอง",
    className: "bg-[#DCFCE7] text-[#166534]",
  };
}

export function getMonthRank(travelMonths: string[]) {
  if (travelMonths.includes("ทุกเดือน")) {
    return 0;
  }

  return Math.min(...travelMonths.map((month) => monthOrder[month] ?? 99));
}

export function getInquiryHref(tour: JoinTour) {
  const departure = getDisplayTravelDates(tour.travelMonths)[0] ?? "";

  return `/contact?topic=join-tour&tour=${encodeURIComponent(tour.slug)}&title=${encodeURIComponent(tour.title)}&departure=${encodeURIComponent(departure)}`;
}
