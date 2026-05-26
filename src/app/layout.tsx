import "./globals.css";
import Link from "next/link";
import { AppBottomNav } from "@/components/AppBottomNav";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Eastern Doctor | Medical Treatment in China",
    template: "%s | Eastern Doctor"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Eastern Doctor | Medical Treatment in China",
    description: siteConfig.description
  },
  twitter: {
    card: "summary",
    title: "Eastern Doctor | Medical Treatment in China",
    description: siteConfig.description
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#143034",
  colorScheme: "light"
};

const nav = [
  { href: "/#system", label: "System" },
  { href: "/#hospitals", label: "Hospitals" },
  { href: "/#service", label: "Service" },
  { href: "/#consultation", label: "Send Case" },
  { href: "/app", label: "App" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const whatsappUrl = siteConfig.getWhatsAppUrl("Hello, I would like to consult about medical treatment in China.");

  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 border-b border-[color:var(--site-line)] bg-white/92 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
            <Link href="/" className="mr-auto flex min-w-0 items-center gap-2 font-bold text-[color:var(--site-ink)]">
              <span className="brand-mark">E</span>
              <span className="truncate">Eastern Doctor</span>
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href={whatsappUrl}
              className="hidden rounded-lg bg-[color:var(--site-ink)] px-4 py-2 text-sm font-bold text-white md:inline-flex"
            >
              WhatsApp
            </a>
          </nav>
        </header>
        <main className="pb-24 md:pb-0">{children}</main>
        <footer className="border-t border-[color:var(--site-line)] bg-white">
          <div className="home-shell flex flex-wrap items-center justify-between gap-3 py-6 text-sm text-[color:var(--site-muted)]">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Medical travel coordination, not emergency care.</p>
            <div className="flex flex-wrap gap-4 font-bold">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/medical-disclaimer">Medical Disclaimer</Link>
            </div>
          </div>
        </footer>
        <AppBottomNav />
      </body>
    </html>
  );
}
