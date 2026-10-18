import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';
import { 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { TypingHeading } from './TypingHeading';

export const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance by 1 smoothly every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 visible testimonials wrapping around the array
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  const whatsappMessage = encodeURIComponent("Hello Rahad, I reviewed your testimonials and would like to discuss hiring you for a project.");
  const whatsappUrl = `https://wa.me/8801350021488?text=${whatsappMessage}`;

  return (
    <section 
      id="testimonials" 
      className="py-14 md:py-18 relative bg-[#F8FAFC] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft Ambient Brand Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-blue-400/10 via-indigo-300/10 to-purple-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>CLIENT TESTIMONIALS</span>
            </motion.div>
            
            <TypingHeading 
              text="What Clients Say About Working With Me"
              className="text-[30px] md:text-[40px] font-black text-gray-900 leading-[1.2] tracking-tight"
            />

            <p className="text-gray-500 text-[15px] md:text-[16px] max-w-2xl mt-2 leading-relaxed">
              Verified feedback from international founders, digital agencies, and e-commerce brands.
            </p>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="w-11 h-11 rounded-full bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="w-11 h-11 rounded-full bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================
            3 TESTIMONIAL BOXES (BALANCED LAYOUT & SIZING)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, idx) => {
              const isCenterCard = idx === 1;
              return (
                <motion.div
                  key={`${item.author}-${startIndex}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={`group relative rounded-[28px] p-[2px] transition-all duration-500 flex flex-col justify-between h-full ${
                    isCenterCard
                      ? 'bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 shadow-[0_15px_35px_rgba(99,102,241,0.18)] -translate-y-1'
                      : 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="bg-white rounded-[26px] p-6 sm:p-7 h-full flex flex-col justify-between relative overflow-hidden">
                    
                    {/* Background Watermark Quote */}
                    <div className="absolute top-4 right-5 text-slate-100 pointer-events-none select-none">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="relative z-10">
                      {/* Top Bar: 5 Golden Stars & Country Pill */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-1 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-full shadow-2xs">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-[11px] font-bold text-amber-800 ml-1">5.0</span>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700 shadow-2xs">
                          {item.country}
                        </span>
                      </div>

                      {/* Testimonial Quote Text */}
                      <blockquote className="text-gray-700 text-[14.5px] sm:text-[15px] leading-[1.65] font-normal mb-6">
                        "{item.text}"
                      </blockquote>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                        {item.author.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-slate-900 font-bold text-[15px] leading-tight truncate">
                          {item.author}
                        </h4>
                        <p className="text-blue-600 font-semibold text-[12px] truncate mt-0.5">
                          {item.role} <span className="text-slate-300">•</span> {item.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to review set starting at ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === startIndex % testimonials.length
                  ? 'w-7 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xs'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* ========================================================
            PROFESSIONAL HIGH-CONVERTING CTA BANNER
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-[32px] p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-xl shadow-blue-500/15"
        >
          <div className="bg-slate-950 rounded-[30px] p-7 sm:p-10 md:p-12 text-white relative overflow-hidden">
            
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Column: Copy & Live Status */}
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[11px] tracking-wider uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Currently Available for New Projects</span>
                </div>

                <h3 
                  style={{ color: '#ffffff' }}
                  className="text-[26px] sm:text-[32px] md:text-[36px] font-black !text-white leading-tight tracking-tight mb-3 drop-shadow-xs"
                >
                  Ready to Build a High-Converting Website?
                </h3>
                
                <p className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed">
                  Let’s collaborate to build an ultra-fast, modern WordPress website that turns your visitors into paying customers. Free consultation & guaranteed deadlines.
                </p>
              </div>

              {/* Right Column: High-Impact Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:scale-[1.03] transition-all text-[15px]"
                >
                  <span>Hire Rahad Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-900/30 hover:scale-[1.03] transition-all text-[15px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
