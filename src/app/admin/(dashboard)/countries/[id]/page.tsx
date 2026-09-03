import { notFound } from "next/navigation";
import { CountryOverrideForm } from "@/components/admin/CountryOverrideForm";
import { getCountryOverrideById } from "../actions";

export default async function EditCountryOverridePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = await getCountryOverrideById(id);
  if (!doc) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-pine-900">Edit Country Page</h1>
      <CountryOverrideForm doc={doc} />
    </div>
  );
}
