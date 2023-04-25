import React, { useRef } from "react";

// css
import "../../src/assets/css/Spordy.css";

// components
import Carousel from "../organisms/Carousel/Carousel";
import Header from "../molecules/Header/Header";
import Contacts from "../organisms/Contacts/Contacts";
import Partner from "../organisms/Partner/Partner";
import About from "../organisms/About/About";
import HeaderBody from "../organisms/HeaderBody/HeaderBody";

const Home = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div
      className="fluid-container "
      style={{ overflowX: "hidden", widht: "100%" }}
    >
      <div className="row " style={{ overflow: "hidden" }}>
        <Header aboutRef={aboutRef} contactRef={contactRef} />
        <HeaderBody contactRef={contactRef} />
        <Partner />


        
            <Carousel />
        


        <About aboutRef={aboutRef} />
        
        <Contacts contactRef={contactRef} />
      </div>
    </div>
  );
};

export default Home;
