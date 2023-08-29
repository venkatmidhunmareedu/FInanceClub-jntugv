import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useTimer } from 'react-timer-hook';



const Mytimer = ({ expiryTimestamp }) => {
    const navigate = useNavigate();
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => navigate("/login") });

    return (
        <div>
            Please login..redirecting in {seconds}
        </div>
    )
}


const BlogEdit = () => {

    if (localStorage.getItem("verifyAuth")) {
        return (
            <div>
                <Navbar />
                Blogedit
                <Footer />
            </div>
        )
    }
    else {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 4);
        return (
            <Mytimer expiryTimestamp={time} />
        )
    }

}

export default BlogEdit