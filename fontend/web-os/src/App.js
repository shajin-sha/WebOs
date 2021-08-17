import './App.css';
import React, { useState, useEffect } from "react"
import Desktop from './components/Desktop/Desktop';
import NewUser from './components/NewUser/NewUser';

function App() {
  const [ShowDesktop, setShowDesktop] = useState(false)


  useEffect(() => {

    let user = localStorage.getItem("userName")

    if (user != null) {
      setShowDesktop(true)
      if (user != "undefined")
        setShowDesktop(true)
    }


  }, [])

  function showDesktop() {
    setShowDesktop(true)
  }

  return (
    <div className="App">


      {ShowDesktop ? <Desktop /> : <NewUser showDesktop={showDesktop} />}



    </div>
  );
}

export default App;