import { Target, Users, Award, Lightbulb, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-blue-200 opacity-30"
        >
          <Lightbulb size={60} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-10 text-orange-200 opacity-30"
          style={{ animationDelay: '1.5s' }}
        >
          <Heart size={50} />
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
              About <span className="text-orange-500">Us</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering success through innovative solutions and expert guidance
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="group hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                variants={iconVariants}
                className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <Users className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-blue-900">Who We Are</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              C&A Solutions Pvt Ltd is a dynamic consultancy based in the United Kingdom, dedicated to delivering smart, affordable, and reliable solutions for businesses, students, and professionals. Our team brings together industry expertise across business development, human resources, IT consulting, and cutting-edge technology training to drive true transformation for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                variants={iconVariants}
                className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <Target className="h-8 w-8 text-orange-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-blue-900">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded with a vision to empower organisations and individuals, C&A Solutions Pvt Ltd was created to address the growing need for expert guidance in business growth, workforce management, and professional development. With first-hand experience in both corporate and educational arenas, our founders saw an opportunity to bridge gaps — helping businesses thrive and students unlock meaningful career paths in a rapidly evolving market.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100"
        >
          <div className="flex flex-col items-center gap-6 mb-8">
            <motion.div 
              variants={iconVariants}
              className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
            >
              <Award className="h-10 w-10 text-blue-600" />
            </motion.div>
            <h3 className="text-3xl font-bold text-center text-blue-900">Our Commitment</h3>
          </div>
          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
            We are committed to providing exceptional service quality, fostering innovation, and building lasting partnerships. Our diverse portfolio of services ensures that whether you're a growing business, an aspiring professional, or a student embarking on your career journey, we have the expertise and resources to support your success.
          </p>

          {/* Values Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Trust & Reliability</h4>
              <p className="text-gray-600">Building lasting partnerships through consistent, dependable service</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Innovation</h4>
              <p className="text-gray-600">Embracing cutting-edge solutions and modern approaches</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Passion</h4>
              <p className="text-gray-600">Driven by genuine care for our clients' success and growth</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
