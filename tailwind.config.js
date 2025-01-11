/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppines: ["Poppins", "serif"],
      martel_sans: ["Martel Sans", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
