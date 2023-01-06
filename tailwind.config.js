const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.85rem', { lineHeight: '1rem' }],
      sm: ['0.975rem', { lineHeight: '1.5rem' }],
      base: ['1.1rem', { lineHeight: '2rem' }],
      lg: ['1.225rem', { lineHeight: '1.75rem' }],
      xl: ['1.35rem', { lineHeight: '2rem' }],
      '2xl': ['1.6rem', { lineHeight: '2.5rem' }],
      '3xl': ['2.1rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.6rem', { lineHeight: '3rem' }],
      '5xl': ['3.1rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.85rem', { lineHeight: '1' }],
      '7xl': ['4.6rem', { lineHeight: '1' }],
      '8xl': ['6.1rem', { lineHeight: '1' }],
      '9xl': ['8.1rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        bblue: '#3C79A8',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
