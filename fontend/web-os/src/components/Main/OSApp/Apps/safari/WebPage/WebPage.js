import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import "./WebPage.css";

export default function WebPage(props) {
    const [Data,setData]=useState(null)
    useEffect(() => {

        
    
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}${props.url}`).then((res)=>{
                console.log(res)
                setData(res.data)

            })

  

    }, [])
    return (
        <div className="webPage" >
            <iframe sandbox="allow-top-navigation-by-user-activation allow-same-origin allow-scripts allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-top-navigation" srcDoc={Data} frameBorder="0"></iframe>
        </div>
    )
}


