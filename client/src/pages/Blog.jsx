import React from "react";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent";

const BlogPage = (props) => {
    return(<div>
        <Navbar />
        <button className="btn open-sans fw-bolder">
            {props.genre}
        </button>
        
        <BlogContent  />
    </div>)
}

export default BlogPage;