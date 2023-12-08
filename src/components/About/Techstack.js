import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiPytorch, SiFirebase, SiCsharp, SiTailwindcss, SiUnity, SiMicrosoftoffice, SiUnrealengine, SiQt } from "react-icons/si";

const TechIcon = ({ Icon }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon className="m-auto py-2" />
  </Col>
);

const Techstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {[CgCPlusPlus, SiCsharp, DiJavascript1, DiNodejs, DiReact, SiUnity, 
      SiUnrealengine, DiMongodb, DiGit, SiQt, SiFirebase, DiPython, 
      SiPytorch, SiTailwindcss, SiMicrosoftoffice].map((Icon, index) => (
      <TechIcon key={index} Icon={Icon} />
    ))}
  </Row>
);

export default Techstack;
