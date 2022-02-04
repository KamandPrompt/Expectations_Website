import React, { PureComponent } from 'react';
import { PieChart,BarChart,Bar,XAxis,YAxis,CartesianGrid, Pie, Legend, Tooltip, ResponsiveContainer,Sector, Cell } from 'recharts';
import './Placements.css';
import Navbar from './Navbar'
import { Title } from 'chart.js';

const data01 = [
    { name: 'Group A', value: 400, fill:'#0088FE'},
    { name: 'Group B', value: 300, fill:'#00C49F'},
    { name: 'Group C', value: 300, fill:'#FFBB28'},
    { name: 'Group D', value: 200, fill:'#FF8042'},
    { name: 'Group E', value: 278, fill:'#AFCA54'},
    { name: 'Group F', value: 189, fill:'#CE65DF'},
];
const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
]; 
const data03 = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#AFCA54','#CE65DF'];

export const Placements = () => {  
    return (
        <>
        <Navbar />
        <div style={{ textAlign: "center",fontSize:24 }}>
            <h1>Placements</h1>
        <p className='para'>Placement results are a customary way to gauge the potential of an institute, and unfortunately, sometimes the only one. We have analyzed different statistics from this year's placement season to help you get an idea of how things turn out and to put an end to all the myths. The analysis brings out key insights from the number of companies that visit the campus to the multiples profiles that are offered by them, the median CTC and the most-liked placement location.<br></br>
        </p>
        <div className='Pie'>
        <h3 className='H3'>Placed</h3>
        <PieChart width={1000} height={400} margin={{top: 0, right: 10, left: 250, bottom: 0}}>
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#fff"
        label
        >
        </Pie>
        <Tooltip/>
        <Legend/>
        </PieChart>
        <PieChart width={1000} height={400} margin={{top: 0, right: 10, left:-75, bottom: 0}} >            
        <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
        >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie> 
        <Tooltip/>           
        </PieChart>
        </div>
        <br></br>
        </div>
        <div className='bar'>
        <BarChart
        width={1000}
        height={500}
        data={data03}
        margin={{top: 20,right: 30,left: 250,bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
        </div>
    </>
    )
}

export default Placements;