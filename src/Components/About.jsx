import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaServer } from "react-icons/fa";

const stats = [
  { icon: <FaBriefcase />, num: "2+", label: "Years of Experience" },
  { icon: <FaServer />, num: "2", label: "Production Apps Owned End-to-End" },
  { icon: <FaCode />, num: "4+", label: "Freelance & Independent Projects Shipped" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Backend-focused builder, full-stack by trade</h2>
          <p className="section-desc" style={{ marginBottom: 40 }}>
            Full Stack Developer with 2+ years of experience building and shipping
            production web applications, with a backend focus across PHP and Node.js.
            Delivered an artist e-commerce marketplace and an internal sprint-management
            platform for a Hong Kong-based company, owning REST API design, relational and
            NoSQL schema design, and AWS deployment (EC2, S3) end to end. Comfortable
            across the stack with React, Next.js and Tailwind CSS, and experienced in
            taking features from requirement to release.
          </p>
        </motion.div>

        <div className="about_grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat_card glass"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div style={{ color: "var(--accent-2)", fontSize: "1.4rem", marginBottom: 10 }}>
                {s.icon}
              </div>
              <div className="num gradient-text">{s.num}</div>
              <div className="label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
