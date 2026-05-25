type HomeSearchPanelProps = {
  destinations: string[];
  months: string[];
};

const typeOptions = [
  { value: "join", label: "จอยทัวร์" },
  { value: "private", label: "ทัวร์ส่วนตัว" },
  { value: "service", label: "บริการเสริม" },
];

const travelerOptions = ["1-2 ท่าน", "3-4 ท่าน", "5-8 ท่าน", "9 ท่านขึ้นไป"];

export default function HomeSearchPanel({ destinations, months }: HomeSearchPanelProps) {
  return (
    <form action="/search" className="grid gap-3 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr_auto]">
      <label htmlFor="home-destination" className="flex flex-col gap-2 rounded-[20px] border border-[#DCE6F3] bg-[#FBFDFE] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C8EA5]">ปลายทาง</span>
        <select id="home-destination" name="destination" defaultValue="" className="bg-transparent text-sm font-semibold text-[#14314c] outline-none">
          <option value="">ทุกปลายทาง</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="home-tour-type" className="flex flex-col gap-2 rounded-[20px] border border-[#DCE6F3] bg-[#FBFDFE] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C8EA5]">ประเภททัวร์</span>
        <select id="home-tour-type" name="tourType" defaultValue="join" className="bg-transparent text-sm font-semibold text-[#14314c] outline-none">
          {typeOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="home-month" className="flex flex-col gap-2 rounded-[20px] border border-[#DCE6F3] bg-[#FBFDFE] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C8EA5]">วันเดินทาง</span>
        <select id="home-month" name="month" defaultValue="" className="bg-transparent text-sm font-semibold text-[#14314c] outline-none">
          <option value="">เลือกเดือน</option>
          {months.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="home-travelers" className="flex flex-col gap-2 rounded-[20px] border border-[#DCE6F3] bg-[#FBFDFE] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C8EA5]">ผู้เดินทาง</span>
        <select id="home-travelers" name="travelers" defaultValue="" className="bg-transparent text-sm font-semibold text-[#14314c] outline-none">
          <option value="">จำนวนผู้เดินทาง</option>
          {travelerOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="inline-flex min-h-[62px] items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#052B4F_0%,#0B3A5B_55%,#13507F_100%)] px-6 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(5,43,79,0.22)] transition hover:-translate-y-0.5"
      >
        ค้นหาทัวร์
      </button>
    </form>
  );
}
