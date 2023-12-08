import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiApple, SiWindows, SiVisualstudiocode, SiOpenai } from "react-icons/si";
import { RiRobotFill } from "react-icons/ri";

const TechIcon = ({ Icon, title }) => (
  <Col xs={4} md={2} className="tech-icons">
    <div className="flex flex-col items-center">
      <Icon className="m-auto py-2 text-4xl" title={title} />
      {title && <span className="text-xs text-gray-300 mt-1">{title}</span>}
    </div>
  </Col>
);

const Toolstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <TechIcon Icon={SiApple} title="Apple" />
    <TechIcon Icon={SiWindows} title="Windows" />
    <TechIcon Icon={SiVisualstudiocode} title="Visual Studio Code" />
    <TechIcon Icon={RiRobotFill} title="Ollama" />
    <TechIcon Icon={SiOpenai} title="OpenAI" />
  </Row>
);

export default Toolstack;
