import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios"
import Loader from "../loaders/Loader";
import { TypeAnimation } from 'react-type-animation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Session from "./Session";


const Home = () => {
    const [user, setUser] = useState({});
    const [blogs, setblogs] = useState([])
    const [isLoaded, setisLoaded] = useState(false);
    const [sessionData, setSession] = useState({});
    const [siteLoading, setSiteLoading] = useState(true);

    const retriveSession = async () => {
        const params = {
            token: localStorage.getItem("jwtToken")
        }
        const Response = await axios.get(`${process.env.REACT_APP_URL}/user/sessionAuth`, { params });
        setSession(Response.data);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setisLoaded(true)
                const Response = await axios.get(`${process.env.REACT_APP_URL}/getall`);
                setblogs(Response.data.data);
                setisLoaded(false)
                retriveSession();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    window.addEventListener('load', (event) => {
        setSiteLoading(false);
    });
    const navigate = useNavigate();
    return (
        <>
            {(sessionData.expired && localStorage.getItem("verifyAuth") !== null) && <Session />}
            <div className={(sessionData.expired && localStorage.getItem("verifyAuth") !== null) ? `d-none` : ``}>
                <Navbar current="Home" />
                <div className="container">
                    <div className="row ">
                        <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center mb-5">FINANCE CLUB <span className="color-1">PEOPLE BLOGS</span></p>
                        {/* <div className="col-sm-3 col-md-3 col-lg-3 mb-4">
                            <p className="babus fs-4 text-center fw-bolder lt-sp-1 color-1">Filters</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button open-sans fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Category
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show open-sans fw-bolder" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <label class="form-check-label">
                                                    Artificial intelligence and Machine learning
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <label class="form-check-label">
                                                    Web development
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <label class="form-check-label">
                                                    Block Chain
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button class="btn btn-outline-primary fw-bolder open-sans mb-2 px-4"><i class="bi bi-filter"></i>Filter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12">
                            {/* <div class="form-floating mb-3">
                                <input type="email" class="form-control open-sans fw-bolder" id="floatingInput" placeholder="name@example.com" autoComplete="off" />
                                <label for="floatingInput" className="open-sans fw-bolder text-secondary"> <i className="bi bi-search"></i> <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Search anything here...',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Savings strategies',
                                        1000,
                                        'Investment tips',
                                        1000,
                                        'Finance career advice',
                                        1000,
                                        'Online finance resources',
                                        1000,
                                        'Investment opportunities',
                                        1500
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '16px', display: 'inline-block' }}
                                    repeat={Infinity}
                                /></label>
                            </div> */}
                            <div className="container-fluid">
                                {
                                    isLoaded ? <Loader /> : <div className="row d-flex justify-content-start">
                                        {blogs && blogs.map((blog) => {
                                            return <BlogCard title={blog.title} genre={blog.genre} content={blog.content.slice(0, 90) + "...  "} user={blog.user_id} createdAt={blog.createdAt} updatedAt={blog.updatedAt} blogid={blog._id} />
                                        })}
                                    {!blogs && "No blogs here"}
                                    </div>
                                }
                            </div>
                        </div>
                    </div><br /><br />
                    {/* <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">&laquo; </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">&raquo;</a>
                            </li>
                        </ul>
                    </nav> */}
                </div>

                <Footer />

            </div>
        </>
    )
}


export default Home