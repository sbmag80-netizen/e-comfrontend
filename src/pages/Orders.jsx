import React from "react";
import { useGetMyOrdersQuery } from "../redux/orderApi";

const Orders = () => {
  const { data, isLoading, isError } = useGetMyOrdersQuery();

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading your orders...</p>
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500 font-semibold">
          Failed to load orders ❌
        </p>
      </div>
    );

  if (!data?.orders?.length)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-lg">No orders found 🛒</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">
          My Orders
        </h2>

        <div className="space-y-8">
          {data.orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: {order._id}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-2 md:mt-0 space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Not Paid"}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.isDelivered
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.isDelivered ? "Delivered" : "Not Delivered"}
                  </span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Shipping:</span>{" "}
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
                </p>
                <p>
                  <span className="font-semibold">Payment:</span>{" "}
                  {order.paymentMethod}
                </p>
              </div>

              {/* Order Items */}
              <div className="space-y-4">
                {order.orderItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-0 font-semibold text-indigo-600">
                      ₹ {item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="text-right mt-6 text-lg font-bold text-indigo-700">
                Total: ₹ {order.totalPrice}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;