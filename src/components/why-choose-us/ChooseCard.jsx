import React from 'react';
import { motion } from 'framer-motion';

const ChooseCard = ({ image, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // triggers on scroll up/down
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center rounded-xl p-6 max-w-xs w-[26rem] h-[30rem] shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md"
    >
      {/* Image */}
      <div className="mb-4 pt-6">
        <img src={image} alt={title} className="w-38 h38 object-contain rounded-full mx-auto" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2 pt-6">{title}</h2>

      {/* Paragraph */}
      <p className=" text-sm pt-6">{description}</p>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-1.5 h-1.5 bg-white/90 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ChooseCard;
