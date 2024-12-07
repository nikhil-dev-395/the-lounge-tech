/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-g1": "linear-gradient(94deg, #8E54E9 11.57%, #4776E6 99.84%)",
      },
      boxShadow: {
        custom: "0px 0px 13px 0px rgba(115, 112, 142, 0.37)",
      },
      borderRadius: {
        custom: "6px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#3A384F",
        primary: "#0B081E",
      },

      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      typography: {
        secondary: "#D8D8D8",
      },
    },
  },
  plugins: [],
};
