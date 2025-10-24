import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HRServices } from './pages/HRServices';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { ApplyBuddy } from './pages/ApplyBuddy';
import { ITSolutions } from './pages/ITSolutions';
import { AITraining } from './pages/AITraining';
import { Toaster } from './components/ui/sonner';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // Show a loading overlay on initial load
  const [loading, setLoading] = useState(true);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    if (currentPage !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Hide preloader after a brief delay when the app mounts
  useEffect(() => {
    // Use a timeout to ensure at least one animation frame for the loader
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'hr-services':
        return <HRServices onNavigate={handleNavigate} onGetInTouch={handleGetInTouch} />;
      case 'digital-marketing':
        return <DigitalMarketing onNavigate={handleNavigate} onGetInTouch={handleGetInTouch} />;
      case 'apply-buddy':
        return <ApplyBuddy onNavigate={handleNavigate} onGetInTouch={handleGetInTouch} />;
      case 'it-solutions':
        return <ITSolutions onNavigate={handleNavigate} onGetInTouch={handleGetInTouch} />;
      case 'ai-training':
        return <AITraining onNavigate={handleNavigate} onGetInTouch={handleGetInTouch} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Preloader overlay */}
      {loading && <Preloader />}
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}
