/*tailwind.config.js*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD4A09',
        bgLight: '#F9F9F9',
        bgHero: '#FAF9F9',
        bgDark: '#161616',
        accentGreen: '#32CD32',
        textDark: '#333333',
        textGray: '#666666',
        bgDark: "#0B0B0B",
        textDark: "#111",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
