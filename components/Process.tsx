"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaPaintBrush, FaCheckCircle, FaRocket } from 'react-icons/fa';

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap.",
    icon: <FaSearch className="w-8 h-8 text-blue-600" />
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Our team creates the solution following best practices and latest technologies.",
    icon: <FaPaintBrush className="w-8 h-8 text-blue-600" />
  },
  {
    number: "03",
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution meets the highest quality standards.",
    icon: <FaCheckCircle className="w-8 h-8 text-blue-600" />
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing maintenance and support.",
    icon: <FaRocket className="w-8 h-8 text-blue-600" />
  }
];

export default function Process() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const refs = [ref1, ref2, ref3, ref4];
  const inViews = [inView1, inView2, inView3, inView4];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-600 font-medium mb-2"
          >
            Process
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            From Idea to Launch: Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl w-3/4 text-gray-600"
          >
            We ensure quality, efficiency and success at every stage. See how we bring your vision to life.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-0 left-1/4 right-1/4 h-full">
            <div className="absolute top-0 left-1/2 h-full w-[2px] bg-gradient-to-b from-blue-600 to-transparent"></div>
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              ref={refs[index]}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inViews[index] ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', bounce: 0.4 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-transparent hover:border-blue-600/10 relative overflow-hidden">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={inViews[index] ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/10">
                      {step.icon}
                    </div>
                    <div className="text-5xl font-bold text-blue-600/20">{step.number}</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inViews[index] ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-blue-600 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}