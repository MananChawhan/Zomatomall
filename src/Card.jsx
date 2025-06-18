import React from "react";
import { LuMessageSquareMore } from "react-icons/lu";
import { GiShoppingCart } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { PiInstagramLogoDuotone } from "react-icons/pi";


const Card = ({ imageurl, StudentName, StudentAge, hostelName, spendings }) => {
  const isPremium = spendings >= 20000;

  return (
    <div className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 p-5 m-4 w-[320px] h-[580px] flex flex-col justify-between border border-gray-200">
      <div className="w-full h-[320px] rounded-xl overflow-hidden">
        <img
          src={imageurl}
          alt={StudentName}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="text-center mt-4 space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">{StudentName}</h2>
        <p className="text-gray-500 text-sm">Age: {StudentAge}</p>
        <p className="text-gray-500 text-sm flex items-center justify-center">
          <CiShop className="mr-1 text-lg" />
          Hostel: {hostelName}
        </p>
        <p className="text-sm text-gray-600">
          Spendings: <span className="font-medium text-gray-800">₹{spendings.toLocaleString()}</span>
        </p>
        <p className={`text-sm font-bold ${isPremium ? 'text-green-600' : 'text-red-500'}`}>
          {isPremium ? 'Top Spender 🎉' : 'Budget Friendly 💸'}
        </p>
      </div>
        
      <div className="mt-4">
        <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 py-2 rounded-lg text-sm font-medium shadow-md">
          <PiInstagramLogoDuotone className="text-lg" />
          Follow Them

        </button>
      </div>
    </div>
  );
};

export default Card;
