import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import "./Form.css";
import paises from './FormPaises.json';
import linguagens from './Language.json';
import estados from './Estados.json';
import stacks from './Stacks.json';
import { FormControlUnstyled } from '@mui/base';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



const Form = () => {
    const [pais, setPais] = useState([]);
    const [linguagem, setLinguagem] = useState([]);
    const [estado, setEstado] = useState([]);
    const [stack, setStack] = useState([]);
    const [experience, setExperience] = useState("Até 1 ano");
    
    useEffect(() => {
        setPais(paises);
        setLinguagem(linguagens);
        setEstado(estados);
        setStack(stacks);
    }, []);
    const [currency, setCurrency] = useState();

    const handleFormatCurrency = (event) => {
        var v = event.target.value.replace(/\D/g,"");
        v = (v/100).toFixed(2) + "";
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        event.target.value = v === "0,00" ? "" : "R$ "+v;
    }
    const handleExperience = (e) => {
        if(e.target.value <= "1"){
        setExperience("Até "+e.target.value+" ano");
        }else if(e.target.value > "1" && e.target.value < "20"){
        setExperience(e.target.value+" anos");
        }else if(e.target.value >= "20"){
        setExperience(e.target.value+" anos ou +");
        }
    }
    return (
        <Card className='card' sx={{ width: 375 }}>
            <Typography variant='h5' className='title' color="text.secondary">
                PESQUISA DE SALÁRIO
            </Typography>
            <CardContent>
                <form>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="combo-box-demo"
                            options={stack}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Stack Tecnológico" />}
                        />
                    </FormControl>
                    <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gênero</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                    </RadioGroup>
                    </FormControl>
                    <Typography id="range-slider" color="text.secondary" gutterBottom>Tempo de Experiência ({experience})</Typography>
                    <Slider
                        label="Experiência"
                        aria-label="Experiência"
                        defaultValue={1}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={20}
                        onChange={(e)=>handleExperience(e)}
                    />
                    <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Senioridade</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Junior" control={<Radio />} label="Junior" />
                        <FormControlLabel value="Pleno" control={<Radio />} label="Pleno" />
                        <FormControlLabel value="Senior" control={<Radio />} label="Sênior" />
                    </RadioGroup>
                    </FormControl>                 
                    <TextField onKeyUp={(event)=>handleFormatCurrency(event)} className="input--form" id="outlined-basic" label="Salário" variant="outlined" />
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="combo-box-demo"
                            options={linguagem}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Linguagem principal" />}
                        />
                    </FormControl>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="combo-box-demo"
                            options={paises}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="País" />}
                        />
                    </FormControl>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="combo-box-demo"
                            options={estados}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Estado" />}
                        />
                    </FormControl>                   
                </form>
            </CardContent>
            <CardActions className='container--button'>
                <Button variant="contained">Enviar</Button>
            </CardActions>
        </Card>          
    );
}

export default Form;
