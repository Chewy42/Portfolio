import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import authorcopilotscript from "../../Assets/Projects/authorcopilotscript.png";
import authorcopilot from "../../Assets/Projects/authorcopilot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authorcopilot}
              isBlog={false}
              title="Author Copilot"
              description="Software as a service utilizing GPT-3.5-turbo and GPT-4 to allow anyone to create en entire eBook in 10 minutes. The process is streamlined and formatted in HTML (with prompt engineering) to export as a .epub file and be instantly useable"
              ghLink="https://github.com/Chewy42/Author-Copilot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authorcopilotscript}
              isBlog={false}
              title="Author Copilot Jupyter Notebook"
              description="This Jupyter Notebook gives anybody to generate an eBook by running through the script. There is a lot of documentation and has all of the functionality behind the Author Copilot website. The example image above is a eBook generated in 10 minutes on the foundations of Data Structures and Algorithms."
              ghLink="https://github.com/Chewy42/Author-Copilot-Notebook"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
