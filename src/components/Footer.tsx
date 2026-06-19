import React from 'react';
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon } from
'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white inline-flex p-3 rounded-lg w-fit">
              <img
                src="/cropped-JKIT-logo-full.png"
                alt="John Keells - Disruptive Minds"
                className="h-10 w-auto object-contain" />
              
            </div>
            <div className="footer-brand max-w-xs">
              <p>
                Empowering organizations to reimagine their business for the
                experience economy through disruptive ideas and limitless
                possibilities.
              </p>
            </div>
            <div className="space-y-3 max-w-xs">
              <a
                href="mailto:info@johnkeellsit.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-primary-light transition-colors">
                <MailIcon size={15} className="shrink-0 text-primary-light" />
                info@johnkeellsit.com
              </a>
              <a
                href="tel:+94112318319"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-primary-light transition-colors">
                <PhoneIcon size={15} className="shrink-0 text-primary-light" />
                +94 11 231 8319
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
              'Digital Strategy',
              'Core Modernization',
              'Cloud Solutions',
              'Platform Engineering',
              'Ecosystem Integration'].
              map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="text-white/80 hover:text-primary-light transition-colors text-sm">
                  
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {[
              'About Us',
              'Digital Leadership',
              'Careers',
              'Hit Refresh Lab',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="text-white/80 hover:text-primary-light transition-colors text-sm">
                  
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              Connect
            </h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <LinkedinIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <InstagramIcon size={18} />
              </a>
            </div>
            <div className="footer-newsletter">
              <p>Subscribe to our newsletter for the latest digital insights.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} JK Digital. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>);

};