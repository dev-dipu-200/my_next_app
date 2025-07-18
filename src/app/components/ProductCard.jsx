import Image from "next/image";
import React from "react";
const ProductCard = ({ item }) => {
  return (
    <div className="group perspective w-11/12 h-92">
      <div className="p-4 rounded-lg shadow-md bg-white transition-transform duration-500 transform group-hover:rotateX-6 group-hover:rotateY-6 group-hover:shadow-2xl">
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        <div className="mt-2 text-center">
          <h2 className="text-lg font-semibold text-blue-700">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="mt-2 text-xl font-bold">{item.price}</p>
          <div className="flex justify-between items-center">
            <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors">
              View Details
            </button>
            <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
