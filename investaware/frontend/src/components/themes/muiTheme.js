import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#1982F8",
      light: "#52A1FA",
      dark: "#156DD0",
    },
    secondary: {
      main: "#A9D5FF",
      light: "#BFE0FF",
      dark: "#8EB3D6",
    },
    success: {
      main: "#34D399",
      light: "#67DEB3",
      dark: "#2CB181",
    },
    error: {
      main: "#EF5055",
      light: "#F37C80",
      dark: "#C94347",
    },
    app: {
      text: {
        main: "#3D3D3D",
        light: "#6E6E6E",
        extraLight: "#9E9E9E",
        error: "#d32f2f",
        disabled: "#00000061",
      },
      bg: {
        main: "#FCFCFC",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
  },
  components: {
    MuiCheckBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: "4px",
          paddingLeft: "9px",
          paddingRight: "9px",
        }),
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "Inter",
          textTransform: "none",
          backgroundColor: theme.palette.primary,
          "&:active": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
          "&:focus": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBottom: 0,
          paddingTop: 0,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "Inter",
          textTransform: "none",
          backgroundColor: theme.palette.primary,
          "&:active": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
          "&:focus": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: ({ theme }) => ({
          fontFamily: "Inter",
          fontSize: "14px",
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "14px",
          color: theme.palette.app.text.main,
          paddingTop: "8px",
          paddingBottom: "8px",
        }),
      },
    },
  },
});

export default Theme;
