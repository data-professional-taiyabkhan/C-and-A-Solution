import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Testimonials } from './Testimonials';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 text-orange-400 opacity-20"
          >
            <Star size={40} />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-20 right-20 text-blue-300 opacity-20"
            style={{ animationDelay: '2s' }}
          >
            <Star size={30} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => onNavigate('home')}
              className="mb-8 text-white hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
              {tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="order-2 lg:order-1"
            >
              <div className="prose prose-lg max-w-none">
                {typeof description === 'string' ? (
                  <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
                ) : (
                  description
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onGetInTouch}
                  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] touch-manipulation"
                  size="lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="order-1 lg:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
