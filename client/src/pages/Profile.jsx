import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import Blogs from '../components/Blogs'
import SmallLoader from '../loaders/SmallLoader'

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState("published");
  const [blogs, setBlogs] = useState(['hell']);
  useEffect(() => {
    const get_profile = async () => {
      const params = {
        token: localStorage.getItem("jwtToken")
      }
      setLoading(true);
      const Response = await axios.get(`${process.env.REACT_APP_URL}/user/getprofile`, { params }).then((res) => res).catch((err) => {
        console.log(err);
      });
      setProfile(Response.data.profile);
      setLoading(false);
      setBlogs(Response.data.blogs);
    }
    get_profile();
  }, [])
  return (
    <div className='open-sans'>
      <Navbar current="Profile" />
      <div className='container'>
        <div className='container mb-4'>
          <h2><p className='fw-bolder'>Hello {loading ? <SmallLoader/> : profile.user_name},</p></h2>
          <h3>Your Dashboard</h3>
        </div>
        <div class="card text-center">
          <div class="card-header container justify-content-center align-items-center">
            <ul class="nav nav-tabs card-header-tabs row">

              <li class="nav-item col-lg-4 col-md-12 col-sm-4">
                <a class={`tab nav-link ${current == "published" ? "active" : "text-secondary"}`} href="#" onClick={(e) => {
                  e.preventDefault();
                  setCurrent("published")
                }}><small className='fw-bolder'>Published</small></a>
              </li>
              <li class="nav-item col-lg-4 col-md-12 col-sm-4">
                <a class={`nav-link ${current == "events" ? "active" : "text-secondary"} tab `} href="#" onClick={(e) => {
                  e.preventDefault();
                  setCurrent("events")
                }}><small className='fw-bolder'>Your Events</small></a>
              </li>
              <li class="nav-itemc col-lg-4 col-md-12 col-sm-4">
                <a class={`tab nav-link ${current == "games" ? "active" : "text-secondary"}`} href="#" onClick={(e) => {
                  e.preventDefault();
                  setCurrent("games")
                }}><small className='fw-bolder'>Your Games</small></a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            {
              loading ? <SmallLoader/> : (current == "published" && <Blogs blogs={blogs} />)
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile