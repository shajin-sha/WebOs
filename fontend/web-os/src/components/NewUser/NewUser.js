import React, { useState, useEffect } from 'react';
import CreateUser from './CreateUser/CreateUser';
import "./NewUser.css";
import WelcomeText from './welcomeText/WelcomeText';


export default function NewUser(props) {
    const [IsCreateUserVi, setIsCreateUserVi] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsCreateUserVi(true)
        }, 8100);

    }, [])



    function showDesktop() {
        props.showDesktop()
    }



    return (
        <div className="NewUser" >
            <WelcomeText />
            {IsCreateUserVi && <CreateUser showDesktop={showDesktop} />}
        </div>
    )
}