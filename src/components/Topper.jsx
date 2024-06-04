import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebookLogo from "../icons/image.png";
import linkedinLogo from "../icons/image copy.png";
import skypeLogo from "../icons/image copy 2.png";
import youtubeLogo from "../icons/image copy 3.png";
import email from "../icons/image copy 4.png";
import caller from "../icons/image copy 5.png";
function Topper() {
  return (
    <>
      <div id="topper">
        <div id="logo">
          <img
            className="social-media"
            src={facebookLogo}
            alt="BigCo Inc. logo"
          />
          <img
            className="social-media"
            src={linkedinLogo}
            alt="BigCo Inc. logo"
          />
          <img className="social-media" src={skypeLogo} alt="BigCo Inc. logo" />
          <img
            className="social-media"
            src={youtubeLogo}
            alt="BigCo Inc. logo"
          />
        </div>
        <div id="contact">
          <img id="email-logo" src={email} alt="email"></img>
          <span id="email-span">support@dizoil.com</span>
          <img id="call-logo" src={caller} alt="caller"></img>
          <span id="call-span">(+62) 888-800-212</span>
        </div>
      </div>
    </>
  );
}

export default Topper;
