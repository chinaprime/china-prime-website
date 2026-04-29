import Link from "next/link";

const navItems = [
  { href: "/destinations", label: "Destinations" },
  { href: "/private-tours", label: "Private Tours" },
  { href: "/sample-itineraries", label: "Itineraries" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#071a33]/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wide">China Prime</span>
          <span className="text-xs text-slate-300">Private China Tour Designer</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-amber-300">
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-slate-950 hover:bg-amber-300"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 md:hidden"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
