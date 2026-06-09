'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm(function(prev) {
      return Object.assign({}, prev, { [e.target.name]: e.target.value });
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      var res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      var data = await res.json();

      if (!res.ok || data.error) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ from_name: '', from_email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="card-title text-white">Message Sent!</h3>
        <p className="section-copy max-w-sm text-slate-300">
          Thank you for reaching out. We will get back to you shortly. Check
          your inbox for a confirmation email.
        </p>
        <button
          type="button"
          onClick={function() { setStatus('idle'); }}
          className="mt-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-primary/50 hover:text-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="from_name" className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            placeholder="John Smith"
            value={form.from_name}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="from_email" className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            required
            placeholder="john@example.com"
            value={form.from_email}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+92 300 0000000"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project Inquiry"
            value={form.subject}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          className="resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.08]"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Something went wrong. Please try again or email us directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
