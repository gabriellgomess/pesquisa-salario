import { Avatar, Box, Card, CardContent, Grid, Typography, CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CardSenioridade = (props) => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=14&tipo=${props.tipo}`)
        .then(res => {       
            setTotal(res.data);
            console.log(res.data);
        })
    }, [total]);
  
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
   
    return (
        <Card className="card--senioridade" sx={{backgroundColor: '#2c2c2c'}} >
             <CardActionArea>
            <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                <Typography color='#4caf50' gutterBottom variant="overline" sx={{display: 'flex'}} >{tipo()} <Rating name="read-only" defaultValue={rating()} precision={0.5} readOnly /></Typography>
                <Typography color="textPrimary" variant="h6">{total}</Typography>                
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
