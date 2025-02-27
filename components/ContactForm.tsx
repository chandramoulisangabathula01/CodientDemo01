"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Clock, Lock, FileCheck, Shield } from 'lucide-react';

const features = [
  { icon: Clock, text: "Guaranteed reply within 12 hrs" },
  { icon: Lock, text: "100% Secure. Zero Spam." },
  { icon: FileCheck, text: "Signed NDA" },
  { icon: Shield, text: "Confidentiality Assured" }
];

export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Have some queries?</h2>
            <p className="text-xl mb-8">Fill Out the Form and We Will Contact You.</p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((Feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Feature.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-gray-600">{Feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <Input placeholder="Full name" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Phone number" type="tel" />
              <Textarea 
                placeholder="Please share anything that will help us prepare for our meeting."
                className="h-32"
              />
              <Input placeholder="For eg: Dropbox, Google Drive, WeTransfer etc." />
              
              <p className="text-sm text-gray-500 italic">
                After submission of form, our solution experts will answer your questions in a secure online meeting.
              </p>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}