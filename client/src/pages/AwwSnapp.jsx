import React from 'react'
import { useNavigate } from 'react-router-dom'

const AwwSnapp = () => {
    const navigate = useNavigate();
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 vw-100 open-sans'>
            <div className="card p-3">
                <div className="modal-dialog p-3">
                    <div className="modal-content p-3">
                        <div className="modal-header m-2">
                            <h5 className="modal-title fw-bolder">Aww Snapp!<i class="mx-2 bi bi-emoji-dizzy"></i></h5>
                        </div>
                        <div className="modal-body m-2">
                            <p>Something went Wrong! If the error persists, try again after sometime.</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-primary btn-sm m-1" onClick={() => navigate("/login")} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwwSnapp