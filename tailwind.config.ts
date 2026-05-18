import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#e8f3f4",
          100: "#c5dfe2",
          400: "#3d8d95",
          500: "#1d6e77",
          600: "#0e4f55",
          700: "#093a3f",
          800: "#062a2e",
        },
        amber: {
          400: "#f0a838",
          500: "#dc9020",
        },
        ink: {
          DEFAULT: "#0c1418",
          2: "#3a4a52",
        },
        cream: "#f4efe6",
        hairline: "#d8d2c2",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
