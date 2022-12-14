import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import axios from 'axios';
import collect from 'collect.js';
import { FormControlUnstyled } from '@mui/base';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './cards.css';
// import { Tooltip } from '@mui/material';

const CardPie = (props) => {
    const [total, setTotal] = useState([]);
    const [open, setOpen] = useState(false);
useEffect(() => {
    handleToggle();
    axios.get(`https://gabriellgomess.com/pesquisa/media_${props.tipo}.php`)
    .then(res => {       
        setTotal(res.data);
        setTimeout(() => {
        handleClose();
        }, 1000);
         
    })
}, []);

const countLang = collect(total).groupBy(props.tipo).map((value, key) => {
    return {
        name: key,
        value: value.count()
    }
}).toArray();


const data = [];
countLang.forEach((item) => {
    data.push({name: item.name, value: item.value});
});
const COLORS = [
    '#0088FE', 
    '#00C49F', 
    '#FFBB28',
    '#FF8042',
    '#FF0000',
    '#FF00FF',
    '#800080',
    '#0000FF',
    '#00FFFF',
    '#008080',
    '#00FF00',
    '#808000',
    '#FFFF00',
    '#FFA500',
    '#800000',
    '#000000',
    '#808080',
    '#C0C0C0',
    '#FFFFFF',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  setOpen(!open);
};
    return (
    
    <Card className='container--pie' sx={{ minWidth: 345 }}>
        <Typography sx={{margin: 1}} variant="overline" component="div">
            {props.tipo}
        </Typography>
        <CardContent>
        <PieChart width={300} height={300}>
        <Legend />
        <Tooltip />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </CardContent>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Card>
    );
}

export default CardPie;