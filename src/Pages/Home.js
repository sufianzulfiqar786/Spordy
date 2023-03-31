import React, { useRef, useState } from "react";
import "../../src/assets/css/Spordy.css";
import logo from "../assets/img/home/logo.svg";
import Partners from "../assets/img/home/Partners.png";
import LocationIcon from "../assets/img/home/LocationIcon.svg";
import ProgressIcon from "../assets/img/home/ProgressIcon.svg";
import player_first from "../assets/img/home/player_first.svg";
import MobilesPics from "../assets/img/home/MobilesPics.png";
import GreenBorder from "../assets/img/home/GreenBorder.png";
import Googlebutton from "../assets/img/home/Googlebutton.svg";

// png img
import AppleButton from "../assets/img/home/AppleButton.png";
import youtube from "../assets/img/home/youtube.png";
import facebook from "../assets/img/home/facebook.png";
import Instagram from "../assets/img/home/Instagram.png";
import AboutImg from "../assets/img/home/AboutImg.png";
import spordy_mobile from "../assets/img/home/spordy_mobile.png";
import Carousel from "./Carousel";

const Home = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const [isGoogleButtonClick, setIsGoogleButtonClick] = useState(false);

  const googleButtonClick = () => {
    setIsGoogleButtonClick(true);
    console.log("first");
    setTimeout(() => setIsGoogleButtonClick(false), 1000); // Reset state after 1 second
  };

  const [isAppleButtonClick, setIsAppleButtonClick] = useState(false);

  const appleButtonClick = () => {
    setIsAppleButtonClick(true);
    console.log("first");
    setTimeout(() => setIsAppleButtonClick(false), 1000); // Reset state after 1 second
  };

  return (
    <>
      <div className="fluid-container " style={{ overflowX: "hidden", widht:"100%" }}>
        <div className="row " style={{ overflow: "hidden" }}>
          <div className="col-12 py-md-2  py-2 header-col d-flex align-items-center">
            <div className="row px-md-3 px-1 header-col-body">
              <div className="col-md-6 col-9 pl-lg-0 pl-4  d-flex align-items-center justify-content-start  ">
                <img className="pl-md-5 logo-img  " src={logo} alt="" />
                <span className="logo-text pl-md-3">SPORDY</span>
              </div>

              <div className="col-md-6 col-3  pl-0 pr-1  d-flex align-items-center justify-content-end">
                <a className="header-link cursor-pointer" >
                  {" "}
                  <span
                    className="header-menu"
                    onClick={() =>
                      contactRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {" "}
                    Contact
                  </span>{" "}
                </a>
                <a className="header-link cursor-pointer" >
                  {" "}
                  <span
                    className="header-menu px-md-4 pl-md-0 pl-md-3 pl-2"
                    onClick={() => {
                      aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {" "}
                    About
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 px-lg-5  welcome-backgound d-flex justify-content-md-start" >
            <div className="row px-lg-4 " style={{width:"100%"}}>
              <div className="col-sm-7 col-12 pl-4 pt-md-5 pt-0 ">
                <p className="mb-0 pl-md-5 pl-3 ml-0 px-md-0 pt-md-2  text-center text-sm-left  welcome-text1">
                  {" "}
                  Welcome to your sports community app{" "}
                </p>
                <p className="mb-0 pl-md-5 ml-0  pl-md-0 pl-3 pr-md-0 pr-0 text-center text-sm-left welcome-text2 pt-md-3 pt-3 pb-4">
                  {" "}
                  Feeling sporty? Find your buddy!{" "}
                </p>
                <div className="pl-lg-1 pl-md-5  pr-md-0 mt-md-0 pr-1  d-flex justify-content-sm-start justify-content-center">
                  <a >
                    {" "}
                    <button
                      className=" ml-3 ml-md-0 ml-lg-5 welcome-btn mt-md-4    "
                      onClick={() =>
                        contactRef.current.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Download Spordy
                    </button>{" "}
                  </a>
                </div>
              </div>

              {/* <div className="col-lg-4 d-flex justify-content-center mt-4"> */}
              <div className="col-sm-5 pl-lg-4 py-md-4 pb-5 pl-5 col-12 d-flex justify-content-md-start  justify-content-center ">
                <img
                  className="remove_mobile welcome-mobile"
                  src={spordy_mobile}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-12 py-3 welcome-backgound-gradient"></div>

          <div className="col-12 px-lg-5  mt-4 pt-md-2  sport-partner-background ">
            <div className="row pt-md-4 px-lg-4 mx-lg-5 mx-1">
              <div className="col-lg-6">
                <p className="mb-0 partner-text1"> Find your sports partner </p>
                <p className="mb-0 pt-md-1 pt-3 pb-md-0 pb-3 partner-text2 ">
                  Create an Event with your desired location and level to easily
                  connect with other people.
                </p>
              </div>

              <div className="col-lg-2 pr-lg-0 col-0"></div>

              <div className="col-lg-4 pl-lg-0 mx-lg-0 mx-2  d-flex flex-column    align-items-center">
                <img
                  className="partner-event-img pb-md-0 pb-2"
                  style={{ width: "100%" }}
                  src={Partners}
                  alt=""
                />

                <div className="row partner-event  mt-1">
                  <p className=" mb-0 event-card pl-4 pt-2">
                    {" "}
                    Devon’s Soccer Event
                  </p>

                  <div className="col-12 px-4 d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-start">
                      {" "}
                      <img className="pl-1" src={LocationIcon} alt="" />{" "}
                      <span className="pl-2   event-card-text1  ">
                        {" "}
                        35 James Street
                      </span>
                    </span>
                    <span className=" event-card-text3 ">
                      {" "}
                      Fri. 25 <br /> @ 9pm
                    </span>
                  </div>

                  <div className="col-12 px-4 d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      {" "}
                      <img className="" src={ProgressIcon} alt="" />{" "}
                      <span className="pl-2   event-card-text1  ">
                        {" "}
                        Intermediate
                      </span>
                    </span>
                    <span className=" event-card-text4 pr-1 pt-md-1 ">
                      {" "}
                      8/8 Going
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* partner 2nd */}

            <div className="row pb-lg-2 px-lg-4 mx-1">
              <div className="col-md-6 order-md-1 order-2 d-flex  align-items-center justify-content-center">
                <img className="players-play" src={player_first} alt="" />
              </div>

              <div className="col-md-6 pr-2 pr-lg-5 order-md-2 order-1 d-flex flex-column justify-content-center">
                <p className="mb-0 partner-text1   pt-md-0 pt-4 ">
                  {" "}
                  Explore sports activities near you{" "}
                </p>
                <p className="mb-0 pt-1 partner-text2     pt-md-0 pt-3">
                  Join any sport event created by other Players and meet
                  like-minded people around you.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 pl-lg-5 my-lg-4 pt-lg-4 pt-2 ">
            <div className="row pt-4 pl-lg-4 ml-lg-5 ml-1 mr-lg-0 mr-1">
              <div className="col-md-6">
                <p className="mb-0 partner-text1">
                  {" "}
                  Share your experiences and socialize{" "}
                </p>
                <p className="mb-0  partner-text2   pt-md-1 pt-3">
                  Interact and expand your sports community by posting pictures
                  and videos from the sport events.{" "}
                </p>
              </div>

              <div className="col-md-6 pt-md-0 pt-3 d-flex flex-column align-items-end">
                <img
                  style={{ width: "100%" }}
                  className=""
                  src={MobilesPics}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-12 pl-lg-5  py-md-4 Carousel-background">
            <p className="mb-0 currently-play pl-lg-5 ml-lg-5 ml-3 pt-lg-4 pt-3">
              You can currently play
            </p>
            <div className="row pt-md-5 pt-4 px-4 ml-lg-2">
              <Carousel />
            </div>
          </div>

          <div className="col-12 mb-md-0 mb-0 px-lg-3  " ref={aboutRef}>
            <div className="row pt-md-4 px-lg-4 ml-lg-5 ml-1 mr-lg-0 mr-1">
              <div className="col-md-5">
                <p className="mb-0 about-text1"> About </p>
                <p className="mb-0 pt-md-1 about-text2">
                  Spordy is a new generation sports platform allowing sport
                  enthusiasts to connect with each other as well as providing
                  the opportunity to grow their sports community with the social
                  media features. Developed by sport lover professionals seeking
                  to solve problems of like-minded people.{" "}
                </p>
              </div>

              <div className="col-md-7 py-md-0  py-3  d-flex flex-column align-items-end">
                <img className="about-img" src={AboutImg} alt="" />
              </div>
            </div>
          </div>

          <div className="col-12">
            <img src={GreenBorder} alt="" style={{ width: "100%" }} />
          </div>

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

            <div className="d-flex row mt-4 mb-3 " style={{ width: "100%" }}>
              <div className="col-6  d-flex justify-content-md-end justify-content-end align-items-end">
                <img
                  className={` ${
                    isAppleButtonClick ? "apple-button-clicked" : "apple-button"
                  }`}
                  onClick={appleButtonClick}
                  src={AppleButton}
                  alt=""
                />
              </div>

              <div className="col-6 mt-md-0 mt-md-4 d-flex justify-content-md-start justify-content-start align-items-end">
                <img
                  className={` ${
                    isGoogleButtonClick
                      ? "google-button-clicked"
                      : "google-button"
                  }`}
                  onClick={googleButtonClick}
                  src={Googlebutton}
                  alt=""
                />
              </div>
            </div>

            <hr className="footer-bootom-line  mt-4" />

            <div className=" mt-4 ">
             <a href="https://www.instagram.com/spordy.app/"> <img className="mx-1 social-icon cursor-pointer" src={Instagram} alt="" /> </a>
              <a href="https://www.facebook.com/profile.php?id=100091371783510">  <img className="mx-1 social-icon cursor-pointer" src={facebook} alt="" /> </a>
              <a href="https://www.youtube.com/channel/UC-OmFb7ho2Zr79e4h-pfWKQ"> <img className="mx-1 social-icon cursor-pointer" src={youtube} alt="" /></a>          </div>

            <a
              className="mb-0 my-md-5 my-3 py-2 footer-gmail"
              href="mailto:app.spordy@gmail.com"
            >
              app.spordy@gmail.com
            </a>

            <div className="row pb-4" style={{ width: "100%" }}>
              <div className="col-md-3 "></div>

              <div className="col-md-6  d-flex justify-content-center ">
                <p className="mb-0 footer-right">
                  {" "}
                  © SPORDY 2023. ALL RIGHTS RESERVED.{" "}
                </p>
              </div>

              <div className="col-md-3 mt-md-0 mt-3 d-flex justify-content-md-end justify-content-center">
                <span className="footer-policy pr-3 cursor-pointer">PRIVACY POLICY</span>
                <span className="footer-policy pr-4 cursor-pointer">TERMS OF USE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
