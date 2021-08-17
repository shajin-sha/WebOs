import React from 'react'
import Apps from './Apps/Apps'
import "./bottom menu.css"

export default function BottommMenu(props) {

    function getAppName(name){
        props.getAppName(name)
    }


    return (
        <div className="bottomMenu" >
            <Apps getAppName={getAppName} />
        </div>
    )
}
