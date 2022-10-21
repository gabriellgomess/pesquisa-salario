import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Womans = () => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/media_woman.php`)
        .then(res => {       
            setTotal(res.data);
        })
    }, [total]);
    return (
        <Card className="card--genre" sx={{backgroundColor: "#ce93d8"}} >
             <CardActionArea>
            <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color="textSecondary" gutterBottom variant="overline" >MÉDIA FEMININA</Typography>
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

export default Womans;
