import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import education from "./data/education.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Education = () => {
  return (
    <div className="section" id="education">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="section-tag">Academics</div>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="timeline">
          {education.map((data, i) => (
            <motion.div
              key={data.id}
              className="ex_item edu_item glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="node">
                <FaGraduationCap />
              </div>
              <div className="content">
                <div className="top_row">
                  <h3>{data.degree}</h3>
                  <span className="duration">{data.duration}</span>
                </div>
                <span className="company">{data.school}</span>
                <span className="location">{data.location}</span>
                <div className="tag_row">
                  <span className="tag_pill">{data.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
