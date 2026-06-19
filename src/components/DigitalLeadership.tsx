import React from 'react';
import { motion } from 'framer-motion';
export const DigitalLeadership = () => {
  return (
    <section className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Content Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="w-full lg:w-1/2 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Guide The Future
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight">
                Digital <br />
                <span className="italic text-primary">Leadership</span>
              </h2>
            </div>

            <div className="text-body-lg">
              <p>
                True transformation starts at the top. We provide C-suite advisory
                and strategic guidance to help leaders navigate the complexities
                of the digital landscape.
              </p>
            </div>
            <div className="text-body-base">
              <p>
                Beyond technology, we focus on change management and building
                digital-first cultures that empower teams to innovate, adapt, and
                thrive in an ever-evolving ecosystem.
              </p>
            </div>

            <div className="pt-4">
              <button className="btn-outline">Meet Our Leaders</button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2 relative">
            
            <div className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="Digital Leadership"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-light rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>);

};