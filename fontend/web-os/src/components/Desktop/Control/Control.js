import React from 'react'
import "./Control.css"
import Other from "./other/other"
import MainAction from "./MainAction/MainAction"

export default function Control() {
    return (
        <div className="Control" >

            
            <MainAction/>
            <Other />
        </div>
    )
}
