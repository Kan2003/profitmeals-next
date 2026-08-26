'use client';

import { useState } from 'react';

const intents = ['A meal plan', 'Single meals', 'Corporate'];
const WEB3FORMS_ACCESS_KEY = 'e75b3875-418c-4f1a-bf34-c6446ba9c6a6';

function nameErrorFor(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Name is required.';
  if (trimmed.length < 2) return 'Enter your full name.';
  return '';
}

function phoneErrorFor(value) {
  if (!value) return 'Phone number is required.';
  if (!/^[0-9]{10}$/.test(value)) return 'Enter a valid 10-digit phone number.';
  return '';
}

export default function ContactForm() {
  const [intent, setIntent] = useState(intents[0]);
  const [status, setStatus] = useState('idle');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nameMessage = nameErrorFor(name);
    const phoneMessage = phoneErrorFor(phone);
    if (nameMessage || phoneMessage) {
      setNameError(nameMessage);
      setPhoneError(phoneMessage);
      return;
    }

    if (data.get('botcheck')) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `New enquiry (${intent}) — ${data.get('name')}`);
    data.set('intent', intent);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        form.reset();
        setIntent(intents[0]);
        setName('');
        setNameError('');
        setPhone('');
        setPhoneError('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-mintline bg-mint p-10 text-center">
        <div className="text-[19px] font-semibold text-ink">Thanks — we have your message.</div>
        <p className="mx-auto mt-2 max-w-[360px] text-[15px] leading-relaxed text-muted">
          We will get back to you on WhatsApp or phone shortly.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-5 inline-flex h-11 items-center rounded-[3px] border border-[#CDCDCD] px-5 text-[15px] font-medium text-ink">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Name</span>
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (nameError) setNameError('');
            }}
            onBlur={() => setNameError(nameErrorFor(name))}
            aria-invalid={!!nameError}
            className={`mt-1 h-12 w-full rounded-[3px] border px-3 text-[15px] outline-none ${
              nameError ? 'border-ambertx focus:border-ambertx' : 'border-[#CDCDCD] focus:border-green'
            }`}
          />
          {nameError && <p className="mt-1.5 text-[13px] text-ambertx">{nameError}</p>}
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Phone</span>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
              setPhone(digits);
              if (phoneError) setPhoneError('');
            }}
            onBlur={() => setPhoneError(phoneErrorFor(phone))}
            aria-invalid={!!phoneError}
            className={`mt-1 h-12 w-full rounded-[3px] border px-3 text-[15px] outline-none ${
              phoneError ? 'border-ambertx focus:border-ambertx' : 'border-[#CDCDCD] focus:border-green'
            }`}
          />
          {phoneError && <p className="mt-1.5 text-[13px] text-ambertx">{phoneError}</p>}
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
          name="message"
          rows={4}
          placeholder="Tell us your goal and we will suggest a starting point"
          className="mt-1 w-full rounded-[3px] border border-[#CDCDCD] p-3 text-[15px] outline-none focus:border-green"
        />
      </label>

      {status === 'error' && (
        <div className="rounded-[3px] bg-amberbg px-3.5 py-2.5 text-[13px] text-ambertx">
          Something went wrong sending your message — please try again or WhatsApp us instead.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3.5">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex h-12 items-center rounded-[3px] bg-green px-6 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
        <span className="text-[13px] text-faint">Or just WhatsApp us — it is faster</span>
      </div>
    </form>
  );
}
