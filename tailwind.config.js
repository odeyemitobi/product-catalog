/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'product-bg': '#f4f4f4',
        'product-hover': '#f0f0f0',
      },
      boxShadow: {
        'product-card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}