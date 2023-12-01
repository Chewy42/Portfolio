import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Matthew Favela </span>
            from <span className="purple"> Oahu, Hawaii.</span>
            <br />I am a Junior pursing a B.S. in Data Science at Chapman University 
            with a minor in Game Development Programming
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting Weights
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
