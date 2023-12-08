import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApple,
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple className="m-auto py-2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="m-auto py-2"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai className="m-auto py-2"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
