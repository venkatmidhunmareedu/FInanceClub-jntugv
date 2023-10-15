import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTimer } from 'react-timer-hook'

const PleaseLogin = ({ expiryTimestamp }) => {
    const navigate = useNavigate()
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
    } = useTimer({ expiryTimestamp, onExpire: () => navigate("/login") })

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 vw-100 open-sans'>
            <div className="card p-3">
                <div className="modal-dialog p-3">
                    <div className="modal-content p-3">
                        <div className="modal-header m-2">
                            <h5 className="modal-title fw-bolder">Please Login!</h5>
                        </div>
                        <div className="modal-body m-2">
                            <p>Redirecting to login page in {seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PleaseLogin