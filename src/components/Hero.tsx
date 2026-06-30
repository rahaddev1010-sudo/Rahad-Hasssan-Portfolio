import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-[1240px] mx-auto px-6 w-full py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 shadow-sm"
            >
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">Available for Select Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] font-black text-gray-900 mb-6 tracking-tight uppercase"
            >
              <span className="text-[#60A5FA]">I CRAFT</span> HIGH-<br className="hidden md:block" />
              PERFORMANCE<br className="hidden md:block" />
              DIGITAL EXPERIENCES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-[20px] text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              I design and develop fast, beautiful websites that turn visitors into clients — crafted with precision, purpose, and a passion for clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#contact" className="bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] hover:scale-105 transition-all text-sm text-center">
                Let's Work Together
              </a>
              <a href="#work" className="bg-white border border-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-full hover:shadow-md transition-all text-sm text-center">
                See My Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 max-w-[600px]"
            >
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">3+</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Years of Experience</div>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">50+</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">98%</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-full"
          >
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] opacity-40 transform -translate-y-10"></div>
            
            {/* Image Container */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] group bg-white/40 backdrop-blur-md rounded-[32px] p-6 shadow-xl border border-white/50">
              <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative">
                <img
                  src="https://avatars.githubusercontent.com/u/297083478?s=400&u=9b790e97cb52625f656298298c143712068dd322&v=4"
                  alt="Rahad Hassan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
