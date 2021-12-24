import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
     styleOverrides: {
       root: {
         borderRadius: 12
       }
     }
    },
    MuiPaper: {
     styleOverrides: {
      root: {
        borderRadius: 16
       }
     }
    }
  }
});

export default theme;
