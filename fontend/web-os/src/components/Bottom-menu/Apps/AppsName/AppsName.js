import React from 'react'
import "./AppsName.css"

export default function AppsName(props) {
    return (
        <div style={{
            left:props.left-110+"px",
        }} className="AppsName" >
            <p>{props.name}</p>
        </div>
    )
}
