import { EmptyState } from "@/components/admin/list";
import { listLeads } from "./actions";

function fmtDate(iso?: string): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function LeadsPage() {
  const leads = await listLeads();

  return (
    <div>
      <h1 className="text-2xl font-bold text-pine-900">Enquiry Leads</h1>
      <p className="mt-1 text-sm text-pine-700/65">
        Form submissions from the website, newest first. Read-only.
      </p>

      {leads.length === 0 ? (
        <div className="mt-6">
          <EmptyState message="No enquiries yet." />
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {leads.map((l) => (
            <div key={l._id} className="rounded-2xl border border-pine-700/15 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-pine-900">{l.name || "Unknown"}</p>
                  <p className="text-sm text-pine-700/65">
                    {[l.email, l.phone].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <div className="text-right text-xs text-pine-700/55">
                  <p>{fmtDate(l.submittedAt)}</p>
                  {l.source && <p>via {l.source}</p>}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-4">
                <LeadField label="Destination" value={l.destination} />
                <LeadField label="Intake" value={l.intake} />
                <LeadField label="City" value={l.city} />
                <LeadField label="Age" value={l.age} />
                <LeadField label="Qualification" value={l.qualification} />
                <LeadField label="Degree / course" value={l.degree} />
                <LeadField label="IELTS / PTE score" value={l.score} />
              </div>

              {l.message && (
                <p className="mt-4 rounded-xl bg-bone-deep px-4 py-3 text-sm text-pine-800">
                  {l.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LeadField({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-pine-700/45">{label}</p>
      <p className="font-medium text-pine-900">{value}</p>
    </div>
  );
}
