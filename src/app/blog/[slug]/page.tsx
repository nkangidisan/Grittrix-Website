
import * as React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader'; // Assuming this component is robust
import { Button } from '@/components/ui/button';

// Minimal data for testing, to avoid complex lookups during build.
// This is NOT used by the simplified component below but kept for context if we reintroduce functionality.
const minimalBlogData: { [key: string]: { title: string; excerpt: string } } = {
  'ai-in-african-healthcare': {
    title: 'AI in African Healthcare (Minimal)',
    excerpt: 'Minimal content for AI in African Healthcare.',
  },
  'future-of-retail-ai': {
    title: 'Future of Retail with AI (Minimal)',
    excerpt: 'Minimal content for the Future of Retail with AI.',
  },
};

// generateMetadata has been removed to simplify and diagnose the build error.
// The page will inherit metadata from parent layouts.

// generateStaticParams remains commented out to reduce complexity.
// export async function generateStaticParams() {
//   return Object.keys(minimalBlogData).map((slug) => ({
//     slug: slug,
//   }));
// }

// Page component props are typed as `any` as a workaround for the persistent build error.
const DynamicBlogPage = (props: any) => {
  const slug = props?.params?.slug as string | undefined;

  // Basic check for slug, actual data fetching is removed for this minimal version.
  if (!slug || !minimalBlogData[slug]) {
     // If you want to show a 404 for invalid slugs even in this minimal version:
     // notFound();
     // return null;
     // For now, let's render a generic message if slug is bad to ensure the component itself can render.
  }

  const postTitle = minimalBlogData[slug]?.title || "Blog Post";
  const postExcerpt = minimalBlogData[slug]?.excerpt || "Content is being processed.";


  return (
    <>
      <PageHeader
        title={postTitle}
        description="A blog post."
        breadcrumbs={[{ name: 'Blog', href: '/blog' }, { name: postTitle }]}
      />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{postTitle}</h1>
            <p className="mb-8">{postExcerpt}</p>
            <div className="prose prose-lg prose-invert text-foreground/90 max-w-none space-y-6">
              <p>This is a simplified content placeholder for the blog post: {slug}</p>
              <p>If this page builds and deploys, the issue is highly specific to the interaction of more complex data fetching or rendering logic with the build environment's type system for this route.</p>
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/blog">← Back to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DynamicBlogPage;
