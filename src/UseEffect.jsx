import React, { useEffect, useState } from 'react';
import NavbarForUseEffect from './NavbarForUseEffect';

const ApiDatafetch = () => {
  const [users, setUsers] = useState([]);
  const [inputdata, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log('Data fetched successfully');
      })
      .catch((err) => console.error('Fetch error:', err));
  }, [inputdata]);

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300 flex flex-col items-center justify-start px-4 py-10">
        <h2 className="text-4xl font-bold text-black mb-6">📋 User Data</h2>

        <input
          className="w-full max-w-md px-4 py-2 mb-6 border-2 border-black bg-white rounded-xl shadow-inner placeholder-gray-500 text-black text-lg"
          type="text"
          value={inputdata}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search user..."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white border-2 border-black p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <p className="text-xl font-bold text-blue-900 mb-1">🧑 {user.name}</p>
              <p className="text-md text-gray-800 mb-1">📧 {user.email}</p>
              <p className="text-md text-gray-800">📍 {user.address.city}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApiDatafetch;
