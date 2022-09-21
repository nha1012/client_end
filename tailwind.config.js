/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 1px 3px rgba(0, 0, 0, 0.05)',
        card: '0 0.3125rem 0.625rem rgb(0 0 0 / 20%)',
      },
    },
  },
  plugins: [],
};
