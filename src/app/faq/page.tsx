
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Scale } from 'lucide-react';
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: 'FAQ & Knowledge Base | Grittrix Technologies',
  description: 'Find answers to common questions about Grittrix AI solutions, our services in emerging markets, and our terms of service.',
  alternates: { canonical: '/faq' },
};

const faqItems = [
  {
    question: "What does Grittrix Technologies do?",
    answer: "Grittrix Technologies builds modern, AI-powered software, websites, and mobile applications specifically designed for businesses in emerging markets. We focus on automating complex processes and providing data-driven insights in sectors like healthcare, agriculture, and retail."
  },
  {
    question: "Which industries does Grittrix primarily serve?",
    answer: "Our primary expertise lies in Healthcare (diagnostics and triage), Retail (inventory and forecasting), Agriculture (yield prediction), and Education (adaptive learning). However, our core AI engine is highly adaptable and can be tailored for finance and logistics as well."
  },
  {
    question: "Does Grittrix work with startups and small businesses?",
    answer: "Yes, absolutely. One of our core missions is to democratize access to advanced technology. We offer scalable pricing and modular solutions that allow small and medium enterprises (SMEs) to integrate AI without massive upfront costs."
  },
  {
    question: "Where is Grittrix Technologies based?",
    answer: "Grittrix is headquartered in Kampala, Uganda, and operates as a remote-first organization. This localized presence allows us to understand the unique challenges and dynamics of emerging markets while maintaining a global standard of engineering."
  },
  {
    question: "How can I get started with an AI project?",
    answer: "The best way to start is by booking a free consultation through our contact page. We'll discuss your specific operational challenges and provide a roadmap for how AI integration or custom software can drive growth for your business."
  },
  {
    question: "What is Grittrix CORE™?",
    answer: "Grittrix CORE™ is our foundational AI operating system. It provides a secure, scalable framework for deploying machine learning models, managing data ingestion, and providing real-time analytics across all our specialized industry products."
  }
];

const termsItems = [
  {
    question: "1. Acceptance of Terms & Eligibility",
    answer: "By accessing Grittrix, you confirm you are at least 18 years of age and meet our onboarding requirements (currently enrolled or affiliated with an approved university, institution, or registered business entity)."
  },
  {
    question: "2. Account Responsibilities",
    answer: "Users are responsible for providing accurate profile information, maintaining one account per person, and ensuring account security at all times. You must notify us immediately of any unauthorized use of your account."
  },
  {
    question: "3. User-Generated Content",
    answer: "Users own their content but grant Grittrix a non-exclusive, worldwide, royalty-free license to display, use, and distribute it on the platform to facilitate services. Users are solely responsible for the content they post and its legality."
  },
  {
    question: "4. Prohibited Conduct",
    answer: "Illegal items, harassment, scams, and fraud are strictly prohibited. Users must not circumvent the platform to solicit payments outside the safety guidance provided in our official communication channels, maintaining consistency with our in-product safety messaging."
  },
  {
    question: "5. Marketplace/Services Disclaimer",
    answer: "Grittrix facilitates connections between users and service providers but is NOT a party to any transaction. We do not verify item condition, authenticity, or process third-party payments. Grittrix is not liable for the outcome of any transaction, meeting, or exchange between users."
  }
];

export default function FAQPage() {
  const breadcrumbs = [{ name: 'FAQ' }];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://grittrix.com" },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://grittrix.com/faq" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <PageHeader
        title="Knowledge Base & Legal"
        description="Find answers to common questions about Grittrix services and review our official Terms of Service."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12" id="general-faq">
                <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-headline text-primary mb-4">General FAQ</h2>
                <p className="text-lg text-foreground/80">
                    If you don't find what you're looking for, please feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                </p>
            </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:text-primary">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mb-12 mt-24" id="terms">
                <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-headline text-primary mb-4">Terms of Service</h2>
                <p className="text-lg text-foreground/80">
                    Legal guidelines, eligibility requirements, and account responsibilities.
                </p>
            </div>

          <Accordion type="single" collapsible className="w-full mb-16">
            {termsItems.map((item, index) => (
              <AccordionItem key={index} value={`terms-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:text-primary">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="p-8 bg-secondary/10 border border-primary/20 rounded-2xl text-center">
             <p className="text-sm text-foreground/60 italic leading-relaxed">
                The Terms of Service provided here are for informational purposes. For official legal inquiries or current policy updates, please reach out to our administration at <Link href="mailto:hello@grittrix.com" className="text-primary hover:underline">hello@grittrix.com</Link>.
             </p>
          </div>
        </div>
      </section>
    </>
  );
}
