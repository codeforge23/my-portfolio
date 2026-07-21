/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00d4aa",
          dark: "#00b894",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          light: "#111111",
          card: "#1a1a1a",
          border: "#2a2a2a",
        },
        "text-muted": "#888888",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
