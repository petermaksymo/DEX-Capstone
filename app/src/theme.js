import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#AB133E",
    },
    secondary: {
      main: "#0E153E",
    },
    background: {
      default: "#f4f4f4",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 843,
      lg: 1024,
      xl: 1280,
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    h1: {
      fontSize: "4rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    caption: {
      lineHeight: 1.15,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "8px 14px !important",
        },
      },
    },
  },
})

export default theme
