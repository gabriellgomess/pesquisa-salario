import React from "react";
import Pesquisa from "./Pages/Pesquisa/Pesquisa";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import MenuBar from "./Components/menubar/MenuBar";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
    return (
      <ThemeProvider theme={darkTheme}>
        <MenuBar />
          <CssBaseline />
          <Container fixed>
            <Box className="container--app" sx={{ bgcolor: '#0288d1', height: '100vh' }} >
            <Routes>
                <Route exact path='/pesquisa/' element={<Dashboard />} />
                <Route path='/pesquisa/Pesquisa' element={<Pesquisa />} />
            </Routes>
            </Box>            
          </Container>           
          </ThemeProvider>
    );
}

export default App;