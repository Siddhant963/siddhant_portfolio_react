import React from "react";
import Resume from "./resume/resumee.pdf";
import Profile from "../../public/assets/sid.png"
const Home = () => {
  return (
    <>
      <div className=" home">
        <div className="left">
          <h1>Backend developer</h1>
          <a
            href={Resume}
            download="Siddhant_Dubey_Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="image">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
