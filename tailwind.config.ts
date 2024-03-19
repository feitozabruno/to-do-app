import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-dark": "#1E6F9F",
        "blue-base": "#4EA8DE",
        "purple-base": "#8284FA",
        "purple-dark": "#5E60CE",

        "base-gray-700": "#0D0D0D",
        "base-gray-600": "#1A1A1A",
        "base-gray-500": "#262626",
        "base-gray-400": "#333333",
        "base-gray-300": "#808080",
        "base-gray-200": "#D9D9D9",
        "base-gray-100": "#F2F2F2",

        danger: "#E25858",
      },
    },
  },
  plugins: [],
};
export default config;
