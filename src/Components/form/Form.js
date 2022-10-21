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
import paises from '../json/FormPaises.json';
import linguagens from '../json/Language.json';
import estados from '../json/Estados.json';
import stacks from '../json/Stacks.json';
import orientacaoSexual from '../json/OrientacaoSexual.json';
import frameworks from '../json/Frameworks.json';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import { useForm } from "react-hook-form";
import axios from 'axios';
import MyContext from '../../contexts/myContext';



const Form = () => {
    const [pais, setPais] = useState([]);
    const [linguagem, setLinguagem] = useState([]);
    const [estado, setEstado] = useState([]);
    const [stack, setStack] = useState([]);
    const [orientacao, setOrientacao] = useState([]);
    const [framework, setFramework] = useState([]);
    const [experience, setExperience] = useState("Até 1 ano");
    const [paisSel, setPaisSel] = useState();

    const { testeState, setTesteState } = React.useContext(MyContext);
    
/* A hook that is called when the component is mounted. */
    useEffect(() => {
        setPais(paises);
        setLinguagem(linguagens);
        setEstado(estados);
        setStack(stacks);
        setOrientacao(orientacaoSexual);
        setFramework(frameworks);
        setPaisSel();
        
    }, []);
    const [currency, setCurrency] = useState();

    const handleFormatCurrency = (event) => {
        var valor = event.target.value.replace(/\D/g,"");
        valor = (valor/100).toFixed(2) + "";
        valor = valor.replace(".", ",");
        valor = valor.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        valor = valor.replace(/(\d)(\d{3}),/g, "$1.$2,");
        event.target.value = valor === "0,00" ? "" : "R$ "+valor;
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

/* A function that is called when the form is submitted. */
    const { register, handleSubmit, reset,  errors } = useForm();
    const onSubmit = data => {
        
        axios.post("https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=1", data)
        .then(res => {
            // document.getElementsByClassName('form')[0].reset();          
            console.log(res.data);
            
        })
        reset();
    };

    return (
        <Card className='card' sx={{ width: 375 }}>
            <CardContent>
            <Typography variant='h5' className='title' color="text.secondary">
                    PESQUISA DE PERFIL
            </Typography>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Divider className='divider' />
                    <Typography variant='span' className='title' color="#0288d1">
                        Pessoas
                    </Typography>
                    <Divider className='divider' />
                    <TextField className='input--form--min' id="idade" type="number" label="Idade" variant="outlined" name="idade" {...register("idade")} required />
                    <FormControl className='formControl'>
                    <FormLabel id="label-genero">Gênero</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="genero"
                        name="genero"
                    >
                        <FormControlLabel name="genero" {...register('genero')} value="Masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel name="genero" {...register('genero')} value="Feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel name="genero" {...register('genero')} value="Nao Binario" control={<Radio />} label="Não Binário" />
                    </RadioGroup>
                    </FormControl>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="orientacao"
                            name="orientacao"
                            options={orientacao}                            
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  required {...register("orientacao")} {...params} label="Orientação Sexual" />}
                        />
                    </FormControl>
                    <Divider className='divider' />
                    <Typography variant='span' className='title' color="#0288d1">
                        Localização
                    </Typography>
                    <Divider className='divider' />
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="pais"
                            name="pais"                            
                            options={paises}
                            sx={{ width: 300 }}
                            onChange={(event, value) => setPaisSel(value['label'])}
                            renderInput={(params) => <TextField  required {...register('pais')} {...params} label="País" />}
                        />
                    </FormControl>
                    {paisSel === "Brasil" ?
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="estado"
                            name="estado"                            
                            options={estados}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  required {...register('estado')} {...params} label="Estado" />}
                        />
                    </FormControl>
                    : null}
                    <Divider className='divider' />
                    <Typography variant='span' className='title' color="#0288d1">
                        Tecnologias
                    </Typography>
                    <Divider className='divider' />
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="stack"
                            name="stack"
                            options={stack}                            
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  required {...register("stack")} {...params} label="Stack Tecnológico" />}
                        />
                    </FormControl>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="linguagem-principal"
                            name="linguagem"                            
                            options={linguagem}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  required {...register('linguagem')} {...params} label="Linguagem principal" />}
                        />
                    </FormControl>
                    <FormControl fullWidth>                    
                        <Autocomplete
                            className="input--form"
                            id="framework-principal"
                            name="framework"                            
                            options={framework}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  required {...register('framework')} {...params} label="Framework/Biblioteca principal" />}
                        />
                    </FormControl>
                    <Divider className='divider' />
                    <Typography variant='span' className='title' color="#0288d1">
                        Experiência
                    </Typography>
                    <Divider className='divider' />
                    <Typography id="range-slider" color="text.secondary" gutterBottom>Experiência ({experience})</Typography>
                    <Slider
                        label="Experiência"
                        aria-label="Experiência"
                        name="experiencia"
                        defaultValue={1}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={20}
                        {...register('experiencia')}
                        onChange={(e)=>handleExperience(e)}
                    />
                    <FormControl>
                    <FormLabel id="label--serioridade">Senioridade</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="senioridade"
                        name="senioridade"
                    >
                        <FormControlLabel name='senioridade' {...register('senioridade')} value="Estagio" control={<Radio />} label="Estágio" />
                        <FormControlLabel name='senioridade' {...register('senioridade')} value="Junior" control={<Radio />} label="Junior" />
                        <FormControlLabel name='senioridade' {...register('senioridade')} value="Pleno" control={<Radio />} label="Pleno" />
                        <FormControlLabel name='senioridade' {...register('senioridade')} value="Senior" control={<Radio />} label="Sênior" />
                    </RadioGroup>
                    </FormControl>
                    <Divider className='divider' />
                    <Typography variant='span' className='title' color="#0288d1">
                        Remuneração
                    </Typography>
                    <Divider className='divider' />
                    <TextField onKeyUp={(event)=>handleFormatCurrency(event)} name="salario" {...register("salario")} className="input--form" id="outlined-basic" label="Salário" variant="outlined"  required /> 
                    <CardActions className='container--button'>
                        <Button type="submit" variant="contained">Enviar</Button>
                    </CardActions>                               
                </form>
            </CardContent>
            
        </Card>          
    );
}

export default Form;
