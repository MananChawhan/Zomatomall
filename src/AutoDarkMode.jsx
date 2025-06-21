import React, { useEffect, useState } from 'react';
import NavbarForUseEffect from './NavbarForUseEffect';
const AutoDarkMode = () => {
  const [Dark, setDark] = useState(false);

  useEffect(() => {
    const hours = new Date().getHours();
    setDark(hours >= 19 || hours < 6);
  }, []);

  const toggleMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <>
    <NavbarForUseEffect/>
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-all duration-500 ${
          Dark
            ? 'bg-gradient-to-br from-gray-800 to-black text-white'
            : 'bg-gradient-to-br from-yellow-100 to-pink-100 text-black'
        }`}
      >
        <div
          className={`p-8 rounded-3xl shadow-2xl border-4 ${
            Dark ? 'border-yellow-500 bg-black' : 'border-pink-300 bg-white'
          } text-center max-w-md w-full`}
        >
          <h1 className="text-4xl font-extrabold mb-4">
            {Dark ? '🌙 Dark Mode' : '🌞 Light Mode'}
          </h1>
          <p className="text-lg font-semibold mb-6">
            It's currently {Dark ? 'night time' : 'day time'} based on your system time.
          </p>

          <button
            onClick={toggleMode}
            className={`px-6 py-2 rounded-full text-white font-semibold shadow-md transition duration-300 ${
              Dark
                ? 'bg-yellow-500 hover:bg-yellow-400'
                : 'bg-gray-800 hover:bg-gray-900'
            }`}
          >
            Switch to {Dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
      </>
  );
};

export default AutoDarkMode;