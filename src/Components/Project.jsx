import React from "react";
import { motion } from "framer-motion";
import pro from "./data/Projects.json";
import { FaStore, FaGem, FaCalendarAlt, FaRobot, FaExternalLinkAlt } from "react-icons/fa";

const icons = {
  store: <FaStore />,
  gem: <FaGem />,
  event: <FaCalendarAlt />,
  ai: <FaRobot />,
};

const gradients = [
  "linear-gradient(135deg, #f472b6, #6366f1)",
  "linear-gradient(135deg, #8b5cf6, #6366f1)",
  "linear-gradient(135deg, #22d3ee, #6366f1)",
  "linear-gradient(135deg, #f472b6, #8b5cf6)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Project = () => {
  return (
    <div className="section" id="project">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="section-tag">Selected Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">
            A few products I've designed and built end to end, from schema to
            shipped UI.
          </p>
        </motion.div>

        <div className="project_items">
          {pro.map((data, i) => (
            <motion.div
              className="crd glass"
              key={data.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="card-cover" style={{ background: gradients[i % gradients.length] }}>
                {icons[data.icon]}
              </div>
              <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-text">{data.description}</p>
                <ul className="points">
                  {data.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
                <div className="badge_row">
                  <span className="status_pill">{data.status}</span>
                  {data.link && (
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                      style={{ padding: "6px 14px", fontSize: "0.78rem" }}
                    >
                      Visit Site <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
                <div className="tag_row">
                  {data.technology.map((t) => (
                    <span className="tag_pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
