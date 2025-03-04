import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce</span> myself
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I was 11 years old.
              <br />
              <br />
              Since then, I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Javascript, Python, C#, C++, and Java.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of interests are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning, Natural Launguage Processing, and Computer
                  Vision.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Next.js and the OpenAI API</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="flex justify-center align-middle w-10 ml-3 hover:cursor-pointer z-[100]">
                <a
                  href="https://github.com/Chewy42"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub className="m-auto text-center" />
                </a>
              </li>
              <li className="flex justify-center align-middle w-10 ml-3 hover:cursor-pointer z-[101]">
                <a
                  href="https://www.linkedin.com/in/Chewy42/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn className="m-auto text-center" />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple"> connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
