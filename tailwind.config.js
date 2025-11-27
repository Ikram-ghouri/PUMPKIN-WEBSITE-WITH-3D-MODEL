/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Jolly Lodger', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        orange: '#EB7600',
      },
    },
  },
  plugins: [],
};
