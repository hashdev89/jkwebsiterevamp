import React from 'react';
import { motion } from 'framer-motion';

const YOUTUBE_VIDEO_ID = 'vaFudZp9fyw';

export const IntroSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
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
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="space-y-8">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-medium leading-tight">
            Disruptive ideas. Limitless possibilities.
          </h2>

          <div className="text-body-responsive mx-auto max-w-3xl">
            <p>
              At JK Digital, we believe everything around us must be challenged.
              We must never let the status-quo prevail. By marrying our
              experience, expertise, and knowledge with yours, we collaborate,
              co-innovate, and co-create your future together. Explore the
              limitless possibilities with us, today.
            </p>
          </div>

          <div className="pt-4">
            <button className="btn-outline">
              Explore Your Limitless Possibilities
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto w-full pt-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="JK Digital video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};