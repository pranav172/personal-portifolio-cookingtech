import { Metadata } from "next";
import { notFound } from "next/navigation";

// This is a placeholder for future MDX blog posts
// The actual implementation would use MDX files from /content/writing

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // In the future, this would fetch the actual post title
  return {
    title: `${slug} | Writing | Pranav Raj`,
    description: "An essay by Pranav Raj",
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  // For now, return 404 since there are no posts yet
  // In the future, this would render the MDX content
  notFound();
  
  return (
    <article className="px-6 py-16 max-w-2xl mx-auto prose prose-slate dark:prose-invert">
      <h1>{slug}</h1>
      {/* MDX content would go here */}
    </article>
  );
}
