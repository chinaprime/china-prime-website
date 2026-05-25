export const siteConfig = {
  brandName: "CHINA PRIME",
  companyNameTh: "บริษัท ไชน่าไพรม์ จำกัด",
  companyNameEn: "China Prime Co., Ltd.",
  siteUrl: "https://www.chinaprime.co.th",
  phoneDisplay: "02-123-4567",
  phoneHref: "tel:021234567",
  lineId: "@chinaprime",
  lineUrl: "https://line.me/R/ti/p/@chinaprime",
  email: "info@chinaprime.co.th",
  weekdayHoursShort: "จ.-ศ. 09:00-18:00",
  weekdayHoursLong: "จันทร์ - ศุกร์ 09:00 - 18:00 น.",
  weekendHoursLong: "เสาร์ - อาทิตย์ 10:00 - 17:00 น.",
  responsePromise: "ตอบกลับภายใน 24 ชั่วโมง",
  officeShort: "อโศก กรุงเทพฯ",
  officeLandmark: "ใกล้ BTS อโศก ทางออก 3",
  addressLines: [
    "เลขที่ 253 อาคารอโศกทาวเวอร์ ถนนอโศก ชั้น 15",
    "แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
  ],
  travelLicenseNumber: "11/12345",
  footerCopyrightYear: "2024",
} as const;

export const footerPolicyItems = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
  { href: "/privacy-policy", label: "นโยบายความเป็นส่วนตัว" },
  { href: "/booking-payment", label: "การจองและชำระเงิน" },
  { href: "/cancellation-refund", label: "ยกเลิก / คืนเงิน" },
] as const;
