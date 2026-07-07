import { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section id="contact" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-100 text-[#60A5FA] font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm bg-white">
              GET IN TOUCH
            </span>
            <h2 className="text-[40px] md:text-[50px] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Let's create something <br className="hidden md:block" />
              <span className="text-[#60A5FA]">extraordinary.</span>
            </h2>
            <p className="text-[18px] text-gray-500 mb-10 max-w-md leading-relaxed">
              Have a project in mind, a question, or just want to say hello? 
              I'm currently available for freelance opportunities.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#60A5FA] rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-colors">
                  <Mail className="w-6 h-6 text-[#60A5FA] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Drop a Line</h4>
                  <span className="text-[17px] font-bold text-gray-900 group-hover:text-[#60A5FA] transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#60A5FA] rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-colors">
                  <Phone className="w-6 h-6 text-[#60A5FA] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Me</h4>
                  <span className="text-[17px] font-bold text-gray-900 group-hover:text-[#60A5FA] transition-colors">
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
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-500 text-sm">I'll get back to you as soon as possible.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-600 p-4 rounded-2xl flex items-center gap-3 border border-green-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-900"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-900"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 text-gray-900 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-[0_8px_30px_rgb(96,165,250,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
