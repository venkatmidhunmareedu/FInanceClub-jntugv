import React from "react";
import Navbar from "../components/Navbar";
import BlogContent from "../components/BlogContent";
import PageLoader from "../loaders/PageLoader";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';

const BlogPage = (props) => {
    const { blogid } = useParams();
    return (<div>
        <Navbar current="Home"/>
        <BlogContent   blogid={blogid}/>
        <Footer />
    </div>)
}

export default BlogPage;