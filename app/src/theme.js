import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#AB133E',
    },
    secondary: {
      main: '#0E153E',
    },
    background: {
      default: '#f4f4f4',
    }
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontSize: '4rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    caption: {
      lineHeight: 1.15,
    },
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
