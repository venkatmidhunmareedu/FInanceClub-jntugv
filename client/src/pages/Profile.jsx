import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import Blogs from '../components/Blogs'
import SmallLoader from '../loaders/SmallLoader'
import PleaseLogin from './PleaseLogin'


const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState("published");
  const [blogs, setBlogs] = useState(['hell']);
  useEffect(() => {
    const get_profile = async () => {
      if(!localStorage.getItem("verifyAuth")){
        return;
      }
      const params = {
        token: localStorage.getItem("jwtToken")
      }
      setLoading(true);
      const Response = await axios.get(`${process.env.REACT_APP_URL}/user/getprofile`, { params }).then((res) => res).catch((err) => {
        console.log();
      });
      setProfile(Response.data.profile);
      setLoading(false);
      setBlogs(Response.data.blogs);
    }
    get_profile();
  }, [])
  if (localStorage.getItem("verifyAuth")) {
    return (
      <div className='open-sans'>
        <Navbar current="Profile" />
        <div className='container'>
          <div className='container mb-4'>
            <h2><p className='fw-bolder'>Hello {loading ? <SmallLoader /> : profile.user_name},</p></h2>
            <h3>Your Dashboard</h3>
          </div>
          <div class="card text-center">
            <div class="card-header container justify-content-center align-items-center">
              <ul class="nav nav-tabs card-header-tabs">

                <li class="nav-item col-lg-4 col-md-12">
                  <a class={`tab nav-link ${current == "published" ? "active" : "text-secondary"}`} href="#" onClick={(e) => {
                    e.preventDefault();
                    setCurrent("published")
                  }}><small className='fw-bolder'>Published</small></a>
                </li>
                <li class="nav-item col-lg-4 col-md-12">
                  <a class={`nav-link ${current == "events" ? "active" : "text-secondary"} tab `} href="#" onClick={(e) => {
                    e.preventDefault();
                    setCurrent("events")
                  }}><small className='fw-bolder'>Your Events</small></a>
                </li>
                <li class="nav-item col-lg-4 col-md-12">
                  <a class={`tab nav-link ${current == "games" ? "active" : "text-secondary"}`} href="#" onClick={(e) => {
                    e.preventDefault();
                    setCurrent("games")
                  }}><small className='fw-bolder'>Your Games</small></a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              {
                loading ? <SmallLoader /> : (current == "published" && <Blogs blogs={blogs} />) || (current == "events" && "Available soon") || (current == "games" && "Available soon")
              }
            </div>
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

export default Profile