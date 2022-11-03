import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import collect from 'collect.js';


const CardGenre = (props) => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        setTotal(props.data);
    });
    const colors = () => {
        if(props.tipo === 'Masculino'){
            return '#42a5f5';
        }else if(props.tipo === 'Feminino'){
            return '#ba68c8';
        }else{
            return '#ff9800';
        }
    }
    const tipo = () => {
        if(props.tipo === 'Masculino'){
            return 'Masculino';
        }else if(props.tipo === 'Feminino'){
            return 'Feminina';
        }else{
            return 'Não Binário';
        }
    }
    
    const mediaFiltered = total?.filter((value) => {
        return value.genero === props.tipo;
    });
    const parseNumber = mediaFiltered?.map((item, key) => {
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
    
    const mediaGenero = media().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Card className="card--genre" sx={{backgroundColor: '#2c2c2c'}} >
             <CardActionArea>
            <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color={colors()} gutterBottom variant="overline" >MÉDIA {tipo()}</Typography>
                <Typography color="textPrimary" variant="h6">{mediaGenero}</Typography>                
                </Grid>
                <Grid item>
                </Grid>
            </Grid>           
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardGenre;
