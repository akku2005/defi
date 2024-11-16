/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Scan all .js and .jsx files in src for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
