import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lowes-blue': '#003d82',
        'lowes-blue-dark': '#004990',
        'lowes-red': '#CC0000',
      },
    },
  },
  plugins: [],
};

export default config;

