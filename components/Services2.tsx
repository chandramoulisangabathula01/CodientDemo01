'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Digital Transformation',
    description: 'Revolutionize your business with cutting-edge digital solutions',
    hoverDescription: 'Leverage AI, cloud computing, and data analytics to streamline operations and enhance customer experiences. Our digital transformation services help you stay ahead in the rapidly evolving digital landscape.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scale your infrastructure with cloud-native architecture',
    hoverDescription: 'Modernize your infrastructure with secure, scalable, and cost-effective cloud solutions. We help you migrate, optimize, and manage your cloud environment for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence',
    hoverDescription: 'Transform your business with AI-powered solutions that automate processes, predict trends, and deliver personalized experiences. Our AI expertise helps you make smarter decisions faster.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  },
];

export default function Services2() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-blue-400 font-semibold mb-2 uppercase tracking-wider">Our Services</h4>
          <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative solutions can help you achieve your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[400px] overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

              <div className="relative h-full w-full p-8 flex flex-col">
                <div className="mb-auto">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>

                <motion.div
                  className="transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-gray-200 leading-relaxed mb-4">{service.hoverDescription}</p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}