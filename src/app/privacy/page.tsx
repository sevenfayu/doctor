import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <div className="home-shell py-12">
      <section className="site-card p-6">
        <span className="site-pill">Legal</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm font-bold text-[color:var(--site-muted)]">Last updated: May 26, 2026</p>

        <div className="mt-6 space-y-5 leading-8 text-[color:var(--site-muted)]">
          <p>
            {siteConfig.name} is operated by {siteConfig.legalEntity}. This Privacy Policy explains how we collect and use information when international patients or family members submit inquiries about medical treatment in China.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Information We Collect</h2>
          <p>
            We may collect a contact name, WhatsApp number, email address, phone number, country or region, preferred hospital or city, budget range, urgency level and a description of the medical need. If you later choose to send medical records, those records may include sensitive health information.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">How We Use Information</h2>
          <p>
            We use submitted information to respond to inquiries, organize case intake, prepare record checklists, coordinate possible expert or hospital matching, provide medical travel support information and maintain internal lead records.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Sensitive Medical Information</h2>
          <p>
            Please do not submit full medical records unless our consultant has confirmed the collection method and your consent. We do not sell patient information. Medical information should be shared only when necessary for case organization or coordination.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Sharing</h2>
          <p>
            With your consent or instruction, we may share relevant case information with hospitals, doctors, translators, travel support providers or service partners involved in the requested coordination. We may also disclose information when required by law.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Retention and Deletion</h2>
          <p>
            We keep inquiry records only as long as reasonably needed for follow-up, service coordination, compliance and dispute handling. You may contact us to request correction or deletion of your inquiry information.
          </p>

          <h2 className="text-xl font-bold text-[color:var(--site-ink)]">Contact</h2>
          <p>
            Privacy contact: WhatsApp {siteConfig.whatsappDisplay}.
          </p>

          <p className="rounded-lg border border-[color:var(--site-line)] bg-[color:var(--site-panel)] p-4 text-sm">
            This draft should be reviewed by counsel before launch, especially if you target patients in regions with strict privacy or medical data rules.
          </p>
        </div>
      </section>
    </div>
  );
}
