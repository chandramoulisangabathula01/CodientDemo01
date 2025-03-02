"use client";
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import CTASection from '@/components/CTASection';
import Technologies from '@/components/Technologies';
import SuccessStories from '@/components/SuccessStories';
import ProjectTypes from '@/components/ProjectTypes';
import Testimonials from '@/components/Testimonials';
import Culture from '@/components/Culture';
import Blogs from '@/components/Blogs';
import ContactForm from '@/components/ContactForm';
import Offices from '@/components/Offices';
import Footer from '@/components/Footer';
import { BentoGridThirdDemo } from '@/components/Bento';
import Process2 from '@/components/process2';
import FAQ from '@/components/Faq';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Services2 from '@/components/Services2';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      // gestureDirection: 'vertical',
      smoothWheel: true,
      // smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Services2/>
      <BentoGridThirdDemo />
      <Process />
      <Process2 />
      <SuccessStories />
      <ProjectTypes />
      <Testimonials />
      <Blogs />
      <ContactForm />
      <FAQ/>
      <CTASection />
      <Footer />
    </main>
  );
}