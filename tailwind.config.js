/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      text: "#B3B3B3",
      "text-2": "#D9D9D9",
      "light-sage": "#E1F0DB",
      "light-tea": "#D3E7C4",
      tea: "#D3E7C4",
      sage: "#9ABB85",
      matcha: "#789461",
      "dark-tea": "#50623A",
      // Dark mode (used to)
      "text-dark": "#D4D4D4",
      "text-2-dark": "#FFFFFF",
      "light-sage-dark": "#EEFFE7",
      "light-tea-dark": "#E3FBD2",
      "tea-dark": "#E5F1DB",
      "sage-dark": "#B9DEA1",
      "matcha-dark": "#ACD38B",
      "dark-tea-dark": "#94B56D",
      // Background
      "background-dark": "#323232",
      "background-white": "#FFFFFF",
      // Utility
      "section-divider": "#A0A0A0",
      "darker-text": "#707070",
    },
    extend: {},
  },
  plugins: [],
};
