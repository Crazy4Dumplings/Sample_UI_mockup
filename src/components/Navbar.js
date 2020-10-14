import React from "react";

import "../styles/Navbar.css";

function Navbar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <>
      <div className="topnav" id="myTopnav">
        <div className="container">
          <a href="/" className="logo">
            Logo
          </a>
          <div className="topnav-right">
            <a href="javascript:void(0);" className="hide">
              &nbsp;
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
            <a href="/" className="emp">
              Employee
            </a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
