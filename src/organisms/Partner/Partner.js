import React from 'react'

// svg img
import LocationIcon from "../../assets/img/home/LocationIcon.svg";
import ProgressIcon from "../../assets/img/home/ProgressIcon.svg";
import player_first from "../../assets/img/home/player_first.svg";

// png img
import MobilesPics from "../../assets/img/home/MobilesPics.png";
import Partners from "../../assets/img/home/Partners.png";

const Partner = () => {
  return (
    <>
      <div className="col-12 px-lg-5  mt-4 pt-md-2  sport-partner-background ">
        <div className="row pt-md-4 px-lg-4 mx-lg-5 mx-1">
          <div className="col-lg-6 pt-3 pt-lg-0">
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
              src={Partners}
              alt=""
            />
            <div className="row partner-event  mt-1">
              <p className=" mb-0 event-card pl-4 pt-2">
                Devon’s Soccer Event
              </p>
              <div className="col-12 px-4 d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-start">
                  <img className="pl-1" src={LocationIcon} alt="" /> 
                  <span className="pl-2   event-card-text1  ">
                    35 James Street
                  </span>
                </span>
                <span className=" event-card-text3 ">
                  Fri. 25 <br /> @ 9pm
                </span>
              </div>
              <div className="col-12 px-4 d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center">
                  <img className="" src={ProgressIcon} alt="" /> 
                  <span
                    className="pl-2   event-card-text1  "
                    style={{ color: "#E1AA1D" }}
                  >
                    Intermediate
                  </span>
                </span>
                <span className=" event-card-text4 pr-1 pt-md-1 ">
                  8/8 Going
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* partner 2nd */}

        <div className="row pb-lg-2 px-lg-4 mx-1">
          <div className="col-md-6 pt-lg-0 pt-3 order-md-1 order-2 d-flex  align-items-center justify-content-center">
            <img className="players-play" src={player_first} alt="" />
          </div>
          <div className="col-md-6 pt-3 pt-lg-0 pr-2 pr-lg-5 order-md-2 order-1 d-flex flex-column justify-content-center">
            <p className="mb-0 partner-text1   pt-md-0 pt-4 ">
              Explore sports activities near you 
            </p>
            <p className="mb-0 pt-1 partner-text2     pt-md-0 pt-3">
              Join any sport event created by other Players and meet
              like-minded people around you.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 pl-lg-5 my-lg-4  pt-3 ">
        <div className="row  pl-lg-4 ml-lg-5 ml-1 mr-lg-0 mr-1">
          <div className="col-md-6 pt-3 pt-lg-0">
            <p className="mb-0 partner-text1">
              Share your experiences and socialize 
            </p>
            <p className="mb-0  partner-text2  pr-lg-5 pt-md-1 pt-3">
              Interact and expand your sports community by posting pictures
              and videos from the sport events. 
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
    </>
  )
}

export default Partner