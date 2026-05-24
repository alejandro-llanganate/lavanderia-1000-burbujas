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
        primary: {
          DEFAULT: "#5792cc",
          dark: "#4680b8",
          light: "#6ba3d9",
        },
        "primary-light": "#8eb8e0",
        secondary: {
          DEFAULT: "#11214e",
          light: "#1a3366",
        },
        tertiary: {
          DEFAULT: "#bcddf3",
          soft: "#e8f4fc",
        },
        accent: {
          DEFAULT: "#f5c518",
          dark: "#d4a812",
        },
        whatsapp: {
          DEFAULT: "#25d366",
          dark: "#1da851",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brand: "0 8px 32px rgba(17, 33, 78, 0.12)",
        "brand-lg": "0 20px 50px rgba(17, 33, 78, 0.18)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 6px 24px rgba(37, 211, 102, 0.45)" },
          "50%": { boxShadow: "0 6px 36px rgba(37, 211, 102, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
