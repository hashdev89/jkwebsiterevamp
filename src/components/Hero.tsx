import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Abstract digital network"
          className="w-full h-full object-cover object-center opacity-60" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/20 to-neutral-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="space-y-6">
          
          <div className="hero-eyebrow">
            <p>Disruptive Minds</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight tracking-tight">
            <span className="font-serif italic mr-3 sm:mr-4">Reimagine</span>
            <span className="font-sans font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl block mt-2 sm:inline sm:mt-0">
              your business for the experience economy
            </span>
          </h1>

          <div className="hero-tagline mt-8">
            <p>Disruptive IDEAS. Limitless POSSIBILITIES.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-white/70 text-xs sm:text-sm font-medium tracking-wider uppercase mt-4">
            <span>Strategy</span>
            <span className="text-primary">|</span>
            <span>Core</span>
            <span className="text-primary">|</span>
            <span>Cloud</span>
            <span className="text-primary">|</span>
            <span>Platform</span>
            <span className="text-primary">|</span>
            <span>Ecosystem</span>
          </div>

          <div className="pt-8">
            <button className="btn-primary text-base px-8 py-3">
              Explore Possibilities
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-4 sm:px-8 flex justify-between items-end">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1,
            duration: 1
          }}
          className="hidden sm:flex items-center text-white/60 hover:text-white transition-colors cursor-pointer">
          
          <ArrowDownIcon size={24} className="animate-bounce" />
        </motion.div>

        <div className="flex space-x-3 mx-auto sm:mx-0">
          {[0, 1, 2, 3, 4].map((dot) =>
          <button
            key={dot}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dot === 0 ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${dot + 1}`} />

          )}
        </div>
      </div>
    </section>);

};