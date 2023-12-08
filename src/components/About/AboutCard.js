import React from "react";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaCode, FaBriefcase, FaGithub } from "react-icons/fa";

function AboutCard() {
  return (
    <div className="bg-[#0c0513] bg-opacity-90 rounded-lg shadow-md overflow-hidden">
      <div className="p-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white tracking-wide">
            MATTHEW FAVELA
          </h1>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/mfavela" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#c770f0] bg-opacity-20 text-[#c770f0] hover:bg-opacity-30 transition-all"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b-2 border-[#c770f0]">
            <FaGraduationCap className="text-2xl text-[#c770f0]" />
            <h2 className="text-2xl font-semibold text-white">
              EDUCATION
            </h2>
          </div>
          <div className="space-y-6 pl-4 border-l-2 border-[#c770f0]">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#c770f0]">Chapman University, Fowler School of Engineering, Orange, CA</h3>
              <div className="flex flex-col md:flex-row md:justify-between text-gray-300">
                <span className="font-medium">Master of Science in Electrical Engineering and Computer Science</span>
                <span className="text-[#c770f0] whitespace-nowrap">May 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b-2 border-[#c770f0]">
            <FaCode className="text-2xl text-[#c770f0]" />
            <h2 className="text-2xl font-semibold text-white">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#c770f0] bg-opacity-10 hover:bg-opacity-20 transition-all">
              <h4 className="font-medium text-[#c770f0] mb-2">Coding Languages</h4>
              <p className="text-gray-300">Python, SQL/MySQL, C++, C#, Java, HTML, CSS, JavaScript</p>
            </div>
            <div className="p-4 rounded-lg bg-[#c770f0] bg-opacity-10 hover:bg-opacity-20 transition-all">
              <h4 className="font-medium text-[#c770f0] mb-2">Machine Learning</h4>
              <p className="text-gray-300">Tensorflow, PyTorch, Pandas, NumPy, Sklearn, Open CV</p>
            </div>
            <div className="p-4 rounded-lg bg-[#c770f0] bg-opacity-10 hover:bg-opacity-20 transition-all md:col-span-2">
              <h4 className="font-medium text-[#c770f0] mb-2">Frameworks/Tools</h4>
              <p className="text-gray-300">Flask, Shiny, Streamlit, AWS, Quarto, Linux, Git/Github, ReactJS, Express JS</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b-2 border-[#c770f0]">
            <FaBriefcase className="text-2xl text-[#c770f0]" />
            <h2 className="text-2xl font-semibold text-white">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>
          
          <div className="space-y-8 pl-4 border-l-2 border-[#c770f0]">
            {/* MindReel Experience */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                <h3 className="text-lg font-medium text-[#c770f0]">Independent Software Engineering Contractor (MindReel)</h3>
                <span className="text-gray-300 bg-[#c770f0] bg-opacity-10 px-4 py-1 rounded-full text-sm whitespace-nowrap">
                  December 2023 - September 2024
                </span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-300 marker:text-[#c770f0]">
                {[
                  "Defined MVP acceptance criteria by translating investor concepts and domain expertise into actionable product requirements.",
                  "Designed comprehensive flowcharts and app mockups to streamline internal and external system interactions.",
                  "Engineered a frontend application with Unreal Engine 5 featuring a dynamically scalable UI.",
                  "Developed a robust data buffering system to synchronize streamed audio and animation.",
                ].map((point, index) => (
                  <li key={index} className="pl-2">
                    <span className="pl-2">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Luminoso Experience */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                <h3 className="text-lg font-medium text-[#c770f0]">Solutions Engineering Intern (Luminoso Technologies)</h3>
                <span className="text-gray-300 bg-[#c770f0] bg-opacity-10 px-4 py-1 rounded-full text-sm whitespace-nowrap">
                  May 2023 - August 2023
                </span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-300 marker:text-[#c770f0]">
                {[
                  "Led the development of a robust, server-side-rendered data visualization platform.",
                  "Engineered a sophisticated front-end routing architecture with secure login and dynamic navigation.",
                  "Implemented responsive data visualization components using D3.js and React.",
                  "Developed RESTful APIs to handle complex data transformations and user interactions.",
                ].map((point, index) => (
                  <li key={index} className="pl-2">
                    <span className="pl-2">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
