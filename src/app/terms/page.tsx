import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Terms of Service"
};

export default function TermsPage() {
  return (
    <div className="home-shell py-12">
      <section className="site-card p-6">
        <span className="site-pill">Legal</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm font-bold text-[color:var(--site-muted)]">Last updated: May 26, 2026</p>

        <div className="mt-6 space-y-5 leading-8 text-[color:var(--site-muted)]">
          <p>
            These Terms govern your use of {siteConfig.name}, operated by {siteConfig.legalEntity}. By submitting an inquiry, you agree to use the website and app only for lawful medical travel consultation and coordination purposes.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Scope of Service</h2>
          <p>
            We provide information organization, consultation intake, medical record checklist support, expert or hospital matching coordination, interpreter or travel support coordination and related international patient concierge services.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">No Medical Provider Relationship</h2>
          <p>
            We are not a hospital, clinic, emergency service or medical insurer. Use of this website or app does not create a doctor-patient relationship with us. Diagnosis, treatment decisions and prescriptions must be provided by licensed medical professionals.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Service Availability</h2>
          <p>
            Hospital acceptance, doctor availability, appointment timing, travel requirements, payment requirements and treatment options may change. We do not guarantee that any specific hospital, doctor, appointment, treatment or outcome will be available.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Fees and Refunds</h2>
          <p>
            Any paid service, quote, refund rule, cancellation rule, translation scope, appointment scope, travel support scope or follow-up responsibility must be confirmed in a separate written service agreement before payment.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">User Responsibilities</h2>
          <p>
            You are responsible for providing accurate information, confirming medical record authenticity, obtaining necessary consent from the patient, following travel and visa rules, and seeking urgent local medical care when needed.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Contact</h2>
          <p>
            Service contact: WhatsApp {siteConfig.whatsappDisplay}.
          </p>

          <p className="rounded-lg border border-[color:var(--site-line)] bg-[color:var(--site-panel)] p-4 text-sm">
            This draft should be reviewed by counsel before launch and adapted to your final pricing, refund, payment and service agreement workflow.
          </p>
        </div>
      </section>
    </div>
  );
}
