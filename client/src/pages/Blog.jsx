import React from "react";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent";
import PageLoader from "../loaders/PageLoader";

const BlogPage = (props) => {
    
    return (<div>
        <Navbar />
        <BlogContent />
        <PageLoader />
    </div>)
}

export default BlogPage;