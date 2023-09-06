<div className='container d-flex justify-content-center vh-100 vw-100 my-2'>
                    <div className='col-md-5 col-lg-5 col-xl-5 border mx-1'>
                        <div className=''>
                            <div className='border-bottom text-center fw-bolder bg-white color-1'>Editor</div>
                            <div className='ms-1'>
                                {/* <textarea className='textarea col-12 font-monospace border-bottom ' placeholder='Enter Markdown code here' value={blogData} style={{ height: "690px" }} onChange={handleChange}></textarea> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-7 col-xl-7 border mx-1'>
                        <div className=''>
                            <div className='border-bottom text-center fw-bolder bg-color-1 text-white'>Preview</div>
                            <div className='ms-1 my-1 scrollable col-12 open-sans ' style={{ height: "685px" }}>
                                {/* <Markdown className="markdown" options={{
                                    overrides: {
                                        table: Table,
                                        p: Para,
                                        h1: heading1,
                                        h2: heading2,
                                        blockquote: quote,
                                        code: code,
                                        img: image,
                                        ul: list,
                                        ol: olist
                                    }
                                }} >{blogData}
                                </Markdown> */}
                            </div>
                        </div>
                    </div>

                </div>