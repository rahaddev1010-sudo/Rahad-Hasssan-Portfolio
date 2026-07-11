import { motion } from 'motion/react';
import { skills, personalInfo } from '../data';
import { Phone, Mail } from 'lucide-react';
import rahadUserImage from '../assets/images/rahad_original_user_image_1783684874672.jpg';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Image */}
            <div className="relative z-10 flex justify-center items-center aspect-square group rounded-full shadow-2xl overflow-hidden">
              <img 
                src={rahadUserImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full opacity-50 z-0"
            />
          </motion.div>

          {/* Right: Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:pl-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm bg-white">
              ABOUT
            </span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-gray-900 leading-[1.2] mb-4"
            >
              A Developer Who Cares About the Details
            </motion.h2>
            
            <p className="text-[18px] md:text-[20px] text-gray-700 font-medium mb-6">
              With 3+ years of experience, I create digital experiences that matter.
            </p>
            
            <div className="space-y-4 text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-8 max-w-2xl">
              <p>
                I'm a passionate web developer building digital products that are as functional as they are beautiful. I combine clean code with thoughtful design to create websites that don't just look good — they convert. Whether it's a personal brand, a business site, or a full-stack application, I treat every project as if it were my own.
              </p>
            </div>
            
            <div className="mb-8">
              <a href="#journey" className="inline-block bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] hover:scale-105 transition-all text-sm">
                Download Resume
              </a>
            </div>

            {/* Contact Info Boxes */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-shadow flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">PHONE</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-600 text-sm hover:text-primary transition-colors">{personalInfo.phone}</a>
                </div>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-shadow flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="w-5 h-5 text-purple-600" />
                  </motion.div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-0.5">EMAIL</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 text-sm hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

