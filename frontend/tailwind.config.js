/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Spice', 'sans-serif'],
        comic: ['Comic Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
