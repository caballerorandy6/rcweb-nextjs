/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["var(--font-exo)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        mineshaft: "#2D2A2A",
        donkeybrown: "#A49781",
        bitter: "#90927D",
        oslogray: "#8F9796",
        gold: "#CBB26A",
      },
    },
  },
  plugins: [],
};
