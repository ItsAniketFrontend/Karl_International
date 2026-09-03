"use client";

import { useState } from "react";
import { Field, inputBase, SubmitButton } from "@/components/admin/form";
import { StringArrayField } from "@/components/admin/ArrayField";
import { ObjectArrayField } from "@/components/admin/ObjectArrayField";
import { destinations } from "@/lib/data";
import type {
  CountryOverrideDoc,
  IntakeSummary,
  Faq,
} from "@/app/admin/(dashboard)/countries/actions";
import { saveCountryOverride } from "@/app/admin/(dashboard)/countries/actions";

function newKey() {
  return Math.random().toString(36).slice(2, 10);
}

export function CountryOverrideForm({ doc }: { doc?: CountryOverrideDoc }) {
  const [topUniversities, setTopUniversities] = useState<string[]>(doc?.topUniversities || []);
  const [popularCourses, setPopularCourses] = useState<string[]>(doc?.popularCourses || []);
  const [scholarships, setScholarships] = useState<string[]>(doc?.scholarships || []);
  const [intakes, setIntakes] = useState<IntakeSummary[]>(doc?.intakes || []);
  const [faqs, setFaqs] = useState<Faq[]>(doc?.faqs || []);

  return (
    <form action={saveCountryOverride} className="flex flex-col gap-5">
      <input type="hidden" name="previousId" value={doc?._id || ""} />
      <input type="hidden" name="topUniversitiesJson" value={JSON.stringify(topUniversities)} />
      <input type="hidden" name="popularCoursesJson" value={JSON.stringify(popularCourses)} />
      <input type="hidden" name="scholarshipsJson" value={JSON.stringify(scholarships)} />
      <input type="hidden" name="intakesJson" value={JSON.stringify(intakes)} />
      <input type="hidden" name="faqsJson" value={JSON.stringify(faqs)} />

      <Field label="Country" htmlFor="country">
        <select
          id="country"
          name="country"
          defaultValue={doc?.country || ""}
          disabled={!!doc}
          required
          className={inputBase}
        >
          <option value="" disabled>
            Select
          </option>
          {destinations.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Intro paragraph" htmlFor="intro" hint="Leave blank to keep the default.">
        <textarea id="intro" name="intro" defaultValue={doc?.intro || ""} rows={4} className={`${inputBase} resize-y`} />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Indicative tuition" htmlFor="costTuition" hint="e.g. £14,000–35,000 / year*">
          <input id="costTuition" name="costTuition" defaultValue={doc?.costTuition || ""} className={inputBase} />
        </Field>
        <Field label="Indicative living cost" htmlFor="costLiving" hint="e.g. £12,000–15,000 / year*">
          <input id="costLiving" name="costLiving" defaultValue={doc?.costLiving || ""} className={inputBase} />
        </Field>
      </div>

      <Field label="Work rights summary" htmlFor="workRights">
        <input id="workRights" name="workRights" defaultValue={doc?.workRights || ""} className={inputBase} />
      </Field>

      <StringArrayField label="Top universities" values={topUniversities} onChange={setTopUniversities} />
      <StringArrayField label="Popular courses" values={popularCourses} onChange={setPopularCourses} />
      <StringArrayField
        label="Scholarships (paragraphs)"
        values={scholarships}
        onChange={setScholarships}
        multiline
      />

      <ObjectArrayField<IntakeSummary>
        label="Intake summaries"
        items={intakes}
        onChange={setIntakes}
        emptyItem={() => ({ _key: newKey(), name: "", months: "", status: "", summary: "" })}
        previewLabel={(item) => item.name || "New intake"}
        fields={[
          { key: "name", label: "Intake name", kind: "text" },
          { key: "months", label: "Months", kind: "text" },
          { key: "status", label: "Status", kind: "text" },
          { key: "summary", label: "Summary", kind: "textarea" },
        ]}
      />

      <ObjectArrayField<Faq>
        label="FAQs"
        items={faqs}
        onChange={setFaqs}
        emptyItem={() => ({ _key: newKey(), q: "", a: "" })}
        previewLabel={(item) => item.q || "New question"}
        fields={[
          { key: "q", label: "Question", kind: "text" },
          { key: "a", label: "Answer", kind: "textarea" },
        ]}
      />

      <div>
        <SubmitButton label={doc ? "Save changes" : "Create country page"} pendingLabel="Saving…" />
      </div>
    </form>
  );
}
