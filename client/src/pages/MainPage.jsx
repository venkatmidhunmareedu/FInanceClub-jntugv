import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import axios from "axios"
import { TypeAnimation } from 'react-type-animation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom"
import Session from "./Session"
import Members from "../components/Members"

const MainPage = () => {
  const [sessionData, setSession] = useState({})
  const retriveSession = async () => {
    const params = {
      token: localStorage.getItem("jwtToken")
    }
    const Response = await axios.get(`${process.env.REACT_APP_URL}/user/sessionAuth`, { params })
    setSession(Response.data)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        retriveSession()
      } catch (error) {
        console.log()
      }
    }
    fetchData()
  }, [])
  const navigate = useNavigate()
  return (
    <>
      {(sessionData.expired && localStorage.getItem("verifyAuth") !== null) && <Session />}
      <div className={(sessionData.expired && localStorage.getItem("verifyAuth") !== null) ? `d-none` : ``}>
        <Navbar current="main page" />
        {/* heading */}
        <div className="container">
          <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center mb-5">FINANCE CLUB <span className="color-1">GV</span></p>
        </div>
        {/* about */}
        <div className="container">
          <p className="container fs-1 color-1 fw-bolder border-bottom open-sans">About</p>
          <div className="bg-white p-4 rounded">
            <div>
              <p className="fs-5 fw-bold open-sans">
                Finance Club at JNTUGV: Empowering Financial Futures through Education and Innovation
              </p>
              <p className="open-sans">
                The Finance Club at JNTUGV is an exciting and unique opportunity for students to immerse themselves in the dynamic world of finance and business. As the pioneering finance club in the history of our university, we are on a mission to transform the college culture by providing valuable education, fostering innovation, and promoting responsible financial practices.
              </p>
            </div>
            <div>
              <p className="fs-5 fw-bold open-sans">
                Impact on College Culture:
              </p>
              <p className="open-sans">
                Our club is set to make a significant impact on the college culture by creating a space where students from various disciplines can come together to learn about finance, share ideas, and collaborate on innovative projects. By introducing financial literacy and promoting ethical financial decision-making, we aim to infuse the college culture with a sense of responsibility, forward-thinking, and preparedness for the financial challenges of the real world.
              </p>
            </div>
            <div>
              <p className="fs-5 fw-bold open-sans">
                Benefits to Students:
              </p>
              <p className="open-sans">
                The Finance Club at JNTUGV is designed to benefit students in multiple ways:
                <ol className="mt-2 ">
                  <li>
                    <p className=""> <span className="fw-bold">Eduction:</span> Students will gain a solid foundation in finance through workshops, discussions, and guest speaker sessions. This knowledge will not only aid them in making informed personal financial decisions but also prepare them for careers in finance-related fields.</p>
                  </li>
                  <li>
                    <p className=""> <span className="fw-bold">Innovation:</span> By encouraging creative thinking and brainstorming sessions, students will develop the ability to approach financial challenges with fresh perspectives and innovative solutions.
                    </p>
                  </li>
                  <li>
                    <p className=""> <span className="fw-bold"> Networking: </span>The club will provide students with opportunities to connect with industry professionals, creating a pathway to internships, mentorship, and potential job placements.
                    </p>
                  </li>
                  <li>
                    <p className=""> <span className="fw-bold">Skill Development: </span> Through hands-on activities such as financial analysis, investment simulations, and entrepreneurship workshops, students will acquire practical skills that are directly applicable to real-world scenarios.
                    </p>
                  </li>
                  <li>
                    <p className=""> <span className="fw-bold"> Leadership Growth: </span>Students will have chances to lead and manage club initiatives, enhancing their leadership, project management, and teamwork abilities.
                    </p>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        {/* mission vision */}
        <div className="container mt-4">
          <p className="container fs-1 color-1 open-sans fw-bolder border-bottom">Misson & Vision</p>
          <div className="bg-white rounded p-4">
            <p className="fs-4 fw-bold open-sans">Mission</p>
            <p className="open-sans pb-5 border-bottom">Our mission is to empower students with the knowledge and skills to navigate the dynamic world of finance. Through engaging education and innovative initiatives, we aim to equip our members with a deep understanding of financial principles, preparing them to make informed decisions for their personal and professional financial futures. We are committed to fostering a collaborative community that encourages learning, creativity, and responsible financial practices
            </p>
          </div>
          <div className="bg-white rounded p-4 pt-0 pb-1">
            <p className="fs-4 fw-bold open-sans">Vision</p>
            <p className="open-sans pb-3 ">Our vision is to be a transformative force in the lives of our members, guiding them towards financial success and leadership. We envision a future where individuals from diverse backgrounds come together to share ideas, explore new avenues in finance, and contribute positively to the financial landscape. Through our commitment to education, integrity, and inclusivity, we aspire to shape the next generation of ethical and skilled finance professionals who drive positive change in their communities and the world.
            </p>
          </div>
        </div>
        {/* activities */}
        <div className="container mt-4">
          <p className="container fs-1 color-1 open-sans fw-bolder border-bottom">Activities</p>
          <div className="bg-white rounded p-4 open-sans">
            <ol className="open-sans">
              <li>
                <p> <span className="fw-bold">Financial Experts as Guest Speakers: </span>Inviting professionals from the finance industry to share insights, experiences, and career paths with the students.</p>
              </li>
              <li>
                <p> <span className="fw-bold">Workshops:</span> Conducting workshops on financial literacy, investment strategies, financial planning, and entrepreneurship.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold">Competitions:</span> Organizing investment and financial analysis competitions to challenge students' skills and creativity.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold">Networking Events:</span> Arranging networking sessions where students can interact with industry experts, fostering connections and mentorship opportunities.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold">Community Service Projects:</span>  Initiating projects that utilize financial knowledge to give back to the community and create positive social impact.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold"> Career Guidance:</span> Offering guidance on internships, job opportunities, and further education in finance and business.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold">Business Graduate Schools Workshops:</span> Hosting sessions with representatives from business graduate schools to guide students in pursuing higher education.
                </p>
              </li>
              <li>
                <p> <span className="fw-bold">Points System: </span>Implementing a points system to track and recognize students' progress, motivating them to advance through different levels of financial expertise.
                </p>
              </li>
            </ol>

            <div className="op"></div>

            By combining education, innovation, networking, skill development, and leadership growth, the Finance Club at JNTUGV is poised to shape confident and capable finance professionals who contribute positively to both their personal lives and the larger community.
            <br /><br />
            <div className="text-center">
              Our motto, <b className="mx-1"><i>"Empowering financial futures through education and innovation",  </i></b>
              This truly captures the essence of our club's purpose and vision.
            </div>

          </div>
        </div>
        <div className="container mt-4">
          <p className="container fs-1 color-1 open-sans fw-bolder border-bottom">Members</p>
          <Members />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainPage