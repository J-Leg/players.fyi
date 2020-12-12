import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#333456',
    },
    secondary: {
      main: '#16213e',
      dark: '#ffffff',
    },
    background: {
      default: '#1a1a2e',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#f1f6f9',
    }
  },
  typography: {
    fontFamily: [
      'iosevka-extended-medium',
    ].join(','),
    h1: {
      fontFamily: 'iosevka-thin',
    },
    subtitle1: {
      fontSize: 14,
      fontFamily: 'iosevka-thin',
    },
  },
});

export default theme;
