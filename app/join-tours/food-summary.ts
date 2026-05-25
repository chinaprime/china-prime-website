import type { JoinTour } from "./data";

const foodSummaryBySlug: Record<string, { mealCount: number; signatureDish: string }> = {
  "beijing-5d4n": { mealCount: 9, signatureDish: "เป็ดปักกิ่ง" },
  "shanghai-hangzhou-4d3n": { mealCount: 7, signatureDish: "เสี่ยวหลงเปา" },
  "zhangjiajie-6d5n": { mealCount: 11, signatureDish: "หมูสามชั้นหูหนาน" },
  "chengdu-jiuzhaigou-6d5n": { mealCount: 11, signatureDish: "หม้อไฟเฉิงตู" },
  "harbin-6d4n": { mealCount: 11, signatureDish: "เกี๊ยวน้ำตงเป่ย" },
  "kunming-dali-lijiang-6d5n": { mealCount: 11, signatureDish: "เห็ดหม้อไฟยูนนาน" },
  "guilin-yangshuo-5d4n": { mealCount: 9, signatureDish: "ปลาเบียร์กุ้ยหลิน" },
  "xian-luoyang-5d4n": { mealCount: 9, signatureDish: "บะหมี่ปี้อังก์ปัง" },
  "chongqing-wulong-5d4n": { mealCount: 9, signatureDish: "หม้อไฟฉงชิ่ง" },
  "guangzhou-shenzhen-4d3n": { mealCount: 7, signatureDish: "ติ่มซำกวางตุ้ง" },
  "huangshan-hongcun-5d4n": { mealCount: 9, signatureDish: "เต้าหู้ขนหวงซาน" },
  "fujian-tulou-xiamen-5d4n": { mealCount: 9, signatureDish: "หอยนางรมทอดฮกเกี้ยน" },
  "zhuhai-macau-4d3n": { mealCount: 7, signatureDish: "ทาร์ตไข่มาเก๊า" },
  "tibet-lhasa-6d5n": { mealCount: 11, signatureDish: "เนื้อจามรีผัดพริก" },
  "wuhan-yichang-5d4n": { mealCount: 9, signatureDish: "บะหมี่ร้อนแห้งอู่ฮั่น" },
  "inner-mongolia-5d4n": { mealCount: 9, signatureDish: "บาร์บีคิวมองโกล" },
  "sichuan-leshan-emei-5d4n": { mealCount: 9, signatureDish: "เต้าหู้หม่าโผ" },
  "nanjing-suzhou-5d4n": { mealCount: 9, signatureDish: "เป็ดย่างหนานจิง" },
  "changsha-furong-zjj-6d5n": { mealCount: 11, signatureDish: "หมูผัดพริกหูหนาน" },
  "qingdao-5d4n": { mealCount: 9, signatureDish: "ซีฟู้ดชิงเต่า" },
  "sanya-hainan-5d4n": { mealCount: 9, signatureDish: "ไก่ไหหลำ" },
  "urumqi-kanas-7d6n": { mealCount: 13, signatureDish: "ข้าวผัดมือซินเจียง" },
  "shenyang-dalian-5d4n": { mealCount: 9, signatureDish: "เกี๊ยวตงเป่ย" },
  "wuxi-suzhou-shanghai-5d4n": { mealCount: 9, signatureDish: "เสี่ยวหลงเปา" },
  "zibo-qufu-jinan-5d4n": { mealCount: 9, signatureDish: "บาร์บีคิวจือปั๋ว" },
  "ningxia-yinchuan-5d4n": { mealCount: 9, signatureDish: "เนื้อแกะย่างหนิงเซี่ย" },
  "xiamen-quanzhou-5d4n": { mealCount: 9, signatureDish: "หมี่ซั่วหอยนางรม" },
};

export function getFoodSummary(tour: JoinTour) {
  const summary = foodSummaryBySlug[tour.slug];

  if (!summary) {
    return tour.food;
  }

  return `รวม ${summary.mealCount} มื้อ • เด่น ${summary.signatureDish}`;
}
