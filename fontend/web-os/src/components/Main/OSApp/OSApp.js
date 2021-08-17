import React, { useEffect, useState } from 'react';
import Finder from './Apps/Finder/Finder';
import Safari from './Apps/safari/safari';
import Terminal from './Apps/Terminal/Terminal';
import "./OSApp.css";
import OsAppNavBar from "./OsAppNavBar/OsAppNavBar"

export default function OSApp(props) {
    const [SafariData, setSafariData] = useState([])
    const [IsMaximazed, setIsMaximazed] = useState(false)
    const [IsMinnimazeed, setIsMinnimazeed] = useState(false)
    const [DataSafariQuery, setDataSafariQuery] = useState("")
    const [NavColor,setNavColor]=useState("#ffffff")




    //? dinging appid and setting navBar color

    useEffect(() => {
        if(props.appid==="terminal"){
            setNavColor("#000000")
        }
        else{
            setNavColor("#ffffff")
        }
    }, [])





    function getSafariQuery(Query) {
        setDataSafariQuery(Query)
        console.log(Query)
    }


    function getSafariRes(data) {
        setSafariData(data)

    }



    return (
        <div style={{
            display: IsMinnimazeed ? "none" : "block"
        }} className={IsMaximazed ? "OsAppFull" : "OSApp"}>

            <OsAppNavBar getSafariQuery={getSafariQuery} getSafariRes={getSafariRes} color={NavColor} app={props.appid} />

            <div className="AppAction" >
                <div onClick={() => {
                    props.closeApp()
                }} className="red"></div>
                <div onClick={() => {
                    setIsMinnimazeed(true)
                }} className="yellow"></div>
                <div onClick={() => {
                    setIsMaximazed(!IsMaximazed)
                }} className="green"></div>
            </div>




            {/*useing imported apps */}


            {props.appid === "safari" && <Safari Query={DataSafariQuery} data={SafariData} />}

            {props.appid === "terminal" && <Terminal/>}

            {props.appid=== "find" && <Finder/>}


            {/* useing imported apps */}




        </div>






    )
}



