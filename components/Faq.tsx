'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How long does software development take?",
      answer: "The development timeline varies based on project complexity, features, and scope. We provide detailed estimates after analyzing your requirements."
    },
    {
      question: "How much will the APPWRK developers' work cost?",
      answer: "Cost depends on project requirements, complexity, and timeline. We offer competitive rates and transparent pricing after thorough project analysis."
    },
    {
      question: "Should I be familiar with the technical details to work with you?",
      answer: "No, you don't need technical expertise. Our team will guide you through the process and explain everything in simple terms."
    },
    {
      question: "What information do you need from me to start work?",
      answer: "We need your project requirements, goals, target audience, desired features, and timeline. Our team will help gather all necessary details."
    },
    {
      question: "How do you guarantee the product quality?",
      answer: "We implement rigorous quality assurance processes, regular testing, and follow industry best practices to ensure high-quality deliverables."
    },
    {
      question: "Do you provide product support services after the app development is complete?",
      answer: "Yes, we offer post-development support and maintenance services to ensure your application runs smoothly."
    },
    {
      question: "I need an app for iOS and Android. Which platform is better to start with?",
      answer: "The choice depends on your target audience and market strategy. We can help you analyze and decide the best approach for your specific needs."
    },
    {
      question: "What technologies and programming languages do you utilize in your work?",
      answer: "We use modern technologies including React, Node.js, Python, Swift, Kotlin, and more, choosing the best stack for your specific requirements."
    },
    {
      question: "Will you sign an NDA?",
      answer: "Yes, we're happy to sign NDAs to protect your intellectual property and ensure confidentiality."
    },
    {
      question: "How long do I have to wait before the work on my project starts?",
      answer: "We typically begin projects within 1-2 weeks after agreement finalization, depending on team availability and project scope."
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
