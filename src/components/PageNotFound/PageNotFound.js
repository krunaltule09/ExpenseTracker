import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    const style={
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        height:"80vh",
        width:"100vw"
    }
    return (
        <div style={style}>
            <h1>404 Page Not Found</h1>
            
        </div>
    )
}

export default PageNotFound
