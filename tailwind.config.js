/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", surface: "var(--surface)", ink: "var(--text)", muted: "var(--muted)", line: "var(--line)", accent: "var(--accent)", accent2: "var(--acc2)" },
      fontFamily: { head: ['"Bricolage Grotesque"', '"Trebuchet MS"', "system-ui", "sans-serif"], body: ['"Instrument Sans"', "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
