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
          50: "#F5F7FF",
          100: "#E8EDFF",
          500: "#3153D4",
          700: "#01188A",
          900: "#000A46",
        },
        ink: {
          950: "#0B1020",
          600: "#50596B",
        },
        line: "#DDE2EC",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(1, 24, 138, 0.08)",
        card: "0 4px 20px -2px rgba(11, 16, 32, 0.05)",
        hover: "0 20px 40px -15px rgba(1, 24, 138, 0.15)",
        floating: "0 24px 48px -12px rgba(0, 10, 70, 0.18)",
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
