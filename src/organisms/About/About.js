import React from 'react'

// png img
import AboutImg from "../../assets/img/home/AboutImg.png";
import GreenBorder from "../../assets/img/home/GreenBorder.png";

const About = ({ aboutRef }) => {
    return (<>
            <div className="col-12 mb-md-0 mb-0 px-lg-3  " ref={aboutRef}>
                <div className="row pt-md-4 px-lg-4 ml-lg-5 ml-1 mr-lg-0 mr-1">
                    <div className="col-lg-5">
                        <p className="mb-0 about-text1"> About </p>
                        <p className="mb-0 pt-md-4 about-text2">
                            Spordy is a new generation sports platform allowing sport
                            enthusiasts to connect with each other as well as providing
                            the opportunity to grow their sports community with the social
                            media features. Developed by sports lover professionals
                            seeking to solve problems of like-minded people.
                        </p>
                    </div>
                    <div
                        className="col-lg-7 m-lg-0 m-3 py-md-0  py-lg-3  d-flex flex-column align-items-end"
                    >
                        <div className="about-img-parent py-3 " style={{width:"100%"}}>
                            <img className="about-img" src={AboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
          <img src={GreenBorder} alt="" style={{ width: "100%" }} />
        </div>
            </>
    )
}

export default About