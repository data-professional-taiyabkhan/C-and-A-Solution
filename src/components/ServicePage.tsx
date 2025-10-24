import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { Testimonials } from './Testimonials';
import { ReactNode } from 'react';

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string | ReactNode;
  imageUrl: string;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }>;
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function ServicePage({
  title,
  tagline,
  description,
  imageUrl,
  testimonials,
  onNavigate,
  onGetInTouch,
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-8 text-white hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="max-w-4xl">
            <h1 className="mb-6">{title}</h1>
            <p className="text-xl text-blue-100">{tagline}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                {typeof description === 'string' ? <p className="text-gray-600 leading-relaxed">{description}</p> : description}
              </div>
              <Button
                onClick={onGetInTouch}
                className="mt-8 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Get Started Today
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={imageUrl}
                alt={title}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
