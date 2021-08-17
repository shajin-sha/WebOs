import React from 'react';
import "./itemLeft.css";
import OSLOGO from "./src/computer_white_24dp.svg"

export default function itemLeft() {
    return (
        <div className="itemLeft" >
            <img src={OSLOGO} alt="OSLOGO"/>
            <p>web-os</p>
        </div>
    )
}
