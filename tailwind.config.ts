import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: v("primary"), foreground: v("primary-foreground") },
        secondary: { DEFAULT: v("secondary"), foreground: v("secondary-foreground") },
        accent: { DEFAULT: v("accent"), foreground: v("accent-foreground") },
        background: v("background"), foreground: v("foreground"),
        muted: { DEFAULT: v("muted"), foreground: v("muted-foreground") },
        border: v("border"),
      },
      fontFamily: { serif: ["var(--font-serif)"], sans: ["var(--font-sans)"] },
    },
  },
  plugins: [],
};
export default config;
