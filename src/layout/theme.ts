import { createTheme } from "@mui/material";
import "./theme.scss";

const primary = "#000000";
// const primary = "#d14f34";
const secondary = "#ff4e53";
// const primary = "#c14d32";
// const secondary = "#36666a";
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: secondary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      default: "transparent",
      // default: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: primary,
          borderColor: primary
        },
        colorSecondary: {
          color: "white",
          borderColor: "white"
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          borderBottom: "2px solid " + secondary,
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: "white",
        }
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiLink: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "2rem",
          lineHeight: "1.2",
          margin: "3rem 0",
          fontFamily: "Crimson Text",
          fontWeight: "normal",
        },
        h2: {
          fontSize: "1.7rem",
          lineHeight: "1.2",
          margin: "3rem 0",
          fontFamily: "Crimson Text",
          fontWeight: "normal",
        },
        h3: {
          fontSize: "1.17rem",
          lineHeight: "1.2",
          fontFamily: "Acme, sans-serif",
          fontWeight: "normal",
        },
        h4: {
          fontSize: "1rem",
          lineHeight: "1.3",
          fontFamily: "Acme, sans-serif",
          fontWeight: "normal",
        },
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
};
theme.typography.h2 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default theme;
