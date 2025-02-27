"use client";

import { motion } from 'framer-motion';

const technologies = [
  {
    category: "UI/UX",
    tools: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" }
    ]
  },
  {
    category: "Front-End",
    tools: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS3", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ]
  },
  {
    category: "Back-End",
    tools: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "PHP", icon: "/icons/php.svg" }
    ]
  }
];

export default function Technologies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-12">Technologies we employ and utilize</h2>
        
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200"></div>
          <div className="relative z-10 flex justify-between">
            {technologies.map((category, index) => (
              <div key={category.category} className="text-center">
                <div className="bg-white px-4 mb-8">
                  <span className="text-gray-600">{category.category}</span>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  {category.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-2">
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                      </div>
                      <span className="text-sm text-gray-600">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}