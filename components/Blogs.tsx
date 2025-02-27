/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "How to Keep Users Engaged: Mobile App Retention",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How to Perform Mobile App Security Testing",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "15 Best Mobile App Security Threats and How",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

export default function Blogs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Exclusive Blogs</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover diverse and passionate insights from our tech enthusiasts. We collaborate across various sectors to streamline operations and drive innovation. Explore our rapidly growing collection of articles to see why we're at the forefront of IT solutions.
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <button className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}