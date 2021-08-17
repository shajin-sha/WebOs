import React, { useState, useEffect } from 'react';
import "./CreateUser.css";
import userIcon from "./src/account_circle_black_24dp (3).svg";
import emailIcon from "./src/email_black_24dp.svg";
import LockIcon from "./src/lock_black_24dp.svg";
import { useTransition, animated } from "react-spring";
import axios from "axios"



export default function CreateUser(props) {
    const [IsVisible, setIsVisible] = useState(true)
    const [Email, setEmail] = useState("")
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")





    // ? config animation for the Welcome text--start
    // *animation type transition

    const transition = useTransition(IsVisible, {
        from: { y: 200, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: 500, opacity: 0 }

    })
    // ? config animation for the Welcome text--end



    return (

        <div>

            <form onSubmit={(e) => {
                e.preventDefault()


                let data = {
                    Email,
                    Password,
                    UserName
                }


                axios.post("/newuser", data).then((res) => {
                    console.log(res.data)
                    if(res.data.state==="ok"){
                        props.showDesktop()
                        JSON.stringify(localStorage.setItem("userName",res.data.UserName))
                    }
                    else{
                        alert("err to add user")
                    }
                })



            }}>

                {transition((style, CreateUser) =>

                    <animated.div style={style} className="CreateUser" >
                        <h1 className="CreateUserHeder" ><samp className="LetS" >Let's </samp>grab an account.</h1>


                        <div className="rectangle1"></div>
                        <div className="rectangle2"></div>
                        <div className="rectangle3"></div>





                        <animated.div style={style} className="CreateUserInputs" >
                            <div>

                                <img src={userIcon} alt="icon" />
                                <input
                                    onChange={(e) => setUserName(e.target.value)}
                                    max="1000"
                                    required
                                    min="3"
                                    max="20"
                                    placeholder='user name'
                                    type="text" />
                            </div>
                            <div>
                                <img src={emailIcon} alt="" />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    max="1000"
                                    required
                                    placeholder='email'
                                    type="email" />
                            </div>
                            <div>
                                <img src={LockIcon} alt="" />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    max="1000"
                                    min="5"
                                    required
                                    placeholder='password'
                                    type="password" />
                            </div>

                        </animated.div>
                    


                        <button type="submit" style={{
                            display: "flex"
                        }} className="grabAccountBtn" >
                            <img src={userIcon} alt="" />
                            Grab account</button>



                    </animated.div>
                )

                }

            </form>

        </div >

    )

}
