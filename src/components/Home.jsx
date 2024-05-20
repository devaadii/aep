import React from "react";
import watsapp from "../icons/whatsapp (1).png";

function Home() {
  return (
    <div id="home1">
      <h1 id="hi">Energy Resource & Oil Exploration project.</h1>
      <p id="home-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis, pulvinar dapibus leo.
      </p>
      <div id="buttons">
        <button id="orange-button">Get a Quote ></button>
        <button id="white-button">Get a Quote ></button>
        <a>
          <img className="watsappicon" src={watsapp} alt="whatsapp-icon"></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
