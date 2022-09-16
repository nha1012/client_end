/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 1px 3px rgba(0, 0, 0, 0.05)',
        card: 'box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
