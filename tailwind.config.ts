import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#317bab",
          dark: "#104d75",
          light: "#91b5c9",
          silver: "#c0c2c3",
          white: "#ffffff",
          50: "#f0f6fa",
          100: "#ddebf3",
          200: "#91b5c9",
          500: "#317bab",
          600: "#24618a",
          700: "#104d75",
          800: "#0b3957",
          900: "#072538",
        },
        accent: {
          gold: "#D4AF37",
          amber: "#F59E0B",
          teal: "#0D9488",
          cyan: "#0EA5E9",
          coral: "#E05A47",
        },
        ink: {
          950: "#071926",
          600: "#475569",
        },
        line: "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Inter", "sans-serif"],
        serif: ["var(--font-heading)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(16, 77, 117, 0.08)",
        card: "0 10px 30px -5px rgba(7, 25, 38, 0.04), 0 0 1px 1px rgba(49, 123, 171, 0.15)",
        hover: "0 20px 40px -15px rgba(49, 123, 171, 0.25)",
        floating: "0 24px 48px -12px rgba(10, 77, 117, 0.2)",
      },
      maxWidth: {
        site: "1360px",
      },
      borderRadius: {
        editorial: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
