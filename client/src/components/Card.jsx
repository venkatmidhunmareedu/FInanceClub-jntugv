import * as React from 'react';

export default function RecipeReviewCard() {
    return (
        <div className='col-xl-4 col-lg-4 col-md-2 col-sm-1 mb-5 open-sans dark '>
            <div className="card" style={{ width: "20rem" }}>
                <img src="content.png" className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title babus ">GENRE</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. subtitle here</p>
                    <small className='text-secondary'>some content which might visible or not in the case of...</small><br />
                    <div className='text-left'><small className='text-secondary'>By <a href="">MV Midhun</a></small></div>
                    <div className="text-center">
                        <button className="btn open-sans fw-bolder">
                            Read Article <i class="bi bi-arrow-right-circle ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
