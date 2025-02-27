/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  FaMobileAlt, 
  FaCode, 
  FaCheckCircle, 
  FaPalette, 
  FaChartLine, 
  FaServer, 
  FaWarehouse, 
  FaCommentsDollar 
} from 'react-icons/fa';

const services = [
  {
    title: "Mobile App Development",
    description: "We craft bespoke mobile applications that align with your strategic goals and elevate your business to greater heights.",
    icon: FaMobileAlt
  },
  {
    title: "Website Development",
    description: "Our highly-skilled and seasoned web developers build custom-made websites that leverage the latest technological advancements and trends.",
    icon: FaCode
  },
  {
    title: "Quality Assurance",
    description: "APPWRK's Quality Assurance team employs a comprehensive suite of rigorous testing to ensure that our developments are flawless.",
    icon: FaCheckCircle
  },
  {
    title: "UI UX Design",
    description: "Backed by cutting-edge technology, APPWRK delivers user-centric UI/UX interfaces that elevate user interaction and experiences.",
    icon: FaPalette
  },
  {
    title: "Digital Marketing",
    description: "From SEO to marketing and advertising, our digital marketing team brings into play data-driven strategies to deliver results that fuel growth.",
    icon: FaChartLine
  },
  {
    title: "IT Infrastructure",
    description: "Our IT Infrastructure team specializes in building robust, scalable, and secure systems that form the backbone of your business operations.",
    icon: FaServer
  },
  {
    title: "WMS Implementation",
    description: "With our expertise in WMS Implementation, you can ensure a seamless integration and optimization of your logistics operations.",
    icon: FaWarehouse
  },
  {
    title: "IT Consulting",
    description: "APPWRK's IT Consulting services offer strategic insights and tailored solutions to help businesses align technology with their business objectives.",
    icon: FaCommentsDollar
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h4 className="text-blue-600 font-medium mb-2">Services</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-2xl w-3/4 text-gray-600">
            We've developed specific use cases where our approach and expertise combined help businesses to truly excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {React.createElement(service.icon, { className: "w-12 h-12 text-blue-600" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <button className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}