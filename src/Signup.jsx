import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords don't match");
      return;
    }
    alert('✅ Signup successful');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-pink-300 p-8">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-6 drop-shadow">
          🍽️ Signup to ZomatoMall
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">👤 Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">📧 Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">🔒 Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">🔁 Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-pink-300 rounded-xl bg-pink-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-3 rounded-full shadow-lg transition-all"
          >
            🎉 Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
