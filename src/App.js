import React from "react";
import Pesquisa from "./Pages/Pesquisa";
import "./App.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
    return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container fixed>
            <Box className="container--app" sx={{ bgcolor: '#0288d1', height: '100vh' }} >
              <Pesquisa />
            </Box>            
          </Container>           
          </ThemeProvider>
    );
}

export default App;