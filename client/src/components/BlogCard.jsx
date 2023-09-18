import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 open-sans dark d-flex justify-content-center'>
            <div className="card" style={{ width: "100%" }}>
                <div className='container row'>
                    <div className="col-12 card-body text-start">
                        <h5 className="card-title open-sans fw-bolder color-1"><Link to={`/blog/${props.blogid}`}>{props.title}</Link></h5>
                    </div>
                </div>
                <div className="text-start card-body text-center">
                    <i class="cursor-pointer bi bi-pen"></i>
                    <i className="ms-5 cursor-pointer bi bi-arrow-bar-up"></i>
                    <i className="ms-5 cursor-pointer bi bi-trash3"></i>
                </div>
            </div>
        </div>
    )
}

export default BlogCard