import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    return (
        <Fade className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary open-sans dark">
            <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary open-sans dark">
                <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                    <div class="row">
                        <div class="col-lg-3 mb-3">
                            <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                                <img src={process.env.PUBLIC_URL+"/jntugv-footer.png"} alt="" width="50px" />
                                <span class="fs-5">FINANCE CLUB</span>
                            </a>
                            <ul class="list-unstyled small">
                                <li class="mb-2">Designed and built with all the love in the world by the <a href="">Finance club</a> with the help of <a href="https://github.com/venkatmidhunmareedu/FInanceClub-jntugv/graphs/contributors">our contributors</a>.</li>
                                <li class="mb-2">Currently v1.0.0.</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2 offset-lg-1 mb-3">
                            <h5>Links</h5>
                            <ul class="list-unstyled ">
                                <li class="mb-2"><a href="/">Home</a></li>
                                <li class="mb-2"><a href="/docs/5.3/">Popular today</a></li>
                                <li class="mb-2"><a href="/docs/5.3/examples/">Academics</a></li>
                                <li class="mb-2"><a href="https://icons.getbootstrap.com/">Courses</a></li>
                                <li class="mb-2"><a href="https://themes.getbootstrap.com/">News</a></li>
                                <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2 mb-3">
                            <h5>Guides</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#" >Getting started</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}