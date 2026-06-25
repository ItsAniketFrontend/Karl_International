"use client";

import { useState } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { destinations as DEST } from "@/lib/data";

const destinations = DEST.map((d) => d.name);

const qualifications = [
  "Class 12 / High School",
  "Diploma",
  "Bachelor's degree",
  "Master's degree",
  "Other",
];

const intakeOptions = [
  "As soon as possible",
  "Sep / Oct 2026",
  "Jan / Feb 2027",
  "May / Jul 2027",
  "2027 onwards",
  "Just exploring",
];

const scoreOptions = [
  "Not taken yet",
  "IELTS 5.5 – 6.0",
  "IELTS 6.5+",
  "PTE 50 – 64",
  "PTE 65+",
  "Duolingo / Other",
];

type Status = "idle" | "loading" | "done";

const inputBase =
  "w-full rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 placeholder:text-pine-700/45 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-pine-800">
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * Shared enquiry form used by both the inline Counselling section and the popup
 * modal. Demo submission -- wire `onSubmit` to a real endpoint / CRM in production.
 */
export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("phone") || !data.get("email")) {
      setError("Please add your name, email and phone number.");
      return;
    }
    setError("");
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1100);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <CheckCircle size={56} weight="fill" className="text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-pine-900">Request received</h3>
        <p className="mt-2 max-w-xs text-sm text-pine-700/75">
          Thanks. A senior counsellor will reach out within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Field label="Full name" htmlFor="name">
        <input id="name" name="name" type="text" placeholder="e.g. Ananya Rathore" className={inputBase} />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" placeholder="you@email.com" className={inputBase} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+91 98xxxxxxxx" className={inputBase} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Age" htmlFor="age">
          <input id="age" name="age" type="number" min={14} max={70} placeholder="e.g. 21" className={inputBase} />
        </Field>
        <Field label="Highest qualification" htmlFor="qualification">
          <select id="qualification" name="qualification" defaultValue="" className={inputBase}>
            <option value="" disabled>Select</option>
            {qualifications.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name of degree / course" htmlFor="degree">
          <input id="degree" name="degree" type="text" placeholder="e.g. B.Tech CSE" className={inputBase} />
        </Field>
        <Field label="Current city" htmlFor="city">
          <input id="city" name="city" type="text" placeholder="e.g. Jaipur" className={inputBase} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Preferred destination" htmlFor="destination">
          <select id="destination" name="destination" defaultValue="" className={inputBase}>
            <option value="" disabled>Select</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred intake" htmlFor="intake">
          <select id="intake" name="intake" defaultValue="" className={inputBase}>
            <option value="" disabled>Select</option>
            {intakeOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="IELTS / PTE score (if available)" htmlFor="score">
        <select id="score" name="score" defaultValue="" className={inputBase}>
          <option value="" disabled>Select</option>
          {scoreOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </Field>

      <Field label="Your message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Tell us what you are looking for..."
          className={`${inputBase} resize-none`}
        />
      </Field>

      {error && <p className="text-sm font-medium text-coral-500">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <CircleNotch size={20} className="animate-spin" />
            Sending
          </>
        ) : (
          "Request my callback"
        )}
      </button>
      <p className="text-center text-xs text-pine-700/60">
        We never share your details. One call, that is it.
      </p>
    </form>
  );
}
