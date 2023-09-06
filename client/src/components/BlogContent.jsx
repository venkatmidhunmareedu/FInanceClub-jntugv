import React, { useEffect, useState } from "react";
import axios from "axios";
import Markdown from 'markdown-to-jsx'
import { Table, Para, heading1, heading2, quote, code, image, list, olist } from "../components/BlogComps";
import MDEditor from '@uiw/react-md-editor';

const BlogContent = (props) => {
    const blogid = props.blogid;
    const [content, setContent] = useState("");
    const [genre, setGenre] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        const params = {
            blogid: blogid
        }
        const recievedetails = async () => {
            const response = await axios.get(`${process.env.REACT_APP_URL}/getone`, { params }).then((res) => res).catch((err) => console.log(err));
            setContent(response.data.blog.content);
            setGenre(response.data.blog.genre);
            setTitle(response.data.blog.title);
        }
        recievedetails();
    }, [])
    return (
        <div className="container">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb open-sans">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
                <span className="badge  bg-color-1 open-sans text-uppercase">{genre}</span>
                <div className="row text-start">
                    <p className="fs-1 babus color-1">{title}</p>
                </div>
                <div className="container ">
                    <div data-color-mode="light">
                        <MDEditor.Markdown source={content} className="p-5" style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogContent;
