import Link from "next/link";

const items = [
  { href: "/", icon: "H", label: "Home" },
  { href: "/#system", icon: "S", label: "System" },
  { href: "/app", icon: "A", label: "App" },
  { href: "/#consultation", icon: "+", label: "Case" }
];

export function AppBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-[color:var(--site-line)] bg-white/95 px-3 py-2 shadow-[0_-14px_32px_rgba(20,48,52,0.10)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid w-full max-w-md grid-cols-4 gap-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[11px] font-bold text-[color:var(--site-muted)] hover:bg-[color:var(--site-panel)] hover:text-[color:var(--site-teal-dark)]">
            <span className="grid h-5 w-5 place-items-center rounded border border-[color:var(--site-line)] text-[10px] leading-none">{item.icon}</span>
            <span className="leading-none">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
