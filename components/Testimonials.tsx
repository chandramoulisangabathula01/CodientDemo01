"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Daniela Christiansson",
    role: "CEO at Digital Space",
    rating: 5,
    text: "APPWRK helped us more than what we agreed on. Their expertise and dedication exceeded our expectations, delivering results that transformed our business.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Lucas Martinez",
    role: "CTO at TechFlow",
    rating: 5,
    text: "The team delivered everything they promised and more. Their technical prowess and attention to detail were instrumental in our product's success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Oliver Garcia",
    role: "Product Manager",
    rating: 5,
    text: "We were so impressed with the project execution. APPWRK's ability to understand our vision and translate it into reality was truly remarkable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 space-y-8 lg:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">What Our Clients Love About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At APPWRK, we transform your ideas into reality. Trusted by 250+ satisfied customers worldwide, we deliver exceptional results that drive business growth.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-lg">250+ Reviews</span>
            <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200 inline-flex items-center font-medium">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-6 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}