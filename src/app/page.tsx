import Link from "next/link";
import { ConsultationLeadForm } from "@/components/forms";
import { siteConfig } from "@/lib/site";

const heroImage =
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=82";

const systemPoints = [
  {
    title: "Tertiary hospital access",
    text: "China's top public hospitals concentrate advanced departments, multidisciplinary teams, surgery capacity and high-volume clinical experience."
  },
  {
    title: "Specialty-first matching",
    text: "Cases are sorted by disease area, urgency, records quality and preferred city before the right doctor or international department is approached."
  },
  {
    title: "Transparent care journey",
    text: "Patients need a clear pathway: records review, appointment options, estimated schedule, interpreter support, payment preparation and follow-up."
  }
];

const hospitalDirections = [
  "Oncology and tumor boards",
  "Cardiology and cardiac surgery",
  "Orthopedics and rehabilitation",
  "Neurology and neurosurgery",
  "Fertility and women's health",
  "Pediatrics and rare disease review"
];

const cityResources = [
  {
    city: "Beijing",
    focus: "National-level comprehensive hospitals, complex diagnosis, oncology, cardiology, neurology."
  },
  {
    city: "Shanghai",
    focus: "International patient services, cancer centers, surgery, rehabilitation and premium medical facilities."
  },
  {
    city: "Guangzhou / Shenzhen",
    focus: "Greater Bay Area access, private clinics, oncology, fertility and cross-border family support."
  },
  {
    city: "Chengdu / Hangzhou",
    focus: "Regional medical hubs, rehabilitation, digital health follow-up and cost-sensitive routes."
  }
];

const process = [
  "SEO or social media landing",
  "Website form or WhatsApp chat",
  "Medical records and case summary",
  "Expert and hospital matching",
  "Plan, quote and China itinerary",
  "Arrival, treatment support and follow-up"
];

const strengths = [
  "Bilingual case managers for first response and document collection",
  "China-side hospital research and appointment coordination workflow",
  "Medical record translation, summary and expert-ready case packet",
  "Travel, accommodation, interpreter and post-visit follow-up support"
];

export default function LandingPage() {
  const whatsappUrl = siteConfig.getWhatsAppUrl("Hello, I would like to consult about medical treatment in China.");

  return (
    <div>
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12, 35, 42, 0.86), rgba(12, 35, 42, 0.44), rgba(12, 35, 42, 0.12)), url(${heroImage})`
        }}
      >
        <div className="home-shell flex min-h-[72vh] items-center py-16">
          <div className="max-w-3xl text-white">
            <span className="site-pill border-white/28 bg-white/14 text-white">China medical travel concierge</span>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Eastern Doctor</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              A focused website and app for international patients who want to understand China's medical system, send a case, connect with suitable experts and receive one-stop support for treatment in China.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#consultation" className="primary-action px-5 py-3">Send a medical case</a>
              <a
                href={whatsappUrl}
                className="light-action px-5 py-3"
              >
                Talk on WhatsApp
              </a>
              <Link href="/app" className="ghost-action px-5 py-3">Open patient app</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--site-line)] bg-white">
        <div className="home-shell grid gap-4 py-6 md:grid-cols-3">
          <div>
            <p className="metric-value">1</p>
            <p className="metric-label">single business focus</p>
          </div>
          <div>
            <p className="metric-value">24h</p>
            <p className="metric-label">target first response workflow</p>
          </div>
          <div>
            <p className="metric-value">End to end</p>
            <p className="metric-label">case, expert, hospital, travel and follow-up</p>
          </div>
        </div>
      </section>

      <section id="system" className="home-shell py-14">
        <div className="section-heading">
          <span className="site-pill">China medical system</span>
          <h2>Explain the system in a way foreign patients can act on.</h2>
          <p>
            The site should not overwhelm visitors with policy detail. It should help them understand where top care sits, how appointments are evaluated, and what they need before talking to a consultant.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {systemPoints.map((item) => (
            <article key={item.title} className="site-card p-5">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--site-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hospitals" className="bg-[color:var(--site-panel)]">
        <div className="home-shell grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-heading mb-0">
            <span className="site-pill">Hospital directions</span>
            <h2>Main hospital and specialty introductions.</h2>
            <p>
              Public content can start with city and specialty guides, then route serious inquiries into a private case review rather than publishing unsupported promises.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hospitalDirections.map((item) => (
                <span key={item} className="tag-chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cityResources.map((item) => (
              <article key={item.city} className="site-card p-5">
                <h3 className="text-xl font-bold">{item.city}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--site-muted)]">{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="home-shell py-14">
        <div className="section-heading">
          <span className="site-pill">Service model</span>
          <h2>From social traffic to a qualified medical travel lead.</h2>
          <p>
            Every module points to one action: send the medical case or start a WhatsApp conversation. The app keeps the same flow for mobile users.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-6">
          {process.map((step, index) => (
            <article key={step} className="process-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="resources" className="bg-white">
        <div className="home-shell grid gap-8 py-14 lg:grid-cols-[1fr_1fr]">
          <div className="site-card image-card min-h-[420px]" />
          <div className="section-heading mb-0 self-center">
            <span className="site-pill">Company strength</span>
            <h2>Show capability without distracting from conversion.</h2>
            <p>
              This version keeps company proof simple: case handling, expert-ready packets, hospital coordination and China arrival support. Real partner names and case outcomes can be added once verified.
            </p>
            <ul className="mt-6 space-y-3">
              {strengths.map((item) => (
                <li key={item} className="check-row">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="consultation" className="home-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="section-heading mb-0">
            <span className="site-pill">Case first</span>
            <h2>Send records first, then match experts.</h2>
            <p>
              The form captures the first lead. A consultant can then request imaging, lab reports, discharge summaries or pathology files by WhatsApp before arranging an expert review.
            </p>
            <div className="mt-6 rounded-lg border border-[color:var(--site-line)] bg-[color:var(--site-panel)] p-4 text-sm leading-7 text-[color:var(--site-muted)]">
              This service supports information organization and medical travel coordination. It does not provide emergency care, diagnosis, prescriptions or guaranteed treatment outcomes.
            </div>
          </div>
          <div className="site-card p-5">
            <ConsultationLeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
