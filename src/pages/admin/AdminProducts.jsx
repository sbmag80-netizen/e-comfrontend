import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/productapi";

const AdminProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        id: selectedProduct._id,
        ...formData,
      }).unwrap();

      alert("Product updated successfully ✅");
      closeModal();
    } catch (err) {
      alert("Update failed ❌");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };

  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10">Error fetching data</h2>;

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
        Admin Product Management
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full text-left">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">category</th>
              <th className="px-6 py-3">brand</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.products?.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">₹ {product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.brand}</td>

                <td className="px-6 py-4 text-center space-x-3">
                  <button
                    onClick={() => openModal(product)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">

            <h3 className="text-2xl font-bold mb-6 text-indigo-600">
              Update Product
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                required
              />

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-3 border rounded-lg"
                rows="3"
              />

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Update
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;