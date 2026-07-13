import React from "react";
import { motion } from "framer-motion";
import contact from "./data/contact.json";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const icons = {
  email: <FaEnvelope />,
  phone: <FaPhoneAlt />,
  linkedin: <FaLinkedinIn />,
  github: <FaGithub />,
  location: <FaMapMarkerAlt />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Contact</h2>
          <p className="section-desc">
            Open to full-stack and backend roles, freelance work, or just a good
            conversation about what you're building.
          </p>
        </motion.div>

        <div className="contact_grid">
          {contact.map((data, i) => (
            <motion.a
              href={data.link}
              target={data.icon === "location" ? "_blank" : undefined}
              rel="noreferrer"
              className="contact_card glass"
              key={data.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="icon">{icons[data.icon]}</div>
              <div className="info">
                <div className="label">{data.name}</div>
                <div className="value">{data.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact_cta glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="orb orb-1" style={{ opacity: 0.15, top: -100, left: -60 }} />
          <h3>
            Let's build something <span className="gradient-text">worth shipping.</span>
          </h3>
          <p>
            Have a project in mind or a role to fill? My inbox is always open.
          </p>
          <a href="mailto:siddhantdubey867@gmail.com" className="btn btn-primary">
            Say Hello
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
