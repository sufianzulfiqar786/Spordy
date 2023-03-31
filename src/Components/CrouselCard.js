import React from "react";

const CrouselCard = ({el}) => {
  return (
    <div className="mt-4  pt-2 mb-5">
        <div className="row px-2 d-flex justify-content-center">
          <div className="col-12  d-flex justify-content-center  my-4 " >
            <img className="cursor-pointer" width={180} src={el.pic} alt="" />
          </div>
         
        
       
        </div>
    </div>
  );
};

export default CrouselCard;
