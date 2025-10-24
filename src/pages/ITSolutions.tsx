import { ServicePage } from '../components/ServicePage';

interface ITSolutionsProps {
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function ITSolutions({ onNavigate, onGetInTouch }: ITSolutionsProps) {
  const testimonials = [
    {
      name: 'Richard Palmer',
      role: 'CTO',
      company: 'FinanceFlow Solutions',
      content: 'Their IT expertise and partnership approach delivered exactly what we needed. Our custom app has streamlined our operations and improved customer satisfaction.',
      rating: 5,
    },
    {
      name: 'Sophie Turner',
      role: 'Business Owner',
      company: 'RetailHub UK',
      content: 'C&A Solutions built our e-commerce platform from scratch. The team was professional, responsive, and delivered on time and within budget.',
      rating: 5,
    },
    {
      name: 'Daniel Lee',
      role: 'Managing Director',
      company: 'HealthTech Innovations',
      content: 'Their AI agent solutions have revolutionized how we handle customer inquiries. The technology is cutting-edge, and the support has been outstanding.',
      rating: 5,
    },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        We offer a comprehensive range of IT services tailored to meet the evolving needs of businesses today. Whether you require app development, digital products, website building, AI agents, or other digital services, our experts deliver end-to-end solutions designed to empower and scale your business.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our in-house experts partner with industry leaders in the UK market who have deep knowledge of the latest technology trends and innovations. Our services are affordable, reliable, and tailored to provide scalable technology solutions that keep you ahead of the competition.
      </p>
      <p className="text-gray-600 leading-relaxed">
        From conceptualisation to deployment and ongoing support, we handle complex IT projects with agility and precision, ensuring your digital infrastructure is robust, secure, and aligned with your business goals.
      </p>
      <p className="text-gray-700 italic">
        Empower your business with technology solutions designed for today — delivered by experts who understand tomorrow.
      </p>
    </div>
  );

  return (
    <ServicePage
      title="IT Solutions"
      tagline="Technology solutions designed for today, delivered by experts who understand tomorrow"
      description={description}
      imageUrl="https://images.unsplash.com/photo-1683813479742-4730f91fa3ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2MTE5MjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
      testimonials={testimonials}
      onNavigate={onNavigate}
      onGetInTouch={onGetInTouch}
    />
  );
}
