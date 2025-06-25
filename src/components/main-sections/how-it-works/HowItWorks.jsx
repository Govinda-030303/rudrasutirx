import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '1',
    color: 'text-blue-500',
    title: 'Choose Your Plan',
    description: 'Select a subscription tier that matches your design needs. Scale up or down anytime.',
  },
  {
    number: '2',
    color: 'text-purple-400',
    title: 'Request Designs',
    description: 'Submit unlimited design requests through our simple project dashboard.',
  },
  {
    number: '3',
    color: 'text-pink-400',
    title: 'Receive & Revise',
    description: 'Get designs within 24–48 hours with unlimited revisions until perfect.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <div className=" text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">HOW IT WORKS</h2>
          <p className="text-xl leading-relaxed">
            Powerful, scalable, innovative design — done in three easy steps.
          </p>
        </div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false , amount: 0.3}}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-5 border-t border-white/10 pt-8"
            >
              <h3 className={`text-8xl font-extralight ${step.color} font-monoton`}>{step.number}</h3>
              <div>
                <h4 className="text-2xl font-semibold mb-1">{step.title}</h4>
                <p className="text-base text-white/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;

