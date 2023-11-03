import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Navbar(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentNav, setNav] = useState(props.current)
    const [token, setToken] = useState("");
    const [isAuth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        const token = setToken(localStorage.getItem("jwtToken"));
        const params = {
            token: token
        }
        try {
            const response = axios.get(process.env.REACT_APP_URL + "/user/verifyAuth", { params })
            setAuth(response.data.auth);
        }
        catch (err) {
            console.log();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth, currentNav, isAuth]);

    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">

                <div className="container" >

                    <a className="navbar-brand open-sans fw-bolder text-lg-spacing lt-sp-1 text-center" href="/" >
                        {/* FINANCE CLUB <br /><span className="color-1">JNTUGV</span> */}

                        <div className="container">
                            <span className=''><img src={window.innerWidth > 400 ? process.env.PUBLIC_URL + "/jntugv-footer.png" : process.env.PUBLIC_URL + "/jntugv-footer.png"} alt="Your Image" style={window.innerWidth > 400 ? { width: "70px" } : { width: "70px" }} className="img-fluid" /></span>
                            {window.innerWidth > 376 && <span className='open-sans fs-6 fw-bolder'> FINANCE CLUB <span style={{ color: "#7d2ae8" }}>GV</span></span>}
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-sm-2 ms-auto mb-lg-0 open-sans dark fs-6">
                            <li className="nav-item col">
                                <a className={`${currentNav === "main page" && "link-active"}  nav-link  mx-4`} aria-current="page" href="/"  >Home</a>
                            </li>
                            <li className="nav-item col">
                                <a className={`${currentNav === "Home" && "link-active"}  nav-link  mx-4`} aria-current="page" href="/home"  >Blogs</a>
                            </li>
                            <li className="nav-item col">
                                <a className={`${currentNav === "Events" && "link-active"}  nav-link mx-4`} aria-current="page" href="/events"  >Events</a>
                            </li>
                            <li className="nav-item col">
                                <a className={`${currentNav === "Games" && "link-active"}  nav-link mx-4`} aria-current="page" href="/games" >Games</a>
                            </li>
                            {
                                !localStorage.getItem("verifyAuth") === true ? <li className="nav-item">
                                    <Link className={`${currentNav === "login" && "link-active"}  nav-link mx-4`} aria-current="page" to="/login"  >Login</Link>
                                </li> :
                                    <li className="nav-item">
                                        <Link className={`nav-link mx-4`} aria-current="page" onClick={
                                            (e) => {
                                                e.preventDefault();
                                                localStorage.removeItem("jwtToken");
                                                localStorage.removeItem("verifyAuth", false);
                                                navigate("/login");
                                            }

                                        } >Log out</Link>
                                    </li>
                            }
                            {
                                localStorage.getItem("verifyAuth") ? <li className="nav-item">
                                    <Link className={`${currentNav === "Profile" && "link-active"}  nav-link mx-4`} aria-current="page" to="/profile"  >Profile</Link>
                                </li> : ""
                            }
                        </ul>
                        <button className="button ms-auto mb-sm-1 p-3 open-sans fw-bold  shadow" onClick={(e) => {
                            e.preventDefault();
                            if (!localStorage.getItem("verifyAuth")) {
                                toast.info("Please Login!", {
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
                            else {
                                navigate("/addBlog")
                            }
                        }}>
                            Blog Now
                        </button>

                    </div>

                </div>
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
            </nav>
            <br /><br /><br /><br /><br /><br />
        </div >
    );
}

