/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#1C1B1B",
        textLight: "#1c1b1b99",
        primary: "#2F80ED",
        primaryDark: "#2a73d5",
        danger: "#CB0B0B",
      },
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [],
};
