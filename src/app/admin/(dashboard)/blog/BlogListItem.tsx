"use client";

import { ListCard } from "@/components/admin/list";
import { deleteBlogPost } from "./actions";

export function BlogListItem({
  id,
  title,
  category,
}: {
  id: string;
  title: string;
  category: string;
}) {
  return (
    <ListCard
      title={title}
      subtitle={category}
      editHref={`/admin/blog/${id}`}
      onDelete={() => deleteBlogPost(id)}
    />
  );
}
