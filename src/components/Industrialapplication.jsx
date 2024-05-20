import React from "react";
import oilimg from "../img/image copy 4.png";
import icon from "../icons/image copy 7.png";
import icon1 from "../icons/image copy 8.png";

function Industrialapplication() {
  return (
    <div id="industry" style={{ display: "flex" }}>
      <div style={{ margin: "20px", width: "50vw" }}>
        <h6>Application</h6>
        <h2>
          <u>Industrial</u> Application
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card  ">
              <div class="card-body ">
                <img src={icon1}></img>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img id="photooil" src={oilimg} alt="oil"></img>
      </div>
    </div>
  );
}

export default Industrialapplication;
