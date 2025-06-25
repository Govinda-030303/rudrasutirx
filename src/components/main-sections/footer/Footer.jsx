import React from "react";
import logo from '../../../assets/logo/rudrasutrixLogo1.png'
import {
  SiLinkedin,
  SiInstagram,
  SiX,
  SiFacebook,
  SiBehance,
} from "react-icons/si";

const Footer = () => {
  const handleScroll = () => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-[#140A1F] bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo and description */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            {/* <span className="text-4xl font-black tracking-widest">Ad</span>
            <span>Sutra</span> */}
            <img src={logo} alt="" className="w-[7rem] scale-150 object-contain"/>
          </h1>
           
          <p className="mt-6 text-gray-700 leading-relaxed">
            RudraSutrix is your partner in digital success delivering powerful web, app, SEO, and marketing solutions that drive growth and visibility in the digital world.
          </p>
          <p className="text-blue-700">rudrasutrix@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 text-gray-900 md:justify-center">
          {/* <a href="#" className="hover:text-white transition">
            How it Works
          </a> */}
          {/* <a href="#" className="hover:text-white transition">
            Recent Work
          </a>
          <a href="#" className="hover:text-white transition">
            What You Get
          </a> */}
          {/* <span
            className="hover:text-black transition hover:cursor-pointer"
            onClick={handleScroll}
          >
            Services
          </span> */}
        </div>

        {/* Contact and Social */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-4">
            <a
              href=""
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rudrasutrix?igsh=MWg3c2dwOTJrZmRobQ==" target="_blank"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiInstagram />
            </a>
            <a
              href=""
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiX />
            </a>
            <a
              href=""
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiFacebook />
            </a>
            <a
              href=""
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiBehance />
            </a>
          </div>
          <div>
            <p className="text-xl">STHANU MEDIA SOLUTIONS PRIVATE LIMITED</p>
           
            <p>
              S-12, Rashi Pride Apts, BTM 6th Stage, 2nd Phase, Bannerghatta
              Road, Bangalore South, Bengaluru, Karnataka 560076
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center text-black mt-12">
        Copyright © 2025 Rudra Sutrix 
      </div>
    </footer>
  );
};

export default Footer;
