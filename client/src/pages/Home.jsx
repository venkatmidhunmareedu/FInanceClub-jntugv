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
                const Response = await axios.get('http://localhost:5000/getall');
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
                        <span className="text-start">
                            <i class="fa-solid fa-filter"></i>
                        </span>
                        <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center">GV<span className="color-1">PEOPLE BLOGS</span></p>
                        <div className="row">
                            <div className="mb-4">
                                <div className="row d-flex justify-content-center">
                                    <HorizontalScrollbar>
                                        {blogs.map((blog) => {
                                            return <span class="btn open-sans badge bg-secondary text-white mx-1 mt-1">Web development</span>
                                        })}
                                    </HorizontalScrollbar>
                                </div>
                            </div>
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