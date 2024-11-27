import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import NavBar from "../Navbar";

const About = () => {
  return (
    <div className="min-h-screen" style={{ 
      background: "var(--section-background-color)",
      color: "whitesmoke"
    }}>
      <NavBar />
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <Particle className="absolute inset-0" />
        
        {/* Main Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 heading">
              Get To <span style={{ color: "var(--imp-text-color)" }} className="hover:opacity-80 transition-colors">Know Me</span>
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - About Card */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 transition-all duration-300 hover:translate-y-[-5px]">
                <Aboutcard />
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={laptopImg} 
                  alt="about" 
                  className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Skills Section */}
              <div style={{ background: "var(--image-gradient)" }} className="rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 heading">
                  Professional <span style={{ color: "var(--imp-text-color)" }}>Skillset</span>
                </h2>
                <Techstack />
              </div>

              {/* Tools Section */}
              <div style={{ background: "var(--image-gradient)" }} className="rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 heading">
                  <span style={{ color: "var(--imp-text-color)" }}>Tools</span> I Use
                </h2>
                <Toolstack />
              </div>

              {/* GitHub Activity */}
              <div style={{ background: "var(--image-gradient)" }} className="rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 heading">
                  Days I <span style={{ color: "var(--imp-text-color)" }}>Code</span>
                </h2>
                <div className="[&_a]:no-underline [&_a]:text-inherit">
                  <Github />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
