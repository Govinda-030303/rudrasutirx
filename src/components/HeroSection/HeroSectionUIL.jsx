import React from 'react'

import r1 from '../../assets/cert-images/r1.svg'
import r2 from '../../assets/cert-images/r2.svg'
import r3 from '../../assets/cert-images/r3.svg'
import r4 from '../../assets/cert-images/r4.svg'

const HeroSectionUIL = (props) => {
  const certImage = [r1, r2, r3, r4]
  const handleClick = () => {
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center  p-8 rounded-md">
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-1">
        <p className="text-gray-600 font-semibold text-sm">{props.slogan}</p>
        <h1 className="text-xm md:text-xl font-bold leading-tight">
          {props.title}
        </h1>
        <h3 className="text-sm md:text-sm text-gray-700">{props.description}</h3>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 text-sm">
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-md shadow text-xl">
            Get Started
          </button> */}
         <button className="bg-gradient-to-r from-[#D64CD1] via-[#5B88D1] to-[#2368D7] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:cursor-pointer" onClick={handleClick}>Get Started</button>
         
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-4 mt-6">
          {certImage.map((image, index) => (
            <img src={image} alt={`Certificate ${index + 1}`} key={index} className="w-20 h-20 object-contain" />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img src={props.image} alt="Hero" className="w-[80%] max-w-md rounded-4xl" />
      </div>
    </div>
  )
}

export default HeroSectionUIL
