import React, { useState, useEffect } from 'react';

const MonthlyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const difference = endOfMonth - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/time-travel-background-wallpaper-ai-generated-image_1087980-172.jpg')" }}
    >
      <div className="bg-black/70 backdrop-blur-md p-6 md:p-12 rounded-2xl shadow-2xl text-center w-11/12 md:w-auto">
        {/* Tagline */}
        <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Success Rule #1: You can only win when your mind is stronger than your emotions.
        </h2>
        {/* Timer */}
        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Time is going so fast. Don't waste time
        </h1>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
          {/* Day Timer Box */}
          <div className="text-center bg-gray-800/90 p-4 md:p-6 rounded-xl shadow-lg border-2 border-yellow-400/50 w-1/2 md:w-auto">
            <span className="text-4xl md:text-8xl font-bold text-yellow-400 animate-pulse">{timeLeft.days}</span>
            <span className="block text-lg md:text-2xl text-yellow-300">Days</span>
          </div>
          {/* Other Timers */}
          <div className="text-center bg-gray-800/90 p-4 md:p-6 rounded-xl shadow-lg border-2 border-purple-400/50 w-1/2 md:w-auto">
            <span className="text-4xl md:text-8xl font-bold text-purple-400 animate-pulse">{timeLeft.hours}</span>
            <span className="block text-lg md:text-2xl text-purple-300">Hours</span>
          </div>
          <div className="text-center bg-gray-800/90 p-4 md:p-6 rounded-xl shadow-lg border-2 border-green-400/50 w-1/2 md:w-auto">
            <span className="text-4xl md:text-8xl font-bold text-green-400 animate-pulse">{timeLeft.minutes}</span>
            <span className="block text-lg md:text-2xl text-green-300">Minutes</span>
          </div>
          <div className="text-center bg-gray-800/90 p-4 md:p-6 rounded-xl shadow-lg border-2 border-red-400/50 w-1/2 md:w-auto">
            <span className="text-4xl md:text-8xl font-bold text-red-400 animate-pulse">{timeLeft.seconds}</span>
            <span className="block text-lg md:text-2xl text-red-300">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTimer;