import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BlogCard = (props) => {
    const naviagte = useNavigate();
    const [dloading, setDLoading] = useState(false);
    const deletePost = async (blog_id) => {
        const token = localStorage.getItem("jwtToken");
        const params = {
            token: token,
            blog_id: blog_id
        }
        try {
            setDLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_URL}/user/deletePost`, { params });
            console.log(response);
            if (response.data.success) {
                toast.success("Post Deleted Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setDLoading(false);
                setTimeout(
                    () => naviagte(0), 1000);
            }
            else {
                toast.error("Post Not deleted! Please try again later", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setDLoading(false);
            }
        }
        catch (err) {
            toast.error("Internal Server Error! Please try again after some time or check your internet connection", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.log(err);
        }
    }
    return (
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 open-sans dark d-flex justify-content-center'>
            <div className="card" style={{ width: "100%" }}>
                <div className='container row'>
                    <div className="col-12 card-body text-start">
                        <h5 className="card-title open-sans fw-bolder color-1"><Link to={`/blog/${props.blogid}`}>{props.title}</Link></h5>
                    </div>
                </div>
                <div className="text-start card-body text-center">
                    <button className='btn btn-outline-primary me-4' onClick={(e) => {
                        e.preventDefault()
                    }}>Edit Blog</button>
                    <button className='btn btn-outline-primary'
                        onClick={(e) => {
                            e.preventDefault();
                            deletePost(props.blogid);
                        }}
                    >
                        {dloading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                        {!dloading && "Delete Blog"}</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard