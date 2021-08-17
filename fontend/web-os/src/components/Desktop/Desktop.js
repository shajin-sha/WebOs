import React, { useState } from "react";
import NavTop from "../NavTop/NavTop";
import "./Desktop.css";
import Contextmenu from "../Main/contextmenu/contextmenu";
import ActionControl from "./Control/Control";
import OSApp from "../Main/OSApp/OSApp";
import BottommMenu from "../Bottom-menu/BottommMenu";
import DesktopOBJ from "./DesktopOBJ/DesktopOBJ";
import Lock from "../Lock/Lock";
import NewDir from "../Main/NewDir/NewDir"

//? importing default background

//!todo make bg size small

import wall1 from "./src/big-sur.jpg";
import wall2 from "./src/wall-Day.jpg";
import wall3 from "./src/wall-Night.jpg";
import wall4 from "./src/big-sur2.jpg";
import wall5 from "./src/macosmontereywallpaper-1.jpg";
import axios from "axios";

//? importing default background

export default function Desktop() {
  const [ContextmenuOs, setContextmenuOs] = useState(false);
  const [ContextmenuY, setContextmenuY] = useState(0);
  const [ContextmenuX, setContextmenuX] = useState(0);
  const [Control, setControl] = useState(false);
  const [OpendApp, setOpendApp] = useState(null);
  const [OpenMin, setOpenMin] = useState(false);
  const [Num, setNum] = useState(0);
  const [WallpaperNow, setWallpaperNow] = useState(wall5);
  const [IsLock, setIsLock] = useState(true);

  //? setting EventListener to Listen contextmenu then get the offsetX and offsetY (X axis,and Y axis) after that display custom contextmenu--start

  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    setContextmenuX(e.offsetX);
    setContextmenuY(e.offsetY);
    setContextmenuOs(true);
  });

  //? setting EventListener to Listen contextmenu then get the offsetX and offsetY (X axis,and Y axis) after that display custom contextmenu---end

  //? setting EventListener to Listen click if so hide contextmenu---start

  window.addEventListener("click", () => {
    setContextmenuOs(false);
  });

  //? setting EventListener to Listen click if so hide contextmenu---end

  //* open Action menu from navTop (  calling function from child component )---start

  function openAction() {
    if (Control) {
      setControl(!Control);
    } else {
      setControl(!Control);
    }
  }

  //* open Action menu from navTop (  calling function from child component )---end

  //* open OSAPP from BottommMenu (  calling function from child component )---start

  function getAppName(name) {
    setNum(Num + 1);
    setOpendApp(name);
    if (name === OpendApp) {
      setOpenMin(true);
    } else {
      setOpenMin(false);
      console.log(name);
    }
  }

  //* open OSAPP from BottommMenu (  calling function from child component )---end

  //* close OSAPP from OSAPP close button (  calling function from child component )--start

  function closeApp() {
    setOpendApp(false);
  }

  //* close OSAPP from OSAPP close button (  calling function from child component )---end

  // *change wallpaper on one click ( calling function from child component ) calling from Contextmenu--start

  function ChangeWallpaper() {
    //?changing wallpapers--start
    // have to keep user wallpaper in database (sending wallpaper name to backend using axios post req )

    if (WallpaperNow === wall5) {
      setWallpaperNow(wall4);
      const WallName = { wall: "wall4" };
      axios.post("/userconfig", WallName);
    } else if (WallpaperNow === wall4) {
      setWallpaperNow(wall3);
      const WallName = { wall: "wall3" };
      axios.post("/userconfig", WallName);
    } else if (WallpaperNow === wall3) {
      setWallpaperNow(wall2);
      const WallName = { wall: "wall2" };
      axios.post("/userconfig", WallName);
    } else if (WallpaperNow === wall2) {
      setWallpaperNow(wall1);
      const WallName = { wall: "wall1" };
      axios.post("/userconfig", WallName);
    } else if (WallpaperNow === wall1) {
      setWallpaperNow(wall5);
      const WallName = { wall: "wall5" };
      axios.post("/userconfig", WallName);
    }

    //?changing wallpapers--end
  }

  // *change wallpaper on one click ( calling function from child component ) calling from Contextmenu--end

  function LOCK() {
    setIsLock(false);
  }
  function LOCK2() {
    setIsLock(true);
  }

  return (
    <div className="Desktop">
      {IsLock && <Lock LOCK={LOCK} />}

      <NavTop action={openAction} />

      <img
        className="wallpaper1"
        style={{
          width: "100%",
          height: "100%",
          userSelect: "none",
          msUserSelect: "none",
        }}
        src={WallpaperNow}
        alt="wallpaper"
      />


      <NewDir />

      {ContextmenuOs && (
        <Contextmenu
          ChangeWallpaper={ChangeWallpaper}
          openAction={openAction}
          LOCK={LOCK2}
          ContextmenuItemsObj={OpendApp ? OpendApp : "desktop"}
          ContextmenuX={ContextmenuX}
          ContextmenuY={ContextmenuY}
        />
      )}

      <DesktopOBJ />

      {OpendApp && (
        <OSApp
          openMin={OpenMin}
          Num={Num}
          appid={OpendApp}
          closeApp={closeApp}
        />
      )}

      <BottommMenu getAppName={getAppName} />
      {Control ? <ActionControl /> : null}
    </div>
  );
}

//*  make a full screen request
//TODO open app full screen ful button click

// eslint-disable-next-line no-lone-blocks
{
  /* document.getElementById("root").requestFullscreen() */
}
