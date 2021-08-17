import React from 'react'
import "./ActionMenu1.css"
import wifi from "../../../../NavTop/itemRight/src/wifi.svg"
import bluetooth from "./src/bluetooth_white_24dp.svg"
import AirDrop from "./src/AirDrop_logo.svg"


export default function ActionMenu1() {
    return (
        <div className="ActionMenu1" >

            <div>
                <img src={wifi} alt="wifi" />
                <div>
                    <h4>Wi-Fi</h4>
                </div>
            </div>
            <div>
                <img src={bluetooth} alt="bluetooth" />
                <div>
                    <h4>bluetooth</h4>
                    <br/>
                </div>
            </div>
            <div>
                <img src={wifi} alt="AirDrop" />
                <div>
                    <h4>AirDrop</h4>
                </div>
            </div>

        </div>
    )
}
