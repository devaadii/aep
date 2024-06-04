import React from "react";
import thisback from "../img/img1.png";
import icon from "../icons/image copy 7.png";
import { Link } from "react-router-dom";

function ApplicationByWaste() {
  return (
    <div
      id="abyw"
      style={{
        display: "flex",
        padding: "5vw 5vw 5vw 5vw",
        background: `url(${thisback})`,
        margin: "20px 0 20px 0",
      }}
    >
      <div style={{ width: "50vw", color: "white" }}>
        <h6>Application</h6>
        <h2>
          <u>Application</u> By Wastes
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <p>
          Penatibus condimentum enim arcu finibus litora turpis eget. Tempor
          neque feugiat
        </p>
        <p>
          Penatibus condimentum enim arcu finibus litora turpis eget. Tempor
          neque feugiat
        </p>
        <p>
          vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
          dapibus lacus nam at habitant vivamus maximus. Eros donec vivamus.
          Fames volutpat sagittis vitae dignissim gravida. Gravida dapibus lacus
          nam at habitant vivamus maximus. Eros donec convallis eget viverra
          sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
          sagittis vitae dignissim gravida.{" "}
        </p>
      </div>
      <div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="agriculturalWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Agricultural Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="fuelWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Fuel Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="plastic"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Plastic Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="municipalWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Municipal Solid Waste </h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="rubberWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Rubber Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 my-2">
            <Link
              to="bioHazardWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}></img>
                  <h5 class="card-title">Bio Hazard Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ApplicationByWaste;
