
import Image from 'next/image';
import type { TeamMember } from '@/lib/types';
import { Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const imageAltText = `Professional portrait of ${member.name}, ${member.role} at Grittrix AI Solutions`;
  return (
    <Card className="text-center bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={member.imageUrl} // Expecting path like /media/NkangiDisan.svg (user provided list)
            alt={imageAltText}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl text-primary mb-1">{member.name}</CardTitle>
        <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
        <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">{member.bio}</p>
      </CardContent>
      {(member.socials?.linkedin || member.socials?.twitter) && (
        <CardFooter className="flex justify-center space-x-3 pb-6 mt-auto">
          {member.socials.linkedin && (
            <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="text-foreground/60 hover:text-primary">
              <Linkedin size={20} />
            </Link>
          )}
          {member.socials.twitter && (
            <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Twitter`} className="text-foreground/60 hover:text-primary">
              <Twitter size={20} />
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
    
