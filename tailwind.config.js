/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0f0e0e",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        violet: {
          "100": "#f998ef",
          "200": "#ea98f7",
        },
        white: "#fff",
        darkslategray: "#343333",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      base: "1rem",
      "13xl": "2rem",
      "111xl": "8.125rem",
      "33xl": "3.25rem",
      sm: "0.875rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
