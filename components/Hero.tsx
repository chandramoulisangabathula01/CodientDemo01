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
    <div className="md:h-[912px] h-[calc(100vh-80px)] relative  bg-[#1a1245] overflow-x-hidden">
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
      <div className="w-full h-full flex flex-col items-center justify-center pb-20">
        {/* <Link href="/blog/Artificial-Intelligence">
          <div className="md:w-[459px] w-full max-w-[320px] md:h-10 h-9 rounded-xl bg-emerald-500/50 flex items-center justify-center md:gap-3 gap-1">
           
            <p className="md:text-base text-xs font-semibold text-center px-2">
              New! Record user interviews without recording bots
            </p>
          </div>
        </Link> */}

        <motion.h1
          className="text-center text-white md:w-5/6 w-full  px-4 bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter  text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate Your Business with Cutting-Edge Digital Innovation

        </motion.h1>

        <motion.p
          className="font-medium leading-[23px] text-center  max-w-2xl mx-auto w-[95%]   px-4 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Record and organize user interviews automatically. Focus on what matters - connecting with users.
        </motion.p>

        <Link href="/sign-up">
          <motion.button
            className="flex items-center justify-center w-auto pr-2 pl-2 h-12 mt-9 rounded-xl border border-white bg-transparent text-base font-semibold text-white hover:scale-105 transition-transform"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 14.8px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Get Your Free Consultation
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
              className="lucide lucide-arrow-right h-4 w-4 ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </div>
  );
}