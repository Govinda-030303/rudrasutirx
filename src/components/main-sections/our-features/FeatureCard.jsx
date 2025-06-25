import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, TrendingUp, MapPin } from 'lucide-react';

const FeatureCard = ({ image, title, description, direction = 'bottom' }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const phoneVariants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const targetVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const checkmarkVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const arrowVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const directionsMap = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  const entryAnimation = {
    hidden: directionsMap[direction] || { y: 100, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={entryAnimation}
      className="flex items-center justify-center p-4 w-[22rem] h-[40rem] max-w-xs sm:max-w-sm md:max-w-md"
    >
      <motion.div
        variants={containerVariants}
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-6 w-[22rem] h-[35rem] shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-3 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-12 h-12 bg-white rounded-full"></div>
        </div>

        {/* Floating Icons */}
        <div className="relative z-10">
          <motion.div
            variants={checkmarkVariants}
            animate="animate"
            className="absolute -top-2 left-6"
          >
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          <motion.div
            variants={arrowVariants}
            animate="animate"
            className="absolute -top-3 right-8"
          >
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-blue-700" />
            </div>
          </motion.div>

          <motion.div
            variants={targetVariants}
            animate="animate"
            className="absolute top-16 -left-5"
          >
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg relative">
              <Target className="w-6 h-6 text-white" />
              <div className="absolute inset-1 border-2 border-white rounded-full"></div>
              <div className="absolute inset-2 bg-red-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-24 -right-4"
          >
            <div className="w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-8 h-8 text-blue-700" />
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-24 -right-3"
            style={{ animationDelay: '1s' }}
          >
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 text-blue-700" />
            </div>
          </motion.div>

          {/* Phone Image */}
          <motion.div
            variants={phoneVariants}
            animate="animate"
            className="flex justify-center mb-4 mt-8"
          >
            <div className="relative">
              <img
                src={image}
                alt="phone"
                className="w-auto h-48 object-contain"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-white text-sm opacity-90">{description}</p>
          </motion.div>

          {/* Dots */}
          <motion.div
            className="flex justify-center mt-4 space-x-2"
            variants={itemVariants}
          >
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
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            ))}
          </motion.div>
        </div>

        {/* Pulse Overlay */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-white rounded-3xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
