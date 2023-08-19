import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';

export default function Navbar(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navs = ['Home', 'Notifications', 'Events', 'News', 'Login', 'Profile'];
    const [currentNav, setNav] = useState(props.current)
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        console.log("hitted")

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth, currentNav]);


    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">

                <div className="container-fluid mx-5" >
                    <Fade>

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
                                    <a className={`${currentNav == "Home" && "link-active"}  nav-link mx-4`} aria-current="page" href="/"  >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${currentNav == "Notifications" && "link-active"}  nav-link mx-4`} aria-current="page" href="/notifications"   >Notifications</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${currentNav == "Events" && "link-active"}  nav-link mx-4`} aria-current="page" href="/events"  >Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${currentNav == "News" && "link-active"}  nav-link mx-4`} aria-current="page" href="/news" >News</a>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${currentNav == "Login" && "link-active"}  nav-link mx-4`} aria-current="page" to="/login"  >Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${currentNav == "Profile" && "link-active"}  nav-link mx-4`} aria-current="page" to="/profile"  >Profile</Link>
                                </li>

                            </ul>
                            <button class="button mb-sm-1 p-3 open-sans fw-bold  shadow">
                                Blog Now
                            </button>

                        </div>
                    </Fade>
                </div>

            </nav>
            <br /><br /><br /><br /><br /><br />

        </div >
    );
}

