import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Navbar";

// Lazy load components
const Particle = lazy(() => import("../Particle"));
const Home2 = lazy(() => import("./Home2"));
const Type = lazy(() => import("./Type"));

function Home() {
  const scrollTo = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Navbar />
        <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
          <Particle />
        </Suspense>
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
                <Suspense fallback={<div>Loading...</div>}>
                  <Type />
                </Suspense>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="eager"
                decoding="async"
              />
            </Col>
          </Row>
          <div onClick={scrollTo} className="flex justify-center align-middle z-100 bg-gray-100 bg-opacity-5 w-full h-[55px] down-arrow group">
            <FaArrowDown className="w-[40px] h-[40px] m-auto down-arrow-icon transition-all duration-300 ease-linear group-hover:w-[50px] group-hover:h-[50px] group" />
          </div>
        </Container>
      </Container>
      <Suspense fallback={<div className="loading-spinner"><div className="spinner"></div></div>}>
        <Home2 />
      </Suspense>
    </section>
  );
}

export default React.memo(Home);
