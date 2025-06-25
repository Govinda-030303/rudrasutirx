import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaIcons = () => {
  const icons = [
    {
      name: 'Google Ads',
      bgColor: 'bg-white',
      textColor: 'text-gray-600',
      hoverColor: 'hover:bg-blue-50',
      content: (
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="font-medium">Google Ads</span>
        </div>
      )
    },
    {
      name: 'Facebook',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-blue-700',
      content: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">f</span>
          </div>
          <span className="font-semibold">facebook</span>
        </div>
      )
    },
    {
      name: 'Instagram',
      bgColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400',
      textColor: 'text-white',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      content: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-purple-500 rounded-md relative">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute top-0.5 right-0.5"></div>
              <div className="w-2 h-2 border border-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Instagram</span>
            <div className="flex items-center space-x-1 text-xs">
              <div className="w-3 h-3 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-blue-200">Verified</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Amazon Ads',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
      hoverColor: 'hover:bg-orange-50',
      content: (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">amazon ads</span>
          <div className="flex flex-col items-center text-xs">
            <span className="text-blue-600 font-semibold">Verified</span>
            <span className="text-blue-600">partner</span>
          </div>
        </div>
      )
    },
    {
      name: 'LinkedIn',
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
      hoverColor: 'hover:bg-blue-800',
      content: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-blue-700 font-bold text-lg">in</span>
          </div>
          <span className="font-semibold">LinkedIn</span>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getStarted = () => {
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white/90 mb-4">
            Social Media Platforms
          </h1>
          <p className="text-white/90 text-lg">
            Connect with your audience across all major platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {icons.map((icon, index) => (
            <motion.div
              key={icon.name}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <motion.div
                  variants={hoverVariants}
                  className={`
                    ${icon.bgColor} ${icon.textColor} ${icon.hoverColor}
                    px-6 py-4 rounded-2xl shadow-lg border border-gray-200
                    min-w-[200px] transition-all duration-300
                    hover:shadow-xl hover:border-gray-300
                  `}
                >
                  {icon.content}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
            />
            <span className="text-gray-600 font-medium hover:cursor-pointer" onClick={getStarted}>
              Connect your brand to the world
            </span>
          </div>
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20"
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;