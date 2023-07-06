import React from "react";

export default function Filter() {
    return (
        <div className="container d-flex justify-content-center">
            <div class="dropdown open-sans">
                <button class="btn dropdown-toggle color-1 fw-bolder" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Catogery <i class="bi bi-chevron-down"></i>
                </button>
                <ul class="dropdown-menu color-1">
                    <li><a class="dropdown-item color-1 fw-bolder text-uppercase" href="#">leader ship</a></li>
                    <li><a class="dropdown-item color-1 fw-bolder text-uppercase" href="#">electornics</a></li>
                    <li><a class="dropdown-item color-1 fw-bolder text-uppercase" href="#">WEB DEVELOPMENT</a></li>
                    <li><a class="dropdown-item color-1 fw-bolder text-uppercase" href="#">AI AND ML</a></li>
                </ul>
            </div>
        </div>
    )
}