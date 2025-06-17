import React from 'react';
import Navbar from './Navbar';
const Product = () => {
  const products = [
    {
      id: 1,
      name: "Cheese Burst Pizza",
      price: "₹199",
      image: "https://cdn.dotpe.in/longtail/store-items/7885519/6oPcvMcG.jpeg",
      description: "Loaded with extra cheese and toppings.",
    },
    {
      id: 2,
      name: "Spicy Burger",
      price: "₹129",
      image: "https://img.freepik.com/premium-photo/spicy-burger_777078-577.jpg",
      description: "Crispy patty with spicy sauce.",
    },
    {
      id: 3,
      name: "Cold Coffee",
      price: "₹89",
      image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-cold-coffee-recipe.jpg",
      description: "Chilled brew with a hint of chocolate.",
    },
    {
      id: 4,
      name: "Paneer Roll",
      price: "₹99",
      image: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
      description: "Grilled paneer wrapped in soft paratha.",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f6] to-[#fce3ff] px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full h-56 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 my-2">{product.description}</p>
            <p className="text-pink-600 font-semibold text-lg">{product.price}</p>
            <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition">
              Order Now 🍽️
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;
