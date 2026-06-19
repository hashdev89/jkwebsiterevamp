import React from 'react';
import { motion } from 'framer-motion';
export const DigitalTransformation = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern office architecture"
          className="w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="bg-white/95 backdrop-blur-md p-10 sm:p-16 rounded-3xl shadow-2xl text-center">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Transform with <span className="italic text-primary">Purpose</span>
          </h2>
          <div className="text-body-responsive mx-auto mb-10 max-w-2xl">
            <p>
              We don't just implement technology; we orchestrate comprehensive
              digital transformations that align with your strategic vision,
              optimize operations, and deliver measurable business value.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary w-full sm:w-auto">
              Start Your Journey
            </button>
            <button className="btn-outline w-full sm:w-auto">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};