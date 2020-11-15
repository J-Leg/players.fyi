import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#14274e',
    },
    secondary: {
      main: '#f1f6f9',
    },
    background: {
      default: '#394867',
      paper: '#394867'
    },
    text: {
      primary: '#fffff',
    }
  },
});

export default theme;
