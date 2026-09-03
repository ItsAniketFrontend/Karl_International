import { ListHeader, EmptyState } from "@/components/admin/list";
import { destinations } from "@/lib/data";
import { listCountryOverrides } from "./actions";
import { CountryListItem } from "./CountryListItem";

export default async function CountryListPage() {
  const overrides = await listCountryOverrides();

  return (
    <div>
      <ListHeader
        title="Country Pages"
        description="Overrides for /study-abroad/[country]. Only edited fields replace the built-in defaults."
        newHref="/admin/countries/new"
      />
      {overrides.length === 0 ? (
        <EmptyState message="No country overrides yet. Create one to customize a country page." />
      ) : (
        <div className="flex flex-col gap-3">
          {overrides.map((o) => {
            const name = destinations.find((d) => d.slug === o.country)?.name ?? o.country;
            return <CountryListItem key={o._id} id={o._id} name={name} />;
          })}
        </div>
      )}
    </div>
  );
}
