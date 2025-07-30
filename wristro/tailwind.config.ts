import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx, cjs,mts,cts,mjs}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        oryn: ["'Oryn'", "sans-serif"],
      },
      colors: {
        text: '#f7f8f9',
        background: '#0f1415',
        primary: '#64868e',
        secondary: '#98b4a6',
        accent: '#d1e4d1',
      },
    },
  },
  plugins: [],
};

// Force Tailwind rebuild: config updated

export default config;

