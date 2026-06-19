import React from 'react';
import { motion } from 'framer-motion';
export const DigitalDisruption = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
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
              duration: 0.8
            }}
            className="w-full lg:w-1/2 relative">
            
            <div className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Disruption"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-light rounded-full -z-10"></div>
          </motion.div>

          {/* Content Side */}
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
              duration: 0.8,
              delay: 0.2
            }}
            className="w-full lg:w-1/2 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Challenge The Norm
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight">
                Digital <br />
                <span className="italic text-primary">Disruption</span>
              </h2>
            </div>

            <div className="text-body-lg">
              <p>
                We don't just adapt to change; we drive it. By challenging the
                status quo, we help organizations uncover entirely new business
                models and revenue streams.
              </p>
            </div>
            <div className="text-body-base">
              <p>
                Our approach to digital disruption is rooted in deep industry
                expertise and cutting-edge technological capabilities, ensuring
                you don't just survive the digital age, but lead it.
              </p>
            </div>

            <div className="pt-4">
              <button className="btn-outline">Learn More</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};