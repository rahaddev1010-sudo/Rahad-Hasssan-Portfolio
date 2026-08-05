import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export const WhatsAppButton = () => {
  const prefilledText = encodeURIComponent("Hello, I saw your portfolio and would like to discuss a project.");
  const [whatsappUrl, setWhatsappUrl] = useState(`https://wa.me/8801350021488?text=${prefilledText}`);

  useEffect(() => {
    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      // On desktop, go directly to WhatsApp Web to bypass the intermediate screen
      setWhatsappUrl(`https://web.whatsapp.com/send?phone=8801350021488&text=${prefilledText}`);
    }
  }, []);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17 
      }}
      aria-label="Chat with me on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
      </span>
    </motion.a>
  );
};
