import React from 'react'
import "./FinderNavBar.css"
import ObjOne from './ObjOne/ObjOne'
import Objtwo from './ObjOne/Objtwo/Objtwo'

export default function FinderNavBar() {
    return (
        <div className="finderNavbar" >

            <ObjOne location="desktop" />
            <Objtwo/>

        </div>
    )
}
