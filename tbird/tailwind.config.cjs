module.exports = {
  mode: "jit",
  purge: ["./client/src/**/*.{js,ts,svelte}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
