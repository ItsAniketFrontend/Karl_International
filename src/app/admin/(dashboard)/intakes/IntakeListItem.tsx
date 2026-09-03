"use client";

import { ListCard } from "@/components/admin/list";
import { deleteIntakePage } from "./actions";

export function IntakeListItem({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <ListCard
      title={title}
      subtitle={subtitle}
      editHref={`/admin/intakes/${id}`}
      onDelete={() => deleteIntakePage(id)}
    />
  );
}
