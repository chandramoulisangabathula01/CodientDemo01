"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-10 text-white relative overflow-hidden hover-lift"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 hover:opacity-20 transition-opacity"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Empower Your Business with AI Innovation
              </h3>
              <p className="text-gray-100 mb-8 text-lg">
                Transform your business with cutting-edge AI solutions tailored to your needs.
              </p>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg px-8 py-6 rounded-full">
                Get Started Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 relative overflow-hidden hover-lift border border-white/20"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 hover:opacity-10 transition-opacity"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <h3 className="text-3xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                Elevate your Business with Design Solutions
              </h3>
              <p className="text-gray-200 mb-8 text-lg">
                Create stunning user experiences with our expert design team.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-blue-500/25">
                Get Started Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}