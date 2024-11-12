/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "rgba(242, 242, 242, 1)",
        "primary-blue": "rgba(119, 144, 237, 1)",
        "primary-black": "rgba(41, 38, 33, 1)",
        "secondary-gray": "rgba(231, 231, 231, 1)",
        "secondary-blue": "rgba(180, 198, 243, 1)",
        "tertier-blue": "rgba(232, 236, 253, 1)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
