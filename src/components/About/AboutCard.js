import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <br />I am currently a Junior pursing a <span className="purple">B.S. in Data Science at Chapman University with a minor in Game Development Programming</span>. In the future, I also plan on pursuing a Masters Degree in Electrical Engineering and Computer Science (EECS) at Chapman University.
          <ul>
            <li className="about-activity flex">
              <ImPointRight className="mr-2 mt-1" />Playing Video Games
            </li>
            <li className="about-activity flex">
              <ImPointRight className="mr-2 mt-1"/>Lifting Weights
            </li>
            <li className="about-activity flex">
              <ImPointRight className="mr-2 mt-1"/>Teaching Computer Science
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
