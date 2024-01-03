import React, { FunctionComponent } from "react";
import {
  isMobile as libIsMobile,
  isTablet as libIsTablet
} from "react-device-detect";
import logo from '../layouts/no_code_9.png';

let isMobile: boolean;

if (process.env.NODE_ENV === "localhost") {
  isMobile = window.innerWidth < 1024;
} else {
  isMobile = libIsMobile || libIsTablet || window.innerWidth < 1024;
}

interface NavbarProps {
  window?: () => Window;
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <>
      <header
        id="header"
        className="header-sticky sticky-active"
        data-fullwidth="true" color="#090D88"
        style={{
          backgroundColor: "#090D88", // Example background color
          padding: "10px 0", // Example padding
        }}
      >
        <div className="header-inner " style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            top: "0",
            position: "fixed",
            margin: "0 auto",
            width: "100%",
            backgroundColor: "#090D88", // Blue background color for the header-inner
          }}>
          <div className="container">
            <div id="logo">
              <a
                href="/"
                className="logo vcenter"
                data-src-dark="/img/img-logo.png"
                style={{ fontFamily: "Cassannet", fontSize: "30px" , color:"white" }}
              >
                <img
                  src={logo}
                  alt="Form Builder"
                  style={
                    isMobile
                      ? { marginTop: "7px", display: "inline-block" }
                      : { display: "inline-block" }
                  }
                  className={isMobile ? "p-l-30 p-r-20" : "p-r-20"}
                />
                Low Code
              </a>
            </div>
            <nav>
              <ul className="navbar"
                style={{
                  listStyleType: "none", // Removes bullet points
                  display: "flex", // Displays items in a row
                  justifyContent: "center", // Centers the items horizontally
                  gap: "20px", // Example gap between items
                  margin: "0", // Removes default margin
                  padding: "0", // Removes default padding
                }}
              >
                <li>
                  <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a>
                </li>
                <li>
                  <a href="/about" style={{ textDecoration: "none", color: "white" }}>About</a>
                </li>
                <li>
                  <a href="/products" style={{ textDecoration: "none", color: "white" }}>Products</a>
                </li>
                <li>
                  <a href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
