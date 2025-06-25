import React from "react";
import Navbar from "./components/navbar/Navbar";
// import HeroSection from "./components/main-sections/hero-section/HeroSection";
import AfterHeroCarousel from "./components/main-sections/crousel/afterHero/AfterHeroCrousel";
import TextSection from "./components/main-sections/text-section/TextSection";
import HowItWorks from "./components/main-sections/how-it-works/HowItWorks";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";
import SocialMediaIcons from "./components/main-sections/social-media-icons/SocialMediaIcons";
import FeatureCard from "./components/main-sections/our-features/FeatureCard";
import FeatureSection from "./components/main-sections/our-features/FeatureSection";
import Footer from "./components/main-sections/footer/Footer";
import ContactForm from "./components/main-sections/contact-form/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">

        {/* Navbar */}
        <div className="relative">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="relative z-5 h-full flex items-center justify-left">
          <HeroSection />
        </div>
      </div>

      <div className=" bg-white/100 text-black">
        {/* main section */}
        <AfterHeroCarousel />
        <TextSection />
        {/* <HowItWorks /> */}
        <WhyChooseUs />
        <SocialMediaIcons />

        <FeatureSection />
        <ContactForm />
        <Footer />
      </div>

    </div>
  );
};

export default App;
