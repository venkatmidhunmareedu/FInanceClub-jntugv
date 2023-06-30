import React from 'react';


export default function Navbar() {
    return (
        <div >
            <br />
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top mt-4">
                <div className="container-fluid mx-5" >

                    <a class="navbar-brand" href="#" className='nav-img'><div class="container">
                        <img src="jntugv.png" alt="Your Image" style={{width : "250px"}} class="img-fluid d-none d-sm-block" />
                    </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 open-sans dark fs-6 text-uppercase">
                            <li className="nav-item">
                                <a className="nav-link link-active mx-4" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-4" aria-current="page" href="#">Popular today</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-4 " aria-current="page" href="#">Academics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-4" aria-current="page" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-4" aria-current="page" href="#">News</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <div class="input-container">
                                <input type="text" name="text" class="input open-sans shadow fw-bold" placeholder="SEARCH..." autoComplete='off' />
                                <span class="icon">
                                    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#7d2ae8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#7d2ae8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#7d2ae8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#7d2ae8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </span>
                            </div>

                        </form>
                        <button class="button m-3 p-3 open-sans fw-bold text-uppercase shadow">
                            Blog Now
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    );
}

