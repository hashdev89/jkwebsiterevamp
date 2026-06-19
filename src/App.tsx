import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicePillars } from './components/ServicePillars';
import { DigitalDisruption } from './components/DigitalDisruption';
import { DigitalLeadership } from './components/DigitalLeadership';
import { DigitalTransformation } from './components/DigitalTransformation';
import { CareersSection } from './components/CareersSection';
import { ContactStrip } from './components/ContactStrip';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <BackToTop />
      <main>
        <Hero />
        <IntroSection />
        <ServicePillars />
        <DigitalDisruption />
        <DigitalLeadership />
        <DigitalTransformation />
        <CareersSection />
        <ContactStrip />
      </main>
      <Footer />
    </div>);

}