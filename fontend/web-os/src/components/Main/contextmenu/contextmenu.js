import React, { Fragment, useEffect, useState } from 'react'
import "./contextmenu.css"
import wifi from "./src/wifi.svg"
import folder from "./src/folder_black_24dp.svg"
import dashboard from "./src/dashboard_black_24dp.svg"
import search from "./src/search_white_24dp.svg"
import desktop from "./src/desktop.svg"

export default function Contextmenu(props) {
    const [ContextmenuItems, setContextmenuItems] = useState([])
    useEffect(() => {



        if (props.ContextmenuItemsObj === "desktop") {
            setContextmenuItems([
                { title: "New folder", icon: folder, dir: "WebOs:desktop:/" },
                { title: "Action", icon: dashboard },
                { title: "Search", icon: search },
                { title: "Wifi", icon: wifi },
                { title: "Search", icon: search },
                { title: "Lock", icon: search },
            ])

        }


        if (props.ContextmenuItemsObj === "safari") {
            setContextmenuItems([
                { title: "Refresh" },
                { title: "Save as" },
                { title: "Dev tools" },
                { title: "Send to iphone" },
                { title: "Add to reading list" },
                { title: "Mark as favorite" }
            ])
        }



        else {
            setContextmenuItems([
                { title: "New folder", icon: folder, dir: "WebOs:desktop:/" },
                { title: "Action", icon: dashboard },
                { title: "Lock", icon: search },
                { title: "Search", icon: search },
                { title: "Change wallpaper", icon: desktop },
                { title: "Wifi", icon: wifi },
                { title: "Search", icon: search },

            ])

        }





    }, [])

    return (
        <div className="contextmenu" style={{
            top: props.ContextmenuY + "px",
            left: props.ContextmenuX + "px"
        }} >
            {ContextmenuItems.map((obj) => {
                return (
                    <Fragment>
                        <div onClick={() => {
                            if (obj.title === "Action") {
                                props.openAction()
                            }


                            else if (obj.title === "Change wallpaper") {
                                props.ChangeWallpaper()
                            }

                            else if (obj.title === "Lock") {
                                props.LOCK()
                            }


                           else if (obj.title  === "New folder") {
                                if(obj.dir){
                                    if(obj.dir==="WebOs:desktop:/"){
                                        alert("dir added")
                                    }
                                    // TODO
                                }
                                else{
                                    console.error("we can't make dir at this dir")
                                }
                            }

                        }} >
                            {/* {obj.icon && <img src={obj.icon} alt="contextmenuImg" />} */}
                            <p>{obj.title}</p>

                        </div>
                    </Fragment>

                )
            })}

        </div>
    )
}