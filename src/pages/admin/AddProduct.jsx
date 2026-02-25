import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddProductMutation } from "../../redux/productapi";

const AddProduct = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      category: "",
      brand: "",
      stock: "",
      images: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required").positive(),
      discountPrice: Yup.number().nullable(),
      category: Yup.string().required("Category is required"),
      brand: Yup.string(),
      stock: Yup.number().required("Stock is required").min(0),
      images: Yup.string().required("Image URL is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedData = {
          ...values,
          images: [values.images],
        };

        await addProduct(formattedData).unwrap();
        alert("Product Added Successfully ✅");
        resetForm();
      } catch (error) {
        console.log(error);
        alert("Error adding product ❌");
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          Add New Product
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div>
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-2 p-3 border rounded-lg"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              rows="3"
              className="w-full mt-2 p-3 border rounded-lg"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            )}
          </div>

          {/* Price & Discount */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">Price</label>
              <input
                type="number"
                name="price"
                className="w-full mt-2 p-3 border rounded-lg"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-red-500 text-sm">{formik.errors.price}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">Discount Price</label>
              <input
                type="number"
                name="discountPrice"
                className="w-full mt-2 p-3 border rounded-lg"
                {...formik.getFieldProps("discountPrice")}
              />
            </div>
          </div>

          {/* Category & Brand */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">Category</label>
              <input
                type="text"
                name="category"
                className="w-full mt-2 p-3 border rounded-lg"
                {...formik.getFieldProps("category")}
              />
              {formik.touched.category && formik.errors.category && (
                <p className="text-red-500 text-sm">
                  {formik.errors.category}
                </p>
              )}
            </div>

            <div>
              <label className="font-semibold">Brand</label>
              <input
                type="text"
                name="brand"
                className="w-full mt-2 p-3 border rounded-lg"
                {...formik.getFieldProps("brand")}
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="font-semibold">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              className="w-full mt-2 p-3 border rounded-lg"
              {...formik.getFieldProps("stock")}
            />
            {formik.touched.stock && formik.errors.stock && (
              <p className="text-red-500 text-sm">{formik.errors.stock}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              name="images"
              className="w-full mt-2 p-3 border rounded-lg"
              {...formik.getFieldProps("images")}
            />
            {formik.touched.images && formik.errors.images && (
              <p className="text-red-500 text-sm">{formik.errors.images}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {isLoading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;