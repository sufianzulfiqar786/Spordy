import React from 'react'

// svg img
import logo from "../../assets/img/home/logo.svg";

const Header = ({contactRef, aboutRef}) => {
  return (
    <div className="col-12 py-md-2  py-2 header-col d-flex align-items-center">
            <div className="row px-md-3 px-1 header-col-body">
              <div className="col-md-6 col-9 pl-lg-0 pl-4  d-flex align-items-center justify-content-start  ">
                <img className="pl-md-5 logo-img  " src={logo} alt="" />
                <span className="logo-text pl-md-3">SPORDY</span>
              </div>
              <div className="col-md-6 col-3  pl-0 pr-1  d-flex align-items-center justify-content-end">
                <a className="header-link cursor-pointer">
                  <span
                    className="header-menu"
                    onClick={() =>
                      contactRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contact
                  </span> 
                </a>
                <a className="header-link cursor-pointer">
                  <span
                    className="header-menu px-md-4 pl-md-0 pl-md-3 pl-2"
                    onClick={() => {
                      aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </span> 
                </a>
              </div>
            </div>
          </div>
  )
}

export default Header