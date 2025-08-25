/** @type {import('tailwindcss').Config} */
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-+/, // all bg colors/shades
    },
  ],
  theme: {
    extend: {
      colors: {
        // dark: "#1a1a1a",
        // gold: "#f0d58c",
      },
    },
  },
  plugins: [tailwindcss()],
});
