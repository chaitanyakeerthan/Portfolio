import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, tech, desc, github }) {
  return (
    <motion.div className="glass project-card" whileHover={{y:-10,scale:1.03}}>

      <h3>{title}</h3>
      <p className="tech">{tech}</p>
      <p>{desc}</p>

      <div className="proj-actions">
        <a 
          href={github}
          target="_blank"
          rel="noreferrer"
          className="btn small github-btn"
        >
          <FaGithub/> GitHub
        </a>
      </div>

    </motion.div>
  );
}