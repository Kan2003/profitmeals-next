const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * ProFit Meals brand tokens — see ProFit Meals Colour & Typography Guide.
 * Three brand colours only (80 / 5 / 15): Warm Ivory, Deep Forest Green, Charcoal.
 * Everything else below is a tint/shade of those three, or a functional UI state.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand core
        ivory: '#F4F0E6', // 80% — primary background
        forest: '#183A32', // 5%  — brand accent
        charcoal: '#242724', // 15% — text and contrast

        // Tints / shades of the brand core
        ivorydeep: '#EDE7DA', // alternating section background, footer
        surface: '#FBF9F4', // cards sitting on ivory
        forestdeep: '#10291F', // hover state for forest buttons
        foresttint: '#DDE5DF', // tags, chips, soft accents
        muted: '#5C5F5B', // secondary text — 5.7:1 on ivory
        faint: '#636560', // tertiary text / captions — ≥4.8:1 on every surface
        line: '#E0DACB', // hairlines and card borders

        // Functional state (form validation only — not a brand colour)
        warn: '#8A5A00',
        warnbg: '#FBEBD0',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: { card: '14px' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        float: 'float 5.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
