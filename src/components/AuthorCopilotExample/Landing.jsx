/*
 * Copyright (c) 2023 by Matthew Favela
 * Protected under the MIT License (See LICENSE)
 * All Rights Reserved
 */

import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

import { BsArrowDown } from "react-icons/bs";

const Landing = () => {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-20 relative">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">
                    Write Engaging eBooks That Sell with
                    <br/>
                    <span className={"text-6xl"}>AuthorCopilot</span>

                </h1>
                <div className={"w-[100%] flex justify-center align-middle"}>
                    <p className="text-2xl text-white mb-8 mx-auto w-[500px]">
                        Let AI assist you in crafting high-quality and compelling eBooks that
                        <b> engage readers</b> and <b>generate revenue</b>.
                    </p>

                </div>
                <div className={
                    "flex justify-center align-middle w-[100%]"
                }>
                    <Link
                        to="/acdemo"
                        className="decoration-transparent w-[230px] h-[50px] flex bg-gray-100 text-purple-700 p-auto rounded-md shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <p className={'m-auto z-10 font-bold'}>
                            Get Started for Free
                        </p>
                    </Link>
                    <ScrollLink
                        to="pricing"
                        smooth={true}
                        className="decoration-transparent w-[230px] h-[50px] flex cursor-pointer bg-white text-purple-700 p-auto rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <p className={'m-auto animated-gradient-light-bgs z-10 font-bold'}>
                            Limited Offer: 100% Off
                        </p>
                    </ScrollLink>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <ScrollLink to="features" smooth={true}>
                    <BsArrowDown
                        className="cursor-pointer w-12 h-12 text-white mb-3 transition-all duration-300 hover:scale-105"/>
                </ScrollLink>
            </div>
        </section>
    );
};

export default Landing;