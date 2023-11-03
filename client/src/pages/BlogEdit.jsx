import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import genres from "../data/genres";
import axios from 'axios';
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import PleaseLogin from './PleaseLogin';




const publish = async (title, genre, blogData, setLP) => {
    const params = {
        token: localStorage.getItem("jwtToken"),
        title: title,
        genre: genre,
        content: blogData
    }
    setLP(true);
    const response = await axios.get(`${process.env.REACT_APP_URL}/user/publish`, { params }).then((res) => res).catch((err) => console.log());
    if (response.data.success) {
        toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setLP(false);
    }
    else {
        toast.error(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setLP(false);
    }
}

const BlogEdit = () => {
    const [blogData, setData] = useState("");
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [loadingDraft, setLD] = useState(false);
    const [loadingPublish, setLP] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData(e.target.value)
    }

    if (localStorage.getItem("verifyAuth")) {
        return (
            <div className='open-sans'>
                <Navbar />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <p className='text-center fw-bolder'>To know more about Markdown Syntax visit <a target='_blank' href="https://www.markdownguide.org/cheat-sheet/">https://www.markdownguide.org/cheat-sheet/</a>
                    <div className='container text-start '>
                        <button type='submit' className={`btn btn-outline-primary mb-3 mx-2 ${(title == "" && blogData == "" && genre == "") ? "disabled" : ""}    ${loadingPublish ? "disabled" : ""} `} onClick={(e) => {
                            if (title == "" && blogData == "") {
                                toast.error("All Fields must not be empty", {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }
                            else {
                                publish(title, genre, blogData, setLP);
                                setTimeout(() => navigate("/profile") , 2000)
                            }
                        }}  >
                            <span class={`spinner-border spinner-border-sm mx-1 ${loadingPublish ? "" : "d-none"}`}></span>
                            Publish</button>
                        <div class="form-floating mb-3 col-lg-6 col-sm-12 col-md-12">
                            <input type="text" class="form-control" id="floatingInput" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="name@example.com" required />
                            <label for="floatingInput">Title</label>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12'>
                            <select class="form-select form-select" aria-label="Small select example" value={genre} onChange={(e) => setGenre(e.target.value)}>
                                <option selected>Select Genre</option>
                                {
                                    genres.map((g) => {
                                        return <option value={g}  >{g}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div></p>


                <div className='container'>
                    <div data-color-mode="light">
                        <MDEditor height={500} value={blogData} onChange={setData} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    else {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 4);
        return (
            <PleaseLogin expiryTimestamp={time} />
        )
    }

}

export default BlogEdit