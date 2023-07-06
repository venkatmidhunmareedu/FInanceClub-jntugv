import React from "react";

const HorizontalScrollbar = function ({ children }) {
    return (
            <div className="scroll-container d-flex justify-content-center align-items-center ">
                <div className="scroll-content ">
                    {children}
                </div>
            </div>
    )
}


export default HorizontalScrollbar;