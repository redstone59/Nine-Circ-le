/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-red": "#900000",
      },
      fontFamily: {
        standard: "Pusab",
      },
    },
  },
  plugins: [],
};
