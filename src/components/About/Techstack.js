import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiTailwindcss,
  SiJetbrains,
  SiUnity,
  SiMicrosoftoffice,
  SiUnrealengine,
  SiQt
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <CgCPlusPlus className="m-auto py-2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQt className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice className="m-auto py-2"/>
      </Col>
    </Row>
  );
}

export default Techstack;
