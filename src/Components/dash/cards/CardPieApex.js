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
import Chart from 'react-apexcharts'
import './cards.css';
// import { Tooltip } from '@mui/material';

const CardPieApex = (props) => {
    const [total, setTotal] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/media_${props.tipo}.php`)
        .then(res => {       
            setTotal(res.data);
            setTimeout(() => {
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
    
    const series = data.map((item) => {
        return item.value;
    });
    const labels = data.map((item) => {
        return item.name;
    });
    const options = {
        chart: {
            width: 280,
            type: 'pie',
        },
        legend: {
            position: 'bottom'
        },
        labels: labels,        
        responsive: [{
            breakpoint: 580,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom',
                }
            }
        }]
    }


console.log("LABELS: ",labels)
console.log("SERIES: ",series)
    
      return (
        <Card className='container--pie'>
        <Typography sx={{margin: 1}} variant="overline" component="div">
            {props.tipo}
        </Typography>
        <CardContent>
        <Chart 
            type="pie"
            width={350}
            height={350}
            series = { series }
            options = { options }
        >
        </Chart>
        </CardContent>
        </Card>

      )
 
  }

  export default CardPieApex;