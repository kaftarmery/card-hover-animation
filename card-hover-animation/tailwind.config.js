/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#191919",
        "dirty-gray": "#1B1B1B",

        "light-gray": "#9ca3af",
      },
      fontFamily: {
        PPEditorial: ["PPEditorial", "sans"],
      },
    },
  },
  plugins: [],
};
