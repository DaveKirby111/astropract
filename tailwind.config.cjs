/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lime: "#00FF00",
      },

      fontFamily: {
        rubik: ["Rubik Iso"],
      },
    },
  },
  plugins: [],
};
