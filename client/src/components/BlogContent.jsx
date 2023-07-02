import React from "react";

const BlogContent = (props) => {
    return (
        <div className="mx-5 px-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb open-sans">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
                <span className="badge  bg-color-1 open-sans text-uppercase">Genre</span>
                <div className="row text-start">
                    <p className="fs-1 babus color-1">Title</p>
                </div>
                <div className="row text-left open-sans fw-bolder fs-5 col-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <br />
                <div className="row text-start">
                    <p className="fs-1 babus color-1">Title-1</p>
                </div>
                <div className="row text-left open-sans fw-bolder fs-5 col-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

                <div className="img-fluid rounded">
                    <img src="content.png" className="rounded d-flex mx-auto" alt="" />
                </div>
            </div>
        </div>
    )
}


export default BlogContent;
