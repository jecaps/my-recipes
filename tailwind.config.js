/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Annie Use Your Telescope", "cursive"],
        "sans-serif": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
