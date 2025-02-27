"use client";

import Link from 'next/link';
import { Phone, Mail, Youtube, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Sitemap", href: "/sitemap" }
];

const developers = [
  "Hire React JS Developers",
  "Hire Angular Developers",
  "Hire Webflow Developer",
  "Hire Remote Developers",
  "Hire Laravel Developers",
  "Hire Android Developers",
  "Hire Blockchain Developers",
  "Hire Shopify Expert Developer"
];

const services = [
  "iOS App Development",
  "Android App Development",
  "Software Development",
  "Ideation & Design",
  "Quality Assurance",
  "Digital Transformation",
  "Developer Referral"
];

const industries = [
  "Healthcare",
  "Education",
  "Financial",
  "Real Estate",
  "SaaS",
  "Human Capital Management"
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1245] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Dedicated Developers</h3>
            <ul className="space-y-4">
              {developers.map((dev) => (
                <li key={dev}>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {dev}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <li key={industry}>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg mb-4">Have Questions?</h4>
              <div className="space-y-2">
                <p className="text-2xl font-bold">+1.987-654-321</p>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>contact@Codientsystems.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4">For Business enquiry</h4>
              <p className="text-gray-300">+91-987-654-321</p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Stay updated with our technology blogs</h4>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                Subscribe Our Newsletter
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <p className="text-sm text-gray-300">
              © 2025 CODIENT . All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}