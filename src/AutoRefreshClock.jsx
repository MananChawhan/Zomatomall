import { useState, useEffect } from "react";
import NavbarForUseEffect from './NavbarForUseEffect';
import { BsClockHistory } from "react-icons/bs";

const AutoRefreshClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌞 Good Morning!";
    if (hour < 18) return "🌤️ Good Afternoon!";
    return "🌙 Good Evening!";
  };

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-200 to-yellow-300 px-4">
        <div className="bg-yellow-400 border-2 border-black rounded-3xl p-6 w-full max-w-md shadow-xl text-center">
          
          <BsClockHistory className="text-5xl text-purple-800 mb-4 animate-pulse mx-auto" />
          
          <h1 className="text-4xl font-bold text-black mb-3">⏰ Live Clock</h1>

          <h2 className="text-lg text-gray-800 italic mb-4">{getGreeting()}</h2>

          <p className="text-3xl text-blue-900 font-mono tracking-widest bg-white border-2 border-black rounded-xl px-4 py-3 shadow-inner">
            {time}
          </p>
        </div>
      </div>
    </>
  );
};

export default AutoRefreshClock;
