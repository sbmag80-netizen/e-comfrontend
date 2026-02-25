import React from "react";

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Premium Product ${index + 1}`,
  price: (Math.random() * 200 + 20).toFixed(2),
  image: `https://picsum.photos/400/400?random=${index + 1}`,
}));

const Shop = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Products
          </h1>
          <p className="mt-4 text-gray-600">
            Discover high-quality products at unbeatable prices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-indigo-600 font-bold text-xl mt-3">
                  ${product.price}
                </p>

                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;