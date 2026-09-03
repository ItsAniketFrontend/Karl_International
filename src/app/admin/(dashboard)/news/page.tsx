import { ListHeader, EmptyState } from "@/components/admin/list";
import { listNewsItems } from "./actions";
import { NewsListItem } from "./NewsListItem";

export default async function NewsListPage() {
  const items = await listNewsItems();

  return (
    <div>
      <ListHeader
        title="News & Updates"
        description="Announcements shown on /news"
        newHref="/admin/news/new"
      />
      {items.length === 0 ? (
        <EmptyState message="No news items yet. Create your first one." />
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((n) => (
            <NewsListItem
              key={n._id}
              id={n._id}
              title={n.title}
              category={n.category}
              pinned={n.pinned}
            />
          ))}
        </div>
      )}
    </div>
  );
}
