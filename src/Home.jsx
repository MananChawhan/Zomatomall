import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { MdFoodBank, MdLocalGroceryStore, MdEmojiFoodBeverage } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#fdf6fd] to-[#ffe7ff] px-6 md:px-20 py-12">
        <h1 className="text-5xl font-extrabold text-[#5d2a7a] mb-4">Welcome</h1>
        <h2 className="text-3xl font-semibold text-[#7c3aed] mb-2">To Ultimate</h2>
        <h3 className="text-2xl font-bold text-pink-700 mb-6">
          Food Delivery App — <span className="text-pink-500">Parul-Zomato</span>
        </h3>
        <p className="text-lg text-gray-700 mb-8 italic">“Good Food with Good Mindset” 🍽️</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <MdFoodBank className="text-4xl mx-auto text-pink-400 mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Fresh Meals</h4>
            <p className="text-gray-600 text-sm">Delivered hot and ready to eat from your local favorites.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <MdLocalGroceryStore className="text-4xl mx-auto text-yellow-400 mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Affordable Prices</h4>
            <p className="text-gray-600 text-sm">Tasty food that doesn't break the bank.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <MdEmojiFoodBeverage className="text-4xl mx-auto text-purple-500 mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Instant Order</h4>
            <p className="text-gray-600 text-sm">Order in seconds with one-tap checkout.</p>
          </div>
        </div>

        <Link
          to="/explore"
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-all"
        >
          Explore Now 🚀
        </Link>
        <Link
          to="/cart"
          className="m-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-all"
        >
          Most Visited Customers 😍
        </Link>
      </section>
    </>
  );
};

export default Home;
