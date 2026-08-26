/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2E632A',
        forestdeep: '#1F4A1B',
        green: '#3E8438',
        leaf: '#76B971',
        mint: '#EFF5EE',
        mintline: '#DCE7DA',
        mintdeep: '#E2EDE0',
        sand: '#F4EFE7',
        sandline: '#E6DCCC',
        sanddeep: '#EDE4D6',
        ink: '#333333',
        muted: '#6D6E6F',
        faint: '#A2A0A2',
        line: '#E7E7E7',
        amberbg: '#FFF1DA',
        ambertx: '#8A5A00',
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
