import { motion } from 'motion/react';
import { skills, personalInfo } from '../data';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Blue Blob Background */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#60A5FA] rounded-br-[40px] rounded-tl-[40px] z-0 -translate-x-4 -translate-y-4"></div>
            
            {/* Image Card */}
            <div className="relative bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden z-10 flex justify-center items-center border border-gray-50/50 aspect-square">
              <img 
                src="https://avatars.githubusercontent.com/u/297083478?s=400&u=9b790e97cb52625f656298298c143712068dd322&v=4" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -right-6 bottom-16 z-20 w-32 h-32 bg-[#60A5FA] text-white rounded-full flex flex-col items-center justify-center p-2 shadow-xl border-[6px] border-[#F8FAFC]">
              <div className="text-[32px] font-black leading-none mb-1">3+</div>
              <div className="text-[11px] text-center leading-[1.2] font-medium">Years of<br/>Experience</div>
            </div>
          </motion.div>

          {/* Right: Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm bg-white">
              ABOUT
            </span>
            
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-gray-900 leading-[1.2] mb-4">
              A Developer Who Cares About the Details
            </h2>
            
            <p className="text-[18px] md:text-[20px] text-gray-700 font-medium mb-6">
              With 3+ years of experience, I create digital experiences that matter.
            </p>
            
            <div className="space-y-4 text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-8 max-w-2xl">
              <p>
                I'm a passionate web developer building digital products that are as functional as they are beautiful. I combine clean code with thoughtful design to create websites that don't just look good — they convert. Whether it's a personal brand, a business site, or a full-stack application, I treat every project as if it were my own.
              </p>
            </div>
            
            <div className="mb-8">
              <a href="#journey" className="inline-block bg-gradient-to-r from-[#60A5FA] to-blue-500 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] hover:scale-105 transition-all text-sm">
                Download Resume
              </a>
            </div>

            {/* Contact Info Boxes */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-1">PHONE</div>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-600 text-sm hover:text-primary transition-colors">{personalInfo.phone}</a>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-1">EMAIL</div>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 text-sm hover:text-primary transition-colors">{personalInfo.email}</a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

