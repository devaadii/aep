import React from "react";
import founderimg from "../founder/image.png";

function Founder(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <h2 id="industry-h2" style={{ textAlign: "center", fontSize: "6vh" }}>
        {props.h}
      </h2>
      <div
        id="founder"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <img id="founder-img" style={{ height: "60vh" }} src={founderimg}></img>
        <div style={{ width: "30vw", margin: "0" }}>
          <h3 id="industry-h" style={{ fontSize: "5vw" }}>
            {props.name}
          </h3>
          <p className="p-f">{props.description}</p>
          <p className="p-f"></p>
        </div>
      </div>
    </div>
  );
}

export default Founder;
