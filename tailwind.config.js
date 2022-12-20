/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1480px" },
        mobile: { max: "540px" },
      },
    },
  },
  plugins: [],
};
