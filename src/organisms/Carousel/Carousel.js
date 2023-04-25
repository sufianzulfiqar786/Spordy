import React from "react";

// react-slick files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// css
import "../../../src/assets/css/Carousel.css";

// components
import CrouselCard from "../../molecules/CrouselCard/CrouselCard";

// crousel data file 
import {crouselData} from '../../assets/localData/crouselData'

// crousel setting file
import {settings} from '../../assets/setting/settings'

const Carousel = () => {

  return (

    <div className="col-12 pl-lg-5 pt-3 pt-lg-0  py-md-4 Carousel-background">
      <p className="mb-0 currently-play pl-lg-5 ml-lg-5 ml-3 pt-lg-4 pt-3">
        You can currently play
      </p>
      <div className="row pt-md-5 pt-4 px-4 ml-lg-2">
        <div className="main-slider " style={{ height: "100%" }}>
          <Slider {...settings}>
            {crouselData &&
              crouselData.map((element) => {
                return (
                  <div className="px-2">
                    <CrouselCard element={element} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
