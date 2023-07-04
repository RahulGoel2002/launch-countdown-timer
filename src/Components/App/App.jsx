import React from 'react';
import "./App.css"
import stars from "../../assets/bg-stars.svg"
import hills from "../../assets/pattern-hills.svg"
import Timer from '../CountdownTimer/Timer';

const App = () => {
    return (
        <div className='App'>
            <img className='bg-stars' src={stars} alt="bg-stars" />
            <img className='bg-hills' src={hills} alt="bg-hills" />
            <div className="content-container">
                <Timer />
            </div>
        </div>
    );
}

export default App;
