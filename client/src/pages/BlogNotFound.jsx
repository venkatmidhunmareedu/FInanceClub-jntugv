import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BlogNotFound = () => {
  return (
    <div>
        <Navbar/>
        <div className='container text-center'>
            <h1 className='open-sans'>The Blog you are looking for is either deleted or doesn't exist!</h1>
        </div>
        <Footer />
    </div>
  )
}

export default BlogNotFound