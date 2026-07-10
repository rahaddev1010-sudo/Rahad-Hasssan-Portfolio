import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    
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
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-100 text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm bg-white">
              GET IN TOUCH
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[40px] md:text-[50px] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Let's create something <br className="hidden md:block" />
              <span className="text-blue-600">extraordinary.</span>
            </motion.h2>
            <p className="text-[18px] text-gray-500 mb-10 max-w-md leading-relaxed">
              Have a project in mind, a question, or just want to say hello? 
              I'm currently available for freelance opportunities.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Drop a Line</h4>
                  <span className="text-[17px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Me</h4>
                  <span className="text-[17px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-white relative overflow-hidden"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="mb-10 relative z-10">
              <h3 className="text-[28px] font-black text-gray-900 mb-2 tracking-tight">Send a Message</h3>
              <p className="text-gray-500 text-[15px]">I'll get back to you as soon as possible.</p>
            </div>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50/80 backdrop-blur-sm text-green-600 p-4 rounded-2xl flex items-center gap-3 border border-green-100/50 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-[14px] font-bold">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[13px] font-bold text-gray-700 ml-2 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full px-5 py-4 rounded-[20px] border-2 border-transparent bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] focus:border-blue-500 focus:shadow-[0_8px_30px_rgb(59,130,246,0.12)] outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[13px] font-bold text-gray-700 ml-2 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-5 py-4 rounded-[20px] border-2 border-transparent bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] focus:border-blue-500 focus:shadow-[0_8px_30px_rgb(59,130,246,0.12)] outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[13px] font-bold text-gray-700 ml-2 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-5 py-4 rounded-[20px] border-2 border-transparent bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] focus:border-blue-500 focus:shadow-[0_8px_30px_rgb(59,130,246,0.12)] outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[13px] font-bold text-gray-700 ml-2 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required 
                    className="w-full px-5 py-4 rounded-[20px] border-2 border-transparent bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] focus:border-blue-500 focus:shadow-[0_8px_30px_rgb(59,130,246,0.12)] outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[13px] font-bold text-gray-700 ml-2 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-[20px] border-2 border-transparent bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] focus:border-blue-500 focus:shadow-[0_8px_30px_rgb(59,130,246,0.12)] outline-none transition-all text-gray-900 font-medium placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold px-8 py-5 rounded-[20px] shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgb(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 relative overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 text-[16px]">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
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
