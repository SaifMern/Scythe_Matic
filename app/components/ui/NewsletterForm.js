'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
      >
        {status === 'loading' ? (
          'Subscribing...'
        ) : status === 'success' ? (
          '✓ Subscribed!'
        ) : (
          <>
            Subscribe
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}