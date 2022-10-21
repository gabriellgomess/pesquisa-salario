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
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
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
            {/* <Box sx={{ alignItems: 'center', display: 'flex', pt: 2 }}>
                <ArrowUpwardIcon color="success" /><Typography variant="body2" sx={{ mr: 1 }}>16.2%</Typography>
                <Typography color="textSecondary" variant="caption" >Since last month</Typography>
            </Box> */}
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Total;
