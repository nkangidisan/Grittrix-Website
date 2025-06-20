
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: 'Privacy Policy | Grittrix AI Solutions',
  description: 'Read the Grittrix AI Solutions privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ name: 'Privacy Policy' }];
  const [currentDate, setCurrentDate] = React.useState('');

  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how Grittrix AI Solutions collects, uses, and protects your information."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
                <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Commitment to Your Privacy</h2>
            </div>
          <div className="prose prose-lg prose-invert text-foreground/80 max-w-none space-y-6">
            <p><strong>Last Updated: {currentDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
            
            <p>Grittrix AI Solutions ("Grittrix", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website grittrix.com (the "Site") and use our services (the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>

            <h3>Information We Collect</h3>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or our Services, or when you choose to participate in various activities related to the Site and our Services, such as online chat and message boards.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Data From Contact Forms:</strong> If you submit a contact form or job application, we collect the information you provide, such as your name, email, resume/CV link, and cover letter, to process your inquiry or application.</li>
            </ul>

            <h3>Use of Your Information</h3>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our Services to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Respond to your inquiries and offer support.</li>
              <li>Process job applications.</li>
              <li>Improve the efficiency and operation of the Site and our Services.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site and our Services.</li>
              <li>Notify you of updates to the Site and our Services.</li>
            </ul>

            <h3>Disclosure of Your Information</h3>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance. Firebase and Google Cloud Platform are key service providers for our infrastructure and AI capabilities; their privacy policies also apply.</li>
            </ul>
            
            <h3>Security of Your Information</h3>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h3>Data Retention</h3>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. For job applications, data may be retained for future consideration unless you request its deletion.</p>

            <h3>Your Rights</h3>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.</p>

            <h3>Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h3>Contact Us</h3>
            <p>If you have questions or comments about this Privacy Policy, please contact us at: <Link href="mailto:hello@grittrix.com" className="text-primary hover:underline">hello@grittrix.com</Link> or <Link href="mailto:info@grittrix.com" className="text-primary hover:underline">info@grittrix.com</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
