import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, TrendingUp, GraduationCap, Code, Brain, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServicesPreviewProps {
  onNavigate: (page: string) => void;
}

export function ServicesPreview({ onNavigate }: ServicesPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Users,
      title: 'Human Resource & Workforce Solutions',
      description: 'Flexible, affordable, and reliable staffing tailored to your needs — whether you require event support or long-term workforce management, we provide the right professionals to help your business succeed.',
      path: 'hr-services',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      borderColor: 'border-blue-200',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Content Creation',
      description: 'Creative and data-driven marketing strategies combined with engaging content to grow your online presence and connect meaningfully with your target audience.',
      path: 'digital-marketing',
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      borderColor: 'border-orange-200',
    },
    {
      icon: GraduationCap,
      title: 'Apply Buddy – Student & Newcomer Support',
      description: 'Comprehensive assistance for newcomers to the UK, including CV building, job application support, visa guidance, and academic help, ensuring a smooth and confident transition.',
      path: 'apply-buddy',
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      borderColor: 'border-green-200',
    },
    {
      icon: Code,
      title: 'IT Solutions',
      description: 'End-to-end IT services delivered through trusted partners, covering everything from software and infrastructure development to tailored digital tools.',
      path: 'it-solutions',
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      borderColor: 'border-purple-200',
    },
    {
      icon: Brain,
      title: 'Certification Courses in AI, ML, and Data Science',
      description: 'Industry-relevant, hands-on training programs that equip students worldwide with practical skills and certification in the latest technologies.',
      path: 'ai-training',
      color: 'text-pink-600',
      bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
      borderColor: 'border-pink-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
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
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 text-blue-200 opacity-30"
        >
          <Sparkles size={80} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to empower your business and career growth
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => onNavigate(service.path)}
            >
              <Card className="h-full border-2 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                <CardHeader className="pb-4">
                  <motion.div 
                    className={`h-16 w-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </motion.div>
                  <CardTitle className="text-blue-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="link" 
                    className={`${service.color} p-0 group-hover:gap-2 transition-all duration-300 font-semibold`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you achieve your goals with our comprehensive range of services tailored to your needs.
            </p>
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
