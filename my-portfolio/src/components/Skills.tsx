import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.jpg";
import jsIcon from "../assets/js-icon.png";
import pyIcon from "../assets/py.jpg";
import postgres from "../assets/pgadmin.jpg";
import mysql from "../assets/mysql.jpg";
import mongodb from "../assets/mongodb.jpg";
import git from "../assets/git.jpg";
import react from "../assets/react.jpg";
import clang from "../assets/c.jpg";
import cplus from "../assets/c++.jpg";
import typescript from "../assets/typescript.jpg";
import vite from "../assets/vite.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import tailwind from "../assets/tailwind.jpg";
import nodejs from "../assets/nodejs.jpg";
import aws from "../assets/aws.jpg";

import cloudflare from "../assets/cloudflare.jpg";
import docker from "../assets/docker.jpg";
import github from "../assets/github.jpg";

import postman from "../assets/postman.jpg";
import sqllite from "../assets/sqllite.jpg";
import ubuntu from "../assets/ubuntu.jpg";
import express from "../assets/express.jpg";
import nextjs from "../assets/nextjs.jpg";
import vercel from "../assets/vercel.jpg";
import prisma from "../assets/prisma.jpg";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Python", icon: pyIcon },
  { name: "PostgreSQL", icon: postgres },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "React", icon: react },
  { name: "C", icon: clang },
  { name: "C++", icon: cplus },
  { name: "TypeScript", icon: typescript },
  { name: "Vite", icon: vite },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "AWS", icon: aws },

  { name: "Cloudflare", icon: cloudflare },
  { name: "Docker", icon: docker },
  { name: "GitHub", icon: github },

  { name: "Postman", icon: postman },
  { name: "SQLite", icon: sqllite },
  { name: "Ubuntu", icon: ubuntu },
  { name: "Express.js", icon: express },
  { name: "Next.js", icon: nextjs },
  { name: "Vercel", icon: vercel },
  { name: "Prisma", icon: prisma }
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skills.findIndex((skill) => skill.name === entry.target.getAttribute("data-name"));
            if (index !== -1) {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, index]);
              }, index * 100); // Adjust delay for animation
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section" id="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container" ref={containerRef}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`skill-item ${visibleSkills.includes(index) ? "visible" : ""}`}
            data-name={skill.name}
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
