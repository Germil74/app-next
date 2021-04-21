
import { createMuiTheme } from '@material-ui/core/styles';
import { red, teal, yellow } from '@material-ui/core/colors';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: yellow["A400"],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
