import React from "react";
import { redirect, Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="open-sans fw-bolder ">
            <div className="container d-flex align-items-center justify-content-center vh-100" >
                <form className=" col-sm-5 col-lg-4 col-xl-4 p-4" >
                    <div className="text-center">
                        <Link to="/"><img src={"jntugv-footer.png"} alt="Your Image" style={{ width: "100px", cursor: "pointer" }} class="img-fluid" /></Link>
                    </div>
                    <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center ">FINANCE CLUB <br /><span className="color-1"> REGISTRATION</span></p>

                    <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                        <input type="text" class="form-control" id="floatingInput" placeholder="roll number" />
                        <label for="floatingInput">Roll number</label>
                    </div>
                    <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                        <input type="password" class="form-control" id="floatingInput" placeholder="password" />
                        <label for="floatingInput">Password</label>
                    </div>
                    <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                        <input type="password" class="form-control" id="floatingInput" placeholder="confirm password" />
                        <label for="floatingInput">Confirm Password</label>
                    </div>
                    <div className="d-flex row ">
                        <div className="text-center col mb-2">
                            Already have an account ? <a href="/login" className="fw-bold">Login</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <button class="btn btn-outline-primary fw-bolder" onClick={(e) => { e.preventDefault() }}>
                            Register
                        </button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Register;