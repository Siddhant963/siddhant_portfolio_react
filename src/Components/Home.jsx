import React, { useEffect, useLayoutEffect, useRef } from "react";
import Resume from "./resume/resumee.pdf";
import Profile from "../../public/assets/sid.png"
import Typed from "typed.js";

const Home = () => {
  const typedref = useRef(null);
  useEffect(() =>{
    const typed = new Typed(typedref.current, {
      strings: [" Full Stack Developer", 
        "App Developer",
         "Database Engineer"],
      typeSpeed: 75,
      backSpeed: 30,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  } )
  return (
    <>
      <div className=" home" id="home">
        <div className="left" data-aos="fade-right" data-aos-durestion="2000">
          <h1>I am </h1>
          <h1 ref={typedref} className="span"> I am a</h1>
          <a
            href={Resume}
            download="Siddhant_Dubey_Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-durestion="2000">
          <div className="image">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
