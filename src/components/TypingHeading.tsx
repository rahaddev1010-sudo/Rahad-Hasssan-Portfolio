import { motion } from 'motion/react';

interface TypingHeadingProps {
  text?: string;
  parts?: { text: string; className?: string }[];
  className?: string;
}

export const TypingHeading = ({ text, parts, className }: TypingHeadingProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  let allChars: { char: string; charClassName?: string; key: string }[] = [];
  
  if (parts) {
    let globalIndex = 0;
    parts.forEach((part, partIndex) => {
      Array.from(part.text).forEach((char) => {
        allChars.push({
          char,
          charClassName: part.className,
          key: `char-${globalIndex++}`
        });
      });
    });
  } else if (text) {
    Array.from(text).forEach((char, index) => {
      allChars.push({
        char,
        key: `char-${index}`
      });
    });
  }

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {allChars.map((item) => {
        if (item.char === '\n') {
          return <br key={item.key} className="hidden md:block" />;
        }
        return (
          <motion.span variants={child} key={item.key} className={`inline-block ${item.charClassName || ''}`}>
            {item.char === " " ? "\u00A0" : item.char}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};
