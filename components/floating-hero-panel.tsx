import type { ReactNode } from "react";

type FloatingHeroPanelProps = {
  children: ReactNode;
  overlapClassName?: string;
  sectionClassName?: string;
  panelClassName?: string;
};

export function FloatingHeroPanel({
  children,
  overlapClassName = "-mt-16 sm:-mt-20 lg:-mt-24",
  sectionClassName = "",
  panelClassName = "",
}: FloatingHeroPanelProps) {
  return (
    <section className={`relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${overlapClassName} ${sectionClassName}`}>
      <div
        className={`overflow-hidden rounded-[32px] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(249,245,239,0.96)_100%)] p-4 shadow-[0_30px_80px_rgba(8,26,47,0.15)] backdrop-blur-xl md:p-5 lg:p-6 ${panelClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
