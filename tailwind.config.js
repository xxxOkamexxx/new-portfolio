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
      mainColorOrange: '#F55F1E',
      mainColorDark: '#272524',
      neutralDark: '#757372',
      neutralMedium: '#B9B8B8',
      neutralLight: '#FCFCFC',
      subColor: '#d8d4c1',
      focusColor: '#30b9e3'
     }
    },
  },
  plugins: [],
};
