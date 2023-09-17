import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { promise } from 'bcrypt/promises'
import Drafts from '../components/Drafts'

const Profile = () => {
  const [user_name, setUser] = useState("deafault");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const get_profile = async () => {
      const params = {
        token: localStorage.getItem("jwtToken")
      }
      const Response = await axios.get(`${process.env.REACT_APP_URL}/user/getprofile`, { params }).then((res) => res).catch((err) => {
        console.log(err);
      });
      setUser(Response.data.user_name);
      setProfile(Response.data.profile);
      console.log("hello");
    }
    get_profile();
  }, [])
  return (
    <div className='open-sans'>
      <Navbar current="Profile" />
      <div className='container justify-content-center align-items-center'>
        <div className='container user-box'>
          <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4 col-sm-4 tex-center">
                <img src="profile.jpg" style={{ width: "100px" }} class="img-fluid" alt="..." />
              </div>
              <div class="col-md-8 col-sm-8">
                <div class="card-body">
                  <h5 class="card-title">{profile.user_name}</h5>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  <p class="card-text"><small class="text-body-secondary">Last published 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div class="card text-center">
          <div class="card-header container justify-content-center align-items-center">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link" aria-current="true" href="#">Drafts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Published</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <Drafts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile