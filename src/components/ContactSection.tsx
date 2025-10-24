import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-blue-200 opacity-30"
        >
          <MessageCircle size={60} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-20 text-orange-200 opacity-30"
          style={{ animationDelay: '1.5s' }}
        >
          <Clock size={50} />
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
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us today. We're here to help you succeed.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-2 rounded-xl border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2 rounded-xl border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 123 456 7890"
                    className="mt-2 rounded-xl border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                    className="mt-2 rounded-xl border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="mb-8 text-2xl font-bold text-blue-900">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-2 font-semibold">Office Address</p>
                    <p className="text-gray-600">Staines-Upon-Thames, TW18 4SU<br />United Kingdom</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-2 font-semibold">Email</p>
                    <a href="mailto:candasolution@gmail.com" className="text-blue-600 hover:underline font-medium">
                      candasolution@gmail.com
                    </a>
                  </div>
                </motion.div>
                
              </div>
            </div>

            {/* Map */}
            <motion.div 
              className="rounded-3xl overflow-hidden h-80 bg-gray-200 shadow-xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39811.01819937344!2d-0.5302738!3d51.4318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767486cdbe91e1%3A0x3e6e9e8f1e1c5f7e!2sStaines-upon-Thames!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
