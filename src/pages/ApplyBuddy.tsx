import { ServicePage } from '../components/ServicePage';

interface ApplyBuddyProps {
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function ApplyBuddy({ onNavigate, onGetInTouch }: ApplyBuddyProps) {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Master\'s Student',
      company: 'University of London',
      content: 'Apply Buddy was a lifesaver when I first moved to the UK. They helped me with my CV, job applications, and even academic assignments. I landed my first job within two months!',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      role: 'Recent Graduate',
      company: 'Imperial College London',
      content: 'Their visa guidance and dissertation consultation services were exceptional. The team was patient, knowledgeable, and genuinely cared about my success.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'International Student',
      company: 'Manchester University',
      content: 'As a newcomer to the UK, I was overwhelmed with everything. Apply Buddy guided me through every step, from understanding the job market to academic support. Highly recommended!',
      rating: 5,
    },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        Apply Buddy offers comprehensive support to students and newcomers settling in the UK, providing practical assistance for a smooth, confident transition to academic and professional life.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our services include personalised CV building, job application support, and visa guidance to help newcomers navigate the complexities of working and studying in the UK. We also offer tailored academic support, including dissertation consultation and assignment guidance, ensuring students meet their academic goals with confidence.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Whether it's understanding local job markets or managing academic deadlines, Apply Buddy is your trusted partner in building a successful future in the UK.
      </p>
      <p className="text-gray-700 italic">
        Empowering your journey — from landing your dream job to acing your studies with expert support every step of the way.
      </p>
    </div>
  );

  return (
    <ServicePage
      title="Apply Buddy – Student & Newcomer Support"
      tagline="Your trusted partner for a successful transition to UK life"
      description={description}
      imageUrl="https://images.unsplash.com/photo-1760351065294-b069f6bcadc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYxMTY1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      testimonials={testimonials}
      onNavigate={onNavigate}
      onGetInTouch={onGetInTouch}
    />
  );
}
