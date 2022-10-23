import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import GroupIcon from '@mui/icons-material/Group';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Tooltip } from '@mui/material';


const Contador = (props) => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=11`)
        .then(res => {       
            setTotal(res.data);
        })
    }, [total]);
    
   
    return (
        <Stack spacing={2} direction="row">
            <Tooltip title="Total de Participantes" arrow>      
            <Badge sx={{marginTop: '10px'}} badgeContent={total} max={999} color="success">
                <GroupIcon color="action" />
            </Badge>
            </Tooltip>
        </Stack>
    );
};

export default Contador;
