import { Avatar, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, {useState, useEffect} from 'react';
import collect from 'collect.js';


const Total = (props) => {
    const [total, setTotal] = useState([]);
    
    useEffect(() => {
        setTotal(props.data);
    });
    
    const parseNumber = total.map((item, key) => {
        let salario = (item.salario).split("R$");
        let salarioNum = salario[1].replace(".", "");
        return parseFloat(salarioNum.replace(",", "."));
    });
    const media = collect(parseNumber).avg();    
    const mediaGeral = media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return (
        <Card >
            <CardActionArea>
            <CardContent>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color="textSecondary" gutterBottom variant="overline" >MÉDIA GERAL DE SALÁRIOS</Typography>
                <Typography color="textPrimary" variant="h4">{mediaGeral}</Typography>
                </Grid>
                <Grid item>
                <Avatar sx={{backgroundColor: 'success.main', height: 56, width: 56}}>
                    <AttachMoneyIcon />
                </Avatar>
                </Grid>
            </Grid>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Total;
