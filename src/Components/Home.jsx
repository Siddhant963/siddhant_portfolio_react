import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Resume from "./resume/Siddhant_Dubey_Resume.pdf";
import Profile from "../../public/assets/profile.jpeg";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin, FiArrowDown } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiPhp } from "react-icons/si";

const Home = () => {
  const typedref = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedref.current, {
      strings: ["Full Stack Developer", "Backend Engineer", "React / Node.js Developer"],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 1400,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="home" id="home">
      <div className="home_inner">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="dot" />
            Available for new opportunities
          </div>

          <h1 className="hello">Hi, I'm</h1>
          <h1 className="name">
            Siddhant <span className="gradient-text">Dubey</span>
          </h1>

          <h2 className="role_line">
            <span ref={typedref} />
          </h2>

          <p className="summary">
            Full Stack Developer with 2+ years of experience building and shipping
            production web applications, with a backend focus across PHP and Node.js.
            Comfortable across the stack with React, Next.js and Tailwind CSS —
            experienced in taking features from requirement to release.
          </p>

          <div className="meta_row">
            <span>
              <FiMapPin /> Jabalpur, Madhya Pradesh, India
            </span>
            <span>
              <FaPhoneAlt /> +91 62650 04675
            </span>
            <span>
              <FaEnvelope /> siddhantdubey867@gmail.com
            </span>
          </div>

          <div className="cta_row">
            <a href={Resume} download="Siddhant_Dubey_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

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
            <a href="tel:+916265004675" className="social_icon" aria-label="Phone">
              <FaPhoneAlt />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="avatar_wrap">
            <div className="avatar_ring" />
            <div className="avatar_frame">
              <img src={Profile} alt="Siddhant Dubey" />
            </div>

            <motion.div
              className="floating_badge b1 glass"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiReact color="#61dafb" /> React.js
            </motion.div>
            <motion.div
              className="floating_badge b2 glass"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiNodedotjs color="#8cc84b" /> Node.js
            </motion.div>
            <motion.div
              className="floating_badge b3 glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiPhp color="#8892bf" /> PHP
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll_cue"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="line" />
        <FiArrowDown />
      </motion.div>
    </div>
  );
};

export default Home;
