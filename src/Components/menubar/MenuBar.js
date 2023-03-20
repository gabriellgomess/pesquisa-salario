import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Code from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';
import MyContext from '../../contexts/myContext';
import Contador from '../dash/cards/Contador';
import Logo from '../../img/Logo.png';
import './MenuBar.css';

// const pages = ['Home', 'Pessoas', 'Mensagens'];
const settings = ['Perfil', 'Conta', 'Dashboard', 'Sair'];

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { testeState, setTesteState } = React.useContext(MyContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar component='nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <img className='imagem_logo' src={Logo} alt="Logo" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/pesquisa/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GABRIEL.DEV
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >   
                <Link to="/" style={{ textDecoration: 'none' }}>         
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography sx={{color:'white'}} textAlign="center">Dashboard</Typography>
                    </MenuItem>
                </Link>
                <Link to="/pesquisa" style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography  sx={{color:'white'}} textAlign="center">Pesquisa</Typography>
                    </MenuItem>
                </Link>               
            </Menu>
          </Box>          
          <Box  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
            <img className='imagem_logo' src={Logo} alt="Logo" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GABRIEL.DEV
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
               <Link to="/" style={{ textDecoration: 'none' }}>
               <Tooltip title="Nossos números">    
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Dashboard</Button>
              </Tooltip>
                </Link>
                <Link to="/pesquisa" style={{ textDecoration: 'none' }}>
                <Tooltip title="Formulário de pesquisa">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Pesquisa</Button>
                </Tooltip>                
                </Link>
          </Box>
          <Box sx={{ width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Contador />
            <Tooltip title="Powered by Gabriel Gomes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Gabriel Gomes" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;
