import React from 'react'

// svg img
import spordy_mobile from "../../assets/img/home/spordy_mobile.png";
import Button from '../../atoms/Button/Button';

const HeaderBody = ({ contactRef }) => {
    return (
        <>
            <div className="col-12 px-lg-5  welcome-backgound d-flex justify-content-md-start">
                <div className="row px-lg-2 " style={{ width: "100%" }}>
                    <div className="col-sm-7 col-12 pl-4 pt-md-5 pt-2 ">
                        <p className="mb-0  pl-md-5 pl-3 ml-0 px-md-0 pt-md-0 pb-md-0 pb-1 text-center text-sm-left  welcome-text1">
                            Welcome to your sports community app
                        </p>
                        <p className="mb-0 pl-md-5 ml-0 pt-md-5 pt-0 pl-md-0 pl-3 pr-md-0 pr-0 text-center text-sm-left welcome-text2 pt-md-3 pt-3 pb-4">
                            Feeling sporty? Find your buddy!
                        </p>
                        <div className="  pl-lg-1 pl-md-5 pt-md-4 pt-2 pb-md-0 pb-4 mt-md-1  pr-md-0  pr-1  d-flex justify-content-sm-start justify-content-center">
                             <Button contactRef={contactRef}/>
                        </div>
                    </div>

                    <div className="col-sm-5 welcome-mobile-parent  py-md-4 pt-2 pb-0 col-12 d-flex justify-content-md-start justify-content-center   ">
                        <img
                            className="remove_mobile welcome-mobile "
                            src={spordy_mobile}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 py-3 welcome-backgound-gradient"></div>
        </>
    )
}

export default HeaderBody