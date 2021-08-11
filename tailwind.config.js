module.exports = {
  important: true,

  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        97: "27rem",
        98: "29rem",
      },

      colors: {
        blue: {
          450: "#4267B2",
        },
        green: {
          450: "#1DB954",
          550: "#1DB954",
        },
        black: {
          350: "#302f2f",
          450: "#131313",
          550: "#5c5b5b",

          900: "#000000",
        },
      },
    },
  },
  screens: {
    sm: "500px",
    md: [
      // Sidebar appears at 768px, so revert to `sm:` styles between 768px
      // and 868px, after which the main content area is wide enough again to
      // apply the `md:` styles.
      { min: "668px", max: "767px" },
      { min: "868px" },
    ],
    lg: "1100px",
    xl: "1400px",
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
