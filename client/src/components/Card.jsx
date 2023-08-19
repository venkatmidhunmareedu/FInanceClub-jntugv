import * as React from 'react';
import { Fade } from "react-awesome-reveal"

export default function RecipeReviewCard(props) {
    return (
        <div className='col-xl-12 col-lg-4 col-md-2 col-sm-1 mb-2 open-sans dark d-flex justify-content-center'>
            <div className="card" style={{ width: "100%" }}>
                <Fade>
                    <div className="card-body text-start">
                        <h5 className="card-title babus ">{props.genre}</h5>
                        <div className='row'>
                            <p className="col card-text text-start">{props.title}</p>
                            <small className="col text-end text-secondary">- Created on 24th August, 2023</small>
                        </div>

                        <small className='text-secondary'>{props.content}By <a href="">{props.user} </a> </small>
                        ... <a href="/blog"> Read Article </a>
                        <div className='row'>
                            <small className="col text-end text-secondary">- Modified on 24th August, 2023</small>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
