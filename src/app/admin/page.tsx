import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [total, newLeads, qualified, converted, recentLeads] = await Promise.all([
    prisma.consultationLead.count(),
    prisma.consultationLead.count({ where: { status: "new" } }),
    prisma.consultationLead.count({ where: { status: "qualified" } }),
    prisma.consultationLead.count({ where: { status: "converted" } }),
    prisma.consultationLead.findMany({ take: 8, orderBy: { createdAt: "desc" } })
  ]);

  const stats = [
    { label: "Total leads", value: total },
    { label: "New", value: newLeads },
    { label: "Qualified", value: qualified },
    { label: "Converted", value: converted }
  ];

  return (
    <div className="home-shell space-y-6 py-8">
      <section className="site-card p-6">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <span className="site-pill">Eastern Doctor operations</span>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">Lead Dashboard</h1>
            <p className="mt-2 text-[color:var(--site-muted)]">Track inbound medical travel cases from SEO, social, website forms and WhatsApp handoff.</p>
          </div>
          <Link href="/admin/leads" className="primary-action self-start px-4 py-3">Lead Management</Link>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <section key={item.label} className="site-card p-5">
            <p className="text-sm font-bold uppercase text-[color:var(--site-muted)]">{item.label}</p>
            <p className="mt-2 text-3xl font-black text-[color:var(--site-teal-dark)]">{item.value}</p>
          </section>
        ))}
      </div>

      <section className="site-card p-5">
        <h2 className="font-semibold">Recent medical travel leads</h2>
        <div className="mt-4 space-y-2">
          {recentLeads.length ? recentLeads.map((lead) => (
            <div key={lead.id} className="grid gap-2 rounded-lg border border-[color:var(--site-line)] bg-white p-3 text-sm md:grid-cols-5">
              <span>{lead.name}</span>
              <span>{lead.serviceType}</span>
              <span>{lead.status}</span>
              <span>{lead.countryRegion}</span>
              <span>{lead.createdAt.toLocaleDateString()}</span>
            </div>
          )) : <p className="text-sm text-[color:var(--site-muted)]">No leads yet.</p>}
        </div>
      </section>
    </div>
  );
}
