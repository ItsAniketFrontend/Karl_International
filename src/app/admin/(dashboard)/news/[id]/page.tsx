import { notFound } from "next/navigation";
import { NewsForm } from "@/components/admin/NewsForm";
import { getNewsItemById } from "../actions";

export default async function EditNewsItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getNewsItemById(id);
  if (!item) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-pine-900">Edit News Item</h1>
      <NewsForm item={item} />
    </div>
  );
}
