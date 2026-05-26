import Link from "next/link";
import { ConsultationLeadForm } from "@/components/forms";
import { siteConfig } from "@/lib/site";

const appSteps = [
  {
    title: "Send case",
    text: "Capture diagnosis, current reports, preferred city, budget range and urgency."
  },
  {
    title: "Build packet",
    text: "Turn scattered records into a concise expert-ready summary for hospital triage."
  },
  {
    title: "Match expert",
    text: "Coordinate suitable specialties, doctors, hospital departments and appointment routes."
  },
  {
    title: "Plan arrival",
    text: "Prepare interpreter, airport transfer, accommodation, payment notes and follow-up tasks."
  }
];

const checklist = [
  "Passport name and country",
  "Diagnosis or suspected condition",
  "Imaging, lab and pathology reports",
  "Treatment history and medications",
  "Preferred visit dates and city",
  "WhatsApp contact for fast follow-up"
];

export default function PatientAppPage() {
  const whatsappUrl = siteConfig.getWhatsAppUrl("Hello, I would like to send my medical case for China treatment consultation.");

  return (
    <div className="home-shell py-10">
      <section className="grid min-w-0 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="section-heading mb-0 min-w-0">
          <span className="site-pill">Patient app</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">One mobile flow for coming to China for care.</h1>
          <p>
            The App is not a separate business. It is the same conversion system in a simpler mobile workflow: submit case, complete records, connect experts and track China visit preparation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#app-intake" className="primary-action px-5 py-3">Start intake</a>
            <Link href="/" className="secondary-action px-5 py-3">Back to website</Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[21rem] min-w-0 rounded-[2rem] border border-[color:var(--site-line)] bg-[color:var(--site-ink)] p-3 shadow-2xl">
          <div className="rounded-[1.5rem] bg-white p-4">
            <div className="flex items-center justify-between border-b border-[color:var(--site-line)] pb-3">
              <div>
                <p className="text-xs font-bold uppercase text-[color:var(--site-muted)]">Eastern Doctor App</p>
                <p className="font-bold">Case dashboard</p>
              </div>
              <span className="rounded-full bg-[color:var(--site-panel)] px-3 py-1 text-xs font-bold text-[color:var(--site-teal-dark)]">New</span>
            </div>
            <div className="mt-4 space-y-3">
              {appSteps.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-[color:var(--site-line)] p-3">
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-[color:var(--site-panel)] text-sm font-black text-[color:var(--site-teal-dark)]">{index + 1}</span>
                    <div>
                      <h2 className="text-sm font-bold">{item.title}</h2>
                      <p className="mt-1 text-xs leading-5 text-[color:var(--site-muted)]">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              href={whatsappUrl}
              className="primary-action mt-4 w-full px-4 py-3"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {appSteps.map((item) => (
          <article key={item.title} className="site-card p-5">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--site-muted)]">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="site-card p-5">
          <span className="site-pill">Record checklist</span>
          <h2 className="mt-4 text-2xl font-bold">What the consultant asks for first.</h2>
          <ul className="mt-5 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="check-row">{item}</li>
            ))}
          </ul>
        </div>
        <div id="app-intake" className="site-card p-5">
          <span className="site-pill">Mobile intake</span>
          <h2 className="mt-4 text-2xl font-bold">Submit a case from the App.</h2>
          <p className="mt-2 text-sm leading-7 text-[color:var(--site-muted)]">
            After this form, the operating team can move the patient to WhatsApp and collect reports for expert review.
          </p>
          <div className="mt-5">
            <ConsultationLeadForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
