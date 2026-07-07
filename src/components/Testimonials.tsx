import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';
import { Star, CheckCircle2, Trophy, Globe2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Premium Gradient Container */}
        <div className="rounded-[40px] p-[2px] bg-gradient-to-br from-[#60A5FA] via-purple-400 to-pink-400 shadow-[0_20px_60px_rgb(96,165,250,0.15)] relative">
          <div className="bg-gradient-to-br from-blue-50/90 via-sky-50/90 to-white rounded-[38px] p-8 md:p-16 relative overflow-hidden h-full">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between relative z-10">
              
              {/* Left Side: Header & Controls */}
              <div className="w-full lg:w-[40%] text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-[#60A5FA] mb-6 backdrop-blur-sm border border-blue-200">
                  <Quote className="w-6 h-6 fill-[#60A5FA]/20" />
                </div>
                <h2 className="text-[36px] md:text-[46px] font-bold text-gray-900 leading-[1.1] mb-6">
                  Client <br /> Success Stories
                </h2>
                <p className="text-gray-600 text-[16px] mb-10 max-w-md mx-auto lg:mx-0">
                  Don't just take my word for it. Here's what my clients have to say about their experience working with me.
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={prevTestimonial} 
                    className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-[#60A5FA] text-gray-600 hover:text-[#60A5FA] transition-all bg-white/50 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextTestimonial} 
                    className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-[#60A5FA] text-gray-600 hover:text-[#60A5FA] transition-all bg-white/50 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
  
              {/* Right Side: Slider */}
              <div className="w-full lg:w-[55%] relative h-[420px] sm:h-[350px] md:h-[300px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                      x: { type: "spring", stiffness: 200, damping: 25 },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md border border-white p-8 md:p-10 rounded-[32px] flex flex-col justify-between shadow-[0_20px_40px_rgb(0,0,0,0.06)]"
                  >
                    {/* Quotation Mark Watermark */}
                    <div className="absolute top-6 right-8 text-8xl font-serif leading-none text-blue-50/50 pointer-events-none select-none">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex mb-6 gap-1">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#FFBD2E] text-[#FFBD2E] drop-shadow-sm" />
                        ))}
                      </div>
                      <p className="text-[17px] md:text-[20px] font-medium text-gray-700 mb-8 leading-relaxed">
                        "{testimonials[activeIndex].text}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-2xl text-white shadow-[0_8px_16px_rgb(99,102,241,0.2)]">
                        {testimonials[activeIndex].author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].author}</h4>
                        <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{testimonials[activeIndex].role}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
  
            </div>
          </div>
        </div>

        {/* Premium Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          <div className="group relative bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(56,189,248,0.1)] transition-all duration-500 overflow-hidden border border-gray-100 hover:border-sky-200">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 text-sky-500 flex items-center justify-center border border-sky-100/50 shadow-sm group-hover:scale-110 group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h5 className="font-black text-gray-900 text-[24px] tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 transition-all">50+ Reviews</h5>
                <p className="text-[15px] text-gray-500 font-medium">100% Verified client feedback</p>
              </div>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.1)] transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-500 flex items-center justify-center border border-purple-100/50 shadow-sm group-hover:scale-110 group-hover:from-purple-500 group-hover:to-fuchsia-600 group-hover:text-white transition-all duration-500">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h5 className="font-black text-gray-900 text-[24px] tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all">Top Rated</h5>
                <p className="text-[15px] text-gray-500 font-medium">Consistent 5-star project results</p>
              </div>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(236,72,153,0.1)] transition-all duration-500 overflow-hidden border border-gray-100 hover:border-pink-200">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 text-pink-500 flex items-center justify-center border border-pink-100/50 shadow-sm group-hover:scale-110 group-hover:from-pink-500 group-hover:to-rose-600 group-hover:text-white transition-all duration-500">
                <Globe2 className="w-8 h-8" />
              </div>
              <div>
                <h5 className="font-black text-gray-900 text-[24px] tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 transition-all">Worldwide</h5>
                <p className="text-[15px] text-gray-500 font-medium">Global client collaboration</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

