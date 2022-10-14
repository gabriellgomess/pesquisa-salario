import React, {useState, useEffect } from 'react';
import axios from 'axios';
import collect from 'collect.js';
import { BarChart, Bar, XAxis, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Chart.css";

const Grafico = () => {
    const [totalTech, setTotalTech] = useState([]);
    useEffect(() => {
        axios.get(`https://gabriellgomess.com/pesquisa/media_tech.php`)
        .then(res => {       
            setTotalTech(res.data);            
        })
    }, [totalTech]);

    const countLang = collect(totalTech).groupBy('linguagem').map((value, key) => {
        return {
            linguagem: key,
            total: value.count()
        }
    }).toArray();
    
    
    const data = [];
    countLang.forEach((item) => {
        data.push({name: item.linguagem, quantidade: item.total});
    });


  return (
    <Card className="wrapper--grafico" sx={{ minWidth: 200}}>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis tickMargin={50} interval={0} height={100} angle={90} dataKey="name" />
                {/* <YAxis /> */}
                {/* <Tooltip wrapperStyle={{backgroundColor: "#121212", color:"rgba(255, 255, 255, 0.7)"}} /> */}
                <Legend />
                <Bar dataKey="quantidade" fill="#4fc3f7" />  
            </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
    
  );
}

export default Grafico;
