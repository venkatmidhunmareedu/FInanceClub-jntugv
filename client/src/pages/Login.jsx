import React from "react";
import { redirect , Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100" >
            <form className="card col-sm-5 col-lg-4 col-xl-4 p-4" >
                <div className="text-center">
                    <Link to="/"><img src={"jntugv-footer.png"} alt="Your Image" style={{ width: "100px", cursor: "pointer" }}  class="img-fluid" /></Link>
                </div>
                <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center ">GV<span className="color-1">PEOPLE LOGIN</span></p>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label open-sans fw-bolder">Roll Number</label>
                    <input type="email" className="form-control open-sans lt-sp-1 text-uppercase fw-bold" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="**VV******" autoFocus autoComplete="off" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label open-sans fw-bolder">Password</label>
                    <input type="password" className="form-control open-sans lt-sp-1" id="exampleInputPassword1" />
                </div>
                <div className="d-flex row">
                    <div className="col mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label open-sans " for="exampleCheck1">Remember me</label>
                    </div>
                    <div className="text-end col">
                        <a href="" className="fw-bold">Forget password?</a>
                    </div>
                </div>
                <div className="text-center">
                    <button class="common-btn text-uppercase" onClick={(e) => { e.preventDefault() }}>
                        Submit
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Login;