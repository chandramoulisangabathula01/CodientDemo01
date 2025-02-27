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
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      {/* <Clients /> */}
      <Services />
      {/* <Stats /> */}
      <BentoGridThirdDemo />
      <Process />
      <Process2 />
      {/* <Technologies /> */}
      <SuccessStories />
      <ProjectTypes />
      <Testimonials />
      {/* <Culture /> */}
      <Blogs />
      <ContactForm />
      {/* <Offices /> */}
      <FAQ/>
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}