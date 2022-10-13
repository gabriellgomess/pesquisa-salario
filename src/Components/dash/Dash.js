import React, {useState, useEffect} from "react";
import "./Dash.css"
import Total from "./cards/Total";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from "@mui/material/Divider";


const Dash = () => {
    const [filterGenero, setFilterGenero] = useState();
    useEffect(() => {
        console.log(filterGenero);
    }, [filterGenero]);
    return (
        <div className="container--dash">
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gênero</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >   
                <FormControlLabel onChange={(e)=>setFilterGenero(e.target.value)} value="Todos" control={<Radio />} label="Todos" />
                <FormControlLabel onChange={(e)=>setFilterGenero(e.target.value)} value="Feminino" control={<Radio />} label="Feminino" />
                <FormControlLabel onChange={(e)=>setFilterGenero(e.target.value)} value="Masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel onChange={(e)=>setFilterGenero(e.target.value)} value="Outros" control={<Radio />} label="Outros" />
                
            </RadioGroup>            
            </FormControl>
            <Divider />
            <Total genero = {filterGenero} />
        </div>
    );
    }

export default Dash;