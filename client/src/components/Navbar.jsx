import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        console.log("hitted")

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
                <div className="container-fluid mx-5" >

                    <a class="navbar-brand open-sans fw-bolder text-lg-spacing lt-sp-1 text-center" href="/" >
                        {/* FINANCE CLUB <br /><span className="color-1">JNTUGV</span> */}

                        <div class="container">
                            <img src={window.innerWidth > 400 ? "jntugv.png" : "jntugv-footer.png"} alt="Your Image" style={window.innerWidth > 400 ? { width: "250px" } : { width: "80px" }} class="img-fluid" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-sm-2 mb-lg-0 open-sans dark fs-6 ">
                            <li className="nav-item">
                                <a className="nav-link mx-4" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-4 " aria-current="page" href="#">Notifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-4" aria-current="page" href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-4" aria-current="page" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  mx-4" aria-current="page" to="/login">Login</Link>
                            </li>

                        </ul>
                        <button class="button mb-sm-1 p-3 open-sans fw-bold  shadow">
                            Blog Now
                        </button>

                    </div>
                </div>
            </nav>
            <br /><br /><br /><br /><br /><br />

        </div>
    );
}

