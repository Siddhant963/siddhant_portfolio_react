import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="social_row">
        <a href="https://github.com/sidddhant963" target="_blank" rel="noreferrer" className="social_icon" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-dubey0867/" target="_blank" rel="noreferrer" className="social_icon" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="mailto:siddhantdubey867@gmail.com" className="social_icon" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="#home"
          className="back_top"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </a>
      </div>
      <h5>© {year} Siddhant Dubey. Built with React &amp; Framer Motion.</h5>
    </div>
  );
}
