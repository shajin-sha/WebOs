import React from 'react'
import ItemRight from './itemRight/itemRight'
import "./NavTop.css"
import ItemLeft from "./itemLeft/itemLeft"

export default function NavTop(props) {
    var today = new Date();

    function openAction(){
        props.action()
    }

    return (
        <div className="NavTop" >

            <ItemRight acton={openAction} />
            <ItemLeft/>

        </div>
    )
}
