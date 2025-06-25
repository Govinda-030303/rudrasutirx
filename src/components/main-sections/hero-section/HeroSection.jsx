import React from "react";

const HeroSection = () => {
  const handleClick=(target)=>{
   const target1 = document.getElementById("contact-form");
    if (target1) {
      target1.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3f8ff] via-[#e7eafe] to-[#fdfbff]">
      <div className="max-w-6xl px-4 md:px-8 lg:px-16 text-left space-y-4">
        <h1 className="uppercase text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-extrabold bg-gradient-to-r from-[#D64CD1] via-[#5B88D1] to-[#2368D7] bg-clip-text text-transparent">
          elevate your brand,
        </h1>
        <h1 className="uppercase text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-extrabold bg-gradient-to-r from-[#D64CD1] via-[#5B88D1] to-[#2368D7] bg-clip-text text-transparent">
          transform your
        </h1>
        <h1 className="uppercase text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-extrabold bg-gradient-to-r from-[#D64CD1] via-[#5B88D1] to-[#2368D7] bg-clip-text text-transparent">
          experience
        </h1>
        <p className="text-md sm:text-lg md:text-xl font-medium text-gray-800 mt-6 max-w-2xl">
          Cutting-edge branding digital agency for businesses that want to stand out and
          leave a lasting impression in the digital world.
        </p>
        <div className="flex">
          <p className="bg-gradient-to-r  from-[#D64CD1] via-[#5B88D1] to-[#2368D7] p-2 rounded-4xl px-5 hover:cursor-pointer" onClick={handleClick}> Start Today </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
