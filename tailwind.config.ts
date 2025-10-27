import type { Config } from "tailwindcss";
import tailwindcssRTL from "tailwindcss-rtl";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3BA3FF",
          DEFAULT: "#1E6FFF",
          dark: "#0F2D5C",
        },
        accent: {
          light: "#E6F0FF",
          dark: "#0B1E3D",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  // IMPORTANT: use the plugin object, DO NOT call it as a function
  plugins: [tailwindcssRTL],
};

export default config;
