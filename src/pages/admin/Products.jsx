import React from "react";
import { useGetProductsQuery } from "../../redux/productapi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductList = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10">Error fetching data</h2>;

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)} // Navigate to product details
          >
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {product.description.slice(0, 60)}...
              </p>
              <p className="font-bold text-indigo-600 mb-1">₹ {product.price}</p>
              <p className="text-gray-500 text-sm mb-4">Stock: {product.stock}</p>
            </div>

           <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(product)); // 🔹 Prevent card click event
                navigate("/cart"); // 🔹 Go to cart page
              }}
              className="bg-indigo-600 text-white py-2 rounded-lg w-full font-medium hover:bg-indigo-700 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;