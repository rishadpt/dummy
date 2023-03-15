import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcSimCard } from "react-icons/fc";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
      className="App"
    >
      <div className="main_container">
        {!open ? (
          <img src="/bg.jpg" alt="" />
        ) : (
          <div className="form">
            <h1>FACEBOOK</h1>
            <div className="input_wrapper">
              <div>
                <div className="input_wrapper_wrapper">
                  <BsFacebook />
                  <input placeholder="enter the facebook id" type="text" />
                </div>
                <div className="simwrapper">
                  <FcSimCard />
                  <p></p>
                </div>
              </div>

              <div>
                <div className="input_wrapper_wrapper">
               
                  <FcSimCard />
                  <input placeholder="enter the mobile number" type="text" />
                </div>
                <div className="simwrapper">
                <BsFacebook />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
