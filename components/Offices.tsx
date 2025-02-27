"use client";

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const offices = [
  {
    country: "India",
    locations: [
      {
        city: "Punjab",
        address: "101, WORLD TECH 67 ITC 10, Near Municipal Building, SAS Nagar, Mohali Punjab 160062"
      },
      {
        city: "Delhi",
        address: "301, NH-19, above Sandoz Restaurant, CRRI, Ishwar Nagar, Okhla, New Delhi, Delhi 110044"
      }
    ]
  },
  {
    country: "NSW, Australia",
    locations: []
  },
  {
    country: "Amsterdam, NL",
    locations: []
  },
  {
    country: "USA",
    locations: []
  }
];

export default function Offices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Our offices around the world</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{office.country}</h3>
              {office.locations.map((location, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="font-medium mb-2">{location.city}</h4>
                  <div className="flex items-start space-x-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>{location.address}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}