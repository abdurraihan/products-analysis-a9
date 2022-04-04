import React, { useEffect, useState } from 'react';

import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const MyLineChart = () => {

    const [data , setData] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setData(data));
    },[])

    
    
    return (
        <div >
           <LineChart width={800} height={500} data={data}>
               <Line dataKey='sell'> </Line>
               <Line dataKey='revenue'> </Line>
               <YAxis></YAxis>
               <XAxis dataKey='month'></XAxis>
               <Tooltip> </Tooltip>
               
                </LineChart>
        </div>
    );
};

export default MyLineChart;