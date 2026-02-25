import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productapi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10">Error fetching product</h2>;

  const product = data?.products?.find((p) => p._id === id);

  if (!product) return <h2 className="text-center mt-10">Product not found</h2>;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-xl object-cover shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-600 mb-2">₹ {product.price}</p>
          <p className="text-gray-500 mb-6">Stock: {product.stock}</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;