import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
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
      'Overpass Mono',
      'monospace',
    ].join(','),
  },
});

export default theme;
