/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

const stories = [
  {
    title: "Panda Facility",
    category: "Design Development and Deployment",
    description: "Panda Facility is a state-of-the-art facility management  software designed to streamline and automate the diverse tasks involved in property management.",
    image: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Panda Facility",
    category: "Design Development and Deployment",
    description: "Panda Fe-art facility management software designed to streamline and automate the diverse tasks involved in property management.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function SuccessStories() {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-left mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-gray-400 font-medium mb-3 tracking-wider"
            {...fadeInUp}
          >
            FEATURED PROJECTS
          </motion.h3>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
            {...fadeInUp}
          >
            Success Stories That Inspire
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl"
            {...fadeInUp}
          >
            Over 7,000 projects launched and counting. Explore a selection of our top case studies
          </motion.p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-[75vh] rounded-[2.5rem]"
            pagination={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {stories.map((story, index) => (
              <SwiperSlide key={`${story.title}-${index}`}>
                <motion.div 
                  className="relative h-full group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                  <motion.div 
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 md:p-12 rounded-b-[2.5rem]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{story.title}</h3>
                      <span className="h-2 w-2 rounded-full bg-blue-500 hidden md:block" />
                      <p className="text-blue-300 font-medium">{story.category}</p>
                    </div>
                    <p className="text-gray-200 text-lg md:text-xl line-clamp-2 max-w-3xl">
                      {story.description}
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button 
              className="nav-button prev-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </motion.button>
            <motion.button 
              className="nav-button next-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}