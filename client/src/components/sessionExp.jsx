import React from 'react'
import { useNavigate } from 'react-router-dom'
const sessionExp = () => {
    const navigate = () => {
        useNavigate("/")
    }
    return (
        <div>
            <div className="modal fade open-sans" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <p className="modal-title fs-5" id="staticBackdropLabel">Session Expired</p>
                        </div>
                        <div className="modal-body">
                            The session duration has ended. Please login again to continue!
                        </div>
                        <div className="modal-footer text-center d-flex justify-content-center align-items-center ">
                            <button type="button" className="btn btn-outline-primary btn-sm open-sans fw-bolder" onClick={(e) => {
                                e.preventDefault()
                                navigate();
                            }}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sessionExp;