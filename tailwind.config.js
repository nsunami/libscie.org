// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 35px rgba(87, 76, 250, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
