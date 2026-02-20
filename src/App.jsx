
import Navbar from "./components/Navbar";
import ResumeButton from "./components/ResumeButton";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import myImage from "./assets/chaitu.jpeg"
import { FaLock, FaDatabase, FaLaptopCode, FaServer, FaLayerGroup, FaGraduationCap } from "react-icons/fa";

import {
 SiLeetcode,
 SiHackerrank,
 SiCodechef
} from "react-icons/si";


export default function App(){
 return(
  <div>
   <Navbar/>
  <section id="home" className="hero section">

  <div className="hero-wrapper glass">

    {/* LEFT SIDE CONTENT */}
    <div className="hero-text">

      <h1 className="name-glow">
        Polamarasetty Keerthan Chaitanya Prasad
      </h1>

      <h3 className="subtitle">
        Full Stack Developer • Visakhapatnam
      </h3>

      <p className="tag">
        Building secure and scalable web applications using React.js and Spring Boot.
      </p>

      <div className="hero-social">
        <a href="https://github.com/chaitanyakeerthan" target="_blank" rel="noreferrer" className="social-icon">
          <FaGithub/>
        </a>
        <a href="https://linkedin.com/in/polamarasetty-keerthan-chaitanya-prasad-07b3692b9" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedin/>
        </a>
      </div>

      <div className="cta">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn">Contact Me</a>
        <ResumeButton/>
      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="hero-image">
      <img src={myImage} alt="Keerthan" />
    </div>

  </div>

</section>


   <section id="about" className="section">
    <div className="glass card">
     <h2 className="title">About Me</h2>
     <p>Full Stack Developer with hands-on experience in building secure and scalable web applications using React.js and Spring Boot. Skilled in developing RESTful APIs, implementing authentication with Spring Security, and integrating SQL databases through real-time projects such as an Employee Management System and Virtual Book Store. Currently working on an academic EAMCET preparation platform.

</p>
    </div>
   </section>

   <section id="skills" className="section">
        <h2 className="title">Tech Stack</h2>
        <div className="stack-grid">

          <div className="glass stack-card">
            <h3>Programming</h3>
            <div className="chips">
              <span className="chip">C</span>
              <span className="chip">Java</span>
              <span className="chip">Python</span>
               <span className="chip">JavaScript</span>
            </div>
          </div>


          <div className="glass stack-card">
            <h3>Frontend</h3>
            <div className="chips">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
            </div>
          </div>

          <div className="glass stack-card">
            <h3>Frameworks</h3>
            <div className="chips">
              <span className="chip">Spring Boot</span>             
              <span className="chip">React.js</span>
            </div>
          </div>

           <div className="glass stack-card">
            <h3>Database</h3>
            <div className="chips">
              <span className="chip">SQL</span>
            </div>
          </div>

          <div className="glass stack-card">
            <h3>Tools</h3>
            <div className="chips">
              <span className="chip">Git</span>
              <span className="chip">VS Code</span>
              <span className="chip">IntelliJ</span>
              <span className="chip">Postman</span>
              <span className="chip">Eclipse</span>
            </div>
          </div>

        </div>
      </section>

     <section id="capabilities" className="section">
  <h2 className="title">What I Can Build</h2>

  <div className="highlight-grid">

    <div className="glass highlight-card">
      <FaLayerGroup/>
      <h4>CRUD Applications</h4>
      <p>Full Stack Data Management Systems</p>
    </div>

    <div className="glass highlight-card">
      <FaLock/>
      <h4>JWT Login Systems</h4>
      <p>Secure Authentication & Authorization</p>
    </div>

    <div className="glass highlight-card">
      <FaServer/>
      <h4>REST APIs</h4>
      <p>Backend Services using Spring Boot</p>
    </div>

    <div className="glass highlight-card">
      <FaLaptopCode/>
      <h4>Responsive UI</h4>
      <p>React.js Frontend Interfaces</p>
    </div>

    <div className="glass highlight-card">
      <FaDatabase/>
      <h4>DB Integrated Apps</h4>
      <p>SQL Connected Systems</p>
    </div>

    <div className="glass highlight-card">
      <FaGraduationCap/>
      <h4>E-Learning Platforms</h4>
      <p>Academic Based Applications</p>
    </div>

  </div>
</section>

       <section id="projects" className="section">
    <h2 className="title">Projects</h2>
    <div className="project-grid">
     <ProjectCard
 title="Employee Management System"
 tech="React.js • Spring Boot • JWT • SQL"
 desc="Secure full-stack CRUD with role-based auth, REST APIs and pagination."
 github="https://github.com/chaitanyakeerthan/employee-management-system.git"
/>

<ProjectCard
 title="Virtual Book Store"
 tech="React.js • Spring Boot"
 desc="Online bookstore supporting browsing, cart and order management."
 github="https://github.com/chaitanyakeerthan/Virtual-Book-Store.git"
/>

<ProjectCard
 title="Netflix Clone"
 tech="React.js • Movie APIs"
 desc="Responsive streaming UI integrating third-party APIs."
 github="https://github.com/chaitanyakeerthan/Netflix_Clone.git"
/>

          <ProjectCard
            title="EAMCET Project (Ongoing)"
            tech="React.js • Spring Boot"
            desc="Developing an academic platform focused on EAMCET exam preparation, organizing syllabus-based content and student guidance."
          />
    </div>
   </section>

   {/* PROJECT HIGHLIGHTS */}
<section id="highlights" className="section">
  <h2 className="title">Project Highlights</h2>

  <div className="highlight-grid">

    <div className="glass highlight-card">
      <p>✔ Implemented JWT-based Authentication</p>
    </div>

    <div className="glass highlight-card">
      <p>✔ Developed RESTful APIs using Spring Boot</p>
    </div>

    <div className="glass highlight-card">
      <p>✔ Integrated SQL Database with Backend Services</p>
    </div>

    <div className="glass highlight-card">
      <p>✔ Applied Pagination for Efficient Data Handling</p>
    </div>

    <div className="glass highlight-card">
      <p>✔ Designed Reusable UI Components using React.js</p>
    </div>

    <div className="glass highlight-card">
      <p>✔ Consumed Third-party APIs in Netflix Clone</p>
    </div>

  </div>

</section>


   <section id="coding" className="section">
        <h2 className="title">Coding Profiles</h2>
        <div className="coding-grid">
          <a href="https://leetcode.com/u/keerthan_chaitanya_prasad/" target="_blank" rel="noreferrer" className="glass coding-card">
            <SiLeetcode />
            <h4>LeetCode</h4>
            <p>Problem Solving & DSA Practice</p>
          </a>
          <a href="https://www.hackerrank.com/profile/keerthanchaitan1" target="_blank" rel="noreferrer" className="glass coding-card">
            <SiHackerrank />
            <h4>HackerRank</h4>
            <p>Programming & Algorithm Challenges</p>
          </a>
          <a href="https://www.codechef.com/users/rag_23981a4641" target="_blank" rel="noreferrer" className="glass coding-card">
            <SiCodechef />
            <h4>CodeChef</h4>
            <p>Competitive Programming</p>
          </a>
        </div>
      </section>

   <section id="education" className="section">
        <h2 className="title">Education</h2>
        <div className="edu-grid">
          <div className="glass edu-card">
            <h3>B.Tech CSE</h3>
            <p>Raghu Engineering College</p>
            <span>2023–Present | CGPA: 9.43</span>
          </div>
          <div className="glass edu-card">
            <h3>Intermediate (MPC)</h3>
            <p>Sri Chaitanya Jr. College</p>
            <span>2021–2023 | CGPA: 9.5</span>
          </div>
          <div className="glass edu-card">
            <h3>SSC</h3>
            <p>Kristu Jayanthi School</p>
            <span>2021 | CGPA: 9.5</span>
          </div>
        </div>
      </section>

     
<section id="career" className="section">
  <h2 className="title">Career Objective</h2>
  
  <div className="glass career-card">
    <p>
      Aspiring Full Stack Developer seeking to contribute to real-world
      software development by building secure and scalable web applications
      using modern technologies like React.js and Spring Boot while
      continuously enhancing my problem-solving and system design skills.
    </p>
  </div>

</section>


   <section id="contact" className="section">
    <h2 className="title">Contact</h2>
    <ContactForm/>
   </section>


    

    <footer className="glass footer">
        <div className="footer-contacts">
         <a href="mailto:keerthanchaitanya1212006@gmail.com" className="contact-item">
  <FaEnvelope/> <span>keerthanchaitanya1212006@gmail.com</span>
</a>

          <a href="tel:7013698353" className="contact-item"><FaPhone/> 7013698353</a>

<a href="https://github.com/chaitanyakeerthan" target="_blank" rel="noreferrer" className="social-icon">
          <FaGithub/>
        </a>
        <a href="https://linkedin.com/in/polamarasetty-keerthan-chaitanya-prasad-07b3692b9" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedin/>
        </a>

        </div>
        <p>© 2026 Keerthan Chaitanya Prasad</p>
        <button className="btn small" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Top</button>
      </footer>
  </div>
 );
}
