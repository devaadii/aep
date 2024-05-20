import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "black ",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          backgroundColor: "#FF6E1D",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "8vh",
          borderRadius: "5px",
        }}
      >
        <div style={{ color: "#fff", fontSize: "2vh" }}>
          It will help you improve your writing<br></br> & bring ideas more
          clearly.
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              fontWeight: "700",
            }}
          >
            Contact Us Now
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", color: "#fff" }}
        >
          <h6>Company</h6>
          <a>About</a>
          <a>Feature</a>
          <a>Works</a>
          <a>Career</a>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", color: "#fff" }}
        >
          <h6>Company</h6>
          <a>About</a>
          <a>Feature</a>
          <a>Works</a>
          <a>Career</a>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", color: "#fff" }}
        >
          <h6>Company</h6>
          <a>About</a>
          <a>Feature</a>
          <a>Works</a>
          <a>Career</a>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", color: "#fff" }}
        >
          <h6>Company</h6>
          <a>About</a>
          <a>Feature</a>
          <a>Works</a>
          <a>Career</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
