import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  TargetIcon,
  CpuIcon,
  CloudIcon,
  LayersIcon,
  NetworkIcon } from
'lucide-react';
const pillars = [
{
  title: 'Strategy',
  description:
  'Vision, roadmaps, and digital strategy that aligns with business outcomes.',
  icon: TargetIcon
},
{
  title: 'Core',
  description:
  'Modernize legacy systems and build resilient digital foundations.',
  icon: CpuIcon
},
{
  title: 'Cloud',
  description:
  'Cloud-first architectures that scale with your ambition and growth.',
  icon: CloudIcon
},
{
  title: 'Platform',
  description:
  'Composable platforms that accelerate time-to-value and innovation.',
  icon: LayersIcon
},
{
  title: 'Ecosystem',
  description:
  'Partner networks and integrations that extend your capabilities.',
  icon: NetworkIcon
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export const ServicePillars = () => {
  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            Our Pillars
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-neutral-900">
            The Foundation of Transformation
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col items-center text-center hover:-translate-y-1">
                
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon
                    className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5} />
                  
                </div>
                <h4 className="text-xl font-serif text-neutral-900 mb-3">
                  {pillar.title}
                </h4>
                <div className="text-body-sm">
                  <p>{pillar.description}</p>
                </div>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

};