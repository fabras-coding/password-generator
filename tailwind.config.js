/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", //very important. Without it, dark theme will not gonna work. It could be necessary re-run the app
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

