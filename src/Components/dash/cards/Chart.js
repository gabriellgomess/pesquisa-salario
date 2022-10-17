import React, {useState, useEffect } from 'react';
import axios from 'axios';
import collect from 'collect.js';
import { BarChart, Bar, XAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./cards.css";

const Grafico = (props) => {
    const [totalTech, setTotalTech] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/media_${props.tipo}.php`)
        .then(res => {       
            setTotalTech(res.data);            
        })
    }, [totalTech]);

    const countLang = collect(totalTech).groupBy(props.tipo).map((value, key) => {
        return {
            tecnologia: key,
            total: value.count()
        }
    }).toArray();
    
    
    const data = [];
    countLang.forEach((item) => {
        data.push({name: item.tecnologia, quantidade: item.total});
    });

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };

  return (
    <Card className="wrapper--grafico" sx={{ minWidth: 200}}>
        <Typography sx={{margin: 2}} variant="overline" component="div">
            {props.tipo}
        </Typography>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis tickMargin={50} interval={0} height={100} angle={90} dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip cursor={{fill: 'transparent'}} wrapperStyle={{backgroundColor: "#121212", color:"rgba(255, 255, 255, 0.7)"}} content={<CustomTooltip />} />
                {/* <Legend /> */}
                <Bar dataKey="quantidade" fill="#4fc3f7" />  
            </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
    
  );
}

export default Grafico;
