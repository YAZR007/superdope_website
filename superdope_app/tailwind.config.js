/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        turnOn: 'turnOn 1s ease-in forwards',
        blink: 'blink 1s step-end infinite',
        blinkLong: 'blinkLong 2s step-end infinite',
      }
    },
  },
  plugins: [],
}
