import React from 'react';
import "./ContentArea.css"

const ContentArea = ({data, label}) => {
    return (
        <div className='contact-area'>
            <div className="text">
                <div className="number">{data}</div>
                <div className="overlay"></div>
            </div>
            <div className="label">{label}</div>
            <div className="dot leftdot"></div>
            <div className="dot rightdot"></div>
        </div>
    );
}

export default ContentArea;
