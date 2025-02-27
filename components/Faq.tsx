'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What makes Codient Systems different from other software companies?",
      answer: "Codient Systems stands out with our innovative approach, experienced team, and commitment to delivering cutting-edge solutions tailored to each client's unique needs."
    },
    {
      question: "What is the typical investment range for projects at Codient Systems?",
      answer: "Project investments vary based on scope, complexity, and requirements. We provide transparent pricing and flexible engagement models to suit different budgets and needs."
    },
    {
      question: "Do you offer consultation services before project commencement?",
      answer: "Yes, we provide comprehensive consultation services to understand your vision, analyze requirements, and suggest the best technical approach for your project."
    },
    {
      question: "What is your development process like?",
      answer: "We follow an agile methodology with regular client communication, iterative development, and continuous feedback integration to ensure project success."
    },
    {
      question: "How do you ensure project security and confidentiality?",
      answer: "We implement robust security measures, follow industry best practices, and sign NDAs to protect your intellectual property and sensitive information."
    },
    {
      question: "What kind of post-launch support does Codient Systems provide?",
      answer: "We offer comprehensive post-launch support including maintenance, updates, performance monitoring, and technical assistance to ensure long-term success."
    },
    {
      question: "Can you help with both web and mobile app development?",
      answer: "Yes, we specialize in both web and mobile app development, offering cross-platform solutions using the latest technologies and frameworks."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across various industries including healthcare, finance, e-commerce, education, and technology, delivering customized solutions for each sector."
    },
    {
      question: "How do you handle project timelines and deadlines?",
      answer: "We maintain strict project management practices with clear milestones, regular updates, and proactive communication to ensure timely delivery."
    },
    {
      question: "What is your team's expertise level?",
      answer: "Our team consists of senior developers, designers, and project managers with extensive experience in delivering complex software solutions across various technologies."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-blue-600 font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{item.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t"
                >
                  <p className="p-4 bg-gray-50">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
