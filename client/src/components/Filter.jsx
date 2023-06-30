import React from "react";

export default function Filter() {
    return (
        <div className="container">
            <div class="dropdown open-sans">
                <button class="btn dropdown-toggle color-1 fw-bolder" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Catogery <i class="bi bi-chevron-down"></i>
                </button>
                <ul class="dropdown-menu color-1">
                    <li><a class="dropdown-item color-1 fw-bolder " href="#">Action</a></li>
                    <li><a class="dropdown-item color-1 fw-bolder " href="#">Another action</a></li>
                    <li><a class="dropdown-item color-1 fw-bolder " href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    )
}