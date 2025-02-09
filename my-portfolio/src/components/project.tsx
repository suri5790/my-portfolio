import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./project.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
// import blog3 from "../assets/blog3.jpg";
import paytm1 from "../assets/paytm1.jpg";
import paytm2 from "../assets/paytm2.jpg";
import paytm3 from "../assets/paytm3.jpg";
// import paytm1 from "../assets/aws.jpg"

const projects = [
  {
    id: "project1",
    title: "Blogging Website",
    images: [blog1, blog2], // Multiple images for slideshow
    description: "A full-stack blogging platform where users can create, edit, and read blogs.",
    github: "https://github.com/suri5790/Blogging-Website.git",
    live: "https://blogging-website-livid.vercel.app/"
  },
  {
    id: "project2",
    title: "PayTM",
    images: [paytm1,paytm2,paytm3], // Multiple images for slideshow
    description: "A PayTM-inspired payment gateway application with authentication & transactions using NextJs",
    github: "https://github.com/psp2535/paytm-project.git",
    live: "https://project-two-live.com"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedProject.images.length
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [selectedProject]);

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      {/* Buttons to switch projects */}
      <div className="buttons-container">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-btn ${selectedProject.id === project.id ? "active" : ""}`}
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0); // Reset image index when switching projects
            }}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Project Details with Image Slideshow */}
      <motion.div
        key={selectedProject.id}
        className="project-details"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          key={currentImageIndex}
          src={selectedProject.images[currentImageIndex]}
          alt={selectedProject.title}
          className="project-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h3>{selectedProject.title}</h3>
        <p>{selectedProject.description}</p>
        <div className="project-links">
          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
