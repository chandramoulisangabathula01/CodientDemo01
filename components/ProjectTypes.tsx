/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectTypes() {
  return (
    <section className="py-20 bg-[#1a1245] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Find Your Perfect Fit With Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-100 transparent-white backdrop-blur-sm rounded-[2.5rem] p-8 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-3xl text-black font-semibold">Project-Based</h3>
              </div>
              <p className="text-gray-900 mb-6">Long-term projects, continuous development, or something you have in mind.</p>
            </div>
            <div className="flex justify-end">
              <button className="text-black bg-transparent border-2 border-black rounded-full hover:text-black inline-flex items-center">
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-100 transparent-white backdrop-blur-sm rounded-[2.5rem] p-8 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-3xl text-black font-semibold">Custom Solutions</h3>
              </div>
              <p className="text-gray-900 mb-6">Tailored solutions for your specific needs and requirements.</p>
            </div>
            <div className="flex justify-end">
              <button className="text-black bg-transparent border-2 border-black rounded-full hover:text-black inline-flex items-center">
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-start bg-white p-12 rounded-[2.5rem] flex justify-between items-center">
          <div>
            <h3 className="text-3xl text-black mb-4">Looking for a customized package?</h3>
            <p className="text-gray-900 mb-6 md:w-3/4">If our plans don't match your project or you want to talk it over first, let's have a call so we can start making a coffee.</p>
          </div>
          <button className=" hover:bg-blue-700 hover:text-white text-blue-500 bg-transparent border-2 border-blue-500 px-3 py-3 rounded-lg">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}