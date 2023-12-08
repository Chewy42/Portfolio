import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "M.S. in EECS",
          "B.S. in Data Science",
          "Full Stack Web Developer",
          "Software Engineer Enthusiest",
          "Unity3D Programmer",
          "Project Manager",
          "CompSci Teacher"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
