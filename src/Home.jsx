import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { MdFoodBank, MdLocalGroceryStore, MdEmojiFoodBeverage } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { PiChatCircleDots, PiClockCountdownBold } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-black">Welcome</h1>
          <h2 className="text-3xl font-bold text-purple-800">To Ultimate</h2>
          <h3 className="text-2xl font-bold text-pink-600 mb-2">
            Food Delivery App — <span className="text-yellow-700">Parul-Zomato</span>
          </h3>
          <p className="text-lg text-black italic">“Good Food with Good Mindset” 🍽️</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
          {[
            {
              Icon: MdFoodBank,
              title: "Fresh Meals",
              desc: "Delivered hot and ready to eat from your local favorites.",
              color: "text-pink-500"
            },
            {
              Icon: MdLocalGroceryStore,
              title: "Affordable Prices",
              desc: "Tasty food that doesn't break the bank.",
              color: "text-yellow-500"
            },
            {
              Icon: MdEmojiFoodBeverage,
              title: "Instant Order",
              desc: "Order in seconds with one-tap checkout.",
              color: "text-purple-600"
            }
          ].map(({ Icon, title, desc, color }, i) => (
            <div key={i} className="bg-white border-2 border-black rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition">
              <Icon className={`text-4xl mx-auto mb-2 ${color}`} />
              <h4 className="text-xl font-semibold text-black">{title}</h4>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <ButtonLink to="/explore" text="Explore Our Specials 🍝" />
          <ButtonLink to="/cart" text="Most Visited Customers 😍" />
          <ButtonLink to="/userdata" text="UserData" icon={<FaUserCog />} />
          <ButtonLink to="/gallery" text="ArtGallery" icon={<GrGallery />} />
        </div>

        <Link
          to="/tweet"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          Tweet Your Experience <BsTwitterX className="text-xl" />
        </Link>

        {/* Icon Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <IconCircle to="/emoji" icon={<PiChatCircleDots />} />
          <IconCircle to="/form" icon={<FaWpforms />} />
          <IconCircle to="/counter" icon={<PiClockCountdownBold />} />
        </div>
      </section>
    </>
  );
};

export default Home;

const ButtonLink = ({ to, text, icon }) => (
  <Link
    to={to}
    className="bg-purple-600 hover:bg-purple-800 text-white text-lg font-semibold px-6 py-3 rounded-full shadow transition flex items-center gap-2"
  >
    {icon && <span className="text-xl">{icon}</span>}
    {text}
  </Link>
);

const IconCircle = ({ to, icon }) => (
  <Link
    to={to}
    className="bg-purple-600 hover:bg-purple-800 text-white text-2xl p-4 rounded-full shadow-md transition"
  >
    {icon}
  </Link>
);
