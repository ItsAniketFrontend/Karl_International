import { notFound } from "next/navigation";
import { BlogForm } from "@/components/admin/BlogForm";
import { getBlogPostById } from "../actions";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-pine-900">Edit Blog Post</h1>
      <BlogForm post={post} />
    </div>
  );
}
