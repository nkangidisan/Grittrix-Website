
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Scale } from 'lucide-react';
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: 'FAQ & Terms of Service | Grittrix AI Solutions',
  description: 'Find answers to frequently asked questions about Grittrix and review our official Terms of Service including eligibility, responsibilities, and liability.',
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
    answer: "Grittrix facilitates connections between users and service providers but is NOT a party to any transaction. We do not verify item condition, authenticity, or process third-party payments. Grittrix is not liable for the outcome of any transaction, meeting, or exchange between users. [STRICT LEGAL REVIEW RECOMMENDED FOR THIS SECTION]."
  },
  {
    question: "6. Community Guidelines",
    answer: "Users must adhere to acceptable use policies for community features like Groups, Events, and research forums. Our reporting and moderation systems are in place to remove content or suspend accounts for violations, reflecting our commitment to a safe professional environment."
  },
  {
    question: "7. Account Termination",
    answer: "Grittrix reserves the right to suspend or remove accounts for violations of these terms. Users retain the right to delete their own account at any time, subject to data retention policies for legal compliance."
  },
  {
    question: "8. Intellectual Property",
    answer: "All Grittrix branding, logos, trademarks, and proprietary AI algorithms are our property. User content licensing is handled as per Section 3 to ensure platform functionality."
  },
  {
    question: "9. Disclaimer of Warranties & Liability",
    answer: "Services are provided 'as is' and 'as available'. Grittrix limits its liability to the maximum extent permitted by law for any indirect, incidental, or consequential damages. [STRICT LEGAL REVIEW RECOMMENDED FOR THIS SECTION]."
  },
  {
    question: "10. Governing Law & Dispute Resolution",
    answer: "Governing law is subject to business decision (likely Uganda, given the registered entity). This section requires an explicit business decision to finalize jurisdiction; do not silently pick one."
  },
  {
    question: "11. Changes to Terms & Contact",
    answer: "Grittrix reserves the right to update these terms. For any questions or official inquiries, please contact our team via the contact page or hello@grittrix.com."
  }
];

export default function FAQPage() {
  const breadcrumbs = [{ name: 'FAQ' }];

  return (
    <>
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
