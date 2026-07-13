import React from "react";
import { motion } from "framer-motion";
import Skills from "./data/Skills.json";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws, FaCode, FaDatabase, FaUsersCog, FaBug, FaSyncAlt } from "react-icons/fa";

const iconMap = {
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Flutter: <SiFlutter />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  NestJS: <SiNestjs />,
  "PHP (Core PHP / OOP)": <SiPhp />,
  "REST APIs": <FaSyncAlt />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  "AWS EC2": <FaAws />,
  "AWS S3": <FaAws />,
  Docker: <SiDocker />,
  "CI/CD": <FaSyncAlt />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  "API Design": <FaCode />,
  "Database Schema Design": <FaDatabase />,
  "Agile / Sprint Workflow": <FaUsersCog />,
  "QA & Regression Testing": <FaBug />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Skill = () => {
  return (
    <div className="section" id="skill">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="section-tag">Toolbox</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">
            The languages, frameworks and tools I reach for to design, build and ship
            full-stack products.
          </p>
        </motion.div>

        <div className="skills_groups">
          {Skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skill_group glass"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h4>{group.category}</h4>
              <div className="items">
                {group.items.map((item) => (
                  <span className="skill_chip" key={item}>
                    {iconMap[item]}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
