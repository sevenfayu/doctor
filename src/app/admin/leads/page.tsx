import { LEAD_STATUSES } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function LeadManagementPage() {
  const leads = await prisma.consultationLead.findMany({ take: 100, orderBy: { createdAt: "desc" } });

  return (
    <div className="home-shell space-y-6">
      <section className="home-card p-6">
        <span className="site-pill">Follow-up room</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Medical Travel Lead Management</h1>
        <p className="mt-2 text-[color:var(--site-muted)]">Pipeline statuses: {LEAD_STATUSES.join(", ")}</p>
      </section>
      <section className="home-card overflow-x-auto p-5">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[color:var(--home-line)]">
              <th className="py-2">Name</th>
              <th>Type</th>
              <th>Contact</th>
              <th>Region</th>
              <th>Status</th>
              <th>Urgency</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-[color:var(--home-line)] align-top">
                <td className="py-3 font-medium">{lead.name}</td>
                <td>{lead.serviceType}</td>
                <td>{lead.contact}</td>
                <td>{lead.countryRegion}</td>
                <td>{lead.status}</td>
                <td>{lead.urgency}</td>
                <td className="max-w-sm">{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
