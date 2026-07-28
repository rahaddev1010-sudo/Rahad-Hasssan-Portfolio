import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Trophy, Star, ArrowRight, Download } from 'lucide-react';
import { TypingHeading } from './TypingHeading';
import aboutImage from '../assets/images/about_matching_face_bg_1785240404500.jpg';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-slate-50 overflow-hidden">
      {/* Minimalist SaaS Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-2">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               className="flex items-center gap-4 mb-8"
            >
               <div className="h-[2px] w-12 bg-blue-600 rounded-full"></div>
               <span className="text-blue-600 font-bold text-[12px] tracking-[0.25em] uppercase">
                 About me Developer
               </span>
            </motion.div>
            
            <TypingHeading 
              text="AI-Powered WordPress & Elementor Expert"
              className="text-[38px] md:text-[48px] lg:text-[54px] font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-[17px] md:text-[19px] text-slate-600 leading-[1.7] mb-12"
            >
               <p>
                 I help businesses, startups, and personal brands build modern, high-performing WordPress websites that combine stunning design, exceptional speed, and seamless user experience. With over 3 years of experience, I specialize in creating websites that are visually engaging, mobile-responsive, SEO-friendly, and optimized for conversions.
               </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.5 }}
            >
              <a href="#" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all duration-300 text-[16px]">
                Download Resume
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1 flex justify-center lg:justify-start w-full"
          >
            {/* Ambient Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
            
            {/* Animated Gradient Border Container */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-full flex items-center justify-center p-[5px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
              {/* Spinning Gradient Background */}
              <div 
                className="absolute w-[200%] h-[200%] animate-spin bg-[conic-gradient(from_0deg,#3B82F6,#8B5CF6,#EC4899,#3B82F6)] z-0" 
                style={{ animationDuration: '6s', animationTimingFunction: 'linear' }}
              />
              
              {/* Inner wrapper */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-[center_5%] rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

