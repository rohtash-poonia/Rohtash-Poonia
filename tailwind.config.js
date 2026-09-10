/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(96, 165, 250, 0.35)",
      },
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};
