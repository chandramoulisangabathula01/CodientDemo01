"use client";

// import { ArrowRight } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Culture() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      alt: "Team meeting in modern office"
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      alt: "Team collaboration session"
    },
    {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop",
      alt: "Team working on laptops"
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-4xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">We are a culture-driven IT service company!</h2>
            <p className="text-lg text-gray-600 leading-relaxed">We're a values-driven IT services company empowering global transformation. With 150+ exceptional minds across four countries, we're shaping the future of technology.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg">
            Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="relative w-full h-full group px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
            breakpoints={{
              640: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide 
                key={index} 
                className="w-[800px] transition-all duration-300"
              >
                {({ isActive }) => (
                  <div 
                    className={`relative w-full h-[450px] rounded-3xl overflow-hidden transition-all duration-500 transform ${
                      isActive ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-50'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                        isActive ? 'opacity-0' : 'opacity-100'
                      }`} 
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="swiper-pagination absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = [
//   {
//     url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
//     alt: "Team meeting in modern office"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
//     alt: "Team collaboration session"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop",
//     alt: "Team working on laptops"
//   }
// ];

// export default function ImageSlider() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
    
//   );
// }