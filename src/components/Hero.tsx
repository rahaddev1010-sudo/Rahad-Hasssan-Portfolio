import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../data';
import { ArrowRight } from 'lucide-react';


export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-[1240px] mx-auto px-6 w-full py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">Available For Hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[34px] md:text-[46px] lg:text-[54px] leading-[1.1] font-black text-[#0F172A] mb-6 tracking-[-0.02em] uppercase"
            >
              <span className="block mb-2">Creating High-Converting</span>
              <span className="block mb-4">WordPress Sites</span>
              <div className="min-h-[2.5em] md:min-h-[1.5em] mt-2 md:mt-3 text-[26px] md:text-[36px] lg:text-[42px] leading-[1.3] tracking-wide">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 font-extrabold drop-shadow-sm">
                  <Typewriter
                    words={[
                      "TURNING IDEAS REALITY.",
                      "AI AUTOMATIONS.",
                      "PROBLEM SOLVER."
                    ]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2500}
                  />
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-[20px] text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              I am a Premium WordPress Expert & Automation Strategist specializing in bespoke website development, scalable e-commerce, and AI-driven solutions to help your brand dominate online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#contact" className="bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] hover:scale-105 transition-all text-sm text-center">
                Hire Me Today
              </a>
              <a href="#work" className="bg-white border border-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-full hover:shadow-md transition-all text-sm text-center">
                View Portfolio
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
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] transform -translate-y-10 opacity-60"></div>
            
            {/* Image Container */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] group bg-white/40 backdrop-blur-md rounded-[32px] p-6 shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative">
                <img
                  src="/hero-image.jpg"
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
