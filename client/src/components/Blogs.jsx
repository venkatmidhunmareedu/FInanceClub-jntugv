import React from 'react'
import BlogCard from './BlogCard'

const Blogs = (props) => {
    return (
        <div>
            {
                props.blogs.length > 0 ?
                    props.blogs.map((blog) => {
                        return <BlogCard blogid={blog._id} title={blog.title} />
                    }) : <small className='text-secondary fw-bolder'>No Blogs here</small>
            }
        </div>
    )
}

export default Blogs