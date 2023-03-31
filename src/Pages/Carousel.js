import React from "react";
import "../../src/assets/css/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Group1175 from "../../src/assets/img/home/Football.svg";
import Group1176 from "../../src/assets/img/home/Football1.svg";
import Group1177 from "../../src/assets/img/home/Basket_ball.svg";
import Group1178 from "../../src/assets/img/home/Ball.svg";
import Group1179 from "../../src/assets/img/home/hockey.svg";
import Group1180 from "../../src/assets/img/home/hiking.svg";
import Group1181 from "../../src/assets/img/home/volleyball.svg";
import Group1182 from "../../src/assets/img/home/skiing.svg";
import Group1183 from "../../src/assets/img/home/baseball.svg";
import Group1184 from "../../src/assets/img/home/bounceball.svg";
import Group1185 from "../../src/assets/img/home/cycle.svg";
import Group1186 from "../../src/assets/img/home/racket.svg";

import CrouselCard from "../../src/Components/CrouselCard";

const Carousel = () => {
  // settings for slider
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
              arrows: true,
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
      {
        breakpoint: 580,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      pic: Group1177,
    },

    {
      id: 1,
      pic: Group1175, 
    },

    {
      id: 1,
      pic: Group1176,     
      },

    {
      id: 1,
      pic: Group1178,
     },
    {
      id: 1,
      pic: Group1179,
    },
    {
      id: 1,
      pic: Group1180,
    },
    {
      id: 1,
      pic: Group1181,
    },
    {
      id: 1,
      pic: Group1182,
    },
    {
      id: 1,
      pic: Group1183,
    },
    {
      id: 1,
      pic: Group1184,
    },
    {
      id: 1,
      pic: Group1185,
    },
    {
      id: 1,
      pic: Group1186,
    },
  ];

  return (
    <div className="main-slider  " style={{ height:"100%"}}>
      <Slider {...settings}>
        {data &&
          data.map((el) => {
            return (
              <div className="px-2">
                <CrouselCard el={el} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
