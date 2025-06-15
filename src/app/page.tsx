import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, HeartPulse, Leaf, BookOpen, ShoppingCart, Cpu, Lightbulb, Users, Phone, Mail, Globe, Layers, Server, ShoppingBag, Tv } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredIndustries = [
  { name: 'Healthcare', icon: HeartPulse, description: 'AI-powered diagnostics and patient management.', link: '/industries/healthcare', imageHint: 'modern hospital' },
  { name: 'Retail', icon: ShoppingCart, description: 'Optimized supply chains and personalized customer experiences.', link: '/industries/retail', imageHint: 'retail tech' },
  { name: 'Agriculture', icon: Leaf, description: 'Precision farming and crop yield optimization.', link: '/industries/agriculture', imageHint: 'agritech' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning paths and adaptive educational tools.', link: '/industries/education', imageHint: 'digital classroom' },
];

const coreValues = [
  { name: 'Innovation', icon: Lightbulb, description: 'Driving progress with cutting-edge AI solutions tailored for real-world impact.' },
  { name: 'Integrity', icon: Users, description: 'Building trust through transparent, ethical, and responsible AI practices.' },
  { name: 'Impact', icon: Cpu, description: 'Creating sustainable growth and development in emerging markets through technology.' },
];

const quickAccessLinks = [
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/industries', label: 'Industries', icon: Layers },
  { href: '/careers', label: 'Careers', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/merch', label: 'Grittrix Merch', icon: ShoppingBag },
  { href: '/products', label: 'Products', icon: Cpu },
  { href: '/hosting', label: 'Hosting', icon: Server },
  { href: '/design-services', label: 'Need a Website / Web App?', icon: Tv },
];


export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Industries Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Tailored AI solutions to address unique challenges and unlock opportunities across diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredIndustries.map((industry) => (
              <Card key={industry.name} className="bg-card hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary group-hover:text-primary/90 transition-colors">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70 mb-4 text-sm">{industry.description}</p>
                   <Image 
                    src={`https://placehold.co/300x200.png`}
                    alt={industry.name}
                    width={300}
                    height={200}
                    className="rounded-md mb-4 object-cover aspect-[3/2] mx-auto"
                    data-ai-hint={industry.imageHint}
                  />
                  <Button variant="link" asChild className="text-accent group-hover:underline">
                    <Link href={industry.link}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Grittrix Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Why Grittrix?</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We combine deep industry expertise with cutting-edge AI to deliver solutions that drive real-world impact and foster sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.name} className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">{value.name}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">Discover Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Quick Access</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Easily navigate to key areas of our site or get in touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {quickAccessLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow group">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-md mr-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-primary group-hover:text-primary/90 transition-colors">{item.label}</h3>
                </div>
                <p className="text-sm text-accent group-hover:underline">Explore &rarr;</p>
              </Link>
            ))}
          </div>
          <div className="text-center bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Contact Us Directly</h3>
            <div className="space-y-3 text-foreground/80">
              <p className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <span><a href="tel:+919714688324" className="hover:text-primary">+91 9714688324</a> / <a href="tel:+256756693840" className="hover:text-primary">+256 756693840</a></span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@grittrix.com" className="hover:text-primary">info@grittrix.com</a>
              </p>
            </div>
             <Button variant="outline" asChild className="mt-6 text-accent hover:text-accent hover:bg-accent/10 border-accent/50">
                <Link href="/contact">Send a Message</Link>
             </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let Grittrix be your partner in navigating the complexities of AI and unlocking new potentials.
          </p>
          <Button size="lg" variant="outline" className="bg-background/90 hover:bg-background text-foreground border-transparent hover:border-foreground/50" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
