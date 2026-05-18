'use client'

// ============================================================
// CONTACT SECTION — WITH WORKING FORM
// ============================================================

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, GitBranch, Link2, Send, Loader2 } from 'lucide-react'
import { personalInfo } from '@/features/portfolio/data'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'

// --- Zod schema ---
const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const ref      = useRef(null)
  const isInView = useInView(ref, viewportConfig)
  const [sending, setSending] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSending(true)
    try {
      // Using Formspree or your own API route
      // Replace YOUR_FORM_ID with actual Formspree ID or use /api/contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you soon.', {
          style: {
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            color: 'var(--text-primary)',
          },
        })
        reset()
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      toast.error('Something went wrong. Email me directly.', {
        style: {
          background: 'var(--bg-card)',
          border: '1px solid rgba(239,68,68,0.3)',
          color: 'var(--text-primary)',
        },
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">08 · Contact</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-head mb-3">
            Let&apos;s build{' '}
            <span style={{ color: 'var(--accent)' }}>something real.</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Whether it&apos;s an opportunity, a collaboration, or just a good engineering conversation —
            I&apos;m here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* Left — Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div variants={staggerItem} className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register('name')}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${errors.name ? 'var(--red)' : 'var(--border-default)'}`,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--border-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? 'var(--red)' : 'var(--border-default)')}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs" style={{ color: 'var(--red)' }}>
                    {errors.name.message}
                  </span>
                )}
              </motion.div>

              <motion.div variants={staggerItem} className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${errors.email ? 'var(--red)' : 'var(--border-default)'}`,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--border-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? 'var(--red)' : 'var(--border-default)')}
                />
                {errors.email && (
                  <span id="email-error" className="text-xs" style={{ color: 'var(--red)' }}>
                    {errors.email.message}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div variants={staggerItem} className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                {...register('subject')}
                autoComplete="off"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${errors.subject ? 'var(--red)' : 'var(--border-default)'}`,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--border-accent)')}
                onBlur={(e) => (e.target.style.borderColor = errors.subject ? 'var(--red)' : 'var(--border-default)')}
              />
              {errors.subject && (
                <span id="subject-error" className="text-xs" style={{ color: 'var(--red)' }}>
                  {errors.subject.message}
                </span>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={staggerItem} className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me what you have in mind..."
                {...register('message')}
                autoComplete="off"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${errors.message ? 'var(--red)' : 'var(--border-default)'}`,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--border-accent)')}
                onBlur={(e) => (e.target.style.borderColor = errors.message ? 'var(--red)' : 'var(--border-default)')}
              />
              {errors.message && (
                <span id="message-error" className="text-xs" style={{ color: 'var(--red)' }}>
                  {errors.message.message}
                </span>
              )}
            </motion.div>

            {/* Submit */}
            <motion.div variants={staggerItem}>
              <button
                type="submit"
                disabled={sending}
                className="btn btn-primary w-full sm:w-auto min-w-[160px]"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>

          {/* Right — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <Mail size={16} />,
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: <Phone size={16} />,
                  label: 'Phone',
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: <MapPin size={16} />,
                  label: 'Location',
                  value: personalInfo.location,
                  href: '',
                },
              ].map((item) => (
                item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card p-4 flex items-center gap-4 cursor-hover transition-all hover:border-[var(--border-accent)]"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </span>
                  </div>
                </a>
                ) : (
                <div
                  key={item.label}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </span>
                  </div>
                </div>
                )
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card p-5 flex flex-col gap-3">
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Find me on
              </p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)] cursor-hover"
                style={{ color: 'var(--text-secondary)' }}
              >
                <GitBranch size={16} />
                github.com/Ajaysingh78
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)] cursor-hover"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Link2 size={16} />
                LinkedIn Profile
              </a>
            </div>

            {/* Closing statement */}
            <div
              className="glass-card p-5"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                &ldquo;I build systems that solve real-world problems.
                If you have one — let&apos;s talk.&rdquo;
              </p>
              <span
                className="text-xs mt-3 block"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
              >
                — Ajay Rathore
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
