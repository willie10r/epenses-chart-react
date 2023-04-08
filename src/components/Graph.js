import React from 'react';
import { ReactDOM } from 'react-dom';
import '../App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const Graph = () => {
    return (
        <main className='con-2'>
            <section className='graph'>
                <h2 className='gr-title'>
                    Spending - Last 7 days
                </h2>
            </section>
            <BarChart width={350} height={400} data={data}>
                <XAxis dataKey="day" stroke="#555" />
                <Tooltip label={'amount'} />
                <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" radius={[5, 5, 0, 0]} cursor={{ fill: 'hsl(186, 34%, 60%)' }} />
            </BarChart>
            <section className='months'>

                <div>
                    <h3 className='total-month'>Total this month</h3>
                    <a className='total'>$478.33</a>
                </div>
                <div className='apr-area'>
                    <h3 className='apr'>+2.4%</h3>
                    <a className='apr-month'>from last month</a>
                </div>
            </section>
        </main>
    );
}

export default Graph;
