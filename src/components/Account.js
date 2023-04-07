import React from 'react';
import { ReactDOM } from 'react-dom';
import '../App.css';

const Account = () => {
    return (
        <header className='con-1'>
            <div className='ch-1'>
                <h3 className='bal-title'>My balance</h3>
                <a className='bal-money'>$921.48</a>
            </div>
            <div className='ch-2'>
                <p className='dot-1'></p>
                <p className='dot-2'></p>
            </div>
        </header>
    );
}

export default Account;
