import React from "react";

const Nav = () => {
  return (
    <>
       <div className=" nav_bar" data-aos = "fade-down" data-aos-duration="500">
        <div className="left nav_items">Siddhant Dubey</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#ex" className="nav_items">Experience</a>
          <a href="#skill" className="nav_items">Skill</a>
          <a href="#project" className="nav_items">Project</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
