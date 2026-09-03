import { notFound } from "next/navigation";
import { IntakePageForm } from "@/components/admin/IntakePageForm";
import { getIntakePageById } from "../actions";

export default async function EditIntakePagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = await getIntakePageById(id);
  if (!doc) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-pine-900">Edit Intake Page</h1>
      <IntakePageForm doc={doc} />
    </div>
  );
}
