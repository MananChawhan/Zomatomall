import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [stdobj] = useState([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit...'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae...'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure...'
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis...'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300 flex flex-col justify-center items-center p-6">
      <div className="bg-yellow-400 border-2 border-black rounded-3xl p-6 w-[400px] flex flex-col gap-4 items-center shadow-xl">
        <p className="text-3xl font-bold text-black">🔢 Count: {count}</p>

        <input
          type="number"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="w-full p-3 border-2 border-black rounded-xl placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />

        <div className="flex flex-col gap-2 w-full">
          <button
            className="bg-blue-700 hover:bg-blue-800 rounded-xl p-3 font-bold text-white transition"
            onClick={() => setCount(count + parseInt(inputvalue || 0))}
          >
            ➕ Increment
          </button>

          <button
            className="bg-blue-700 hover:bg-blue-800 rounded-xl p-3 font-bold text-white transition"
            onClick={() => setCount(count - parseInt(inputvalue || 0))}
          >
            ➖ Decrement
          </button>

          <button
            className="bg-gray-600 hover:bg-gray-700 rounded-xl p-3 font-bold text-white transition"
            onClick={() => setCount(0)}
          >
            🔃 Reset
          </button>
        </div>

        <p className="text-black font-semibold">Current Input: {parseInt(inputvalue) || 0}</p>
      </div>

      {/* Optional: Show stdobj below (based on your pattern) */}
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-black mb-4">🗂 Sample Data (stdobj):</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stdobj.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-black rounded-2xl p-4 text-black shadow hover:scale-105 transition"
            >
              <h3 className="font-bold text-purple-800">Title:</h3>
              <p>{item.title}</p>
              <h4 className="font-bold text-purple-800 mt-2">Body:</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
