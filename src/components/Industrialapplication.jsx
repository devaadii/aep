import React from "react";
import oilimg from "../img/image copy 4.png";
import icon from "../icons/image copy 7.png";
import icon1 from "../icons/image copy 8.png";
import { Link } from "react-router-dom";

function Industrialapplication() {
  return (
    <div
      id="industry"
      style={{ display: "flex", justifyContent: "space-around", padding: "0" }}
    >
      <div id="indus" style={{ margin: "0px", width: "50vw" }}>
        <h6>Application</h6>{" "}
        <h2>
          <u>Industrial</u> Application
        </h2>
        <p className="p-i">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <p className="p-i">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <Link
              to="agriculture"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card ">
                <div className="card-body">
                  <img src={icon}></img>
                  <h5 className="card-title">Agriculture and Food industry</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <Link
              to="petro"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card  ">
                <div className="card-body ">
                  <img src={icon1}></img>
                  <h5 className="card-title">PetroChemical Industry</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <Link
              to="fmcg"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon}></img>
                  <h5 className="card-title">
                    {" "}
                    Plastic Product & FMCG Industry
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <Link
              to="waste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon}></img>
                  <h5 className="card-title">Waste Management Industry</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <Link
              to="rubber"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon}></img>
                  <h5 className="card-title">
                    Rubber <br></br> Industry
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
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
