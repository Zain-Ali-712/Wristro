import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        oryn: ["'Oryn'", "sans-serif"],
      },
      backgroundImage: {
        'radial-gradient': '[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-800 via-sky-950 to-slate-600',
      },

    },
  },
  plugins: [],
};

// Force Tailwind rebuild: config updated

export default config;

