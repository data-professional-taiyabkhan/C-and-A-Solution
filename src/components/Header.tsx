import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/e5e78861d91c48d45b30027a1041e4844d3b9101.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services', hasDropdown: true },
    { name: 'Contact', path: 'contact' },
  ];

  const serviceItems = [
    { name: 'HR & Workforce Solutions', path: 'hr-services' },
    { name: 'Digital Marketing', path: 'digital-marketing' },
    { name: 'Apply Buddy', path: 'apply-buddy' },
    { name: 'IT Solutions', path: 'it-solutions' },
    { name: 'AI/ML Training', path: 'ai-training' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <img src={logo} alt="C&A Solutions" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => onNavigate(item.path)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700"
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                About
              </button>
              <div className="flex flex-col gap-2">
                <span className="text-gray-900">Services</span>
                <div className="pl-4 flex flex-col gap-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        onNavigate(item.path);
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-gray-600 hover:text-blue-600"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
