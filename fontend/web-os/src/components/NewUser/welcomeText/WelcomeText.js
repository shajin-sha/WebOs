import React, { useState, useEffect } from 'react';
import "./welcomeText.css";
import { useTransition, animated } from "react-spring";

export default function WelcomeText() {
    const [IsVisible, setIsVisible] = useState(false)



    // ? config animation for the Welcome text--start
    // *animation type transition

    const transition = useTransition(IsVisible, {
        from: { y: 500, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -500, opacity: 0 }

    })
    // ? config animation for the Welcome text--end



    
    useEffect(() => {
        //? config animation TimeLine for the welcome text --start
        //* Animation TIMELINE--------------------------------------------------

        //* Call WelcomeText to window --start
        setTimeout(() => {
            setIsVisible(true)
        }, 750);
        //! Remove WelcomeText from window --end

        setTimeout(() => {
            setIsVisible(false)
        }, 8000);

        //* Animation TIMELINE--------------------------------------------------
        //? config animation TimeLine for the welcome text--end

    }, [])


    return (
        <div>

            {transition((style, OBJName) =>
                OBJName && <animated.div style={style} className="OBJName">WebOs</animated.div>
            )}
        </div>
    )
}
