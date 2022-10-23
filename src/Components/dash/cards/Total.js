import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Total = () => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=2`)
        .then(res => {       
            setTotal(res.data);
        })
    }, [total]);
    return (
        <Card >
            <CardActionArea>
            <CardContent>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color="textSecondary" gutterBottom variant="overline" >MÉDIA GERAL DE SALÁRIOS</Typography>
                <Typography color="textPrimary" variant="h4">{total}</Typography>
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
