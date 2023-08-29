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
        <div className='container d-flex justify-content-center align-items-center vh-100 vw-100 open-sans'>
            <div className="card p-3">
                <div className="modal-dialog p-3">
                    <div className="modal-content p-3">
                        <div className="modal-header m-2">
                            <h5 className="modal-title fw-bolder">Please Login!</h5>
                        </div>
                        <div className="modal-body m-2">
                            <p>Redrecting to login page in {seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
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