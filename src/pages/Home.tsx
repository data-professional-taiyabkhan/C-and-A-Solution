import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ServicesPreview } from '../components/ServicesPreview';
import { ContactSection } from '../components/ContactSection';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero onGetInTouch={scrollToContact} />
      <About />
      <ServicesPreview onNavigate={onNavigate} />
      <ContactSection />
    </div>
  );
}
