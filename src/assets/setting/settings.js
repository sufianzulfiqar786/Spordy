  // settings for slider
  export let settings = {
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 826,
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