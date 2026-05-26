import { prisma } from "@/lib/prisma";

export const DEMO_USER_EMAIL = "demo@anxing.health";

export async function getDemoUser() {
  return prisma.user.upsert({
    where: { email: DEMO_USER_EMAIL },
    update: {},
    create: {
      email: DEMO_USER_EMAIL,
      name: "Demo Patient",
      locale: "en-US",
      countryRegion: "Global",
      preferredLanguage: "English",
      timezone: "UTC"
    }
  });
}
