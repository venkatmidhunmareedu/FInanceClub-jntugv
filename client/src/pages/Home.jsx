import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card";

const Home = () => {
    return (
        <>
            <Navbar />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="row text-center">
                <br /><br />
                <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1">GVPEOPLE BLOGS</p>
                <div className="text-center row my-4 mx-4 ps-1 ms-5 ">
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
        </>
    )
}


export default Home