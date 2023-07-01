import * as React from 'react';

export default function RecipeReviewCard(props) {
    return (
        <div className='col-xl-4 col-lg-4 col-md-2 col-sm-1 mb-5 open-sans dark '>
            <div className="card" style={{ width: "20rem" }}>
                <img src="content.png" className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title babus ">{props.genre}</h5>
                    <p className="card-text">{props.title}</p>
                    <small className='text-secondary'>{props.content}By <a href="">{props.user}</a></small>
                    <div className="text-center">
                        <button className="btn open-sans fw-bolder" >
                           <a href="/blog"> Read Article <i class="bi bi-arrow-right-circle ms-2"></i></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
