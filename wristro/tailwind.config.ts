import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#f8fafc',         // slate-50
        background: '#0f172a',   // slate-900
        primary: '#38bdf8',      // sky-400
        secondary: '#fef3c7',    // amber-100
        accent: '#22d3ee',       // cyan-400
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
