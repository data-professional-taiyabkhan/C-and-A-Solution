import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import logo from 'figma:asset/e5e78861d91c48d45b30027a1041e4844d3b9101.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const serviceItems = [
    { name: 'HR & Workforce Solutions', path: 'hr-services' },
    { name: 'Digital Marketing', path: 'digital-marketing' },
    { name: 'Apply Buddy', path: 'apply-buddy' },
    { name: 'IT Solutions', path: 'it-solutions' },
    { name: 'AI/ML Training', path: 'ai-training' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="C&A Solutions" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm mb-4">
              Smart, Affordable, and Reliable Solutions for All
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Staines-Upon-Thames, TW18 4SU, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@candasolutions.co.uk" className="text-sm hover:text-blue-400 transition-colors">
                  info@candasolutions.co.uk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+441234567890" className="text-sm hover:text-blue-400 transition-colors">
                  +44 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} C&A Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
