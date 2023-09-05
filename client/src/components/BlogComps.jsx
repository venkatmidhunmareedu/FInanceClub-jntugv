import React from "react"
export const Table = ({ children, ...props }) => {
    return (<table {...props} className='table'>{children}</table>)
}

export const Para = ({ children, ...props }) => {
    return (<p {...props} className='lh-base'>{children}</p>)
}

export const heading1 = ({ children, ...props }) => {
    return (<h1 {...props} className='border-bottom mb-3 pb-3'>{children}</h1>)
}

export const heading2 = ({ children, ...props }) => {
    return (<h2{...props} className='border-bottom mb-2 pb-2'>{children}</h2>)
}

export const quote = ({ children, ...props }) => {
    return (<div {...props} className='bs-callout bs-callout-primary' >{children}</div>)
}

export const code = ({ children, ...props }) => {
    return (<div {...props} className="shadow-none p-3 mb-5 ms-3 bg-white rounded text-monospace">
        {children}
    </div>)
}


export const image = ({ children, ...props }) => {
    return (<img {...props} className="img-fluid rounded mx-auto d-block" />)
}

export const list = ({ children, ...props }) => {
    return (<ul className="open-sans fw-bolder">
        {children}
    </ul>)
}

export const olist = ({children , ...props}) => {
    return (<ol className="open-sans fw-bolder">
        {children}
    </ol>)
}