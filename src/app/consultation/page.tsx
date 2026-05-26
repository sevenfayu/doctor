import Link from "next/link";
import { ConsultationLeadForm } from "@/components/forms";
import { getDemoUser } from "@/lib/demoUser";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ConsultationPage() {
  const user = await getDemoUser();
  const leads = await prisma.consultationLead.findMany({ where: { userId: user.id }, take: 20, orderBy: { createdAt: "desc" } });

  return (
    <div className="home-shell space-y-6 py-8">
      <section className="site-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="site-pill">Case intake</span>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">Medical treatment in China consultation</h1>
            <p className="mt-2 max-w-3xl leading-7 text-[color:var(--site-muted)]">
              Submit the case, preferred specialty or hospital direction, and contact details. The next step is usually WhatsApp record collection and expert-ready case packaging.
            </p>
          </div>
          <Link href="/app" className="secondary-action px-4 py-3">Open App flow</Link>
        </div>
      </section>
      <section className="site-card p-5"><ConsultationLeadForm /></section>
      <section className="site-card p-5">
        <h2 className="font-semibold">Recent case requests</h2>
        <div className="mt-4 space-y-3">
          {leads.length ? leads.map((lead) => (
            <article key={lead.id} className="rounded-lg border border-[color:var(--site-line)] bg-white p-4">
              <div className="flex flex-wrap justify-between gap-2">
                <b>{lead.serviceType}</b>
                <span className="text-sm text-[color:var(--site-muted)]">{lead.status} / {lead.urgency}</span>
              </div>
              <p className="mt-1 text-sm text-[color:var(--site-muted)]">{lead.countryRegion} / {lead.contact}</p>
              <p className="mt-2 text-sm leading-6">{lead.message}</p>
            </article>
          )) : <p className="text-[color:var(--site-muted)]">No consultation requests yet.</p>}
        </div>
      </section>
    </div>
  );
}
