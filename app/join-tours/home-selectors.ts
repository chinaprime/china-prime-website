import type { JoinTour } from "./data";
import { getDisplayTravelDates, getInquiryHref } from "./sales-utils";

type HomePopularTour = JoinTour & {
  detail: string;
  meta: string[];
  badgeClassName: string;
  inquiryLabel: string;
  inquiryHref: string;
  detailHref: string;
};

type HomeDestination = {
  categories: string[];
  title: string;
  subtitle: string;
  image: string;
  imageClassName: string;
  href: string;
};

const destinationTabs = ["ทั้งหมด", "เมืองใหญ่", "ธรรมชาติ", "ประวัติศาสตร์", "วัฒนธรรม", "ช้อปปิ้ง", "ครอบครัว"];

const destinationSubtitleOverrides: Record<string, string> = {
  ปักกิ่ง: "เปิดตำนานพระราชวังหลวง",
  เซี่ยงไฮ้: "หอไข่มุกและมหานครริมน้ำ",
  เฉิงตู: "เมืองหมีแพนด้า",
  จางเจียเจี้ย: "เสน่ห์ขุนเขาอวตาร",
  กุ้ยหลิน: "สายน้ำและภูเขาหินปูน",
  คุนหมิง: "เมืองเก่าและธรรมชาติอากาศดี",
  ซีอาน: "เมืองประวัติศาสตร์และอารยธรรมจีน",
  ฮาร์บิน: "มหกรรมเมืองหิมะ",
};

function getHomePriority(tour: JoinTour) {
  if (tour.homeOrder !== undefined) {
    return tour.homeOrder;
  }

  if (tour.salesBadges.includes("ขายดี")) {
    return 100;
  }

  if (tour.salesBadges.includes("แนะนำ")) {
    return 200;
  }

  if (tour.salesBadges.includes("ใหม่")) {
    return 300;
  }

  return 999;
}

function getDestinationPriority(tour: JoinTour) {
  if (tour.destinationOrder !== undefined) {
    return tour.destinationOrder;
  }

  return 999;
}

export function getHomeFeaturedTours(tours: JoinTour[], limit = 5): HomePopularTour[] {
  const featuredTours = tours.filter((tour) => tour.featuredOnHome);
  const sourceTours = featuredTours.length > 0 ? featuredTours : tours;

  return [...sourceTours]
    .sort((a, b) => getHomePriority(a) - getHomePriority(b) || b.bookedCount - a.bookedCount || a.priceValue - b.priceValue)
    .slice(0, limit)
    .map((tour) => ({
      ...tour,
      detail: tour.locations.join(" · "),
      meta: [
        tour.duration,
        tour.travelDates[0] ?? getDisplayTravelDates(tour.travelMonths)[0] ?? "",
        tour.suitableFor[0] ? `เหมาะกับ${tour.suitableFor[0]}` : tour.food,
      ].filter(Boolean),
      badgeClassName: "bg-[#16A34A]",
      inquiryLabel:
        tour.salesBadges.includes("เหลือไม่กี่ที่")
          ? "เช็กที่นั่งด่วน"
          : tour.salesBadges.includes("ใหม่")
            ? "ขอโปรแกรมล่าสุด"
            : "เช็กราคา / ขอโปรแกรม",
      inquiryHref: getInquiryHref(tour),
      detailHref: `/join-tours/${tour.slug}`,
    }));
}

export function getHomeFeaturedDestinations(tours: JoinTour[], limit = 8): HomeDestination[] {
  const featuredTours = tours.filter((tour) => tour.featuredDestination);
  const sourceTours = featuredTours.length > 0 ? featuredTours : tours;

  return Array.from(
    new Map(
      [...sourceTours]
        .sort((a, b) => getDestinationPriority(a) - getDestinationPriority(b) || b.bookedCount - a.bookedCount)
        .map((tour) => [
          tour.destination,
          {
            categories: Array.from(
              new Set(
                [
                  tour.menuTags.includes("เมืองใหญ่") ? "เมืองใหญ่" : null,
                  tour.menuTags.includes("ธรรมชาติ") ? "ธรรมชาติ" : null,
                  ["ปักกิ่ง", "ซีอาน"].includes(tour.destination) ? "ประวัติศาสตร์" : null,
                  ["ปักกิ่ง", "เฉิงตู", "ซีอาน", "กุ้ยหลิน", "คุนหมิง"].includes(tour.destination) ? "วัฒนธรรม" : null,
                  ["เซี่ยงไฮ้", "กวางโจว", "เซินเจิ้น", "หางโจว"].includes(tour.destination) ? "ช้อปปิ้ง" : null,
                  tour.suitableFor.some((item) => item.includes("ครอบครัว")) ? "ครอบครัว" : null,
                ].filter(Boolean),
              ),
            ) as string[],
            title: tour.destination,
            subtitle: destinationSubtitleOverrides[tour.destination] ?? tour.subtitle,
            image: tour.image,
            imageClassName: tour.imageClassName,
            href: `/join-tours/${tour.slug}`,
          },
        ]),
    ).values(),
  ).slice(0, limit);
}

export function getHomeDestinationTabs(destinations: HomeDestination[]) {
  const availableTabs = destinationTabs.filter(
    (tab) => tab === "ทั้งหมด" || destinations.some((item) => item.categories.includes(tab)),
  );

  return availableTabs;
}
