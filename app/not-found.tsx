import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#f8f5ef] px-6 py-24 text-[#1f2933]">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-amber-900/10 bg-white p-10 text-center shadow-[0_12px_30px_rgba(0,0,0,0.07)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Page Not Found
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#071a33]">
          ไม่พบหน้าที่คุณต้องการ
        </h1>

        <p className="mt-5 leading-8 text-slate-600">
          หน้านี้อาจถูกย้าย ลบ หรือ URL ไม่ถูกต้อง คุณสามารถกลับไปหน้าแรก
          หรือเริ่มปรึกษาทริปจีนแบบส่วนตัวกับทีม China Prime ได้ทันที
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-sm bg-[#071a33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102a4d]"
          >
            กลับหน้าแรก
          </Link>

          <Link
            href="/contact"
            className="rounded-sm bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:from-amber-200 hover:to-amber-500"
          >
            ปรึกษาทริปส่วนตัว
          </Link>
        </div>
      </div>
    </main>
  );
}
