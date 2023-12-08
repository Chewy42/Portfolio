/*
 * Copyright (c) 2023 by Matthew Favela
 * Protected under the MIT License (See LICENSE)
 * All Rights Reserved
 */

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" decoration-transparent text-xl font-bold text-primary hover:cursor-pointer"
        >
          Author<span className="text-accent">Copilot</span>
        </Link>

        <nav className="flex items-center">
          <div className="bg-accent hover:scale-[103%] hover:cursor-pointer transition-all ease-linear duration-200 text-white  px-4 py-2 rounded-md shadow-md flex justify-center align-middle">
            <p className={"animated-gradient-dark-bgs font-bold m-auto"}>
              Limited Offer: 100% Off
            </p>
          </div>
          <div className="cursor-pointer hover:scale-[103%] transition-all ease-linear duration-200 text-accent px-4 py-2 rounded-md">
            Exclusive Deals
          </div>{" "}
          <div className="text-accent hover:scale-[103%] hover:cursor-pointer transition-all ease-linear duration-200 px-4 py-2 rounded-md">
            Sign In
          </div>
          <div className="text-accent hover:scale-[103%] hover:cursor-pointer transition-all ease-linear duration-200 px-4 py-2 rounded-md">
            Sign Up
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
