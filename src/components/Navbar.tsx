import React, { useEffect, useState, useRef, type ComponentType } from 'react';
import {
  MenuIcon,
  XIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PhoneIcon,
  MailIcon,
  LightbulbIcon,
  UsersIcon,
  TargetIcon,
  GraduationCapIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  RocketIcon,
  CloudIcon,
  CpuIcon,
  LayersIcon,
  NetworkIcon,
  BrainCircuitIcon,
  WorkflowIcon,
  ArrowRightIcon } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactModal } from './ContactModal';
type MegaMenuColumn = {
  title: string;
  items: {
    name: string;
    description: string;
    icon: ComponentType<{
      size?: number;
      className?: string;
      strokeWidth?: number;
    }>;
    href: string;
  }[];
};
type MegaMenu = {
  columns: MegaMenuColumn[];
  feature: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
    image: string;
  };
};
type NavLink = {
  name: string;
  href: string;
  megaMenu?: MegaMenu;
};
const navLinks: NavLink[] = [
{
  name: 'Disruptive Minds',
  href: '#'
},
{
  name: 'Digital Disruption',
  href: '#'
},
{
  name: 'Digital Leadership',
  href: '#',
  megaMenu: {
    columns: [
    {
      title: 'Leadership Services',
      items: [
      {
        name: 'C-Suite Advisory',
        description: 'Strategic guidance for digital leaders',
        icon: TargetIcon,
        href: '#'
      },
      {
        name: 'Change Management',
        description: 'Lead transformation with confidence',
        icon: WorkflowIcon,
        href: '#'
      },
      {
        name: 'Executive Coaching',
        description: 'Develop next-gen digital leaders',
        icon: GraduationCapIcon,
        href: '#'
      }]

    },
    {
      title: 'Culture & People',
      items: [
      {
        name: 'Digital Culture',
        description: 'Build a digital-first mindset',
        icon: UsersIcon,
        href: '#'
      },
      {
        name: 'Leadership Insights',
        description: 'Research, reports, and thought leadership',
        icon: LightbulbIcon,
        href: '#'
      },
      {
        name: 'Governance & Risk',
        description: 'Lead responsibly in the digital era',
        icon: ShieldCheckIcon,
        href: '#'
      }]

    }],

    feature: {
      eyebrow: 'Featured',
      title: 'The Digital CEO Report',
      description:
      'Insights from 200+ digital leaders on what it takes to lead transformation in 2026.',
      cta: 'Read the Report',
      href: '#',
      image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop'
    }
  }
},
{
  name: 'Digital Transformation',
  href: '#',
  megaMenu: {
    columns: [
    {
      title: 'Capabilities',
      items: [
      {
        name: 'Strategy & Roadmaps',
        description: 'Define a clear path to transformation',
        icon: TargetIcon,
        href: '#'
      },
      {
        name: 'Core Modernization',
        description: 'Re-platform legacy systems',
        icon: CpuIcon,
        href: '#'
      },
      {
        name: 'Cloud Transformation',
        description: 'Scale with cloud-first architecture',
        icon: CloudIcon,
        href: '#'
      }]

    },
    {
      title: 'Platforms & Solutions',
      items: [
      {
        name: 'Platform Engineering',
        description: 'Composable, modular platforms',
        icon: LayersIcon,
        href: '#'
      },
      {
        name: 'Data & AI',
        description: 'Turn data into competitive advantage',
        icon: BrainCircuitIcon,
        href: '#'
      },
      {
        name: 'Ecosystem Integration',
        description: 'Connect partners, APIs, and systems',
        icon: NetworkIcon,
        href: '#'
      }]

    },
    {
      title: 'Industries',
      items: [
      {
        name: 'Financial Services',
        description: 'Modernize banking and fintech',
        icon: BarChart3Icon,
        href: '#'
      },
      {
        name: 'Retail & Consumer',
        description: 'Omnichannel customer experiences',
        icon: RocketIcon,
        href: '#'
      },
      {
        name: 'Manufacturing',
        description: 'Industry 4.0 and smart operations',
        icon: WorkflowIcon,
        href: '#'
      }]

    }],

    feature: {
      eyebrow: 'Case Study',
      title: 'Transforming a global retailer',
      description:
      '40% faster time-to-market and a 3x lift in digital revenue in 18 months.',
      cta: 'Read the Story',
      href: '#',
      image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop'
    }
  }
},
{
  name: 'Digital Careers',
  href: '#'
}];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow =
    isMobileMenuOpen || isContactOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isContactOpen]);

  const openContact = () => {
    setIsMobileMenuOpen(false);
    setActiveMega(null);
    setIsContactOpen(true);
  };
  const handleEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(name);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  };
  const activeMenu = navLinks.find((l) => l.name === activeMega)?.megaMenu;
  return (
    <>
      <AnimatePresence>
        {activeMega &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mega-menu-overlay fixed inset-0 z-40 hidden xl:block"
          onMouseEnter={handleLeave}
          aria-hidden="true" />
        }
      </AnimatePresence>

      <header
        onMouseLeave={handleLeave}
        className="fixed top-0 left-0 right-0 z-50">
        
        <div
          className={`relative z-10 w-full bg-white px-4 transition-all duration-300 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ${isScrolled ? 'py-3' : 'py-4 xl:py-5'}`}>
          <div className="flex min-w-0 w-full items-center justify-between gap-3 sm:gap-4 xl:gap-8">
            {/* Logo */}
            <a href="#" className="flex shrink-0 items-center">
              <img
                src="/cropped-JKIT-logo-full.png"
                alt="John Keells - Disruptive Minds"
                className="h-9 w-auto object-contain sm:h-10 xl:h-12" />
              
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex xl:gap-3">
              {navLinks.map((link, index) => {
                const hasMega = !!link.megaMenu;
                const isActive = activeMega === link.name;
                return (
                  <React.Fragment key={link.name}>
                    {index > 0 &&
                    <span
                      className="shrink-0 select-none text-primary"
                      aria-hidden="true">
                      |
                    </span>
                    }
                    <div
                      className="relative shrink min-w-0"
                      onMouseEnter={() =>
                      hasMega ? handleEnter(link.name) : handleLeave()
                      }>
                      
                      <a
                        href={link.href}
                        className={`relative flex items-center justify-center gap-1 px-1 text-[14px] font-semibold uppercase leading-snug tracking-widest transition-colors group py-2 ${isActive ? 'text-primary' : 'text-neutral-900 hover:text-primary'}`}>
                        
                        {link.name}
                        {hasMega &&
                        <ChevronDownIcon
                          size={14}
                          className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />

                        }
                        <span
                          className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                        </span>
                      </a>
                    </div>
                  </React.Fragment>);

              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden shrink-0 items-center xl:flex">
              <button
                type="button"
                onClick={openContact}
                className="btn-primary whitespace-nowrap px-4 py-2 text-xs xl:px-5">
                Contact Us
              </button>
            </div>

            {/* Mobile / tablet menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="shrink-0 text-neutral-900 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md xl:hidden"
              aria-label="Open menu">
              
              <MenuIcon size={26} />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMega && activeMenu &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut'
            }}
            onMouseEnter={() => handleEnter(activeMega)}
            onMouseLeave={handleLeave}
            className="glass-mega-menu absolute left-0 right-0 top-full z-[5] hidden xl:block">
            
              <div className="w-full px-4 py-8 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 2xl:py-10">
                <div className="grid grid-cols-12 gap-10">
                  {/* Columns */}
                  <div
                  className={`col-span-12 ${activeMenu.columns.length === 3 ? 'xl:col-span-9' : 'xl:col-span-8'} grid gap-8 ${activeMenu.columns.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  
                    {activeMenu.columns.map((col) =>
                  <div key={col.title}>
                        <h4 className="text-[0.65rem] font-semibold uppercase tracking-widest text-neutral-500 mb-5 pb-3 border-b border-white/60">
                          {col.title}
                        </h4>
                        <ul className="space-y-1">
                          {col.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.name}>
                                <a
                              href={item.href}
                              className="group flex items-start gap-3 p-2 -mx-2 rounded-lg transition-colors hover:bg-primary-light">
                              
                                  <span className="w-9 h-9 rounded-lg bg-primary-light group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Icon
                                  size={16}
                                  strokeWidth={1.75}
                                  className="text-primary" />
                                
                                  </span>
                                  <span className="flex-1 min-w-0">
                                    <span className="block text-sm font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="block text-xs text-neutral-600 mt-0.5 leading-snug">
                                      {item.description}
                                    </span>
                                  </span>
                                </a>
                              </li>);

                      })}
                        </ul>
                      </div>
                  )}
                  </div>

                  {/* Feature Card */}
                  <div
                  className={`col-span-12 ${activeMenu.columns.length === 3 ? 'lg:col-span-5 xl:col-span-4 2xl:col-span-3' : 'lg:col-span-5 xl:col-span-4'}`}>
                  
                    <a
                    href={activeMenu.feature.href}
                    className="group block relative rounded-2xl overflow-hidden h-full min-h-[200px] bg-neutral-900">
                    
                      <img
                      src={activeMenu.feature.image}
                      alt={activeMenu.feature.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                    
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                      <div className="relative p-6 flex flex-col justify-end h-full min-h-[200px]">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary-light mb-2">
                          {activeMenu.feature.eyebrow}
                        </span>
                        <h5 className="font-serif text-xl text-white mb-2 leading-tight">
                          {activeMenu.feature.title}
                        </h5>
                        <div className="feature-description mb-4">
                          <p>{activeMenu.feature.description}</p>
                        </div>
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-primary-light transition-colors">
                          {activeMenu.feature.cta}
                          <ArrowRightIcon
                          size={14}
                          className="ml-2 group-hover:translate-x-1 transition-transform" />
                        
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.25
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[60] bg-neutral-900/50 backdrop-blur-sm xl:hidden" />
          

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'tween',
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed top-0 right-0 bottom-0 z-[70] flex w-full max-w-full flex-col bg-white shadow-2xl sm:w-[420px] xl:hidden">
            
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
                <img
                src="/cropped-JKIT-logo-full.png"
                alt="John Keells - Disruptive Minds"
                className="h-9 w-auto object-contain" />
              
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-900 p-2 -mr-2 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close menu">
                
                  <XIcon size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => {
                  const hasMega = !!link.megaMenu;
                  const isOpen = openMobileMega === link.name;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: 20
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: 0.15 + index * 0.05,
                        duration: 0.3
                      }}
                      className="border-b border-neutral-100">
                      
                        {hasMega ?
                      <>
                            <button
                          onClick={() =>
                          setOpenMobileMega(isOpen ? null : link.name)
                          }
                          className="w-full flex items-center justify-between py-4 px-2 text-[14px] font-semibold uppercase tracking-widest text-neutral-900 hover:text-primary transition-colors">
                          
                              <span>{link.name}</span>
                              <ChevronDownIcon
                            size={18}
                            className={`text-neutral-400 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                          
                            </button>
                            <AnimatePresence>
                              {isOpen && link.megaMenu &&
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0
                            }}
                            animate={{
                              height: 'auto',
                              opacity: 1
                            }}
                            exit={{
                              height: 0,
                              opacity: 0
                            }}
                            transition={{
                              duration: 0.25
                            }}
                            className="overflow-hidden">
                            
                                  <div className="pb-4 space-y-5">
                                    {link.megaMenu.columns.map((col) =>
                              <div key={col.title}>
                                        <div className="text-label-xs mb-2">
                                          <p>{col.title}</p>
                                        </div>
                                        <ul className="space-y-1">
                                          {col.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <li key={item.name}>
                                                <a
                                          href={item.href}
                                          onClick={() =>
                                          setIsMobileMenuOpen(false)
                                          }
                                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary-light transition-colors">
                                          
                                                  <span className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center flex-shrink-0">
                                                    <Icon
                                              size={14}
                                              strokeWidth={1.75}
                                              className="text-primary" />
                                            
                                                  </span>
                                                  <span className="flex-1">
                                                    <span className="block text-sm font-semibold text-neutral-900">
                                                      {item.name}
                                                    </span>
                                                    <span className="block text-xs text-neutral-600 mt-0.5 leading-snug">
                                                      {item.description}
                                                    </span>
                                                  </span>
                                                </a>
                                              </li>);

                                  })}
                                        </ul>
                                      </div>
                              )}
                                  </div>
                                </motion.div>
                          }
                            </AnimatePresence>
                          </> :

                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-4 px-2 text-[14px] font-semibold uppercase tracking-widest text-neutral-900 hover:text-primary hover:pl-4 transition-all group">
                        
                            <span>{link.name}</span>
                            <ChevronRightIcon
                          size={18}
                          className="text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        
                          </a>
                      }
                      </motion.li>);

                })}
                </ul>

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
                  delay: 0.5,
                  duration: 0.4
                }}
                className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
                
                  <div className="text-label-sm mb-3">
                    <p>Get in Touch</p>
                  </div>
                  <a
                  href="tel:+94115541541"
                  className="flex items-center gap-3 text-sm text-neutral-700 hover:text-primary transition-colors">
                  
                    <span className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                      <PhoneIcon size={15} className="text-primary" />
                    </span>
                    +94 11 554 1541
                  </a>
                  <a
                  href="mailto:hello@jkdigital.com"
                  className="flex items-center gap-3 text-sm text-neutral-700 hover:text-primary transition-colors">
                  
                    <span className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                      <MailIcon size={15} className="text-primary" />
                    </span>
                    hello@jkdigital.com
                  </a>
                </motion.div>
              </nav>

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
                delay: 0.55,
                duration: 0.4
              }}
              className="px-6 py-5 border-t border-neutral-200 bg-neutral-50">
              
                <button
                  type="button"
                  onClick={openContact}
                  className="btn-primary w-full justify-center">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </>
        }
      </AnimatePresence>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)} />
    </>);

};