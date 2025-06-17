import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Explore = () => {
  const items = [
    {
      name: 'Paneer Pizza',
      price: '₹299',
      img: 'https://images.dominos.co.in/new_peppy_paneer.jpg',
    },
    {
      name: 'Burger Combo',
      price: '₹199',
      img: 'https://thumbs.dreamstime.com/b/large-big-burger-combo-menu-potatoes-drink-dark-wood-180279010.jpg',
    },
    {
      name: 'Momos Platter',
      price: '₹149',
      img: 'https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=',
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-100 p-10">
      <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">Explore Our Specials 🍽️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img src={item.img} alt={item.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-purple-700">{item.name}</h3>
              <p className="text-lg text-gray-600 mt-1">{item.price}</p>
              <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-semibold">
                Order Now 🍕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Explore;
