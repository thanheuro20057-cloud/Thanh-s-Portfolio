'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { contact } from '@/content/site';
import { duration, easing, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger.normal,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.normal / 1000, ease: easing.out },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={item}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p variants={item} className="text-muted mb-12">
          Have a project in mind? Drop a message.
        </motion.p>

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((d) => ({ ...d, name: e.target.value }))
              }
              required
              className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((d) => ({ ...d, email: e.target.value }))
              }
              required
              className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((d) => ({ ...d, message: e.target.value }))
              }
              required
              className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 rounded-2xl font-medium bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'idle' && 'Send message'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message sent!'}
            {status === 'error' && 'Try again'}
          </button>
        </motion.form>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            {contact.email}
          </a>
          {contact.social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
