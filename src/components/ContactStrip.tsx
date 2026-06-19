import React from 'react';
import { motion } from 'framer-motion';
export const ContactStrip = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="space-y-8">
          
          <h2 className="text-4xl md:text-5xl font-serif text-white font-medium">
            Let's build what's next.
          </h2>
          <div className="text-on-primary mx-auto max-w-2xl">
            <p>
              Ready to challenge the status quo and reimagine your business? Our
              team of experts is here to help you navigate your digital
              transformation journey.
            </p>
          </div>
          <div className="pt-4">
            <button className="btn-outline-white">Get in Touch</button>
          </div>
        </motion.div>
      </div>
    </section>);

};