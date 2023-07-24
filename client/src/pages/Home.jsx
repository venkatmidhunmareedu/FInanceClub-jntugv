import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import axios from "axios"
import PageLoader from "../loaders/PageLoader";
import Loader from "../loaders/Loader";
import HorizontalScrollbar from "../components/HorizontalScrollbar";


const Home = () => {
    const [blogs, setblogs] = useState([])
    const [isLoaded, setisLoaded] = useState(false)

    useEffect(() => {
        setisLoaded(false)
        const fetchData = async () => {

            try {
                setisLoaded(false)
                const Response = await axios.get(`${process.env.REACT_APP_URL}/getall`);
                // const Response = await axios.get(`https://e6fe-2409-40f0-1038-ecc0-4070-c81b-9949-b150.ngrok-free.app/getall`);
                console.log(process.env.REACT_APP_URL)
                console.log(Response.data.data)
                setblogs(Response.data.data);
                setisLoaded(true)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {isLoaded ? "" : <PageLoader />}
            <div className={isLoaded ? `` : `d-none`}>
                <Navbar />
                <div className="container">
                    <div className="row ">
                        <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center mb-5">GV<span className="color-1">PEOPLE BLOGS</span></p>
                        <div className="col-sm-3 col-md-3 col-lg-3 mb-4">
                            <p className="babus fs-4 text-center fw-bolder lt-sp-1 color-1">Filters</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button open-sans fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Category
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show open-sans " data-bs-parent="#accordionExample">
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
                                            <button class="filter-btn open-sans fw-bold"><i class="bi bi-filter"></i>Filter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">


                            <div className="container-fluid">
                                <div className="row d-flex justify-content-start">
                                    {blogs.map((blog) => {
                                        return <BlogCard title={blog.title} genre={blog.genre} content={blog.content.slice(0, 90) + "..."} user={blog.user_id} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}


export default Home