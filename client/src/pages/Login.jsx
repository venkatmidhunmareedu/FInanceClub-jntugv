import React from "react";
import { redirect, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div>
            <div className="open-sans fw-bolder ">
                <div className="container d-flex align-items-center justify-content-center vh-100" >
                    <form className=" col-sm-5 col-lg-4 col-xl-4 p-4" >
                        <div className="text-center">
                            <Link to="/"><img src={"jntugv-footer.png"} alt="Your Image" style={{ width: "100px", cursor: "pointer" }} class="img-fluid" /></Link>
                        </div>
                        <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center ">GV<span className="color-1">PEOPLE LOGIN</span></p>

                        <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                            <input type="text" class="form-control text-uppercase open-sans fw-bolder" id="floatingInput" placeholder="roll number" />
                            <label for="floatingInput">Roll number</label>
                        </div>
                        <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                            <input type="password" class="form-control" id="floatingInput" placeholder="roll number" />
                            <label for="floatingInput">Password</label>
                        </div>
                        <div className="d-flex row">
                            <div className="col mb-3 form-check">
                                <a href="/register" className="fw-bold">Register here!</a>
                            </div>
                            <div className="text-end col">
                                <a href="" className="fw-bold">Forget password?</a>
                            </div>
                        </div>
                        <div className="text-center">
                            <button class="btn btn-outline-primary fw-bolder" onClick={(e) => { e.preventDefault() }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default Login;