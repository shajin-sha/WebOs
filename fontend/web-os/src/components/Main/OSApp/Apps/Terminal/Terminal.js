import React, { useState } from 'react'
import "./Terminal.css"
import axios from "axios"

export default function Terminal() {
    const [DataValue, setDataValue] = useState("WEB-OS > ")
    const [Data, setData] = useState("")
    return (

        <div className="Terminal" >

            <div className="TerminalContent" >



                <p>{Data}</p>


                <textarea onKeyDown={(e) => {
                    if (e.keyCode == 13) {

                        //? CMDS

                        if (DataValue === "WEB-OS > find()") {
                            axios.get('/CMD').then((res)=>{
                                setData(DataValue)
                                console.log(res)
                            })
                        }
                        else if(DataValue==="WEB-OS > exit()"){
                            alert("exit")
                            setData(DataValue)
                        }
                        else{
                            
                            setData(`${DataValue} not defined`)
                        }


                        //? CMDS

                        setDataValue('\r\n' + "WEB-OS >")
                    }
                }} onChange={(e) => {
                    setDataValue(e.target.value)
                }}
                    value={DataValue}
                    cols="40"
                    rows="10000">


                </textarea>
            </div>

        </div>
    )
}
