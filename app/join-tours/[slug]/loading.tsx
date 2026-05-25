export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f4efe7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-10 w-48 rounded-full bg-[#d8e3ef]" />
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,rgba(10,34,58,0.92)_0%,rgba(26,64,97,0.72)_100%)] p-6">
          <div className="h-6 w-40 rounded-full bg-white/14" />
          <div className="mt-5 h-16 max-w-2xl rounded-[24px] bg-white/16" />
          <div className="mt-4 h-20 max-w-3xl rounded-[24px] bg-white/10" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="h-22 rounded-[22px] bg-white/12" />
            <div className="h-22 rounded-[22px] bg-white/12" />
            <div className="h-22 rounded-[22px] bg-white/12" />
            <div className="h-22 rounded-[22px] bg-white/12" />
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-4 rounded-[30px] bg-white p-6">
            <div className="h-6 w-36 rounded-full bg-[#d8e3ef]" />
            <div className="h-24 w-full rounded-2xl bg-[#edf3f9]" />
            <div className="h-24 w-full rounded-2xl bg-[#edf3f9]" />
            <div className="h-24 w-full rounded-2xl bg-[#edf3f9]" />
          </div>
          <div className="space-y-4 rounded-[30px] bg-white p-6">
            <div className="h-6 w-36 rounded-full bg-[#d8e3ef]" />
            <div className="h-36 w-full rounded-2xl bg-[#edf3f9]" />
            <div className="h-36 w-full rounded-2xl bg-[#edf3f9]" />
          </div>
        </div>
      </div>
    </main>
  );
}
