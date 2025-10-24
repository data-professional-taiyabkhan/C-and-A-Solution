import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="C&A Solutions" className="h-12 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <motion.div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-2">
                  {serviceItems.map((item, index) => (
                    <motion.button
                      key={item.path}
                      onClick={() => onNavigate(item.path)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </nav>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.button
                  onClick={() => {
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Home
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  About
                </motion.button>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-900 font-semibold">Services</span>
                  <div className="pl-4 flex flex-col gap-2">
                    {serviceItems.map((item, index) => (
                      <motion.button
                        key={item.path}
                        onClick={() => {
                          onNavigate(item.path);
                          setMobileMenuOpen(false);
                        }}
                        className="text-left text-gray-600 hover:text-blue-600 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Contact
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full shadow-lg"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
