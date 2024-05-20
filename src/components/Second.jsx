import React from "react";
import building from "../img/image copy 2.png";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function Second() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "centre",
      }}
    >
      <div id="second-box">
        <img src={building} id="building" alt="buliding"></img>
        <div style={{ padding: "3%" }}>
          <h6>our story</h6>
          <h2>AEP Technolgy</h2>
          <hr style={{ width: "10vw", margin: "0" }}></hr>
          <p>
            Gravida dapibus lacus nam at habitant vivamus maximus. Eros donec
            convallis eget viverra sollicitudin luctus quam senectus nunc sem
            vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
            dapibus lacus nam at habitant vivamus maximus. Eros donec convallis
            eget viverra sollicitudin luctus quam senectus nunc sem vivamus.
            Fames volutpat sagittis vitae dignissim gravida. Gravida dapibus
            lacus nam at habitant vivamus maximus. Eros donec convallis eget
            viverra sollicitudin luctus quam senectus nunc sem vivamus. Fames
            volutpat sagittis vitae dignissim gravida. Gravida dapibus lacus nam
            at habitant vivamus maximus. Eros donec convallis eget viverra
            sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
            sagittis vitae dignissim gravida. Gravida dapibus lacus nam at
            habitant vivamus maximus. Eros donec convallis eget viverra
            sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
            sagittis vitae dignissim gravida. Gravida dapibus lacus nam at
            habitant vivamus maximus. Eros donec convallis eget viverra
            sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
            sagittis vitae dignissim gravida. Gravida dapibus lacus nam at
            habitant vivamus maximus. Eros donec convallis eget viverra
            sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
            sagittis vitae dignissim gravida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second;
