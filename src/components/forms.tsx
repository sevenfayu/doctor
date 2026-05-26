"use client";

import { useState } from "react";
import { SERVICE_TYPES } from "@/lib/types";

function submitJson(url: string, payload: unknown) {
  return fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span>{label}</span>
      {children}
    </label>
  );
}

function FormStatus({ msg }: { msg: string }) {
  if (!msg) return null;
  return <p className="text-sm font-semibold text-[color:var(--site-muted)]">{msg}</p>;
}

export function ConsultationLeadForm({ compact = false }: { compact?: boolean }) {
  const [msg, setMsg] = useState("");

  return (
    <form
      className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}
      onSubmit={async (e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const res = await submitJson("/api/consultation", Object.fromEntries(f.entries()));
        setMsg(res.ok ? "Case received. Our consultant can follow up by WhatsApp or email." : "Submit failed. Please try WhatsApp.");
      }}
    >
      <Field label="Request type">
        <select name="serviceType" defaultValue="caseReview">
          {Object.entries(SERVICE_TYPES).map(([key, label]) => (
            <option value={key} key={key}>{label}</option>
          ))}
        </select>
      </Field>
      <Field label="Patient or contact name"><input name="name" autoComplete="name" required /></Field>
      <Field label="WhatsApp / email / phone"><input name="contact" placeholder="+1 ... / name@email.com" autoComplete="email" required /></Field>
      <Field label="Country / region"><input name="countryRegion" placeholder="United States, UAE, Indonesia..." required /></Field>
      <Field label="Preferred city or hospital"><input name="targetHospital" placeholder="Beijing, Shanghai, specific hospital..." /></Field>
      <Field label="Budget range"><input name="budget" placeholder="Optional" /></Field>
      <Field label="Urgency">
        <select name="urgency" defaultValue="normal">
          <option value="normal">Planning stage</option>
          <option value="soon">Need follow-up soon</option>
          <option value="urgent">Urgent callback request</option>
        </select>
      </Field>
      <label className={compact ? "space-y-1" : "md:col-span-2 space-y-1"}>
        <span>Medical need and current records</span>
        <textarea name="message" placeholder="Diagnosis or suspected condition, treatment goal, current reports, preferred time to visit China..." required />
      </label>
      <input className="hidden" tabIndex={-1} autoComplete="off" name="companyWebsite" aria-hidden="true" />
      <input type="hidden" name="source" value="website" />
      <input type="hidden" name="locale" value="en-US" />
      <div className={compact ? "flex flex-wrap items-center gap-3" : "md:col-span-2 flex flex-wrap items-center gap-3"}>
        <button className="primary-action">Submit case</button>
        <FormStatus msg={msg} />
      </div>
    </form>
  );
}
