"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1245] to-[#2a1f5f] rounded-lg p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Empower Your Business with AI Innovation
              </h3>
              <p className="text-gray-300 mb-6">
                Transform your business with cutting-edge AI solutions tailored to your needs.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a1245]">
                Get quote
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Elevate your Business with Design Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Create stunning user experiences with our expert design team.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}