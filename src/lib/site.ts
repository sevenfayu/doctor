const fallbackUrl = "http://localhost:3000";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function cleanWhatsAppNumber(value?: string) {
  return (value || "").replace(/[^\d]/g, "");
}

export const siteConfig = {
  name: "Eastern Doctor",
  legalEntity: "冰宙科技（洛阳）有限公司",
  url: trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl),
  description:
    "Medical treatment in China consultation, expert matching and one-stop international patient coordination.",
  whatsappNumber: cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+85252642367",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sevenfayu@gmail.com",
  getWhatsAppUrl(message: string) {
    const text = encodeURIComponent(message);
    const number = cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
    return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
  }
};

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
