import Navigation from './Components/Navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/*
* I treat the App like a container. For organizational purposes only.
* It renders the navigation pane which holds the Navbar and all routes.
*/
const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8FB9A8', // change this to your desired primary color
      },
      secondary: {
        main: '#FEFAD4', // change this to your desired secondary color
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
      
    </div>
  );
};

export default App;