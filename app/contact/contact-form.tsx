"use client";

import { useState } from "react";
import { siteConfig } from "../site-config";

type ContactFormProps = {
  defaultService: string;
  defaultTripLabel: string;
  defaultDeparture: string;
  defaultDetails: string;
};

type FormState = {
  fullName: string;
  contactInfo: string;
  email: string;
  travelStyle: string;
  serviceType: string;
  departure: string;
  details: string;
  consent: boolean;
};

function buildMailtoBody(values: FormState) {
  return [
    `ชื่อ-นามสกุล: ${values.fullName}`,
    `เบอร์โทรศัพท์ / LINE ID: ${values.contactInfo}`,
    `อีเมล: ${values.email || "-"}`,
    `ประเภทบริการที่สนใจ: ${values.serviceType}`,
    `เป้าหมายหรือสไตล์การเดินทาง: ${values.travelStyle || "-"}`,
    `วันเดินทาง (โดยประมาณ): ${values.departure || "-"}`,
    "",
    "รายละเอียดเพิ่มเติม",
    values.details || "-",
    "",
    "ส่งจากฟอร์มติดต่อบนเว็บไซต์ China Prime",
  ].join("\n");
}

export function ContactForm({
  defaultService,
  defaultTripLabel,
  defaultDeparture,
  defaultDetails,
}: ContactFormProps) {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    contactInfo: "",
    email: "",
    travelStyle: defaultTripLabel,
    serviceType: defaultService,
    departure: defaultDeparture,
    details: defaultDetails,
    consent: false,
  });
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.fullName.trim()) {
      setError("กรุณากรอกชื่อ-นามสกุล");
      return;
    }

    if (!values.contactInfo.trim()) {
      setError("กรุณากรอกเบอร์โทรศัพท์หรือ LINE ID");
      return;
    }

    if (!values.consent) {
      setError("กรุณายินยอมให้ทีมงานติดต่อกลับก่อนส่งข้อความ");
      return;
    }

    setError("");

    const selectedService =
      values.serviceType === "เลือกประเภทบริการ" ? "บริการท่องเที่ยวจีน" : values.serviceType;
    const subject = `สอบถามบริการ ${siteConfig.brandName}: ${selectedService}`;
    const body = buildMailtoBody(values);

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">ชื่อ-นามสกุล</span>
          <input
            type="text"
            placeholder="กรอกชื่อ-นามสกุล"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">เบอร์โทรศัพท์ / LINE ID</span>
          <input
            type="text"
            placeholder={`เช่น 081-234-5678 หรือ ${siteConfig.lineId}`}
            value={values.contactInfo}
            onChange={(event) => updateField("contactInfo", event.target.value)}
            className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">อีเมล</span>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">เป้าหมายหรือสไตล์การเดินทาง</span>
          <input
            type="text"
            placeholder="เช่น ธุรกิจ, คู่รัก, ครอบครัว"
            value={values.travelStyle}
            onChange={(event) => updateField("travelStyle", event.target.value)}
            className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">ประเภทบริการที่สนใจ</span>
          <div className="relative">
            <select
              value={values.serviceType}
              onChange={(event) => updateField("serviceType", event.target.value)}
              className="w-full appearance-none rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 pr-10 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
            >
              <option>เลือกประเภทบริการ</option>
              <option>จอยทัวร์</option>
              <option>ไพรเวททัวร์</option>
              <option>จองรถพร้อมคนขับ</option>
              <option>ไกด์ / ล่ามส่วนตัว</option>
              <option>วางแผนทริป</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#7a8fa8]">⌄</span>
          </div>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#5d748b]">วันเดินทาง (โดยประมาณ)</span>
          <input
            type="text"
            placeholder="เลือกวันเดินทาง"
            value={values.departure}
            onChange={(event) => updateField("departure", event.target.value)}
            className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[#5d748b]">รายละเอียดเพิ่มเติม</span>
        <textarea
          rows={4}
          placeholder="บอกปลายทางที่อยากไป จำนวนคน ช่วงเวลาเดินทาง งบประมาณ ความสนใจพิเศษ ฯลฯ"
          value={values.details}
          onChange={(event) => updateField("details", event.target.value)}
          className="rounded-xl border border-[#d9e5f5] bg-[#fbfdff] px-4 py-3 text-sm outline-none transition focus:border-[#0b56b1] focus:ring-4 focus:ring-[#0b56b1]/10"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-[#6b8095]">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-[#cfe0f7]"
        />
        ยินยอมให้ทีมงานติดต่อกลับเพื่อให้คำปรึกษาเกี่ยวกับทริป และเปิดแอปอีเมลพร้อมข้อความที่กรอกไว้
      </label>

      {error ? <p className="text-sm font-semibold text-[#b91c1c]">{error}</p> : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b56b1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(11,86,177,0.24)] transition hover:bg-[#084892]"
        >
          ส่งผ่านอีเมล
        </button>
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#cfe0f7] bg-white px-6 py-3.5 text-sm font-bold text-[#18a744] transition hover:bg-[#edf9f0]"
        >
          ส่งผ่าน LINE
        </a>
      </div>

      <p className="text-center text-xs text-[#7b8ea3]">
        {siteConfig.responsePromise} หรือส่งตรงมาที่ {siteConfig.email}
      </p>
    </form>
  );
}
