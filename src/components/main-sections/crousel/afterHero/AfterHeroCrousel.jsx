import React from "react";
import { motion } from "motion/react";
import {anotherLogo} from "../../../../assets/another-logo/anotherLogo";

// const logos = [logo1, logo2 /* add all logos here in order */];

const AfterHeroCarousel = () => {
  return (
    <div className="w-full py-6 overflow-hidden bg-black">
      <motion.div
        className="flex gap-10 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...anotherLogo, ...anotherLogo].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className=" w-full h-13 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AfterHeroCarousel;
