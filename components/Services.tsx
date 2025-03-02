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
    description: "Transform your vision into powerful, intuitive mobile applications that drive user engagement and deliver exceptional business value across all platforms.",
    icon: FaMobileAlt
  },
  {
    title: "Website Development",
    description: "Experience cutting-edge web solutions crafted by our expert developers, combining innovative technology with stunning design to create impactful digital presence.",
    icon: FaCode
  },
  {
    title: "Quality Assurance",
    description: "Ensure flawless performance with our comprehensive quality assurance services, implementing industry-leading testing methodologies for unparalleled reliability.",
    icon: FaCheckCircle
  },
  {
    title: "UI/UX Design",
    description: "Create captivating digital experiences through our human-centered design approach, delivering intuitive interfaces that delight users and drive engagement.",
    icon: FaPalette
  },
  {
    title: "Digital Marketing",
    description: "Accelerate your market presence with our data-driven digital marketing strategies, leveraging cutting-edge analytics to maximize ROI and drive sustainable growth.",
    icon: FaChartLine
  },
  {
    title: "IT Infrastructure",
    description: "Build future-proof digital foundations with our enterprise-grade infrastructure solutions, ensuring scalability, security, and optimal performance.",
    icon: FaServer
  },
  {
    title: "WMS Implementation",
    description: "Revolutionize your warehouse operations with our state-of-the-art WMS solutions, optimizing efficiency and accuracy across your entire supply chain.",
    icon: FaWarehouse
  },
  {
    title: "IT Consulting",
    description: "Navigate the digital landscape with our expert IT consulting services, providing strategic guidance to transform challenges into opportunities for innovation and growth.",
    icon: FaCommentsDollar
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wider">Our Services</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Transforming Businesses Through Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering organizations with innovative solutions that drive digital transformation and sustainable growth in today's competitive landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.2,
                type: "tween"
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col h-full border border-transparent hover:border-blue-100 group cursor-pointer hover:bg-blue-600"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 w-fit rounded-lg p-3 inline-block group-hover:bg-white transition-colors duration-200">
                  {React.createElement(service.icon, { 
                    className: "w-8 h-8 text-blue-600 group-hover:text-blue-600 transform group-hover:scale-105 transition-all duration-200" 
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed flex-grow group-hover:text-white/90">
                {service.description}
              </p>
              <div className="mt-auto flex justify-end">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-600 group-hover:text-white inline-flex items-center font-medium transition-colors duration-200 group-hover:font-semibold"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">Explore Service</span>
                  <div className="ml-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-white transform group-hover:-rotate-45 group-hover:text-blue-600 transition-all duration-200"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}