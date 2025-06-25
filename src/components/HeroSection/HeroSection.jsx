import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSectionUIL from "./HeroSectionUIL";



import C1 from "../../assets/cert-images/C1.jpg";
import C2 from "../../assets/cert-images/C2.jpg";
import C3 from "../../assets/cert-images/C3.jpg";
import C4 from "../../assets/cert-images/C4.jpg";

const carouselData = [
  {
    slogan: "Advanced Ai Solutions",
    title: "Ai System With Secure information",
    description: " Revolutionize Your Business with Our Cutting-Edge AI Solutions.",
    image: C1,
  },
  {
    slogan: "Web Solutions",
    title: "Your Website, Streamlined for Success",
    description: "  Create a Stunning Online Presence with Our Web Solutions.",
    image: C2,
  },
  {
    slogan: "best SEO Practices",
    title: " Optimize Your Website",
    description: "Boost Your Online Presence",
    image: C3,
  },
  {
    slogan: "Best App Development",
    title: "Trusted by Thousands of Clients",
    description: "Join the community of satisfied users who trust our solutions for their business needs.",
    image: C4,
  },
 
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 4000); // Change slide every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full min-h-[90vh] bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <HeroSectionUIL {...carouselData[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
     {/* Left Vertical Indicators */}
<div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 z-10">
  {carouselData.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        index === current
          ? "bg-orange-500 h-4 w-2 rounded-md"
          : "bg-orange-200"
      }`}
    />
  ))}
</div>

    </div>
  );
};

export default HeroSection;

