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
    <div className="min-h-screen bg-gradient-to-b from-[#0c0513] to-[#1b1235]">
      <NavBar />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Particle className="absolute inset-0" />
        
        {/* Main Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Get To <span className="text-[#c770f0] hover:text-[#d89ff5] transition-colors">Know Me</span>
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - About Card */}
            <div className="lg:col-span-7">
              <div className="sticky top-24">
                <Aboutcard />
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:col-span-5 space-y-12">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={laptopImg} 
                  alt="about" 
                  className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Skills Section */}
              <div className="bg-[#0c0513] bg-opacity-90 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Professional <span className="text-[#c770f0]">Skillset</span>
                </h2>
                <Techstack />
              </div>

              {/* Tools Section */}
              <div className="bg-[#0c0513] bg-opacity-90 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[#c770f0]">Tools</span> I Use
                </h2>
                <Toolstack />
              </div>

              {/* GitHub Activity */}
              <div className="bg-[#0c0513] bg-opacity-90 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Days I <span className="text-[#c770f0]">Code</span>
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
