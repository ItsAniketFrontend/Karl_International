import { ListHeader, EmptyState } from "@/components/admin/list";
import { listBlogPosts } from "./actions";
import { BlogListItem } from "./BlogListItem";

export default async function BlogListPage() {
  const posts = await listBlogPosts();

  return (
    <div>
      <ListHeader
        title="Blog Posts"
        description="Articles shown on /blog"
        newHref="/admin/blog/new"
      />
      {posts.length === 0 ? (
        <EmptyState message="No blog posts yet. Create your first one." />
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((p) => (
            <BlogListItem key={p._id} id={p._id} title={p.title} category={p.category} />
          ))}
        </div>
      )}
    </div>
  );
}
