import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import collect from 'collect.js';


const CardSenioridade = (props) => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        setTotal(props.data);
    });
  
    const tipo = () => {
        if(props.tipo === 'Estagio'){
            return 'Estágio';
        }else if(props.tipo === 'Junior'){
            return 'Júnior';
        }else if(props.tipo === 'Pleno'){
            return 'Pleno';
        }else if(props.tipo === 'Senior'){
            return 'Sênior';
        }
    }
    const rating = () => {
        if(props.tipo === 'Estagio'){
            return 1;
        }else if(props.tipo === 'Junior'){
            return 2.5;
        }else if(props.tipo === 'Pleno'){
            return 4;
        }else if(props.tipo === 'Senior'){
            return 5;
        }
    }
    const mediaFiltered = total.filter((value) => {
        return value.senioridade === props.tipo;
    });
    const parseNumber = mediaFiltered.map((item, key) => {
        let salario = (item.salario).split("R$");
        let salarioNum = salario[1].replace(".", "");
        return parseFloat(salarioNum.replace(",", "."));
    });
    const media = () => {
        if(isNaN(collect(parseNumber).avg())){
            return 0;
        }else{
            return collect(parseNumber).avg();
        }
    }
    
    const mediaSenioridade = media().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
    return (
        <Card className="card--senioridade" sx={{backgroundColor: '#2c2c2c'}} >
             <CardActionArea>
            <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color='#4caf50' gutterBottom variant="overline" sx={{display: 'flex'}} >{tipo()} <Rating name="read-only" defaultValue={rating()} precision={0.5} readOnly /></Typography>
                <Typography color="textPrimary" variant="h6">{mediaSenioridade}</Typography>                
                </Grid>
                <Grid item>                
                </Grid>
            </Grid>           
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardSenioridade;
