import React from "react";
import watsapp from "../icons/whatsapp (1).png";
import backgroundimage from "../img/image.png";
import Blogspage from "./Blogspage";

function Blogs() {
  return (
    <div id="blogs">
      <h1 id="hi">Blogs</h1>
      <h1 id="hi"> All Blogs Page</h1>

      <div id="buttons">
        <button id="orange-button">Get a Quote ></button>
        <button id="white-button">Get a Quote ></button>
      </div>
      <Blogspage />
    </div>
  );
}

export default Blogs;
