import React, { useState, useEffect } from "react";
import "./lock.css";
import axios from "axios";
import userIcon from "./src/user.svg";
import { OsDate } from "../Main/DataAndTime/Date";
import { useTransition, animated } from "react-spring";
import lockOpen from "./src/lock_open_black_24dp.svg";
import lockIcon from "./src/lock_white_24dp.svg";
import loginIcon from "./src/login_black_24dp.svg";

function Lock(props) {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [IsUser, setIsUser] = useState(false);
  const [Err, setErr] = useState(false);
  var today = new Date();
  const [IsVisible, setIsVisible] = useState(true);
  const [Time, setTime] = useState(today.getHours() + ":" + today.getMinutes());

  const transition = useTransition(IsVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    let user = localStorage.getItem("userName");

    if (user != null) {
      if (user != "undefined") {
        setIsUser(true);
      }
    }

    //? update oSTime vary 60s--start

    setInterval(() => {
      var today = new Date();
        var time = today.getHours() + ":" + "0" + today.getMinutes();
      setTime(time);
    }, 60000);
    //? update oSTime vary 60s--end
  }, []);

  return (
    <div>
      {transition((style, lock) => (
        <animated.div style={style} className="lock">
          <img className="LockIcon" src={lockIcon} alt="" />

          <div className="lockTimeAndDate">
            <h1>{Time}</h1>
            <p>{OsDate}</p>
          </div>

          <img className="UserIcon" src={userIcon} alt="User logo" />

          <div className="lockUserINputs">
            {IsUser ? null : (
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                  setErr(false);
                }}
                placeholder="userName"
                type="text"
              />
            )}

            <div className="Password">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErr(false);
                }}
                placeholder="Password"
                type="password"
              />

              <button
                onClick={() => {
                    // takeing user name from localStorage and assign to ---user---
                  let user = localStorage.getItem("userName");

                  if (user != null) {
                    let data = { UserName: user, Password };
                    if (user != "undefined") {
                      let data = { UserName: user, Password };
                    //   sending post req to backend server with axios--start
                      axios.post("/Lock", data).then((res) => {
                        if (res.data.state === true) {
                          setIsVisible(false);
                          setTimeout(() => {
                            props.LOCK();
                          }, 100);
                        } else {
                          setErr(true);
                        }
                      });
                      //   sending post req to backend server with axios--end
                    }
                  } else {
                    //   if user name not in the localStorage aks for user name to user and send axios post req--start
                    let data = { UserName, Password };
                    axios.post("/Lock", data).then((res) => {
                        // if server gives a true res that mean user can login (password is macing to date base password(hash))
                      if (res.data.state === true) {
                        setIsVisible(false);
                        setTimeout(() => {
                          props.LOCK();
                        }, 100);
                      } else {
                        setErr(true);
                      }
                    });
                    //   if user name not in the localStorage aks for user name to user and send axios post req--end
                  }
                }}
              >
                Done
                {/* <img src={loginIcon} alt="icon" /> */}
              </button>
            </div>
            <p className="UserNAMELock">{localStorage.getItem("userName")}</p>
            {Err && <p className="ErrLock">wrong password</p>}
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default Lock;
