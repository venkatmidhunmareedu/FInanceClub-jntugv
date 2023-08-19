import React from "react";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent";
import PageLoader from "../loaders/PageLoader";
import Footer from "../components/Footer";

const BlogPage = (props) => {
    
    return (<div>
        <Navbar />
        <BlogContent />
        < Footer />
    </div>)
}

export default BlogPage;