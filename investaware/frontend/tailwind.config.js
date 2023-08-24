/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: {
          100: "#1F2032",
          200: "#101828",
          300: "#06071B",
        },
        primaryblue: {
          200: "#3871FE",
        },
        greyBorder: "#c4c4c3",
        placeholder: "#A9A8A8",
        neutralBlack: "#3D3D3D",
        inputFieldBg: "#F3F3F3",
        clientinputbtnbg: "rgba(0, 0, 0, 0.12)",
        clientinputbtnclr: "rgba(0, 0, 0, 0.5)",
        primaryBlackborder: "rgba(0, 0, 0, 0.125)",
        primaryButtonColor: "#0122AF",
        primaryButtonBorderColor: "#0122AF",
        primaryBackground: "rgba(0, 0, 0, 0.2)",
        primary: {
          100: "#52A1FA",
          200: "#1982F8",
          300: "#156DD0",
          accent: "#EDF5FE",
        },
        secondary: {
          100: "#BFE0FF",
          200: "#A9D5FF",
          300: "#8EB3D6",
          accent: "#F8FCFF",
        },
        success: {
          100: "#67DEB3",
          200: "#34D399",
          300: "#2CB181",
        },
        error: {
          100: "#F37C80",
          200: "#EF5055",
          300: "#C94347",
        },
        headerprimary: "rgba(182, 182, 182, 0.1)",
        dropDownBorder: "rgb(229, 229, 229)",
        primarytablebottomClr: "rgb(224, 221, 221)",
        primaryDisabledClr: "rgba(0, 0, 0, 0.5)",
        primaryDisabledBgClr: "rgba(0, 0, 0, 0.12)",
        stepperbgclr: "rgba(1, 34, 175, 0.2)",
        screenerTablebottom: "rgb(50, 50, 50)",
        globalBorderColor: "#E2E2E2",
        dividerColor: "#E0DDDD",
      },
      boxShadow: {
        primaryShadow:
          "2px 2px 6px rgb(0 0 0 / 5%), -2px -2px 6px rgb(0 0 0 / 5%)",
        secondary: "0px 0px 2px rgba(0, 0, 0, 0.4)",
        clientinputEditBox:
          "2px -2px 6px rgb(0 0 0 / 5%),-2px 0px 6px rgb(0 0 0 / 5%)",
        searchContainerShadow:
          "2px 2px 4px rgb(0 0 0 / 3%), -2px -2px 4px rgb(0 0 0 / 4%)",
        settingShadow:
          "-2px -2px 6px rgba(0, 0, 0, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.1)",
        moduleboxShadow: "0px 0px 3px rgb(0 0 0 / 15%)",
        marketUpdates:
          "2px 2px 6px rgba(0, 0, 0, 0.05), -2px -2px 6px rgba(0, 0, 0, 0.05)",
        marketupdatesSecondary:
          "2px 2px 6px rgb(0 0 0 / 20%), -2px -2px 6px rgb(0 0 0 / 00%)",
        productinsightShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.05)",
        portfolioPrimary:
          "2px 6px 6px rgb(0 0 0 / 15%), -2px -2px 6px rgb(0 0 0 / 15%)",
        productInputbutton:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        clientinputShadow: "0px 1px 2px 4px rgba(0, 0, 0, 0.05)",
        clientinputsecondary: "0px 0px 2px 2px rgba(0,0,0,0.05)",
        headerShadow: "0 5px 10px 0 rgb(0 0 0 / 13%)",
        headerDropdown: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        clientUploadCard: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        clientSidebar: "0px -2px 6px rgb(0 0 0 / 20%)",
        clientAccountType:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        dropDownShadow: "0px 0px 3px rgb(0 0 0 / 15%)",
        clientCard: "0px 0px 5px 0px rgba(0, 0, 0, 0.12)",
        boxShadowButton:
          " 0px 2px 4px -1px rgb(0 0 0 / 20%),0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        clientDashboardcard:
          "2px 2px 6px rgb(0 0 0 / 5%),-2px 0px 6px rgb(0 0 0 / 5%)",
        clientDashboardcardInsightCard:
          "2px 2px 6px rgba(0, 0, 0, 0.2), -2px -2px 6px rgba(0, 0, 0, 0.05)",
        globalCardShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
        uploadexcelScreen: "0px 0px 8px rgba(0, 0, 0, 0.12)",
        portfolioproposal:
          "-2px -2px 6px rgba(0, 0, 0, 0.05), 2px 2px 6px rgba(0, 0, 0, 0.2)",
        productinsightsScreeners: " 0px 0px 8px rgba(0, 0, 0, 0.13)",
        screenerTableCont:
          "rgb(0 0 0 / 20%) 2px 2px 6px, rgb(0 0 0 / 5%) -2px -2px 6px",
      },
      screens: {
        nm: "950px",
      },
      fontSize: {
        sm: ["14px", "16px"],
        base: ["16px", "16px"],
      },
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        dmsans: ["DM Sans"],
        Raleway: ["Raleway"],
        inherit: ["Inherit"],
      },
      spacing: {
        18: "4.5rem",
      },
      tracking: {
        primary: "0em",
      },
      bgGradientDeg: {
        104: "104.13deg",
        104.4: "104.41deg",
        180: "180deg",
      },
      backgroundImage: {
        "split-text-gradient":
          "inear-gradient(104.41deg, #FF5F6D -360.79%, #FFC371 415.59%)",
        "client-card-gradient":
          "linear-gradient(180deg, #fafafa 0%, #f6f6f6 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
};
