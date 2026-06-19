import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
export const CareersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Digital Careers */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6
            }}
            className="group cursor-pointer">
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaborating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <h3 className="text-3xl font-serif text-neutral-900 mb-4 group-hover:text-primary transition-colors">
              Digital Careers
            </h3>
            <div className="mb-6">
              <p>
                Join a team of disruptive minds. We are always looking for
                passionate innovators, strategic thinkers, and technology
                enthusiasts to shape the future of digital.
              </p>
            </div>
            <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              Explore Roles <ArrowRightIcon size={16} className="ml-2" />
            </div>
          </motion.div>

          {/* Hit Refresh */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="group cursor-pointer">
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Innovation lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <h3 className="text-3xl font-serif text-neutral-900 mb-4 group-hover:text-primary transition-colors">
              Hit Refresh
            </h3>
            <div className="mb-6">
              <p>
                Step into our innovation lab. A space dedicated to unlearning,
                relearning, and exploring emerging technologies that will define
                tomorrow's business landscape.
              </p>
            </div>
            <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              Discover the Lab <ArrowRightIcon size={16} className="ml-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};