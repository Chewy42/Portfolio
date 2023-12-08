import React, { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';


const LimitedTimeOffer = () => {
  const [remainingTime, setRemainingTime] = useState(null);

  const calculateRemainingTime = () => {
    const endTime = new Date("2023-12-31T00:00:00");
    const currentTime = new Date();
    const remaining = endTime.getTime() - currentTime.getTime();
    return remaining;
  };

  useEffect(() => {
    let timer;
    if (typeof window !== 'undefined') {
      timer = setInterval(() => {
        setRemainingTime(calculateRemainingTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16" id="pricing">
      <div className="container mx-auto">
        <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
            AuthorCopilot Launch
          </h2>
          <h2 className="text-4xl font-bold text-white mb-4">
            Limited Time Offer: 100% Off
          </h2>
          <p className="text-lg text-white mb-6">
            Chapman Students can subscribe now and get a 100% discount forever. <br />Don't miss out on this amazing deal!
          </p>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <BsCheckCircle className="w-6 h-6 text-white" />
            <span className="text-white">
              Offer ends in {Math.floor(remainingTime / (1000 * 60 * 60 * 24))} days
            </span>
          </div>
          <button id="offer" className="w-full md:w-auto bg-white hover:bg-gray-100 focus:ring-4 focus:ring-purple-400 text-purple-800 font-bold px-6 py-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-110">
            Claim Your Offer Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;