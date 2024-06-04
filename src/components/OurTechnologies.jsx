import React from "react";
import icon from "../icons/image copy 7.png";
import { right } from "@popperjs/core";
import { Link } from "react-router-dom";

function OurTechnologies() {
  return (
    <div style={{ padding: "5vw 10vw 5vw 10vw" }}>
      <h1 style={{ textAlign: "center" }}>Our Technologies</h1>
      <div className="row">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="OurInnovationInPyrolysis"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Our innovation in Pyrolysis</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="PulseDryer"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Pulse Dryer</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="ShockCondensation"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Shock Condensation</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="GasCleansing"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Gas Cleansing</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="WasteWaterReacycling"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Waste Water Reacycling</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2">
          <Link
            to="FlowBattery"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">
                  Powder Battery Reduction Oxidation / Flow Battery
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2  ">
          <Link
            to="PyrolysisofMethane"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">
                  Pyrolysis of Methane into Green Hydrogen
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurTechnologies;
