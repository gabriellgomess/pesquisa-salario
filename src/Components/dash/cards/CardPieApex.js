import React, { useState, useEffect } from 'react';
import collect from 'collect.js';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Chart from 'react-apexcharts'
import './cards.css';

const CardPieApex = (props) => {
    const [total, setTotal] = useState([]);
    const [open, setOpen] = useState(false);

    // No carregamento do componente, armazena a props no state total
    useEffect(() => {      
        setTotal(props.data);
    });
    //Se props.tipo for diferente de 'idade' 
    if(props.tipo !== 'idade'){
        // Agrupa os dados de acordo com a propriedade tipo
        const countLang = collect(total).groupBy(props.tipo).map((value, key) => {
            return {
                name: key,
                value: value.count()
            }            
        }).toArray();
        // Filtro para caso for props.tipo 'estado', remover o exterior, pois queremos somente os estados brasileiros
        const filtered = collect(countLang).reject((item) => {
            return item.name === 'exterior';
        });
        // Declarando a variável data para armazenar os dados filtrados
        const data = [];
        // Push array de objetos com os dados filtrados   
        (filtered.items).forEach((item) => {
            data.push({name: item.name, value: item.value});
        });
        // Percorrendo o array para pegar a série de dados
        const series = data?.map((item) => {
           return item.value;        
        });
        // Percorrendo o array para pegar os labels
        const labels = data?.map((item) => {
            return item.name;
        });
        // Declarando as opções do gráfico   
        const options = {
            colors :[
                '#42a5f5',
                '#66bb6a',
                '#ff7043',
                '#ab47bc',
                '#26c6da',
                '#ffa726',
                '#ef5350',
                '#78909c',
                '#5c6bc0',
                '#ec407a',
                '#29b6f6',
                '#66bb6a',
                '#ff7043',
                '#ab47bc',
                '#26c6da',
                '#ffa726',
                '#ef5350',
                '#78909c',
                '#5c6bc0'
    
            ],
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
        // Condicional para definir o título do gráfico
        const title = () => {
            switch (props.tipo) {
                case 'genero':
                    return 'Gênero';
                case 'orientacao':
                    return 'Orientação Sexual';
                case 'pais':
                    return 'País';
                case 'estado':
                    return 'Estado (Brasil)';
                default:
                    return 'Idade';
            }
        }
        // Montando o componente
        return (
            <Card className='container--pie'>
            <Typography sx={{margin: 1}} variant="overline" component="div">
                {title()}
            </Typography>
            <CardContent>
            {props.data !== null ?
            <Chart 
                type="pie"
                width={350}
                height={350}
                series = { series }
                options = { options }
            >
            </Chart>
            : <CircularProgress />}
            </CardContent>
            </Card>
    
          )
    // Caso props.tipo for igual a 'idade'
    }else{
        // Definindo as faixas etárias
            const countAge = (total) => total?.map((item) => {
                if(item.idade <= 20){
                    return {
                        name: 'até 20',
                        value: parseInt(item.idade)
                    }
                }else if(item.idade > 20 && item.idade <= 30){
                    return {
                        name: '21-30',
                        value: parseInt(item.idade)
                    }
                }else if(item.idade > 30 && item.idade <= 40){
                    return {
                        name: '31-40',
                        value: parseInt(item.idade)
                    }
                }else if(item.idade > 40 && item.idade <= 50){
                    return {
                        name: '41-50',
                        value: parseInt(item.idade)
                    }               
                }else if(item.idade > 50){
                    return {
                        name: '50+',
                        value: parseInt(item.idade)
                    }
                }
            })
            // Agrupando os dados de acordo com a faixa etária
            const countIdade = collect(countAge(total)).groupBy('name').map((value, key) => {
                return {
                    name: key,
                    value: value.count()
                }
            }).toArray();
            // Declarando a variável data para armazenar os dados filtrados
            const data = [];
            // Push array de objetos com os dados de countIdade
            countIdade?.forEach((item) => {
                data.push({name: item.name, value: item.value});
            });
            // Percorrendo o array para pegar a série de dados
            const series = countIdade?.map((item) => {
               return item.value;        
            });            
            // Percorrendo o array para pegar os labels
            const labels = countIdade?.map((item) => {
                return item.name;
            });
            // Declarando as opções do gráfico
            const options = {
                colors :[
                    '#42a5f5',
                    '#66bb6a',
                    '#ff7043',
                    '#ab47bc',
                    '#26c6da',
                    '#ffa726',
                    '#ef5350',
                    '#78909c',
                    '#5c6bc0',
                    '#ec407a',
                    '#29b6f6',
                    '#66bb6a',
                    '#ff7043',
                    '#ab47bc',
                    '#26c6da',
                    '#ffa726',
                    '#ef5350',
                    '#78909c',
                    '#5c6bc0'
        
                ],
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
            // Título do gráfico
            const title = 'Idade';
            // Montando o componente
            return (
                <Card className='container--pie'>
                <Typography sx={{margin: 1}} variant="overline" component="div">
                    {title}
                </Typography>
                <CardContent>
                {props.data !== null ?
                <Chart 
                    type="pie"
                    width={350}
                    height={350}
                    series = { series }
                    options = { options }
                >
                </Chart>
                : <CircularProgress />}
                </CardContent>
                </Card>
        
              )
            

        }
    


    
      
 
  }

  export default CardPieApex;