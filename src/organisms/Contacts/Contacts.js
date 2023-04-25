import React, { useState } from 'react'

// png img
import youtube from "../../assets/img/home/youtube.png";
import facebook from "../../assets/img/home/facebook.png";
import Instagram from "../../assets/img/home/Instagram.png";

// svg img
import AppleButton from "../../assets/img/home/AppleButton.svg";
import Googlebutton from "../../assets/img/home/Googlebutton.svg";

// pdf file
import terms from "../../assets/pdf/Spordy_Terms_of_Use.pdf";
import privacy from "../../assets/pdf/Spordy_Privacy_Policy.pdf";

const Contacts = ({ contactRef }) => {

  const [isGoogleButtonClick, setIsGoogleButtonClick] = useState(false);

  const googleButtonClick = () => {
    setIsGoogleButtonClick(true);
    setTimeout(() => setIsGoogleButtonClick(false), 1000); // Reset state after 1 second
  };

  const [isAppleButtonClick, setIsAppleButtonClick] = useState(false);

  const appleButtonClick = () => {
    setIsAppleButtonClick(true);
    setTimeout(() => setIsAppleButtonClick(false), 1000); // Reset state after 1 second
  };

  return (
    <div
      className="col-12 footer-background d-flex flex-column align-items-center"
      ref={contactRef}
    >
      <p className="mb-0 py-md-0 mt-md-0 mb-md-0 py-4 mt-4 mb-2 footer-text1 text-center pb-md-1">
        Join Spordy
      </p>
      <hr className="football-text-line  my-md-4" />
      <div className="footer-text2-body">
        <p className="mb-0 footer-text2 text-md-center  pt-1 pb-2">
          Don’t miss out on the new generation sports platform. Download
          Spordy to socialize and start growing your Sports Community.
        </p>
      </div>
      <div className="d-flex row mt-4 mb-3" style={{ width: "100%" }}>
        <div className="col-6  d-flex justify-content-md-end justify-content-end align-items-end">
          <img
            className={` download-icon ${isAppleButtonClick ? "apple-button-clicked" : "apple-button"
              }`}
            onClick={appleButtonClick}
            src={AppleButton}
            alt=""
          />
        </div>
        <div className="col-6 mt-md-0 mt-md-4 d-flex justify-content-md-start justify-content-start align-items-end">
          <img
            className={` download-icon ${isGoogleButtonClick
              ? "google-button-clicked"
              : "google-button"
              }`}
            onClick={googleButtonClick}
            src={Googlebutton}
            alt=""
          />
        </div>
      </div>
      <hr className="footer-bootom-line  mt-4" style={{width:"100%"}}/>
      <div className=" mt-4 pb-md-2 pb-0  ">
        <a href="https://www.instagram.com/spordy.app/">
          <img
            className="mx-1 social-icon cursor-pointer"
            src={Instagram}
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100091371783510">
          <img
            className="mx-2 social-icon cursor-pointer"
            src={facebook}
            alt=""
          />
        </a>
        <a href="https://www.youtube.com/channel/UC-OmFb7ho2Zr79e4h-pfWKQ">
          <img
            className="mx-2 social-icon cursor-pointer"
            src={youtube}
            alt=""
          />
        </a>
      </div>
      <a
        className="mb-0 mt-md-4 my-3 py-2 footer-gmail"
        href="mailto:contact@spordy.app"
      >
        contact@spordy.app
      </a>
      <div
        className="row mt-md-2 mt-0 pb-4 mb-2"
        style={{ width: "100%" }}
      >
        <div className="col-md-3 "></div>
        <div className="col-md-6  d-flex justify-content-center ">
          <p className="mb-0 footer-right">

            © SPORDY 2023. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="col-md-3 mt-md-0  mt-3 d-flex justify-content-md-end justify-content-center">
          <span className="footer-policy pr-3 cursor-pointer">
            <span
              onClick={() => {
                window.open(privacy);
              }}
            >
              PRIVACY POLICY
            </span>
          </span>
          <span className="footer-policy pr-4 cursor-pointer">
            <span
              onClick={() => {
                window.open(terms);
              }}
            >
              TERMS OF USE
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contacts