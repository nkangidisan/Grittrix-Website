
import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link'; // Keep for breadcrumbs/back button if needed
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button'; // Keep for back button if needed

// Minimal data for testing, to avoid complex lookups during build
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!params || !params.slug) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
      description: 'The requested blog post could not be found or the URL is invalid.',
    };
  }
  const slug = params.slug;
  const postData = minimalBlogData[slug];

  if (!postData) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
      description: `The blog post with slug "${slug}" does not exist.`,
    };
  }

  return {
    title: `${postData.title} | Grittrix Blog`,
    description: postData.excerpt,
  };
}

// export async function generateStaticParams() {
//   return Object.keys(minimalBlogData).map((slug) => ({
//     slug: slug,
//   }));
// }

const DynamicBlogPage = (props: any) => {
  const slug = props?.params?.slug as string | undefined;

  if (!slug) {
    notFound();
    return null;
  }

  const postData = minimalBlogData[slug];

  if (!postData) {
    notFound();
    return null;
  }

  return (
    <>
      <PageHeader
        title={postData.title}
        description={postData.excerpt}
        breadcrumbs={[{ name: 'Blog', href: '/blog' }, { name: postData.title }]}
      />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
            <p className="mb-8">{postData.excerpt}</p>
            <div className="prose prose-lg prose-invert text-foreground/90 max-w-none space-y-6">
              <p>This is simplified content for the blog post titled "{postData.title}".</p>
              <p>Actual blog post content rendering is temporarily simplified to isolate build issues. If this builds, the original content structure can be carefully reintroduced.</p>
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
