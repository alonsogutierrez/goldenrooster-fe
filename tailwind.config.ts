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
          DEFAULT: "#1B2B52",
          light: "#253A6A",
          dark: "#0F1A35",
          50: "#EEF1F8",
          100: "#D5DCF0",
          200: "#ABB9E1",
          300: "#8196D2",
          400: "#5773C3",
          500: "#3A57B0",
          600: "#2D438D",
          700: "#1B2B52",
          800: "#14203E",
          900: "#0C152A",
        },
        accent: {
          DEFAULT: "#F5821F",
          light: "#FFA040",
          dark: "#D96E0D",
          50: "#FFF4E8",
          100: "#FFE5C5",
          200: "#FFCB8A",
          300: "#FFB14F",
          400: "#FF9724",
          500: "#F5821F",
          600: "#E06B0A",
          700: "#B85708",
          800: "#904306",
          900: "#683104",
        },
        steel: {
          DEFAULT: "#4A7B9D",
          light: "#6A9BBD",
          dark: "#2A5B7D",
        },
        silver: {
          DEFAULT: "#8FA8BB",
          light: "#B8CDD9",
          dark: "#6080A0",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out 1.5s infinite",
        "pulse-gentle": "pulse-gentle 4s ease-in-out infinite",
        "bounce-arrow": "bounce-arrow 1.8s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
        "slide-right": "slide-right 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "count-up": "count-up 0.6s ease-out forwards",
        "draw-line": "draw-line 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.06)", opacity: "0.85" },
        },
        "bounce-arrow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-right": {
          from: { transform: "translateX(-40px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)", transformOrigin: "left" },
          to: { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #0C1220 0%, #1B2B52 55%, #0C1220 100%)",
        "dark-gradient": "linear-gradient(180deg, #0F1A35 0%, #1B2B52 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #F5821F 0%, #FFA040 100%)",
        "steel-gradient": "linear-gradient(135deg, #2A5B7D 0%, #4A7B9D 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 16px 45px rgba(0,0,0,0.15)",
        accent: "0 4px 20px rgba(245,130,31,0.35)",
        "accent-lg": "0 8px 30px rgba(245,130,31,0.45)",
        primary: "0 4px 20px rgba(27,43,82,0.3)",
        "primary-lg": "0 12px 40px rgba(27,43,82,0.4)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
