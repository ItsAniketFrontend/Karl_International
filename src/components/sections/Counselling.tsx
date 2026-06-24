"use client";

import { useState } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/Reveal";

const destinations = [
  "Canada", "United Kingdom", "Australia", "Germany",
  "Ireland", "United States", "New Zealand", "France",
];

type Status = "idle" | "loading" | "done";

export function Counselling() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("phone")) {
      setError("Please add your name and phone number.");
      return;
    }
    setError("");
    setStatus("loading");
    // Demo submission. Wire to a real endpoint / CRM in production.
    setTimeout(() => setStatus("done"), 1100);
  }

  return (
    <section id="counselling" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-emerald-600">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-[3.25rem]">
                Book a free counselling session
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
                Tell us where you want to study. A senior counsellor will call you back
                within one working day with a clear, no-pressure plan.
              </p>
              <ul className="mt-8 space-y-3">
                {["No fee, no obligation", "Honest course and budget advice", "Visa-readiness check included"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/90">
                    <CheckCircle size={22} weight="fill" className="text-gold-300" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-white p-6 sm:p-8">
                {status === "done" ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <CheckCircle size={56} weight="fill" className="text-emerald-600" />
                    <h3 className="mt-4 font-display text-xl font-bold text-pine-900">
                      Request received
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-pine-700/75">
                      Thanks. A counsellor will reach out within one working day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-pine-800">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. Ananya Rathore"
                        className="rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 placeholder:text-pine-700/45 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-pine-800">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98xxxxxxxx"
                          className="rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 placeholder:text-pine-700/45 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="destination" className="text-sm font-semibold text-pine-800">
                          Destination
                        </label>
                        <select
                          id="destination"
                          name="destination"
                          defaultValue=""
                          className="rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          {destinations.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {error && (
                      <p className="text-sm font-medium text-emerald-700">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:opacity-70"
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
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
