import { getDemoUser } from "@/lib/demoUser";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  serviceType: z.string().trim().min(1).max(80),
  name: z.string().trim().min(1).max(120),
  contact: z.string().trim().min(1).max(160),
  countryRegion: z.string().trim().min(1).max(120),
  targetHospital: z.string().trim().max(160).optional(),
  budget: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1).max(4000),
  urgency: z.string().trim().max(40).optional(),
  source: z.string().trim().max(80).optional(),
  locale: z.string().trim().max(40).optional(),
  companyWebsite: z.string().trim().max(200).optional()
});

export async function POST(req: Request) {
  const user = await getDemoUser();
  const parsed = leadSchema.safeParse(await req.json());

  if (!parsed.success) return NextResponse.json({ error: "invalid_lead" }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });

  const lead = await prisma.consultationLead.create({
    data: {
      userId: user.id,
      serviceType: parsed.data.serviceType,
      name: parsed.data.name,
      contact: parsed.data.contact,
      countryRegion: parsed.data.countryRegion,
      message: parsed.data.message,
      targetHospital: parsed.data.targetHospital || null,
      budget: parsed.data.budget || null,
      urgency: parsed.data.urgency || "normal",
      source: parsed.data.source || "website",
      locale: parsed.data.locale || "en-US"
    }
  });

  return NextResponse.json(lead);
}
