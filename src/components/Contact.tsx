import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { TypingHeading } from './TypingHeading';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('WordPress & Elementor');

  const services = [
    'WordPress & Elementor',
    'WooCommerce Store',
    'Speed & SEO Boost',
    'Figma to WP',
    'AI Automations'
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('service_requested', selectedService);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvdzavg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 6000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello Rahad, I reviewed your portfolio and would like to discuss a project.");
  const whatsappUrl = `https://wa.me/8801350021488?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-200/25 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-purple-200/25 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span>LET'S TALK BUSINESS</span>
            </div>

            <TypingHeading 
              parts={[
                { text: "Let's create something\n" },
                { text: "extraordinary.", className: "text-blue-600" }
              ]}
              className="text-[34px] sm:text-[40px] md:text-[46px] font-black text-slate-900 leading-[1.2] mb-6 tracking-tight"
            />

            <p className="text-[16px] md:text-[17px] text-slate-600 mb-8 leading-relaxed">
              Whether you need a brand-new custom WordPress site, an Elementor redesign, or high-performance WooCommerce funnel, I'm here to bring your vision to life.
            </p>

            {/* Quick Guarantees */}
            <div className="space-y-3 mb-10 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 text-[14px] text-slate-700 font-semibold">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Initial Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA & Complete Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Post-launch support & training included</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center p-5 bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-13 h-13 bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white rounded-2xl flex items-center justify-center mr-5 shrink-0 transition-colors duration-300 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Fastest Reply</h4>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Online Now</span>
                  </div>
                  <span className="text-[16px] font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors block truncate">
                    +880 1350-021488 (WhatsApp)
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${personalInfo.email}`} 
                className="group flex items-center p-5 bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-13 h-13 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mr-5 shrink-0 transition-colors duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Inquiry</h4>
                  <span className="text-[16px] font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors block truncate">
                    {personalInfo.email}
                  </span>
                </div>
              </a>
              
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                className="group flex items-center p-5 bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-13 h-13 bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white rounded-2xl flex items-center justify-center mr-5 shrink-0 transition-colors duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Direct Call</h4>
                  <span className="text-[16px] font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors block truncate">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-[36px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-200/80 relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="mb-8 relative z-10">
              <h3 className="text-[26px] md:text-[30px] font-black text-slate-900 mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-slate-500 text-[15px]">
                Fill out the details below and I'll get back to you with a free consultation and project estimate.
              </p>
            </div>

            {/* Service selector pills */}
            <div className="mb-8 relative z-10">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider block mb-3">
                Select Service You Need:
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                      selectedService === srv
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>
            
            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl flex items-center gap-3 border border-emerald-200 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-[14px] font-bold">
                    Thank you! Your message has been received. I'll get back to you shortly.
                  </p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder-slate-400 text-[15px]"
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder-slate-400 text-[15px]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Phone / WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder-slate-400 text-[15px]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Project Subject *
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder-slate-400 text-[15px]"
                    placeholder="e.g. Redesign WordPress Website"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-slate-600 uppercase tracking-wider ml-1">
                  Project Details & Goals *
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder-slate-400 text-[15px] resize-none"
                  placeholder="Tell me about your site, desired features, timeline, and any reference links..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold px-8 py-4.5 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 relative overflow-hidden"
              >
                <span className="relative z-10 text-[16px]">
                  {isSubmitting ? 'Transmitting Message...' : 'Send Message & Get Free Quote'}
                </span>
                {!isSubmitting && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </motion.div>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
