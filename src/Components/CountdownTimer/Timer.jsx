import React, { useEffect, useState } from 'react';
import "./Timer.css"
import ContentArea from '../Content/ContentArea';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Timer = () => {

    const [loop, setLoop] = useState(null)
    const [countdown, setCountdown] = useState(null)

    useEffect(() => {
        const interval = setInterval(
            () => {
                setLoop(prev => prev + 1)
                const now = new Date()
                const target = new Date(2023,7,6,0,0,0)
                const diff = target - now
                setCountdown((new Date(diff)))
            }, 1000
        )
        return () => {
            clearInterval(interval)
        }
    }, [loop])

    useEffect(() => {
        
    }, [])

    return (
        <div className='timer'>
            <div className="title">We're launching soon</div>
            <div className="timer-content">
                <div className="countdown-area"><ContentArea data={countdown ? countdown.getDate() : 0} label={"Days"} /></div>
                <div className="countdown-area"><ContentArea data={countdown ? countdown.getHours() : 0} label={"Hours"} /></div>
                <div className="countdown-area"><ContentArea data={countdown ? countdown.getMinutes() : 0} label={"Minutes"} /></div>
                <div className="countdown-area"><ContentArea data={countdown ? countdown.getSeconds() : 0} label={"seconds"} /></div>
            </div>
            <div className="socials">
                <div className="social-btn"><a href='https://github.com/RahulGoel2002'><GitHubIcon    style={{fontSize: "2rem"}} /></a></div>
                <div className="social-btn"><a href='https://www.linkedin.com/in/rahul-goel-815399229/'><LinkedInIcon  style={{fontSize: "2rem"}} /></a></div>
                <div className="social-btn"><a href='https://www.instagram.com/rgoel1729/'><InstagramIcon style={{fontSize: "2rem"}} /></a></div>
            </div>
        </div>
    );
}

export default Timer;
