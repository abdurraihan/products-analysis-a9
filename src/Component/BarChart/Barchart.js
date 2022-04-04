import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Barchart = () => {

    const [data , setData] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setData(data));
    },[])

    return (
        <div>
             <BarChart className='barChart' width={800} height={400} data={data}>
        <Bar dataKey="sell" fill="#8884d8" />
        <XAxis dataKey={'month'}></XAxis>
        <Tooltip></Tooltip>
        <YAxis></YAxis>
      </BarChart>
        </div>
    );
};

export default Barchart;