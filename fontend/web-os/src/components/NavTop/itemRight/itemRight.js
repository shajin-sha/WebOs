import React, { useState, useEffect } from "react";
import "./itemRight.css";
import search from "./src/search.svg";
import wifiIcon from "./src/wifi.svg";
import dashboard from "./src/dashboard_black_24dp.svg";
import battery from "./src/battery.svg";
import { OsDate } from "../../Main/DataAndTime/Date";
import acton from "./src/download.svg";
import nonWifi from "./src/wifi_off_black_24dp.svg";

export default function ItemRight(props) {
  var today = new Date();
  const [Time, setTime] = useState(today.getHours() + ":" + today.getMinutes());
  const [Online, setOnline] = useState(false);

  useEffect(() => {
    //? update oSTime vary 60s--start

try {
  setOnline(window.navigator.onLine)
} catch (err) {
  console.error("use chrome")
}

    setInterval(() => {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      setTime(time);
    }, 60000);
    //? update oSTime vary 60s--end

    // ? OsWifi--start

    // !TODO

    // ? OsWifi--end
  }, []);

  // ? set EventListener to Listen online or offline--start

  window.addEventListener("online", () => {
    try {
      setOnline(window.navigator.onLine);
    } catch (err) {
      console.error("use chrome")
    }
    
  });
  window.addEventListener("offline", () => {
    try {
      setOnline(window.navigator.onLine);
    } catch (err) {
      console.error("use chrome")
    }
  });

  // ? set EventListener to Listen online or offline--end

  return (
    <div className="itemRight">
      {/* <img src={battery} alt="wifi" /> */}
      <img src={Online ? wifiIcon : nonWifi} alt="wifi" />
      <img src={dashboard} alt="wifi" />
      <img src={search} alt="search" />
      <img
        onClick={() => {
          props.acton();
        }}
        src={acton}
        alt="search"
      />

      <div className="dateAndTime">
        <p className="Date">{OsDate}</p>
        <p className="Time">{Time}</p>
      </div>
    </div>
  );
}
