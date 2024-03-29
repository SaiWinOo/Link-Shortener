/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#2bd1d0',
        'primary-100' : '#2bd1d010',
        'primary-700' : '#19b6b5',
        secondary : '#3a3053',
      }
    },
  },
  plugins: [],
};
