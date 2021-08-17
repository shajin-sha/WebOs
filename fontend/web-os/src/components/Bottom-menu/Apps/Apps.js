import React, { useState, useEffect, Fragment } from "react";
import "./Apps.css";
import AppsName from "./AppsName/AppsName";

//? importing app icons--start

import music from "./src/icon/music/512c4465ed2691e8ccbdf04359c827a6_Apple_Music_256x256x32.png";
import calendar from "./src/icon/Calendar/faa52963d36163256cb8e40ba2fe404f_Calendar_256x256x32.png";
import phtots from "./src/icon/phtots/e3de429826c4c111821a35cf6af09572_Photos_256x256x32.png";
import Google_Chrome from "./src/icon/Google_Chrome/047b7dc185f36ac59460ed9d51753ba3_Google_Chrome_256x256x32.png";
import calculator from "./src/icon/calculator/3a90e0f4739d3d79439d4ebeeccb4d76_calculator_256x256x32.png";
import Spotify from "./src/icon/Spotify/bfecd7649330c6b33f5cb7b85cfc4ed3_Spotify_256x256x32.png";
import facetime from "./src/icon/facetime/37e3f8755f95bfc5b20f1022d42a4341_Facetime_256x256x32.png";
import safari from "./src/icon/New folder (2)/6743f59c61269f337b96bb2f645cc760_1620982864592_256x256x32.png";
import Folder from "./src/icon/folder/701d0db5fc4021de24f63213a19418e0_Finder Logo - Folder Edition_256x256x32.png";
import appleTv from "./src/icon/New folder (3)/eb128bc401da5631cc3e57f2e9d7d9bf_1620640022255_256x256x32.png";
import Mail from "./src/icon/mail/02b8f57bcb000ca318333ca22c5bef6c_Mail_256x256x32.png";
import Notes from "./src/icon/notes/1b361c914307109e9f019e99e0a33cb8_Notes_256x256x32.png";
import Settings from "./src/icon/settings/c0e1dce67ed84863381ab20b1d0df65e_Settings_256x256x32.png";
import map from "./src/icon/map/c38dc2205667f5f7fde6c36be6807c89_Maps_256x256x32.png";
import bin from "./src/icon/bin/22b81161ba061e2745ff9debde8ba7f7_empty_256x256x32.png";
import Terminal from "./src/icon/Terminal/b0fbdacd472ef643c57e342dd94a4a53_Terminal_256x256x32.png";
import appStore from "./src/icon/new 1000/02e2c676367ebcedf4427d5fce6e1394_1619219608380_256x256x32.png";

//? importing app icons--end

export default function Apps(props) {
  const [Apps, setApps] = useState([]);
  const [IsHover, setIsHover] = useState(false);
  const [HoverName, setHoverName] = useState("");
  const [HoverLeft, setHoverLeft] = useState(0);

  // ? making a array of obj and each obj have app name and icon (inside of useEffect ) --start

  useEffect(() => {
    setApps([
      { icon: music, name: "music" },
      { icon: Spotify, name: "spotify" },
      { icon: calculator, name: "calculator" },
      { icon: Folder, name: "find" },
      { icon: facetime, name: "face time" },
      { icon: safari, name: "safari" },
      { icon: phtots, name: "phtots" },
      { icon: calendar, name: "Calendar" },
      { icon: Google_Chrome, name: "google chrome" },
      { icon: appleTv, name: "apple tv" },
      { icon: Mail, name: "mail" },
      { icon: Notes, name: "notes" },
      { icon: Settings, name: "settings" },
      { icon: map, name: "map" },
      { icon: bin, name: "bin" },
      { icon: Terminal, name: "terminal" },
      { icon: appStore, name: "apple store" },
    ]);
  }, []);

  // ? making a array of obj and each obj have ap name and icon (inside of useEffect ) --end

  return (
    <div className="Apps">
      {Apps.map((obj) => {
        return (
          <Fragment>
            <div>
              <img
                onClick={() => {
                  props.getAppName(obj.name);
                }}
                onMouseOut={() => {
                  setIsHover(false);
                }}
                onMouseEnter={(e) => {
                  setIsHover(true);
                  setHoverLeft(e.clientX);
                  setHoverName(obj.name);
                }}
                src={obj.icon}
                alt={obj.name}
              />
            </div>
          </Fragment>
        );
      })}

      {IsHover && <AppsName left={HoverLeft} name={HoverName} />}
    </div>
  );
}
