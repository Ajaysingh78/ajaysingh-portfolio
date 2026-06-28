'use client'
// ============================================================
// CONTACT
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef, useState }  from 'react'
import { Mail, GitBranch, Network, Send, MapPin, CheckCircle2 } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { personalInfo } from '@/features/portfolio/data'

export function Contact() {
  const ref = useRef(null); const inView = useInView(ref, viewportConfig)
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: `Portfolio Message from ${form.name}`
        })
      })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-md)',
    background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
    color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none',
    transition: 'border-color var(--transition-fast)',
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Contact</span>
      </motion.div>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-16 items-start">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-6">
          <motion.h2 variants={staggerItem}>Let&apos;s build <span className="gradient-text">something together</span></motion.h2>
          <motion.p variants={staggerItem} style={{ fontSize: '0.92rem', lineHeight: 1.8, maxWidth: '44ch' }}>
            Open to internships, collaborations, hackathon teams, and interesting product problems.
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            {[
              { icon: Mail,     label: personalInfo.email,                   href: `mailto:${personalInfo.email}` },
              { icon: GitBranch, label: 'github.com/Ajaysingh78',            href: personalInfo.github },
              { icon: Network,   label: 'linkedin.com/in/ajay-rathore',      href: personalInfo.linkedin },
              { icon: MapPin,   label: 'Bhopal, Madhya Pradesh, India',      href: undefined },
            ].map(item => {
              const Icon = item.icon
              const inner = (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
                    <Icon size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <span style={{ fontSize: '0.80rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{item.label}</span>
                </div>
              )
              return item.href
                ? <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="transition-opacity hover:opacity-70">{inner}</a>
                : <div key={item.label}>{inner}</div>
            })}
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="glass-card p-6 flex flex-col gap-5">
          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle2 size={40} style={{ color: 'var(--green)' }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 6 }}>Message sent!</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.80rem' }}>I&apos;ll get back to you soon.</p>
              </div>
            </motion.div>
          ) : (
            <>
              {(['name','email'] as const).map(field => (
                <motion.div key={field} variants={staggerItem} className="flex flex-col gap-2">
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>{field}</label>
                  <input type={field === 'email' ? 'email' : 'text'} name={field} value={form[field]} onChange={change}
                    placeholder={field === 'email' ? 'your@email.com' : 'Your name'} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--border-accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border-default)')} />
                </motion.div>
              ))}
              <motion.div variants={staggerItem} className="flex flex-col gap-2">
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>Message</label>
                <textarea name="message" value={form.message} onChange={change} placeholder="What are you building?" rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--border-accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border-default)')} />
              </motion.div>
              <motion.div variants={staggerItem}>
                <button onClick={submit} disabled={status === 'loading'} className="btn btn-primary w-full" style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
                  <Send size={14} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && <p style={{ fontSize: '0.72rem', color: 'var(--red)', marginTop: 8, textAlign: 'center' }}>Something went wrong. Email directly.</p>}
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
