import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Trophy, Star, ArrowRight, CheckCircle2, Zap, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { TypingHeading } from './TypingHeading';
import rahadUserImage from '../assets/images/rahad_clean_portrait.jpg';

export const About = () => {
  const highlights = [
    { icon: Zap, label: "90+ PageSpeed & Core Web Vitals" },
    { icon: Sparkles, label: "Pixel-Perfect Figma to Elementor" },
    { icon: CheckCircle2, label: "WooCommerce & Conversion Funnels" },
    { icon: ShieldCheck, label: "Clean Code, SEO & Top Security" }
  ];

  return (
    <section id="about" className="py-14 md:py-18 relative bg-slate-50/70 overflow-hidden">
      {/* SaaS Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-purple-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pure Clean Circle Image with Animated Gradient Border (No Icons) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center items-center py-4"
          >
            {/* Background Ambient Radial Glow */}
            <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

            {/* CIRCULAR IMAGE CONTAINER WITH ANIMATED GRADIENT BORDER (PURE CLEAN IMAGE, NO ICONS/BADGES) */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-[410px] md:h-[410px] rounded-full flex items-center justify-center group">
              
              {/* Animated Gradient Border - Outer Glow */}
              <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#06B6D4,#3B82F6,#8B5CF6,#EC4899,#06B6D4)] animate-[spin_4s_linear_infinite] opacity-60 blur-xl group-hover:opacity-90 transition-opacity"></div>
              
              {/* Animated Gradient Border - Sharp Beam Line */}
              <div className="absolute -inset-[5px] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#06B6D4,#3B82F6,#8B5CF6,#EC4899,#3B82F6,#06B6D4)] animate-[spin_3.5s_linear_infinite]"></div>

              {/* White Inner Spacer Ring */}
              <div className="absolute -inset-[1px] rounded-full bg-white shadow-md"></div>

              {/* Pure Clean Circle Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                <img 
                  src={rahadUserImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Content */}
          <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               className="flex items-center gap-4 mb-6"
            >
               <div className="h-[2px] w-12 bg-blue-600 rounded-full"></div>
               <span className="text-blue-600 font-bold text-[12px] tracking-[0.25em] uppercase">
                 About Me & My Mission
               </span>
            </motion.div>
            
            <TypingHeading 
              text="AI-Powered WordPress & Elementor Expert"
              className="text-[34px] md:text-[44px] lg:text-[48px] font-black text-slate-900 leading-[1.15] mb-6 tracking-tight"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.15 }}
              className="space-y-4 text-[16px] md:text-[18px] text-slate-600 leading-[1.7] mb-8"
            >
               <p>
                 I help businesses, digital agencies, and ambitious founders build custom, ultra-fast WordPress websites that combine stunning visual aesthetics with seamless customer conversions.
               </p>
               <p className="text-[15px] md:text-[16px] text-slate-500">
                 With over 3 years of hands-on experience in Elementor Pro, WooCommerce architecture, and AI-driven workflow automations, I transform design concepts into pixel-perfect, secure, and SEO-optimized digital engines.
               </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-3.5 mb-10"
            >
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-slate-800 font-semibold text-[14px]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.45)] hover:scale-[1.02] transition-all duration-300 text-[15px]"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#work" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-bold px-7 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-[15px] shadow-sm"
              >
                <span>View Portfolio</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
