import * as React from 'react';
import { Fade } from "react-awesome-reveal"
import { Link } from 'react-router-dom';


export default function RecipeReviewCard(props) {
    return (
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 open-sans dark d-flex justify-content-center'>
            <div className="card" style={{ width: "100%" }}>
                <Fade>
                    <div className="card-body text-start">
                        <h5 className="card-title open-sans fw-bolder color-1">{props.title}</h5>
                        <div className='row'>
                            <p className="col card-text text-start">{props.genre}</p>
                            <small className="col text-end text-secondary">- Created on {new Date(props.createdAt).toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}</small>
                        </div>

                        <small className='text-secondary'>{props.content}By <a href="">{props.user} </a> </small>
                        ...  <Link to={`/blog/${props.blogid}`}>Read Article</Link>
                        <div className='row'>
                            <small className="col text-end text-secondary">- Modified on {new Date(props.updatedAt).toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}</small>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
