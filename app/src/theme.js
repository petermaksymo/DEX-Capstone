// Create a theme instance.
const theme = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        type: 'light',
        primary: {
          main: '#2e7d32',
        },
        secondary: {
          main: '#ffd54f',
        },
        background: {
          default: '#f4f4f4',
        },
      }
      : {
        type: 'dark',
        primary: {
          main: '#00c853',
        },
        secondary: {
          main: '#ffd740',
        },
      })
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontSize: 14,
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
  }
});

export default theme;
