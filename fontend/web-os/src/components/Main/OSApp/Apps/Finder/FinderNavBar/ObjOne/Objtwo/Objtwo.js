import React, { Fragment } from 'react';
import "./Objtwo.css";
import search from "./src/search.svg";

export default function Objtwo() {
    return (
        <Fragment>


            <div className="Objtwo" >
                <img className="iconObjTwo" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-view-files-icons-icon.png" alt="search" />
                <img className="iconObjTwo" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-view-files-list-icon.png" alt="search" />
                <img className="iconObjTwo" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-view-files-columns-icon.png" alt="search" />
                <img className="iconObjTwo" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-view-files-gallery-icon.png" alt="search" />

            </div>

            <div>
                <img src={search} alt="" />
            </div>
        </Fragment>

    )
}
