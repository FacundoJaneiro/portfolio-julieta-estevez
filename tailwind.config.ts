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
        primary: "#EC4825",
        secondary: "#F77C52",
        accent: "#F2B84B",
        blue: "#97B2D0",
        pink: "#F49FB2",
        cream: "#F4EFEB",
        dark: "#141414",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "Arial Narrow", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
