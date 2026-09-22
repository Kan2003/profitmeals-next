'use client';

import { useState } from 'react';

const mealTypes = [
  { value: 'low-carbs-high-protein', label: 'Low Carbs, High Protein' },
  { value: 'high-carbs-high-protein', label: 'High Carbs & Protein' },
];

const varieties = ['Veg', 'Non Veg', 'Egg'];
const mealTimes = ['Lunch', 'Dinner'];

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

function PillGroup({ label, options, value, onChange }) {
  return (
    <div>
      <span className="text-[13px] font-medium text-ink">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => onChange(opt)}
            className={`inline-flex h-10 items-center rounded-full border px-4 text-sm font-medium transition-all duration-150 ${
              value === opt
                ? 'border-green bg-green text-white shadow-sm'
                : 'border-[#CDCDCD] bg-white text-ink hover:border-green hover:text-green'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [mealType, setMealType] = useState('');
  const [variety, setVariety] = useState('');
  const [mealTime, setMealTime] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nameMsg = nameErrorFor(name);
    const phoneMsg = phoneErrorFor(phone);
    if (nameMsg || phoneMsg) {
      setNameError(nameMsg);
      setPhoneError(phoneMsg);
      return;
    }

    if (data.get('botcheck')) { setStatus('success'); return; }

    setStatus('loading');
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `New enquiry — ${name} (${variety || 'Any'}, ${mealTime || 'Any slot'})`);
    data.set('meal_type', mealType);
    data.set('variety', variety);
    data.set('meal_time', mealTime);

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
        setName(''); setNameError('');
        setPhone(''); setPhoneError('');
        setMealType(''); setVariety(''); setMealTime('');
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
        <div className="text-[19px] font-semibold text-ink">Thanks — we have your enquiry.</div>
        <p className="mx-auto mt-2 max-w-[360px] text-[15px] leading-relaxed text-muted">
          We will get back to you on WhatsApp shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 inline-flex h-11 items-center rounded-[3px] border border-[#CDCDCD] px-5 text-[15px] font-medium text-ink"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
        aria-hidden="true"
      />

      {/* Name + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Name</span>
          <input
            name="name"
            value={name}
            placeholder="Your full name"
            onChange={(e) => { setName(e.target.value); if (nameError) setNameError(''); }}
            onBlur={() => setNameError(nameErrorFor(name))}
            aria-invalid={!!nameError}
            className={`mt-1 h-12 w-full rounded-[3px] border px-3 text-[15px] outline-none transition-colors ${
              nameError ? 'border-ambertx' : 'border-[#CDCDCD] focus:border-green'
            }`}
          />
          {nameError && <p className="mt-1.5 text-[13px] text-ambertx">{nameError}</p>}
        </label>

        <label className="block">
          <span className="text-[13px] font-medium text-ink">Phone Number</span>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
              if (phoneError) setPhoneError('');
            }}
            onBlur={() => setPhoneError(phoneErrorFor(phone))}
            aria-invalid={!!phoneError}
            className={`mt-1 h-12 w-full rounded-[3px] border px-3 text-[15px] outline-none transition-colors ${
              phoneError ? 'border-ambertx' : 'border-[#CDCDCD] focus:border-green'
            }`}
          />
          {phoneError && <p className="mt-1.5 text-[13px] text-ambertx">{phoneError}</p>}
        </label>
      </div>

      {/* Meal Type dropdown */}
      <label className="block">
        <span className="text-[13px] font-medium text-ink">Meal Type</span>
        <select
          name="meal_type"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="mt-1 h-12 w-full appearance-none rounded-[3px] border border-[#CDCDCD] bg-white px-3 text-[15px] text-ink outline-none transition-colors focus:border-green"
        >
          <option value="" disabled>Select a meal type</option>
          {mealTypes.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </label>

      {/* Variety */}
      <PillGroup label="Variety" options={varieties} value={variety} onChange={setVariety} />

      {/* Meal Time */}
      <PillGroup label="Meal Slot" options={mealTimes} value={mealTime} onChange={setMealTime} />

      {status === 'error' && (
        <div className="rounded-[3px] bg-amberbg px-3.5 py-2.5 text-[13px] text-ambertx">
          Something went wrong — please try again or WhatsApp us directly.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3.5 pt-1">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-contact inline-flex h-12 items-center rounded-[3px] bg-green px-6 text-[15px] font-medium text-white transition-[transform,box-shadow,background-color] duration-200 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
        </button>
        <span className="text-[13px] text-faint">Or just WhatsApp us — it is faster</span>
      </div>
    </form>
  );
}
