import React from 'react'
import "./results.css"
export default function Results(props) {
    return (
        <div className="organic_results" >
            <h4 onClick={()=>{
                props.OpenWebPage(props.url)
            }} >{props.displayed_url}</h4>
            <p className="organic_resultsDescription" >{props.description}</p>
        </div>
    )
}
