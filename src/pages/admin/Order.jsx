import React from "react";
import { useGetAllOrdersQuery } from "../../redux/orderApi";

const Order = () => {
  const { data, isLoading, error } = useGetAllOrdersQuery();

  if (isLoading) {
    return <div className="text-center py-10 text-lg">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading orders</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>

      <div className="w-full overflow-hidden">
  <div className="bg-white shadow-xl rounded-2xl">
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left table-auto">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Payment</th>
            <th className="px-4 py-3">Paid</th>
            <th className="px-4 py-3">Delivered</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Items</th>
          </tr>
        </thead>

        <tbody>
          {data?.orders?.map((order) => (
            <tr
              key={order._id}
              className="border-b hover:bg-gray-50"
            >
              <td className="px-4 py-3 truncate max-w-[100px]">
                {order._id.slice(-6)}
              </td>

              <td className="px-4 py-3 truncate max-w-[120px]">
                {order.user?.name}
              </td>

              <td className="px-4 py-3 truncate max-w-[180px]">
                {order.user?.email}
              </td>

              <td className="px-4 py-3 font-semibold text-green-600">
                ₹{order.totalPrice}
              </td>

              <td className="px-4 py-3">
                {order.paymentMethod}
              </td>

              <td className="px-4 py-3">
                {order.isPaid ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Paid
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                    Not Paid
                  </span>
                )}
              </td>

              <td className="px-4 py-3">
                {order.isDelivered ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Delivered
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                    Pending
                  </span>
                )}
              </td>

              <td className="px-4 py-3 text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>

              <td className="px-4 py-3 text-center">
                {order.orderItems.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  );
};

export default Order;