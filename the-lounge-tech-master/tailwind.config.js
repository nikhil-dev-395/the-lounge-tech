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
        accent: "#7344BE",
        Headings: "#F6F6F6",
        projectBox: "#8E54E9",
        projectLink: "#12111D",
        footerBg: "#0B081E",
        testimonialsHead: "#DDCCF8",
        accent2: "var(--ACCENT-COLOR-01-A200, #DDCCF8)",
      },
      boxShadow: {
        "white-glow-soft":
          "0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)",
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
