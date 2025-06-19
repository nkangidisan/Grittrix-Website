
import type { Metadata, ResolvingMetadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
// import { blogPosts } from '@/app/blog/page'; // Removed this import
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, UserCircle, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

// Define blogPosts data locally within this file
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-in-african-healthcare',
    title: 'The Transformative Power of AI in African Healthcare',
    excerpt: 'Exploring how AI is revolutionizing diagnostics, treatment, and healthcare management across Africa, improving access and outcomes.',
    author: 'Nkangi Disan',
    date: '2024-05-15',
    imageUrl: '/media/AfricanHealthcare.jpg',
    category: 'Healthcare AI',
  },
  {
    id: '2',
    slug: 'future-of-retail-ai',
    title: 'The Future of Retail: Personalized Experiences with AI',
    excerpt: 'Discover how AI is reshaping the retail landscape, from personalized customer journeys to optimized supply chains and inventory management.',
    author: 'Lubega Mahad',
    date: '2024-05-20',
    imageUrl: '/media/ExperienceswithAI.png',
    category: 'Retail Tech',
  },
  {
    id: '3',
    slug: 'precision-agriculture-africa',
    title: 'Precision Agriculture: AI for Sustainable Farming in Africa',
    excerpt: 'Learn how AI-driven insights are helping African farmers increase yields, optimize resources, and promote sustainable agricultural practices.',
    author: 'Ashumbusha Emmanuel',
    date: '2024-05-25',
    imageUrl: '/media/FarmingAfrica.png',
    category: 'AgriTech',
  },
  {
    id: '4',
    slug: 'ai-edtech-emerging-markets',
    title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets',
    excerpt: 'How AI is creating personalized learning experiences and improving educational access and quality in emerging economies.',
    author: 'Juma Bakari',
    date: '2024-05-28',
    imageUrl: '/media/EmergingMarket.jpg',
    category: 'EdTech',
  },
];


const fullBlogContent: { [key: string]: string[] } = {
  'ai-in-african-healthcare': [
    "The healthcare landscape in Africa is undergoing a significant transformation, and Artificial Intelligence (AI) is at the forefront of this revolution. From enhancing diagnostic capabilities to improving access to care in remote areas, AI offers unprecedented opportunities to address long-standing challenges.",
    "One of the most impactful applications of AI in African healthcare is in medical imaging. AI algorithms can analyze X-rays, CT scans, and other medical images with remarkable speed and accuracy, aiding doctors in detecting diseases like tuberculosis, pneumonia, and certain cancers at earlier stages. This is particularly crucial in regions with a shortage of radiologists.",
    "Furthermore, AI-powered predictive analytics can help in identifying potential disease outbreaks, managing patient flow in hospitals, and personalizing treatment plans. Mobile health applications integrated with AI are also bridging the gap in healthcare accessibility, providing remote consultations and health monitoring.",
    "However, the adoption of AI in African healthcare is not without its challenges. Issues such as data privacy, infrastructure limitations, the need for skilled AI professionals, and ethical considerations need to be carefully addressed. Collaborative efforts between governments, private sector innovators like Grittrix, and healthcare providers are essential to navigate these complexities and unlock the full potential of AI for a healthier Africa.",
  ],
  'future-of-retail-ai': [
    "The retail sector in emerging markets is rapidly evolving, driven by changing consumer behaviors and technological advancements. Artificial Intelligence (AI) is playing a pivotal role in this transformation, enabling retailers to offer more personalized experiences, optimize operations, and make smarter decisions.",
    "AI-driven personalization engines analyze vast amounts of customer data – purchase history, browsing behavior, demographics – to deliver tailored product recommendations, targeted promotions, and customized content. This not only enhances customer engagement but also significantly boosts conversion rates and loyalty.",
    "Beyond customer-facing applications, AI is revolutionizing back-end retail operations. Intelligent demand forecasting models help optimize inventory levels, reducing both overstocking and stockouts. AI algorithms can also streamline supply chain logistics, predict equipment maintenance needs, and even assist in dynamic pricing strategies.",
    "Grittrix is committed to empowering retailers in Africa and other emerging markets with these advanced AI tools, helping them compete effectively and thrive in the digital age. The journey involves adapting global AI trends to local contexts, ensuring solutions are accessible, affordable, and impactful.",
  ],
   'precision-agriculture-africa': [
    "Agriculture is the backbone of many African economies, yet it faces numerous challenges, from climate change variability to pest infestations and resource inefficiencies. Artificial Intelligence (AI) is emerging as a powerful ally for farmers, ushering in an era of precision agriculture.",
    "AI, combined with data from satellites, drones, and on-ground sensors, enables farmers to monitor crop health in real-time, detect early signs of stress or disease, and make informed decisions about irrigation, fertilization, and pest control. This targeted approach, known as precision agriculture, minimizes waste, reduces environmental impact, and significantly improves crop yields.",
    "Machine learning models can analyze historical weather patterns, soil data, and crop performance to provide accurate yield predictions and planting recommendations. AI-powered platforms can also connect farmers directly to markets, providing transparent pricing information and reducing reliance on intermediaries.",
    "At Grittrix, we are developing AI solutions like Grittrix Agro™ to make these technologies accessible to farmers of all scales. By empowering them with data-driven insights, we aim to enhance food security, promote sustainable farming practices, and improve livelihoods across the continent.",
  ],
  'ai-edtech-emerging-markets': [
    "Education technology (EdTech), supercharged by Artificial Intelligence (AI), holds immense promise for transforming learning experiences and outcomes, particularly in emerging markets where access to quality education can be limited.",
    "AI-powered adaptive learning platforms are at the heart of this revolution. These systems can tailor educational content, pace, and teaching methodologies to individual student needs, learning styles, and progress. This personalization ensures that students are neither overwhelmed nor bored, leading to better engagement and knowledge retention.",
    "Intelligent tutoring systems, often integrated into these platforms, can provide students with instant feedback, guidance, and support, mimicking the benefits of one-on-one tuition. For educators, AI can automate administrative tasks like grading, freeing up their time to focus on more impactful teaching activities and student interaction.",
    "Grittrix Learn™ is an example of how AI can be leveraged to create such adaptive and personalized educational tools. Our focus is on developing solutions that are not only technologically advanced but also culturally relevant and accessible, helping to bridge educational gaps and equip learners with the skills needed for the future.",
  ],
};

// Props for generateMetadata function
interface GenerateMetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = blogPosts.find(p => p.slug === slug); // Uses local blogPosts

  if (!post) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  
  const domain = (await parent).metadataBase || new URL('https://grittrix.com');
  const absoluteImageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : new URL(post.imageUrl, domain).toString();


  return {
    title: `${post.title} | Grittrix Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: absoluteImageUrl, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [absoluteImageUrl],
    },
  };
}

// Interface for the props of the BlogPostPage component
// Simplified to only include params, as searchParams was the point of error.
// searchParams are still available to the component if needed, but not explicitly typed here
// to avoid conflict with the build environment's PageProps expectations.
interface BlogPostPageProps {
  params: { slug: string; };
  // searchParams?: { [key: string]: string | string[] | undefined }; // Removed from explicit props
}

// Default export for the page component
export default function BlogPostPage({ params }: BlogPostPageProps): JSX.Element {
  // At runtime, we still expect params.slug to be a string.
  const slug = params?.slug;

  if (typeof slug !== 'string') {
      console.error("BlogPostPage: slug is not a string or is undefined in params", params);
      notFound();
  }

  const post = blogPosts.find(p => p.slug === slug); // Uses local blogPosts

  if (!post) {
    notFound();
  }

  const contentParagraphs = fullBlogContent[post.slug] || [post.excerpt, "Full content coming soon..."];

  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: post.title }
  ];
  
  const featuredImageUrl = post.imageUrl;

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={breadcrumbs}
      />
      <div className="relative h-64 md:h-96 w-full">
        <Image
            src={featuredImageUrl}
            alt={`Blog post illustration for ${post.title}`}
            fill
            className="object-cover"
            priority
            data-ai-hint="blog abstract"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <div className="container mx-auto">
                 <div className="mb-2 text-sm text-primary font-semibold uppercase tracking-wider flex items-center">
                     <Tag className="h-4 w-4 mr-1.5" /> {post.category}
                  </div>
                <h1 className="text-3xl md:text-4xl font-bold font-headline text-white mb-2">{post.title}</h1>
                <div className="text-sm text-gray-300 flex flex-wrap gap-x-4 gap-y-1">
                    <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> {post.author}</span>
                    <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert text-foreground/80 max-w-none space-y-6">
              {contentParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border/50 flex justify-end items-center">
                <Button variant="outline" className="hover:bg-primary/10 hover:text-primary">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ // Uses local blogPosts
    slug: post.slug,
  }));
}

    