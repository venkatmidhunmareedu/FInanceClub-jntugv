import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const DraftCard = (props) => {
    return (
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 open-sans dark d-flex justify-content-center'>
            <div className="card" style={{ width: "100%" }}>
                <div className='container row'>
                    <div className="col-6 card-body text-start">
                        <h5 className="card-title open-sans fw-bolder color-1"><Link to={`/blog/${props.blogid}`}>{props.title}</Link></h5>
                    </div>
                    <div className="col-6 card-body text-end">
                        <i className="cursor-pointer bi bi-arrow-bar-up"></i>
                        <i className="cursor-pointer ms-5 bi bi-trash3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DraftCard