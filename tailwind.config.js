/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgprimary: "#FFF8F1",
        textheading: "#F9862F",
        primary: "#000000",
        card: "#F9862F",
        para: "#FFFFFF",
        mdcard: "#FEE1CA",
        fb: "#E68D49"

      },
      borderRadius: {
        radius: "0px 0px 40px 40px ",
        16: "16px",
        fr: "0px, 0px, 15px, 15px",
        10: "10px"
      },
      fontSize: {
        size: "15px",
        13: "13px"
      },
      lineHeight: {
        20: "20.43px",
        16: "16.34px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  important: true,
};
