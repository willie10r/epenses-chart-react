import React from 'react';
import { ReactDOM } from 'react-dom';
import '../App.css';

const Graph = () => {
    return (
        <main>
            <section className='graph'>
                <h2 className='gr-title'>
                    Spending - Last 7 days
                </h2>
                <ul>
                    <li>mon</li>
                    <li>tue</li>
                    <li>wed</li>
                    <li>thu</li>
                    <li>fri</li>
                    <li>sat</li>
                    <li>sun</li>
                </ul>
            </section>
            <section className='months'>
                <div className='months-totle'>
                    <h3>Totle this month</h3>
                    <a>$478.33</a>
                </div>
                <div className='apr'>
                    <h3>+2.4%</h3>
                    <a>from last month</a>
                </div>
            </section>
        </main>
    );
}

export default Graph;
