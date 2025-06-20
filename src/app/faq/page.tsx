
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: 'FAQ | Grittrix AI Solutions',
  description: 'Find answers to frequently asked questions about Grittrix, our AI solutions, services, and how we operate.',
};

const faqItems = [
  {
    question: "What is Grittrix?",
    answer: "Grittrix is an AI technology company focused on providing intelligent solutions for businesses and institutions in emerging markets, particularly in sectors like healthcare, retail, agriculture, and education. We build tools to help organizations make smarter decisions, automate operations, and scale effectively."
  },
  {
    question: "What kind of AI solutions do you offer?",
    answer: "We offer a range of solutions including AI-powered dashboards for analytics, smart forecasting engines, predictive models for specific industries (like disease prediction in healthcare or stock prediction in retail), custom web and mobile application development with AI integration, cloud hosting, and data analysis services."
  },
  {
    question: "Which industries does Grittrix primarily serve?",
    answer: "Our primary focus is on Healthcare, Retail & E-commerce, Agriculture, and Education. However, our CORE AI engine is adaptable, and we can tailor solutions for other sectors as well."
  },
  {
    question: "Are your solutions suitable for small businesses?",
    answer: "Yes, absolutely. One of our core missions is to make advanced AI technology accessible and affordable for small and medium-sized enterprises (SMEs) in emerging markets. Our pricing and solutions are designed to scale with your business."
  },
  {
    question: "How can I get started with Grittrix?",
    answer: "The best way to get started is to book a free consultation with us. You can do this through our contact page. We'll discuss your specific needs and how Grittrix can help you achieve your goals."
  },
  {
    question: "Do you offer custom development services?",
    answer: "Yes, we provide custom web and mobile application design and development, as well as bespoke AI model development to fit your unique data and business requirements."
  },
  {
    question: "What is Grittrix CORE™?",
    answer: "Grittrix CORE™ is our foundational AI engine. It's a robust, scalable, and secure platform that powers all our specialized industry solutions, enabling rapid development and deployment of AI models and applications."
  }
];

export default function FAQPage() {
  const breadcrumbs = [{ name: 'FAQ' }];

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about Grittrix and our services."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
                <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-headline text-primary mb-4">Have Questions? We Have Answers.</h2>
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
        </div>
      </section>
    </>
  );
}
