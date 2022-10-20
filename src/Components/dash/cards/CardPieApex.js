import React, { useState, useEffect } from 'react';
import axios from 'axios';
import collect from 'collect.js';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Chart from 'react-apexcharts'
import './cards.css';

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

    const manipulador = props.tipo === 'idade' ? total : data;

    const series = manipulador.map((item) => {
       return props.tipo == 'idade'? parseInt(item.qtd) : item.value; ;        
    });    
    const labels = manipulador.map((item) => {
        return props.tipo == 'idade' ? item.idade : item.name;
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