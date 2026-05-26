import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Medical Disclaimer"
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="home-shell py-12">
      <section className="site-card p-6">
        <span className="site-pill">Medical boundary</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Medical Disclaimer</h1>
        <p className="mt-2 text-sm font-bold text-[color:var(--site-muted)]">Last updated: May 26, 2026</p>

        <div className="mt-6 space-y-5 leading-8 text-[color:var(--site-muted)]">
          <p>
            {siteConfig.name}, operated by {siteConfig.legalEntity}, provides medical travel consultation intake and coordination support for patients considering treatment in China.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Not Emergency Care</h2>
          <p>
            This website, app and WhatsApp consultation flow are not emergency medical services. If a patient has severe, worsening or urgent symptoms, contact local emergency services or visit a qualified medical facility immediately.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">No Diagnosis or Prescription</h2>
          <p>
            We do not provide medical diagnosis, prescriptions, treatment plans or guarantees of treatment outcomes. Information shared through this service is used for case organization and coordination only.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Independent Medical Judgment</h2>
          <p>
            All medical decisions must be made by licensed doctors or medical institutions after appropriate examination, review of medical records and patient consent. Any hospital or doctor may decline a case or require further evaluation.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">No Guaranteed Access or Outcome</h2>
          <p>
            We may help coordinate communication, appointment routes, translation, travel preparation and follow-up logistics. We do not guarantee hospital acceptance, doctor availability, appointment timing, visa approval, cost, treatment success or recovery.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Claims and References</h2>
          <p>
            Hospital names, expert names, case outcomes, partner relationships and success stories should only be published or relied on after written verification and permission from the relevant parties.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Contact</h2>
          <p>
            For coordination inquiries, contact us by WhatsApp: {siteConfig.whatsappDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
