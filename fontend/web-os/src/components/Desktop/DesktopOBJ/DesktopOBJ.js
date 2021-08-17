import React, { useEffect, useState } from "react";
import "./DesktopOBJ.css";
import iconFo from "./src/Folder-icon.svg";
import axios from "axios";

export default function DesktopOBJ() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    // ? desktop data array with name of the obj and icon
    // !TODO--start
    //* get data from backend database
    //* data with icon and name of the obj
    //* json format data
    // !TODO--start
    let userData = {
        userName:localStorage.getItem("userName")
    }

    axios.post("/userobj",userData).then((res)=>{
        console.log(res.data)
    })

    let data = [
      { icon: iconFo, name: "My file" },
      { icon: iconFo, name: "work" },
      { icon: iconFo, name: "coding" },
      { icon: iconFo, name: "projects" },
    ];

    setData(data);
  }, []);

  return (
    <div className="desktopOBJ">
      <div className="SafeDEkSTOPObj">
        {Data.map((obj) => {
          return (
            <div className="OBJ">
              <img className="iconFo" src={obj.icon} alt="icon" />
              <p>{obj.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
