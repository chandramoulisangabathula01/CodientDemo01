"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const tenPercentHeight = window.innerHeight * 0.2;
        const isScrolled = window.scrollY > tenPercentHeight;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
              Codient
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <Link href="/about" className={`${scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>About</Link>
              <Link href="/services" className={`${scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Services</Link>
              <Link href="/industries" className={`${scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Industries</Link>
              <Link href="/portfolio" className={`${scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Portfolio</Link>
              <Link href="/blogs" className={`${scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Blogs</Link>
              <Button variant="outline" className={`flex items-center gap-2 ${
                scrolled ? 'text-white border-white bg-blue-500 hover:bg-blue-500 hover:text-white' : 'text-white border-white bg-transparent hover:bg-white hover:text-black'
              }`}>
                <Phone size={18} /> Call us
              </Button>
              <Button variant="outline" className={`${
                scrolled ? 'text-white border-white bg-blue-500 hover:bg-blue-500 hover:text-white' : 'text-white border-white bg-transparent hover:bg-white hover:text-black'
              }`}>Contact us</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${scrolled ? 'text-black' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block text-black hover:text-blue-600 px-3 py-2">About</Link>
            <Link href="/services" className="block text-black hover:text-blue-600 px-3 py-2">Services</Link>
            <Link href="/industries" className="block text-black hover:text-blue-600 px-3 py-2">Industries</Link>
            <Link href="/portfolio" className="block text-black hover:text-blue-600 px-3 py-2">Portfolio</Link>
            <Link href="/blogs" className="block text-black hover:text-blue-600 px-3 py-2">Blogs</Link>
            <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2 text-blue-500 border-white hover:bg-blue-500 hover:text-white">
              <Phone size={18} /> Call us
            </Button>
            <Button variant="outline" className="w-full mt-4 text-blue-500 border-white hover:bg-blue-500 hover:text-white">Contact us</Button>
          </div>
        </div>
      )}
    </nav>
  );
}