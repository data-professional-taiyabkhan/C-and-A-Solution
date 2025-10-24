import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, TrendingUp, GraduationCap, Code, Brain, ArrowRight } from 'lucide-react';

interface ServicesPreviewProps {
  onNavigate: (page: string) => void;
}

export function ServicesPreview({ onNavigate }: ServicesPreviewProps) {
  const services = [
    {
      icon: Users,
      title: 'Human Resource & Workforce Solutions',
      description: 'Flexible, affordable, and reliable staffing tailored to your needs — whether you require event support or long-term workforce management, we provide the right professionals to help your business succeed.',
      path: 'hr-services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Content Creation',
      description: 'Creative and data-driven marketing strategies combined with engaging content to grow your online presence and connect meaningfully with your target audience.',
      path: 'digital-marketing',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: GraduationCap,
      title: 'Apply Buddy – Student & Newcomer Support',
      description: 'Comprehensive assistance for newcomers to the UK, including CV building, job application support, visa guidance, and academic help, ensuring a smooth and confident transition.',
      path: 'apply-buddy',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Code,
      title: 'IT Solutions',
      description: 'End-to-end IT services delivered through trusted partners, covering everything from software and infrastructure development to tailored digital tools.',
      path: 'it-solutions',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Brain,
      title: 'Certification Courses in AI, ML, and Data Science',
      description: 'Industry-relevant, hands-on training programs that equip students worldwide with practical skills and certification in the latest technologies.',
      path: 'ai-training',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-blue-900">Our Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Comprehensive solutions designed to empower your business and career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => onNavigate(service.path)}>
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <Button variant="link" className={`${service.color} p-0 group-hover:gap-2 transition-all`}>
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
