import React from 'react'
import "./ObjOne.css"
import back from "../../../safari/NavBar/src/arrow_back_ios_black_24dp.svg";
import forward from "../../../safari/NavBar/src/arrow_forward_ios_black_24dp (1).svg";

export default function ObjOne(props) {
    return (
        <div className="oneFind">
            <img src={back} alt="back" />
            <img src={forward} alt="forward" />

            <h3>{props.location}</h3>
        </div>
    )
}
