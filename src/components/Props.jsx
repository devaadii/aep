import React from "react";
import watsapp from "../icons/whatsapp (1).png";
import background from "../img/image.png";
import Topper from "./Topper";
import Nav from "./Nav";

function Props(props) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
        }}
      >
        <Topper />
        <Nav />
        <div
          id="home1"
          style={{
            height: "65vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 id="hi">{props.heading}</h1>
          <p id="home-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div id="buttons">
            <button id="orange-button">Get a Quote ></button>
            <button id="white-button">Get a Quote ></button>
            <a>
              <img
                className="watsappicon"
                src={watsapp}
                alt="whatsapp-icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", padding: "5vh 10vw 0 10vw" }}>
        {props.para}
      </p>
    </>
  );
}

export default Props;
