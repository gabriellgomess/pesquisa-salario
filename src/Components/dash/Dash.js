import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Total from './cards/Total';
import Mens from './cards/Mens';
import Womans from './cards/Womans';
import CardPie from './cards/CardPie'
import NonBinary from './cards/NonBinary';
import Grafico from './cards/Chart';
import './Dash.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dash = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="container--dash">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pessoas" {...a11yProps(0)} />
          <Tab label="Stacks" {...a11yProps(1)} />
          <Tab label="Valores" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className='tabPanel1' value={value} index={0}>
        <Box className="container--title">
          <Typography variant="h3" gutterBottom>Pessoas</Typography>
          <Typography variant="overline" gutterBottom>Quem são e onde estão</Typography>
        </Box>       
        <Box className="container--cards">           
          <CardPie tipo='genero' />
          <CardPie tipo='pais' />
          <CardPie tipo='estado' />
          <CardPie tipo='idade' />
        </Box>        
      </TabPanel>
      <TabPanel className='tabPanel' value={value} index={1}>
        <Typography variant="h3" gutterBottom>Stacks</Typography>
        <Grafico tipo='linguagem' />
        <Grafico tipo='framework' />
        <Grafico tipo='stack' />
      </TabPanel>
      <TabPanel className='tabPanel' value={value} index={2}>
      <Typography variant="h3" gutterBottom>Remuneração</Typography>
        <Total />
        <div className='container--genre'>
            <Womans /> 
            <Mens />
            <NonBinary />
        </div>
      </TabPanel>
    </Box>
  );
}

export default Dash;
