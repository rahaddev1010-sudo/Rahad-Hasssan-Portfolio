import { motion } from 'motion/react';
import { services } from '../data';
import React, { useRef, useState } from 'react';
import { TypingHeading } from './TypingHeading';

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl p-[1.5px] transition-all duration-500 ease-out flex flex-col h-full hover:-translate-y-2 z-10"
    >
      {/* Base Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/50 via-slate-100/30 to-purple-100/50 opacity-80 shadow-[0_0_15px_rgba(226,232,240,0.5)] transition-opacity duration-700 ease-in-out group-hover:opacity-0" />
      
      {/* Hover Gradient Border (Smooth fade in) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out shadow-[0_0_30px_rgba(96,165,250,0.15)]" />
      
      {/* Inner Card Background */}
      <div className="relative z-10 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60 group-hover:from-blue-100/80 group-hover:via-blue-50/30 group-hover:to-purple-100/80 transition-colors duration-700 rounded-[22.5px] p-8 lg:p-10 flex flex-col h-full overflow-hidden w-full">
        
        {/* Ambient Corner Glow (Base) */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-all duration-700 pointer-events-none z-0" />
        {/* Ambient Corner Glow (Hover) */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none z-0" />

        {/* Spotlight Hover Effect inside */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[22.5px] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(96,165,250,0.1), transparent 40%)`,
          }}
        />

        {/* Top Edge Glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] z-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Icon Header */}
        <div className="flex items-start justify-between mb-8 relative z-20">
          <div className="w-14 h-14 shrink-0 bg-blue-50 border border-blue-100/50 group-hover:bg-white group-hover:border-blue-200 group-hover:shadow-[0_8px_16px_-6px_rgba(96,165,250,0.4)] flex items-center justify-center rounded-full transition-all duration-500">
            <service.icon className="w-6 h-6 text-blue-600 transition-colors duration-500 stroke-[1.5]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 flex-grow flex flex-col">
          <h3 className="text-[19px] md:text-[21px] font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.7] mt-auto group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-14 md:py-18 relative bg-[#F0F4F8] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-gradient-to-r from-blue-400/20 via-purple-400/10 to-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-10 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-block px-4 py-1.5 rounded-full border border-sky-200 text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 shadow-sm bg-sky-50/50"
          >
            WHAT I DO
          </motion.div>
          
          <TypingHeading 
            text="From stunning designs to smart automation — everything your business needs online."
            className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-[1.2] max-w-4xl"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
