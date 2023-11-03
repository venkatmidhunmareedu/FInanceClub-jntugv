import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import genres from "../data/genres";
import axios from 'axios';
import MDEditor from "@uiw/react-md-editor";
import PleaseLogin from './PleaseLogin';





const BlogUpdate = () => {
  const { blogid } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPublish, setLP] = useState(false);
  useEffect(() => {

    const params = {
      blogid: blogid
    }

    const recievedetails = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_URL}/getone`, { params }).then((res) => res).catch((err) => console.log());
      if (!response.data.success) {
        navigate("/blogNotFound")
      }
      setContent(response.data.blog.content);
      setGenre(response.data.blog.genre);
      setTitle(response.data.blog.title);
      setLoading(false);
    }
    recievedetails();
  }, [])

  const publish = async () => {
    const params = {
      token: localStorage.getItem("jwtToken"),
      blog_id : blogid,
      blog: {
        title: title,
        genre: genre,
        content: content
      }
    }
    setLP(true);
    const response = await axios.get(`${process.env.REACT_APP_URL}/user/updateblog`, { params }).then((res) => res).catch((err) => console.log());
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
            <button type='submit' className={`btn btn-outline-primary mb-3 mx-2 ${(title == "" && content == "" && genre == "") ? "disabled" : ""}    ${loadingPublish ? "disabled" : ""} `} onClick={(e) => {
              if (title == "" && content == "") {
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
                publish();
                setTimeout(() => navigate("/profile"), 2000)
              }
            }}  >
              <span class={`spinner-border spinner-border-sm mx-1 ${loadingPublish ? "" : "d-none"}`}></span>
              Update Blog</button>
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
            <MDEditor height={500} value={content} onChange={setContent} />
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

export default BlogUpdate