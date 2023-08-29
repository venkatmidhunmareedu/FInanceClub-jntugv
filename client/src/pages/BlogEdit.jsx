import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useTimer } from 'react-timer-hook';
import Markdown from 'markdown-to-jsx'



const Mytimer = ({ expiryTimestamp }) => {
    const navigate = useNavigate();
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => navigate("/login") });

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 vw-100 open-sans'>
            <div className="card p-3">
                <div className="modal-dialog p-3">
                    <div className="modal-content p-3">
                        <div className="modal-header m-2">
                            <h5 className="modal-title fw-bolder">Please Login!</h5>
                        </div>
                        <div className="modal-body m-2">
                            <p>Redrecting to login page in {seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const save = (text) => {

}


const BlogEdit = () => {
    const [blogData, setData] = useState("");

    const handleChange = (e) => {
        setData(e.target.value)
    }

    if (localStorage.getItem("verifyAuth")) {
        return (
            <div className='open-sans'>
                <Navbar />
                <p className='text-center fw-bolder'>To know more about Markdown Syntax visit <a href="https://www.markdownguide.org/basic-syntax/">https://www.markdownguide.org/basic-syntax/</a></p>
                <div className='container text-start'>
                    <button className='btn btn-outline-primary'>Save</button>
                </div>
                <div className='container d-flex justify-content-center vh-100 vw-100 my-2'>
                    <div className='col-md-6 col-lg-6 col-xl-6 border mx-1'>
                        <div className=''>
                            <div className='border-bottom text-center fw-bolder bg-white color-1'>Editor</div>
                            <div className='ms-1'>
                                <textarea className='textarea col-12 font-monospace border-bottom ' placeholder='Enter Markdown code here' value={blogData} style={{ height: "690px" }} onChange={handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 border mx-1'>
                        <div className=''>
                            <div className='border-bottom text-center fw-bolder bg-color-1 text-white'>Preview</div>
                            <div className='ms-1 my-1 scrollable col-12 ' style={{ height: "685px" }}>
                                <Markdown >{blogData}
                                </Markdown>
                            </div>
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
            <Mytimer expiryTimestamp={time} />
        )
    }

}

export default BlogEdit