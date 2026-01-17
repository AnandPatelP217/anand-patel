import React from "react";
import "./stylesheet/resume.css"
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../pdf/resume.pdf";
import { AiOutlineDownload, AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        {/* Header Section */}
        <div className="resume-header">
          <h1 className="resume-name">ANAND PATEL</h1>
          <div className="resume-contact">
            <a href="mailto:anandpatelp217@gmail.com" className="contact-link">
              <AiOutlineMail /> anandpatelp217@gmail.com
            </a>
            <a href="https://linkedin.com/in/anand-patel-p217" target="_blank" rel="noopener noreferrer" className="contact-link">
              <AiOutlineLinkedin /> linkedin.com/in/anand-patel-p217
            </a>
            <a href="https://github.com/anandpatelp217" target="_blank" rel="noopener noreferrer" className="contact-link">
              <AiOutlineGithub /> github.com/anandpatelp217
            </a>
          </div>
        </div>

        {/* Summary Section */}
        <div className="resume-section-box">
          <h2 className="section-title">SUMMARY</h2>
          <p className="section-content">
            Computer Science graduate with strong experience in full-stack web development using the MERN stack. 
            Proficient in building responsive, user-friendly applications with React, Express.js, and MongoDB. 
            Developed real-world projects like an Alumni Platform and a Secure Hub. Looking to contribute to a 
            fast-paced development team.
          </p>
        </div>

        {/* Education Section */}
        <div className="resume-section-box">
          <h2 className="section-title">EDUCATION</h2>
          <div className="education-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">Sagar Institute of Science Technology and Research</h3>
                <p className="item-subtitle">Bachelor of Technology in CSE</p>
                <p className="item-detail">CGPA: 7.32</p>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Oct 2021 – June 2025</p>
                <p className="item-location">Bhopal, India</p>
              </Col>
            </Row>
          </div>
          <div className="education-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">Oriental Public Higher Secondary School</h3>
                <p className="item-subtitle">Intermediate</p>
                <p className="item-detail">Board: MPBSE</p>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Jul 2020 – Apr 2021</p>
                <p className="item-location">Mandideep, India</p>
              </Col>
            </Row>
          </div>
          <div className="education-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">Oriental Public Higher Secondary School</h3>
                <p className="item-subtitle">Matriculation</p>
                <p className="item-detail">Board: MPBSE</p>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">May 2018 – Feb 2019</p>
                <p className="item-location">Mandideep, India</p>
              </Col>
            </Row>
          </div>
        </div>

        {/* Coursework Section */}
        <div className="resume-section-box">
          <h2 className="section-title">COURSEWORK</h2>
          <Row className="coursework-grid">
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• Data Structures</p></Col>
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• Operating Systems</p></Col>
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• DBMS</p></Col>
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• Computer Networking</p></Col>
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• OOP</p></Col>
            <Col md={4} sm={6} xs={12}><p className="coursework-item">• Software Engineering</p></Col>
          </Row>
        </div>

        {/* Technical Skills Section */}
        <div className="resume-section-box">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <Row>
            <Col md={6} xs={12}>
              <p className="skill-category"><strong>Languages:</strong> JavaScript (ES6+), Java, HTML5, CSS3</p>
              <p className="skill-category"><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS</p>
            </Col>
            <Col md={6} xs={12}>
              <p className="skill-category"><strong>Backend:</strong> Node.js, Express.js</p>
              <p className="skill-category"><strong>Database:</strong> MongoDB, MySQL</p>
            </Col>
            <Col md={6} xs={12}>
              <p className="skill-category"><strong>Tools:</strong> Git, GitHub, VS Code</p>
            </Col>
            <Col md={6} xs={12}>
              <p className="skill-category"><strong>OS:</strong> Linux, Windows</p>
            </Col>
          </Row>
        </div>

        {/* Projects Section */}
        <div className="resume-section-box">
          <h2 className="section-title">PROJECTS</h2>
          <div className="project-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">
                  Secure Access Hub
                  <a href="https://github.com/anandpatelp217" target="_blank" rel="noopener noreferrer" className="github-link"> - Github</a>
                </h3>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Sep 2025 - Oct 2025</p>
              </Col>
            </Row>
            <ul className="project-details">
              <li>Developed a full-stack Secure Hub using MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
              <li>Centralized dashboard for super-admins, admins, managers and users with role-based navigation and permissions.</li>
              <li>File upload, user file browsing and secure file access per user/company and 8+ more features.</li>
              <li>Live Link: <a href="https://frontend-encription.vercel.app" target="_blank" rel="noopener noreferrer">https://frontend-encription.vercel.app</a></li>
            </ul>
          </div>
          <div className="project-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">
                  Alumni Platform
                  <a href="https://github.com/anandpatelp217" target="_blank" rel="noopener noreferrer" className="github-link"> - Github</a>
                </h3>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Nov 2024 - Dec 2025</p>
              </Col>
            </Row>
            <ul className="project-details">
              <li>Developed an Alumni Platform using React.js, Express.js, and MongoDB for real-time bidding.</li>
              <li>Implemented secure user authentication and authorization for personalized user experiences.</li>
              <li>Designed a responsive user interface with Tailwind CSS, ensuring optimal usability on all devices.</li>
              <li>Technologies used: React.js, Express.js, MongoDB, Redux</li>
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-section-box">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="experience-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">Tryidol Technologies - Software Developer Intern</h3>
                <p className="item-subtitle">MERN, Tailwind</p>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Sep '24 - Oct '24</p>
              </Col>
            </Row>
            <ul className="project-details">
              <li>Converted Figma UI/UX designs into fully responsive and functional web interfaces using modern front-end technologies.</li>
              <li>Contributed to the development of the Secure Hub project, ensuring clean code architecture and strong security practices.</li>
              <li>Live Link: <a href="https://specshome.vercel.app" target="_blank" rel="noopener noreferrer">https://specshome.vercel.app</a></li>
            </ul>
          </div>
          <div className="experience-item">
            <Row>
              <Col md={9} xs={12}>
                <h3 className="item-title">TechnoHacks Edutech - Frontend Web Developer</h3>
                <p className="item-subtitle">HTML, CSS, JavaScript</p>
              </Col>
              <Col md={3} xs={12} className="text-md-end">
                <p className="item-date">Aug '24 - Sep '24</p>
              </Col>
            </Row>
            <ul className="project-details">
              <li>Developed front-end for Portfolio, responsive Component, Netflix Homepage, Registration form, Calculator.</li>
            </ul>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="resume-section-box">
          <h2 className="section-title">CERTIFICATES</h2>
          <ul className="certificates-list">
            <li>IBM: Machine Learning with Python</li>
            <li>Coursera: Deep Learning with PyTorch : Image Segmentation</li>
            <li>TCS ION : Young Professional</li>
            <li>Cisco: CCNAv7: Switching, Routing, and Wireless Essentials, Networking Essentials</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="resume-section-box">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <ul className="certificates-list">
            <li>Got first prize in Prastuti, a college-level presentation competition.</li>
            <li>Shortlisted for the Grand Finale of Bansal Codictive 2.0 Hackathon in 2024 from all over India.</li>
            <li>Shortlisted for the Grand Finale of Smart India Hackathon - 2023.</li>
          </ul>
        </div>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", marginTop: "30px" }}>
          <Button
            variant="success"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}
export default ResumeNew;