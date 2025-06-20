import React, { useEffect, useState } from 'react';

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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex flex-col items-center justify-start p-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">📋 User Data</h2>

      <input
        className="w-full max-w-md px-4 py-2 mb-6 border-2 border-pink-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-300 text-gray-800"
        type="text"
        value={inputdata}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-2xl shadow-md border border-pink-300 hover:shadow-lg transition-all"
          >
            <p className="text-lg font-semibold text-pink-600">{user.name}</p>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
            <p className="text-sm text-gray-600">📍 {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDatafetch;
