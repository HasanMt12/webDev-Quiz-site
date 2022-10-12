import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


const Statistics = () => {
   const [charts, setCharts] = useState([]);
   useEffect( () => {
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data=> {
        const chartsLoaded =data.data.data;
        console.log(chartsLoaded);
        const chartData = chartsLoaded.map(chart=>{
            const name = chart.name;
            const totalQuiz = chart.total;
            const id = chart.id;
            const singleChart = {
                name: name,
                Quiz: totalQuiz,
                id: id
            }
            return singleChart
            
        })
        console.log(chartData);
        setCharts(chartData);
        });
   },[])

   
    return (
      <div >
        <h1 className='text-center fw-bold text-2xl underline'> Quiz analysis </h1>
      
      <ResponsiveContainer  width="100%" height={500}>
        <LineChart
          width={1000}
          height={500}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <Line type="monotone" dataKey="Quiz" stroke="#82ca9d" /> */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
         <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Quiz" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
     
    );
};

export default Statistics;