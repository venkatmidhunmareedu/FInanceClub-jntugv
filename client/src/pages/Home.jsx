import React , {useState , useEffect} from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/Card";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import axios from "axios"


const Home = () => {
    const [blogs , setblogs ] = useState([])

    useEffect(() => {
		const fetchData = async () => {
			try {

				const Response = await axios.get('http://localhost:5000/getall');
				setblogs(Response.data.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
    return (
        <>
            <Navbar />
            
            <div className="container">
                <div className="row ">
                    <p className="babus fw-bolder text-lg-spacing fs-1 lt-sp-1 lt-sz-1 text-center">GV<span className="color-1">PEOPLE BLOGS</span></p>
                    <div className="row">
                        <div className="mb-4">
                            <div className="col-2 ">
                                <Filter />
                            </div>
                        </div>
                        <div className="container-fluid mx-auto justify-content-center">
                            <div className="row justify-content-center mx-auto">
                                {blogs.map((blog) => {
                                    return <BlogCard title={blog.title} genre = {blog.genre} content = {blog.content.slice(0,90) + "..."} user = {blog.user_id} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Home