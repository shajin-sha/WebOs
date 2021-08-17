import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import "./knowledge_graph.css"
import weblogo from "./src/public_black_24dp.svg"

export default function Knowledge_graph(props) {
    return (
        <Fragment>


            <div className="Knowledge_graph" >
                <div className="Knowledge_graphHeder" >
                    <h1 className='Knowledge_graphtitle' >{props.title}</h1>
                    <p className="type" >{props.type}</p>
                    <p className="link" ><img src={weblogo} alt="weblogo" /><span><a href={props.website}>{props.website}</a></span> </p>
                </div>
                <img src={props.img_url} alt="img" />
                <p>{props.description}</p>

                <div></div>



            </div>





        </Fragment>
    )
}
