import React, { useState } from "react";

const ApiData = () => {
  const [api, setApi] = useState([]);

  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rs) => rs.json())
      .then((data) => setApi(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">User Details</h1>

      <button
        onClick={fetchUser}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all mb-8"
      >
        Load Users
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {api.map((user) => (
          <div
            key={user.id}
            className="bg-white border-2 border-blue-300 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-2">{user.name}</h2>
            <p className="text-gray-700"><span className="font-semibold">📧 Email:</span> {user.email}</p>
            <p className="text-gray-700"><span className="font-semibold">📍 City:</span> {user.address.city}</p>
            <p className="text-gray-700"><span className="font-semibold">📞 Phone:</span> {user.phone}</p>
            <p className="text-gray-700"><span className="font-semibold">🌐 Website:</span> {user.website}</p>
            <p className="text-gray-700"><span className="font-semibold">🏢 Company:</span> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
