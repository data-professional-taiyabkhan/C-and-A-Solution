import { ServicePage } from '../components/ServicePage';

interface AITrainingProps {
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function AITraining({ onNavigate, onGetInTouch }: AITrainingProps) {
  const testimonials = [
    {
      name: 'Aisha Patel',
      role: 'Data Analyst',
      company: 'Tech Solutions Ltd',
      content: 'The AI certification course was incredibly practical and industry-focused. I landed a machine learning role within three months of completing the program!',
      rating: 5,
    },
    {
      name: 'Thomas Green',
      role: 'Career Changer',
      company: 'Now at DataCorp',
      content: 'As someone transitioning from a non-tech background, the hands-on approach and career support made all the difference. The instructors are experts in their field.',
      rating: 5,
    },
    {
      name: 'Yuki Tanaka',
      role: 'Graduate Student',
      company: 'University of Cambridge',
      content: 'The course content is up-to-date with the latest industry standards. The project-based learning helped me build a strong portfolio that impressed employers.',
      rating: 5,
    },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        We offer industry-relevant, hands-on training programs designed to equip students and professionals worldwide with practical skills and certifications in the fastest-growing technology fields — Artificial Intelligence (AI), Machine Learning (ML), and Data Science.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our courses combine theoretical foundations with real-world applications, providing learners with deep understanding and experience in data processing, predictive modelling, algorithm development, and AI system design. Participants engage in project-based learning, developing solutions using state-of-the-art tools and frameworks that meet current industry standards.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Designed by experts familiar with global and UK market demands, our certification programs enhance employability and career growth by providing recognised accreditation and career support, including resume building and interview preparation.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Whether you are starting your technology journey or advancing your career, our courses open doors to exciting opportunities in the AI-powered future.
      </p>
      <p className="text-gray-700 italic">
        Unlock your potential with future-proof skills — because mastering AI today builds the innovations of tomorrow.
      </p>
    </div>
  );

  return (
    <ServicePage
      title="Certification Courses in AI, ML, and Data Science"
      tagline="Master AI today to build the innovations of tomorrow"
      description={description}
      imageUrl="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3NjExOTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      testimonials={testimonials}
      onNavigate={onNavigate}
      onGetInTouch={onGetInTouch}
    />
  );
}
