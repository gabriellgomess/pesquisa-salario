import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CardGenre = (props) => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=3&tipo=${props.tipo}`)
        .then(res => {       
            setTotal(res.data);
        })
    }, [total]);
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
   
    return (
        <Card className="card--genre" sx={{backgroundColor: '#2c2c2c'}} >
             <CardActionArea>
            <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color={colors()} gutterBottom variant="overline" >MÉDIA {tipo()}</Typography>
                <Typography color="textPrimary" variant="h6">{total}</Typography>
                
                </Grid>
                <Grid item>
                <Avatar sx={{backgroundColor: 'success.main', height: 36, width: 36}}>
                    <AttachMoneyIcon />
                </Avatar>
                </Grid>
            </Grid>           
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardGenre;
