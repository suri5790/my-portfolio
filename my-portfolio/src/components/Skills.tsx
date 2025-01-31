import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.jpg";
import jsIcon from "../assets/js-icon.png";
import pyIcon from "../assets/py.jpg";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Python", icon: pyIcon }
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index]);
            }, index * 300); // Delay animation
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      containerRef.current.childNodes.forEach((node) => {
        observer.observe(node as Element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container" ref={containerRef}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`skill-item ${visibleSkills.includes(index) ? "visible" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visibleSkills.includes(index) ? 1 : 0, y: visibleSkills.includes(index) ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
