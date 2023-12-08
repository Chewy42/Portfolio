import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Navbar";

function Home() {

  const scrollTo = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Navbar />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I Am
                <strong className="main-name"> Matthew Favela</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <div onClick={scrollTo} className="flex justify-center align-middle z-100 bg-gray-100 bg-opacity-5 w-full h-[55px] down-arrow group">
            <FaArrowDown className="w-[40px] h-[40px] m-auto down-arrow-icon transition-all duration-300 ease-linear group-hover:w-[50px] group-hover:h-[50px] group" />
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
