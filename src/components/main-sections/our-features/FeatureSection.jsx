import React from "react";

import seoImg from "../../../assets/feature-image/seo.png";
import aiImg from "../../../assets/feature-image/ai_driven.png";
import reporting from "../../../assets/feature-image/reporting.png";
import adManagement from "../../../assets/feature-image/adManagement.png";
import webDevelopment from "../../../assets/feature-image/web_development.png";
import appDevelopment from "../../../assets/feature-image/app_development.png";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    id: 1,
    img: seoImg,
    title: "SEO Optimization",
    description:
      "Boost your website's visibility and ranking in search engines with cutting-edge SEO strategies. Our system analyzes key SEO metrics, identifies target keywords, and helps you optimize your site's content. Reach the right audience with maximum efficiency, ensuring your ads are seen by those who matter most. Comprehensive keyword analysis On-page and off-page SEO insights Performance tracking and suggestions",
  },
  {
    id: 2,
    img: aiImg,
    title: "AI-Powered Efficiency",
    description:
      "Provide timely, relevant information with dynamic, self-generating content based on real-time data trends and customer preferences. Connect with local customers more quickly and effectively through personalized interactions at scale. Streamline and optimize workflows through automation, saving both time and costs.",
  },
  {
    id: 3,
    img: reporting,
    title: "Single Place Ad Data Reporting",
    description:
      "Consolidate all your ad performance data in one place. With our ad data reporting feature, you can easily analyze performance across platforms and gain insights into how each campaign is performing. Make data-driven decisions faster and more accurately. All-in-one data reporting across channels Customizable performance dashboards Data export and advanced analytics options.",
  },
  {
    id: 4,
    img: adManagement,
    title: "Unified Ads Management",
    description:
      "Manage all your advertising campaigns in one centralized platform. Our unified ads management feature allows you to control, monitor, and adjust ads across multiple platforms with ease. Get a complete view of your campaigns, saving time and ensuring consistency in your messaging. Seamless integration with major ad platforms Real-time performance monitoring Multi-channel management from one dashboard",
  },
  {
    id: 5,
    img: webDevelopment,
    title: "Website Development",
    description:
      "Manage all your advertising campaigns in one centralized platform. Our unified ads management feature allows you to control, monitor, and adjust ads across multiple platforms with ease. Get a complete view of your campaigns, saving time and ensuring consistency in your messaging. Seamless integration with major ad platforms Real-time performance monitoring Multi-channel management from one dashboard",
  },
  {
    id: 6,
    img: appDevelopment,
    title: "App Development",
    description:
      "Manage all your advertising campaigns in one centralized platform. Our unified ads management feature allows you to control, monitor, and adjust ads across multiple platforms with ease. Get a complete view of your campaigns, saving time and ensuring consistency in your messaging. Seamless integration with major ad platforms Real-time performance monitoring Multi-channel management from one dashboard",
  },
  
];
const FeatureSection = () => {
  return (
    <div className="" id="services">
      <div className="">
        <h1 className="text-center text-5xl font-mono font-bold">
          Our Best Features
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center py-10">
        {featureData.map((item) => (
          <FeatureCard
            key={item.id}
            image={item.img}
            title={item.title}
            description={item.description}
            direction="top" // or "right", "bottom" – alternate them for variety
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
