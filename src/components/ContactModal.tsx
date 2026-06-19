import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';

const countryCodes = [
  { code: '+94', label: 'LK +94' },
  { code: '+1', label: 'US +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+91', label: 'IN +91' },
  { code: '+61', label: 'AU +61' },
  { code: '+65', label: 'SG +65' },
  { code: '+971', label: 'AE +971' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
  { code: '+81', label: 'JP +81' }
];

const services = [
  'Digital Strategy',
  'Core Modernization',
  'Cloud Solutions',
  'Platform Engineering',
  'Ecosystem Integration',
  'Digital Leadership',
  'Digital Transformation',
  'Digital Disruption',
  'Careers',
  'Other'
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+94',
  phone: '',
  companyName: '',
  jobTitle: '',
  service: ''
};

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) setForm(initialForm);
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen &&
      <motion.div
        key="contact-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed inset-0 z-[100]">
        
        <div
          className="mega-menu-overlay absolute inset-0"
          onClick={onClose}
          aria-hidden="true" />

        <div
          className="relative flex h-full items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-5 sm:px-8">
              <div>
                <h2
                  id="contact-modal-title"
                  className="text-xl font-serif text-neutral-900 sm:text-2xl">
                  Contact Us
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Tell us about your needs and we&apos;ll get back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close contact form">
                <XIcon size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="form-input" />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="form-input" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="form-input" />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Contact Number <span className="text-primary">*</span>
                </label>
                <div className="flex gap-3">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="form-input w-28 shrink-0 sm:w-32"
                    aria-label="Country code">
                    {countryCodes.map((item) =>
                    <option key={item.code} value={item.code}>
                        {item.label}
                      </option>
                    )}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Contact number"
                    className="form-input min-w-0 flex-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="companyName" className="form-label">
                    Company Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={handleChange}
                    className="form-input" />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="form-label">
                    Job Title <span className="text-primary">*</span>
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    value={form.jobTitle}
                    onChange={handleChange}
                    className="form-input" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="form-label">
                  Required Service or Solution{' '}
                  <span className="text-primary">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="form-input">
                  <option value="" disabled>
                    Select a service or solution
                  </option>
                  {services.map((service) =>
                  <option key={service} value={service}>
                      {service}
                    </option>
                  )}
                </select>
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-outline w-full sm:w-auto">
                  Cancel
                </button>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
      }
    </AnimatePresence>,
    document.body);

};
