"use client";

import { ListCard } from "@/components/admin/list";
import { deleteNewsItem } from "./actions";

export function NewsListItem({
  id,
  title,
  category,
  pinned,
}: {
  id: string;
  title: string;
  category: string;
  pinned: boolean;
}) {
  return (
    <ListCard
      title={title}
      subtitle={pinned ? `${category} · Pinned` : category}
      editHref={`/admin/news/${id}`}
      onDelete={() => deleteNewsItem(id)}
    />
  );
}
