import React , {useState} from "react";
import { redirect, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
    const [hide, setHide] = useState(true);
    const [password, setPassword] = useState("")
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
                            <input type="text" class="form-control open-sans fw-bolder" id="floatingInput" placeholder="roll number" />
                            <label for="floatingInput">User name</label>
                        </div>
                        <div class="input-group has-validation mb-3 open-sans fw-bolder text-secondary">
                            <div class="form-floating is-invalid">
                                <input type={`${hide ? "password" : "text"}`} class={`form-control fw-bolder open-sans`} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingInputGroup2" placeholder="Username" required autoComplete="off" />
                                <label for="floatingInputGroup2" >Password</label>
                            </div>
                            <span className="input-group-text bg-white"><i class={`bi bi-eye${hide ? "-slash" : ""} cursor-pointer`} onClick={(e) => { setHide((prev) => !prev) }}></i></span>
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