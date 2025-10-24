import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetInTouch: () => void;
}

export function Hero({ onGetInTouch }: HeroProps) {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEyMDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-orange-400 opacity-20"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-40 right-20 text-blue-300 opacity-20"
          style={{ animationDelay: '1s' }}
        >
          <Zap size={30} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-40 left-20 text-orange-300 opacity-20"
          style={{ animationDelay: '2s' }}
        >
          <Target size={35} />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-blue-950/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="py-20 md:py-32 lg:py-40 max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div>
              <motion.div variants={fadeInUp} className="mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-100 mb-4">
                  C&A Solutions
                  <span className="block text-orange-400">Pvt Ltd</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="mb-8 text-xl md:text-3xl lg:text-4xl text-blue-50 max-w-3xl font-light leading-relaxed"
              >
                Smart, Affordable, and 
                <span className="text-orange-400 font-semibold"> Reliable Solutions</span> for All
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="mb-12 text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Empowering businesses, students, and professionals with expert consultancy in business development, HR, IT solutions, and cutting-edge technology training.
              </motion.p>
              
              <motion.div variants={scaleIn} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={onGetInTouch}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch Now
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Right Side - Stats Section */}
            <motion.div 
              variants={fadeInUp}
              className="lg:ml-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-100 mb-8 text-center">Our Achievements</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">100+</div>
                    <div className="text-blue-200 text-lg">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">50+</div>
                    <div className="text-blue-200 text-lg">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-blue-200 text-lg">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
