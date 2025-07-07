import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo/rudrasutrixLogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getStarted = () => {
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-100">
      <nav className="flex items-center justify-between px-6 py-4 text-white backdrop-blur-md bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <h1 className="text-4xl font-bold ">
            {/* Ad <span className="text-purple-400 animate-pulse">Sutra</span> */}
            <img src={logo} alt="" className="w-[7rem] object-contain  "/>
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden z-[60]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-6 text-lg font-medium fixed md:static top-16 left-0 w-full md:w-auto md:bg-transparent z-[55] px-6 py-4 md:py-0 transition-all duration-300`}
        >
          <li className="hover:text-purple-300 cursor-pointer transition py-2 md:py-0 hover:cursor-pointer active:scale-120 text-purple-600">
            <span onClick={handleScroll}>Services </span>
          </li>
          <li className="py-2 md:py-0">
            <button className="bg-gradient-to-r from-[#D64CD1] via-[#5B88D1] to-[#2368D7]  text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition w-full md:w-auto hover:cursor-pointer active:bg-white/80 hover:scale-90"onClick={getStarted}>
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
