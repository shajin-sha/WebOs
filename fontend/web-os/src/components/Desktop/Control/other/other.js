import React, { useState } from 'react'
import "./other.css"

export default function Other() {
    const [DisplayV1, setDisplayV1] = useState(0)
    const [DisplayV2, setDisplayV2] = useState(0)
    return (

        <div className="other">
            <div className="display">
                <h4>Display</h4>
                <input style={{
                    background: `linear-gradient(to right,#3d3c3c,#3d3c3c ${DisplayV1}%,#eee ${DisplayV1}%)`,
                }} onChange={(e) => {
                    setDisplayV1(e.target.value)
                }}
                    max="100"
                    min="0"
                    value={DisplayV1}
                    type="range" />
            </div>

            <div className="sound">
                <h4>Sound</h4>
                <input style={{
                    background: `linear-gradient(to right,#3d3c3c,#3d3c3c ${DisplayV2}%,#eee ${DisplayV2}%)`,
                }} onChange={(e) => {
                    setDisplayV2(e.target.value)
                }}
                    max="100"
                    min="0"
                    value={DisplayV2}
                    type="range" />
            </div>
        </div>



    )
}
