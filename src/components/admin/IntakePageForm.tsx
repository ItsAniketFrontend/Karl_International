"use client";

import { useState } from "react";
import { Field, inputBase, Section, SubmitButton } from "@/components/admin/form";
import { StringArrayField } from "@/components/admin/ArrayField";
import { ObjectArrayField } from "@/components/admin/ObjectArrayField";
import { destinations } from "@/lib/data";
import type {
  IntakePageDoc,
  WhyChoose,
  TimelineStep,
  CourseCategory,
  University,
  Eligibility,
  ApplyStep,
  Comparison,
  Faq,
} from "@/app/admin/(dashboard)/intakes/actions";
import { saveIntakePage } from "@/app/admin/(dashboard)/intakes/actions";

function newKey() {
  return Math.random().toString(36).slice(2, 10);
}

export function IntakePageForm({ doc }: { doc?: IntakePageDoc }) {
  const [intro, setIntro] = useState<string[]>(doc?.intro || []);
  const [whatIsIt, setWhatIsIt] = useState<string[]>(doc?.whatIsIt || []);
  const [whyChoose, setWhyChoose] = useState<WhyChoose[]>(doc?.whyChoose || []);
  const [timeline, setTimeline] = useState<TimelineStep[]>(doc?.timeline || []);
  const [deadlines, setDeadlines] = useState<string[]>(doc?.deadlines || []);
  const [courseCategories, setCourseCategories] = useState<CourseCategory[]>(
    doc?.courseCategories || [],
  );
  const [universities, setUniversities] = useState<University[]>(doc?.universities || []);
  const [eligibility, setEligibility] = useState<Eligibility[]>(doc?.eligibility || []);
  const [englishTests, setEnglishTests] = useState<string[]>(doc?.englishTests || []);
  const [documents, setDocuments] = useState<string[]>(doc?.documents || []);
  const [applySteps, setApplySteps] = useState<ApplyStep[]>(doc?.applySteps || []);
  const [scholarships, setScholarships] = useState<string[]>(doc?.scholarships || []);
  const [comparison, setComparison] = useState<Comparison[]>(doc?.comparison || []);
  const [verdict, setVerdict] = useState<string[]>(doc?.verdict || []);
  const [faqs, setFaqs] = useState<Faq[]>(doc?.faqs || []);

  return (
    <form action={saveIntakePage} className="flex flex-col gap-5">
      <input type="hidden" name="previousId" value={doc?._id || ""} />
      <input type="hidden" name="introJson" value={JSON.stringify(intro)} />
      <input type="hidden" name="whatIsItJson" value={JSON.stringify(whatIsIt)} />
      <input type="hidden" name="whyChooseJson" value={JSON.stringify(whyChoose)} />
      <input type="hidden" name="timelineJson" value={JSON.stringify(timeline)} />
      <input type="hidden" name="deadlinesJson" value={JSON.stringify(deadlines)} />
      <input type="hidden" name="courseCategoriesJson" value={JSON.stringify(courseCategories)} />
      <input type="hidden" name="universitiesJson" value={JSON.stringify(universities)} />
      <input type="hidden" name="eligibilityJson" value={JSON.stringify(eligibility)} />
      <input type="hidden" name="englishTestsJson" value={JSON.stringify(englishTests)} />
      <input type="hidden" name="documentsJson" value={JSON.stringify(documents)} />
      <input type="hidden" name="applyStepsJson" value={JSON.stringify(applySteps)} />
      <input type="hidden" name="scholarshipsJson" value={JSON.stringify(scholarships)} />
      <input type="hidden" name="comparisonJson" value={JSON.stringify(comparison)} />
      <input type="hidden" name="verdictJson" value={JSON.stringify(verdict)} />
      <input type="hidden" name="faqsJson" value={JSON.stringify(faqs)} />

      <Section title="Basics" defaultOpen>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            <Field label="Intake slug" htmlFor="intakeSlug" hint="Matches the URL, e.g. september-intake-2027">
              <input
                id="intakeSlug"
                name="intakeSlug"
                defaultValue={doc?.intakeSlug || ""}
                disabled={!!doc}
                required
                className={inputBase}
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Intake name" htmlFor="name" hint='e.g. "September Intake"'>
              <input id="name" name="name" defaultValue={doc?.name || ""} className={inputBase} />
            </Field>
            <Field label="Season" htmlFor="season" hint='e.g. "Autumn / Fall"'>
              <input id="season" name="season" defaultValue={doc?.season || ""} className={inputBase} />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Months" htmlFor="months" hint='e.g. "September – October 2027"'>
              <input id="months" name="months" defaultValue={doc?.months || ""} className={inputBase} />
            </Field>
            <Field label="Status" htmlFor="status" hint='e.g. "Main intake"'>
              <input id="status" name="status" defaultValue={doc?.status || ""} className={inputBase} />
            </Field>
          </div>
          <Field label="Summary" htmlFor="summary" hint="1-2 line teaser used on the country page">
            <textarea
              id="summary"
              name="summary"
              defaultValue={doc?.summary || ""}
              rows={2}
              className={`${inputBase} resize-y`}
            />
          </Field>
        </div>
      </Section>

      <Section title="Intro / What Is It">
        <div className="flex flex-col gap-5">
          <StringArrayField label="Intro paragraphs" values={intro} onChange={setIntro} multiline />
          <StringArrayField
            label='"What is this intake?" paragraphs'
            values={whatIsIt}
            onChange={setWhatIsIt}
            multiline
          />
        </div>
      </Section>

      <Section title="Why Choose">
        <ObjectArrayField<WhyChoose>
          label="Why choose this intake"
          items={whyChoose}
          onChange={setWhyChoose}
          emptyItem={() => ({ _key: newKey(), title: "", desc: "" })}
          previewLabel={(item) => item.title || "New reason"}
          fields={[
            { key: "title", label: "Title", kind: "text" },
            { key: "desc", label: "Description", kind: "textarea" },
          ]}
        />
      </Section>

      <Section title="Timeline">
        <ObjectArrayField<TimelineStep>
          label="Application timeline"
          items={timeline}
          onChange={setTimeline}
          emptyItem={() => ({ _key: newKey(), period: "", tasks: [] })}
          previewLabel={(item) => item.period || "New period"}
          fields={[
            { key: "period", label: "Period", kind: "text" },
            { key: "tasks", label: "Tasks", kind: "stringArray" },
          ]}
        />
      </Section>

      <Section title="Deadlines">
        <StringArrayField
          label="Deadlines (paragraphs)"
          values={deadlines}
          onChange={setDeadlines}
          multiline
        />
      </Section>

      <Section title="Courses">
        <ObjectArrayField<CourseCategory>
          label="Course categories"
          items={courseCategories}
          onChange={setCourseCategories}
          emptyItem={() => ({ _key: newKey(), category: "", courses: [] })}
          previewLabel={(item) => item.category || "New category"}
          fields={[
            { key: "category", label: "Category", kind: "text" },
            { key: "courses", label: "Courses", kind: "stringArray" },
          ]}
        />
      </Section>

      <Section title="Universities">
        <ObjectArrayField<University>
          label="Universities"
          items={universities}
          onChange={setUniversities}
          emptyItem={() => ({ _key: newKey(), name: "", note: "" })}
          previewLabel={(item) => item.name || "New university"}
          fields={[
            { key: "name", label: "Name", kind: "text" },
            { key: "note", label: "Note", kind: "text" },
          ]}
        />
      </Section>

      <Section title="Eligibility">
        <ObjectArrayField<Eligibility>
          label="Eligibility"
          items={eligibility}
          onChange={setEligibility}
          emptyItem={() => ({ _key: newKey(), label: "", points: [] })}
          previewLabel={(item) => item.label || "New requirement"}
          fields={[
            { key: "label", label: "Label", kind: "text" },
            { key: "points", label: "Points", kind: "stringArray" },
          ]}
        />
      </Section>

      <Section title="Tests & Documents">
        <div className="flex flex-col gap-5">
          <StringArrayField label="English tests" values={englishTests} onChange={setEnglishTests} />
          <StringArrayField label="Documents" values={documents} onChange={setDocuments} />
        </div>
      </Section>

      <Section title="Apply Steps">
        <ObjectArrayField<ApplyStep>
          label="How to apply (steps)"
          items={applySteps}
          onChange={setApplySteps}
          emptyItem={() => ({ _key: newKey(), title: "", desc: "" })}
          previewLabel={(item) => item.title || "New step"}
          fields={[
            { key: "title", label: "Title", kind: "text" },
            { key: "desc", label: "Description", kind: "textarea" },
          ]}
        />
      </Section>

      <Section title="Scholarships">
        <StringArrayField
          label="Scholarships (paragraphs)"
          values={scholarships}
          onChange={setScholarships}
          multiline
        />
      </Section>

      <Section title="Comparison">
        <div className="flex flex-col gap-4">
          <Field
            label="Comparison main-intake label"
            htmlFor="comparisonMainLabel"
            hint='e.g. "September Intake"'
          >
            <input
              id="comparisonMainLabel"
              name="comparisonMainLabel"
              defaultValue={doc?.comparisonMainLabel || ""}
              className={inputBase}
            />
          </Field>
          <ObjectArrayField<Comparison>
            label="Comparison table"
            items={comparison}
            onChange={setComparison}
            emptyItem={() => ({ _key: newKey(), factor: "", thisIntake: "", mainIntake: "" })}
            previewLabel={(item) => item.factor || "New factor"}
            fields={[
              { key: "factor", label: "Factor", kind: "text" },
              { key: "thisIntake", label: "This intake", kind: "text" },
              { key: "mainIntake", label: "Main intake", kind: "text" },
            ]}
          />
        </div>
      </Section>

      <Section title="Verdict">
        <StringArrayField label="Verdict paragraphs" values={verdict} onChange={setVerdict} multiline />
      </Section>

      <Section title="FAQs">
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
      </Section>

      <div>
        <SubmitButton label={doc ? "Save changes" : "Create intake page"} pendingLabel="Saving…" />
      </div>
    </form>
  );
}
