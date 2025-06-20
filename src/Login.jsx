import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('✅ Login submitted');
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-pink-300 p-8">
          <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-6">
            🍔 Login to <span className="text-yellow-500">ZomatoMall</span>
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">📧 Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">🔒 Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-3 rounded-full shadow-md transition-all"
            >
              🚀 Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-pink-600 font-semibold hover:underline">
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
