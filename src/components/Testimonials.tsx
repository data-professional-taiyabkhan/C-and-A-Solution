import { Card, CardContent } from './ui/card';
import { Star, Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 text-orange-200 opacity-30"
        >
          <Heart size={60} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              What Our <span className="text-orange-500">Clients Say</span>
            </h3>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from satisfied clients who trust us with their success
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 group">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="h-10 w-10 text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-blue-900 font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
