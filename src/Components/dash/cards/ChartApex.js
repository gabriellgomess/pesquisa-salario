import React, {useState, useEffect } from 'react';
import axios from 'axios';
import collect from 'collect.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import "./cards.css";
import Chart from 'react-apexcharts'

const GraficoApex = (props) => {
    const [totalTech, setTotalTech] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=${props.p}`)
        .then(res => {       
            setTotalTech(res.data);            
        })
    }, [totalTech]);

    const countLang = collect(totalTech).groupBy(props.tipo).map((value, key) => {
        return {
            tecnologia: key,
            total: value.count()
        }
    }).toArray();
    
    
    const data = [];
    countLang.forEach((item) => {
        data.push({name: item.tecnologia, quantidade: item.total});
    });

    const options = {
        chart: {
            width: 200,
            type: 'bar',
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: data.map((item) => {
                return item.name;
            })
        },        
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 580,
            options: {
                chart: {
                    width: 250,
                    height: 250
                },
                legend: {
                    position: 'bottom'
                },               
            },
        }]
    }
    const series = [{
        name: 'Quantidade',
        data: data?.map((item) => {
            return item.quantidade;
        })
    }]


  return (
    <Card className="wrapper--grafico" sx={{ minWidth: 200}}>
        <Typography sx={{margin: 2}} variant="overline" component="div">
            {props.tipo}
        </Typography>
        <CardContent>
            {data.length > 0 ? 
            <Chart options={options} series={series} type="bar" />
            : <Typography variant="h5" color="text.secondary" gutterBottom>Buscando informações <CircularProgress /></Typography>}
        </CardContent>
    </Card>
    
  );
}

export default GraficoApex;
