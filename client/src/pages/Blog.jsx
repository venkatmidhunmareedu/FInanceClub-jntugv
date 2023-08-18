import React from "react";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent";
import PageLoader from "../loaders/PageLoader";

const BlogPage = (props) => {
    
    return (<div>
        <Navbar />
        <BlogContent />
    </div>)
}

export default BlogPage;