"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaPencilRuler, FaBug, FaRocket } from 'react-icons/fa';

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
    icon: <FaSearch className="w-12 h-12 text-blue-600" />
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Our team creates the solution following best practices and latest technologies.",
    icon: <FaPencilRuler className="w-12 h-12 text-blue-600" />
  },
  {
    number: "03",
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution meets the highest quality standards.",
    icon: <FaBug className="w-12 h-12 text-blue-600" />
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing maintenance and support.",
    icon: <FaRocket className="w-12 h-12 text-blue-600" />
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h3 className="text-blue-600 font-medium mb-2">Process</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            From Idea to Launch: Our Process
          </h2>
          <p className="text-2xl  w-3/4 text-gray-600">
            We ensure quality, efficiency and success at every stage. See how we bring your vision to life.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-8 text-left flex items-center justify-between"
              >
                <div className="flex items-center space-x-6">
                  <div className="text-5xl font-bold text-blue-600/20">
                    {activeIndex === index ? (
                      step.icon
                    ) : (
                      step.number
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <div className="text-2xl text-blue-600">
                  {activeIndex === index ? '-' : '+'}
                </div>
              </button>
              
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 200 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0, ease: 'easeInOut' }}
                  className="px-8 pb-8 pt-4 text-gray-600"
                  style={{ overflow: 'hidden' }}
                >
                  {step.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}