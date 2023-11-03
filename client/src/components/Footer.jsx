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
                                <img src={process.env.PUBLIC_URL + "/jntugv-footer.png"} alt="" width="50px" />
                                <span class="fs-5">FINANCE CLUB GV</span>
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
                                <li class="mb-2"><a href="/home">Blogs</a></li>
                                <li class="mb-2"><a href="/events">Events</a></li>
                                <li class="mb-2"><a href="/games">Games</a></li>
                                <li class="mb-2"><a href="/login">Admin login</a></li>
                                <li class="mb-2"><a href="/register_admin_blog">Become a Member</a></li>
                                <li class="mb-2"><a href="/addblog">Blog Now</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2 mb-3">
                            <h5>Guides</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="https://www.markdownguide.org/cheat-sheet/" >Getting started with Markdown</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2 offset-lg-1 mb-3">
                            <h5>Contact us</h5>
                            <ul class="list-unstyled ">
                                <li class="mb-2"><a href="mailto:financeclubjntugv@gmail.com">Mail us</a></li>
                                <li class="mb-2"><a href="https://chat.whatsapp.com/BodXqQ1VYekDaYVj3igAx6">Join us on our Whatsapp Community</a></li>
                                <li class="mb-2"><a href="https://www.youtube.com/channel/UCldys_PyIkn8D2m3Oq7SVFA">Subscribe our youtube channel</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}