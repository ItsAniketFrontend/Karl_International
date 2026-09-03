import { ListHeader, EmptyState } from "@/components/admin/list";
import { destinations } from "@/lib/data";
import { listIntakePages } from "./actions";
import { IntakeListItem } from "./IntakeListItem";

export default async function IntakeListPage() {
  const pages = await listIntakePages();

  return (
    <div>
      <ListHeader
        title="Intake Pages"
        description="Full landing pages at /study-abroad/[country]/[intake]"
        newHref="/admin/intakes/new"
      />
      {pages.length === 0 ? (
        <EmptyState message="No intake pages yet. Create one to customize an intake landing page." />
      ) : (
        <div className="flex flex-col gap-3">
          {pages.map((p) => {
            const countryName = destinations.find((d) => d.slug === p.country)?.name ?? p.country;
            return (
              <IntakeListItem
                key={p._id}
                id={p._id}
                title={p.name || p.intakeSlug}
                subtitle={`${countryName} · ${p.intakeSlug}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
