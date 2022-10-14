import React, {useState, useEffect} from "react";
import "./Dash.css"
import Total from "./cards/Total";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from "@mui/material/Divider";
import Grafico from "../chart/Chart";
import Mens from "./cards/Mens";
import Womans from "./cards/Womans";


const Dash = () => {

    return (
        <div className="container--dash">
            <Total />
            <div className="container--genre">
                <Womans /> 
                <Mens />                
            </div>
            
            <Grafico className="grafico" />
        </div>
    );
    }

export default Dash;