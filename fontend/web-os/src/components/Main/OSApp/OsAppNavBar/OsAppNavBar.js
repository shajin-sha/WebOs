import React, { useState } from 'react';
import "./OsAppNavBar.css"
import SafariNavBar from '../Apps/safari/NavBar/NavBar';
import FinderNavBar from '../Apps/Finder/FinderNavBar/FinderNavBar';

const OsAppNavBar = (props) => {
  const [App, setApp] = useState(null)
  

  function getSafariRes(data){
    props.getSafariRes(data)
  }


  function getSafariQuery(Query) {
    props.getSafariQuery(Query)
}




  return (
    <div style={{
      background:props.color
    
    }} className="OsAppNavBar" >

    
      {props.app==="safari" && <SafariNavBar getSafariQuery={getSafariQuery}  getSafariRes={getSafariRes} />}

      {props.app==="find" && <FinderNavBar/> }

      
      

    </div>
  )
}

export default OsAppNavBar;