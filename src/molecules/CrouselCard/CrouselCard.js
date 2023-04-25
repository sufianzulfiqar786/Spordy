import React from "react";

const CrouselCard = ({ element }) => {
  return (
    <div className="mt-lg-4  pt-lg-2 mb-lg-5">
      <div className="row px-2 d-flex justify-content-center">
        <div className="col-12  d-flex justify-content-center  my-4 ">
          <img className="cursor-pointer slider-img" width={180} src={element.pic} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default CrouselCard;
