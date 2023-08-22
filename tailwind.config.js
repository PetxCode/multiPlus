/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pro: ["proxima"],
        mont: ["mont"],
        monH: ["montHeavy"],
        proM: ["proximaMedium"],
      },
    },
  },
  plugins: [],
};
