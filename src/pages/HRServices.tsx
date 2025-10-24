import { ServicePage } from '../components/ServicePage';

interface HRServicesProps {
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function HRServices({ onNavigate, onGetInTouch }: HRServicesProps) {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Operations Manager',
      company: 'EventPro UK',
      content: 'C&A Solutions provided exceptional staffing for our corporate events. Their team was professional, punctual, and exactly what we needed. Highly recommend!',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'HR Director',
      company: 'TechStart Ltd',
      content: 'Their workforce management solutions have streamlined our hiring process significantly. They understand our needs and consistently deliver quality candidates.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Event Coordinator',
      company: 'London Conferences',
      content: 'We rely on C&A Solutions for all our event staffing needs. They are reliable, affordable, and always go the extra mile to ensure our events run smoothly.',
      rating: 5,
    },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        Flexible, affordable, and reliable staffing tailored to your needs — whether you require workforce support for events or long-term job roles, we provide the right professionals to help your business succeed.
      </p>
      <p className="text-gray-600 leading-relaxed">
        We offer services including workforce and gig workers for events and other assignments. Simply contact us with your requirements, and we'll handle the rest. Additionally, our human resource management solutions provide expert HR support to businesses, ensuring smooth operations and strategic talent management.
      </p>
      <p className="text-gray-700 italic">
        Let us be your trusted partner in building a stronger, more agile workforce — because your success starts with the right people.
      </p>
    </div>
  );

  return (
    <ServicePage
      title="Human Resource & Workforce Solutions"
      tagline="Building stronger, more agile workforces for your business success"
      description={description}
      imageUrl="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTIyMDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      testimonials={testimonials}
      onNavigate={onNavigate}
      onGetInTouch={onGetInTouch}
    />
  );
}
