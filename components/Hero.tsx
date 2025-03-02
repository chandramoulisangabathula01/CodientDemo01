// "use client";

// import { Button } from './ui/button';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <div className="relative min-h-screen bg-[#1a1245] flex items-center">
//       <div 
//         className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
//         bg-cover bg-center opacity-20"
//       />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Transform Your Business with Latest
//             <br />
//             Technology Solutions
//           </h1>
//           <p className="text-xl text-gray-300 mb-8">
//             Secure Your Idea with Expert Guidance and Seamless Software Development
//           </p>
//           <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//             Get Your Free Consultation
//           </Button>
//         </motion.div>
//       </div>
//     </div>
    
//   );
// }


/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="md:h-[912px] h-[calc(100vh-80px)] relative bg-gradient-to-b from-[#0B1120] via-[#1E293B] to-[#334155] overflow-x-hidden">
      {/* Background pattern */}
      <video 
        src="/bgvideo2.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />
      {/* Floating elements */}
      {/* <div className="absolute md:top-24 md:left-36 top-4 left-4 rotate-[-15.11deg]">
        ... floating element content ...
        <Image
              src="https://img.icons8.com/?size=100&id=11209&format=png"
              alt="hero text"
              width={20}
              height={20}
              className="size-5 z-100 md:size-6"
            />
      </div> */}

      {/* Main content */}
      <div className="w-full h-full flex flex-col items-center justify-center pb-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-10 left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
        />

        <motion.h1
          className="text-center text-white md:w-5/6 w-full px-4 bg-gradient-to-br from-white via-teal-200 to-indigo-300 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Elevate Your Business with
          <span className="block mt-2 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text">
            Cutting-Edge Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          className="font-medium leading-relaxed text-center max-w-2xl mx-auto w-[95%] px-4 mb-12 text-lg tracking-tight text-gray-300 md:text-xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transform your business with our innovative solutions. We bring your ideas to life with cutting-edge technology and expert craftsmanship.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/sign-up">
            <motion.button
              className="flex items-center justify-center px-8 h-14 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-teal-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              className="flex items-center justify-center px-8 h-14 rounded-full border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}