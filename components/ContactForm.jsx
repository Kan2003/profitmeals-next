'use client';

import { useState } from 'react';

const intents = ['A meal plan', 'Single meals', 'Corporate'];

export default function ContactForm() {
  const [intent, setIntent] = useState(intents[0]);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-card border border-mintline bg-mint p-10 text-center">
        <div className="text-[19px] font-semibold text-ink">Thanks — we have your message.</div>
        <p className="mx-auto mt-2 max-w-[360px] text-[15px] leading-relaxed text-muted">
          This is a demo build, so nothing was actually sent. In production this posts to your inbox and pings the kitchen WhatsApp.
        </p>
        <button onClick={() => setSent(false)} className="mt-5 inline-flex h-11 items-center rounded-[3px] border border-[#CDCDCD] px-5 text-[15px] font-medium text-ink">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Name</span>
          <input required className="mt-1 h-12 w-full rounded-[3px] border border-[#CDCDCD] px-3 text-[15px] outline-none focus:border-green" />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Phone</span>
          <input required inputMode="tel" className="mt-1 h-12 w-full rounded-[3px] border border-[#CDCDCD] px-3 text-[15px] outline-none focus:border-green" />
        </label>
      </div>

      <div>
        <span className="text-[13px] font-medium text-ink">What are you looking for</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {intents.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIntent(i)}
              className={`inline-flex h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                intent === i ? 'border-green bg-green text-white' : 'border-[#CDCDCD] bg-white text-ink'
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="text-[13px] font-medium text-ink">Message</span>
        <textarea
          rows={4}
          placeholder="Tell us your goal and we will suggest a starting point"
          className="mt-1 w-full rounded-[3px] border border-[#CDCDCD] p-3 text-[15px] outline-none focus:border-green"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3.5">
        <button type="submit" className="inline-flex h-12 items-center rounded-[3px] bg-green px-6 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5">
          Send Message
        </button>
        <span className="text-[13px] text-faint">Or just WhatsApp us — it is faster</span>
      </div>
    </form>
  );
}
