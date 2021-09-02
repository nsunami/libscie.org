// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      strokeWidth: {
        0.5: "0.5",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('public/libscie-wave-opt.svg')",
      }),
      boxShadow: {
        "3xl": "0 20px 35px rgba(87, 76, 250, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
