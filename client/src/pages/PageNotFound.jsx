import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PageNotFound = () => {
    return (
        <div>
            <Navbar />
            <div className='container text-center'>
                <h1 className='open-sans'>404 : This is not the web page you are looking for :(<br/>Check your Url and try again!</h1>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound