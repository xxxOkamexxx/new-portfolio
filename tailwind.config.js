/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      mainColorOrang: '#F55F1E',
      mainColorDark: '#272524',
      neutralDark: '#757372',
      neutralMedium: '#B9B8B8',
      neutralLight: '#FCFCFC',
     }
    },
  },
  plugins: [],
};
