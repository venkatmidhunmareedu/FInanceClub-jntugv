import React, { useEffect, useState } from "react";
import { redirect, Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useJwt } from "react-jwt";
import axios from "axios";

const Login = () => {
    const [hide, setHide] = useState(true);
    const location = useLocation();
    const [message, setMessage] = useState("");
    const [user_name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

    }, [user_name, password])
    const login = async () => {
        const params = {
            user_name: user_name,
            password: password
        }
        const response = await axios.get("http://localhost:5000/user/login", { params }).then((res) => res).catch((err) => {
            console.log(err);
        })
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("jwtToken", response.data.token);
            localStorage.setItem("verifyAuth" , true);
            toast.success("Login Successfull!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/");
            }, 1500)
        }
        else {
            toast.error("Check your credentials!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (

        <div>
            <div className="open-sans fw-bolder ">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="container d-flex align-items-center justify-content-center vh-100" >
                    <form className=" col-sm-5 col-lg-4 col-xl-4 p-4" >
                        <div className="text-center">
                            <Link to="/"><img src={"jntugv-footer.png"} alt="Your Image" style={{ width: "100px", cursor: "pointer" }} class="img-fluid" /></Link>
                        </div>
                        <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center ">GV<span className="color-1">PEOPLE LOGIN</span></p>

                        <div class="form-floating mb-3 open-sans fw-bolder text-secondary">
                            <input type="text" class="form-control open-sans fw-bolder" id="floatingInput" placeholder="roll number" value={user_name} onChange={(e) => setUsername(e.target.value)} />
                            <label for="floatingInput">User name</label>
                        </div>
                        <div class="input-group has-validation mb-3 open-sans fw-bolder text-secondary">
                            <div class="form-floating is-invalid">
                                <input type={`${hide ? "password" : "text"}`} class={`form-control fw-bolder open-sans`} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingInputGroup2" placeholder="Username" required autoComplete="off" />
                                <label for="floatingInputGroup2" >Password</label>
                            </div>
                            <span className="input-group-text bg-white"><i class={`bi bi-eye${hide ? "-slash" : ""} cursor-pointer`} onClick={(e) => { setHide((prev) => !prev) }}></i></span>
                        </div>
                        {/* <div className="d-flex row">
                            <div className="text-center col mb-3">
                                <a href="" className="fw-bold">Forget password?</a>
                            </div>
                        </div> */}
                        <div className="text-center">
                            <button class="btn btn-outline-primary fw-bolder" onClick={(e) => { e.preventDefault(); login(); }}>
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