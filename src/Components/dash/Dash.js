import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Total from './cards/Total';
import CardGenre from './cards/CardGenre';
import CardSenioridade from './cards/CardSenioridade';
import CardPieApex from './cards/CardPieApex';
import GraficoApex from './cards/ChartApex';
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
const [dataFull, setDataFull] = useState([]);

useEffect(() => {
  axios.get('https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=15')
  .then((response) => {
    setDataFull(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);
 

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
           <CardPieApex data={dataFull} p='4' tipo='genero' />
          <CardPieApex data={dataFull} p='13' tipo='orientacao' />
          <CardPieApex data={dataFull} p='5' tipo='idade' />
          <CardPieApex data={dataFull} p='7' tipo='pais' />
          <CardPieApex data={dataFull} p='8' tipo='estado' />          
        </Box>        
      </TabPanel>
      <TabPanel className='tabPanel' value={value} index={1}>
        <Typography variant="h3" gutterBottom>Stacks</Typography>
        <Box className="container--charts">
          <GraficoApex data={dataFull} p='9' tipo='linguagem' />
          <GraficoApex data={dataFull} p='10' tipo='framework' />
          <GraficoApex data={dataFull} p='6' tipo='stack' />
          <GraficoApex data={dataFull} p='12' tipo='senioridade' />
        </Box>
      </TabPanel>
      <TabPanel className='tabPanel' value={value} index={2}>
      <Typography variant="h3" gutterBottom>Remuneração</Typography>
        <Total data={dataFull} />
        <div className='container--genre'>
            <Box className="container--genre--currency">
              <CardGenre data={dataFull} tipo='Masculino' />
              <CardGenre data={dataFull} tipo='Feminino' />
              <CardGenre data={dataFull} tipo='Nao Binario' />
            </Box>
            <Box className="container--senioridade--currency">
              <CardSenioridade data={dataFull} tipo='Estagio' />
              <CardSenioridade data={dataFull} tipo='Junior' />    
              <CardSenioridade data={dataFull} tipo='Pleno' />
              <CardSenioridade data={dataFull} tipo='Senior' />
            </Box>      
        </div>
      </TabPanel>      
    </Box>
  );
}

export default Dash;
