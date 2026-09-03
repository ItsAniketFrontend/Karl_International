"use client";

import { ListCard } from "@/components/admin/list";
import { deleteCountryOverride } from "./actions";

export function CountryListItem({ id, name }: { id: string; name: string }) {
  return (
    <ListCard
      title={name}
      subtitle="Content override"
      editHref={`/admin/countries/${id}`}
      onDelete={() => deleteCountryOverride(id)}
    />
  );
}
