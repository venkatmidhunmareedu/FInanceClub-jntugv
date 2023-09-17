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
  const [current , setCurrent ] = useState("published");
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
      <div className='container'>
        <div className='container mb-4'>
          <h2><p className='fw-bolder'>Hello {profile.user_name},</p></h2>
          <h3>Your Dashboard</h3>
        </div>
        <div class="card text-center">
          <div class="card-header container justify-content-center align-items-center">
            <ul class="nav nav-tabs card-header-tabs">
              
              <li class="nav-item">
                <a class={`tab nav-link ${current == "published" ? "active" : ""}`} href="#"  onClick={(e) => {  
                  e.preventDefault();
                  setCurrent("published")
                }}>Published</a>
              </li>
              <li class="nav-item">
                <a class={`tab nav-link ${current == "drafts" ? "active" : ""}`} href="#"  onClick={(e) => {  
                  e.preventDefault();
                  setCurrent("drafts")
                }}>Your Drafts</a>
              </li>
              <li class="nav-item">
                <a class={`tab nav-link ${current == "events" ? "active" : ""}`} href="#"  onClick={(e) => {  
                  e.preventDefault();
                  setCurrent("events")
                }}>Your Events</a>
              </li>
              <li class="nav-item">
                <a class={`tab nav-link ${current == "games" ? "active" : ""}`} href="#"  onClick={(e) => {  
                  e.preventDefault();
                  setCurrent("games")
                }}>Your Games</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            {
              current == "drafts" ? <Drafts /> : ""
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile