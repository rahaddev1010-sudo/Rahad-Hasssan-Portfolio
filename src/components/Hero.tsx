import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../data';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';


export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-[1240px] mx-auto px-6 w-full py-12 md:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="max-w-3xl lg:col-span-6">
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
              <a href="#contact" className="bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] hover:scale-105 transition-all text-sm text-center flex items-center justify-center gap-2 group">
                <span>Hire Me Today</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
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
            className="relative mx-auto w-full max-w-[500px] lg:col-span-6 xl:scale-125 xl:ml-12"
          >
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] transform -translate-y-10 opacity-60"></div>
            
            {/* Image Container */}
            <div className="relative w-full aspect-square group bg-transparent hover:-translate-y-2 transition-transform duration-500">
              <div className="w-full h-full relative flex items-center justify-center p-8">
                
                {/* Image */}
                <img
                  src="/src/assets/images/rahad_original_user_image_1783684874672.jpg"
                  alt="Rahad Hassan"
                  className="w-[90%] h-[90%] object-cover rounded-full shadow-[0_20px_50px_rgb(0,0,0,0.15)] ring-8 ring-white transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Premium Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  style={{ x: "-50%" }}
                  className="absolute bottom-6 left-1/2 w-max bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl px-6 py-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 flex items-center gap-4 hover:border-white/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,0.3)] bg-gradient-to-br from-blue-500/80 to-purple-600/80 border border-white/30">
                    <span className="relative font-black text-white text-base tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">AI</span>
                  </div>
                  <div className="flex flex-col justify-center pr-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                      </div>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-white/90 uppercase drop-shadow-md">Premium Quality</span>
                    </div>
                    <span className="text-[17px] font-extrabold text-white leading-none tracking-wide whitespace-nowrap drop-shadow-lg">
                      AI to WordPress
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
