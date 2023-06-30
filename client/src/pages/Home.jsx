import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

const Home = () => {
    return (
        <>
            <Navbar />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row text-center">
                    <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1">GVPEOPLE BLOGS</p>
                    <div className="text-center row link-active ">
                        <div className="text-center mb-4">
                            <div className="col-2 ">
                                <Filter />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center mx-auto">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Home