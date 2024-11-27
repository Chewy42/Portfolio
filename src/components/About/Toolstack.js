import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiApple, SiWindows, SiVisualstudiocode, SiOpenai } from "react-icons/si";
import { RiRobotFill } from "react-icons/ri";

const TechIcon = ({ Icon, title }) => (
  <Col xs={4} md={2} className="tech-icons">
    <div className="flex flex-col items-center">
      <Icon className="m-auto py-2 text-4xl" />
    </div>
  </Col>
);

const Toolstack = () => (
  <Row style={{ justifyContent: "text-center", paddingBottom: "50px" }}>
    <TechIcon Icon={SiApple} />
    <TechIcon Icon={SiWindows} />
    <TechIcon Icon={SiVisualstudiocode} />
    <TechIcon Icon={SiOpenai} />
  </Row>
);

export default Toolstack;
