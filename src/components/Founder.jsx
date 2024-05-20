import React from "react";
import founderimg from "../founder/image.png";

function Founder() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h2 style={{ textAlign: "center", fontSize: "6vh" }}>OUR FOUNDER</h2>
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
        <div style={{ width: "30vw", height: "60vh" }}>
          <h3 style={{ fontSize: "5vh" }}>Name of the Person with that post</h3>
          <p>
            vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
            dapibus lacus nam at habitant vivamus maximus. Eros donec
          </p>
          <p>
            vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
            dapibus lacus nam at habitant vivamus maximus. Eros donec
          </p>
          <p>
            vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
            dapibus lacus nam at habitant vivamus maximus. Eros donec
          </p>
          <p>
            vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
            dapibus lacus nam at habitant vivamus maximus. Eros donec
          </p>
          <p>hbcdljkcnblkdsnbvckldsnvjldsbnvjklbdfs</p>
        </div>
      </div>
    </div>
  );
}

export default Founder;
