import React from "react";

const Dashboard = () => {
  // Dummy Data
  const stats = [
    { title: "Total Sales", value: "$12,430", bg: "bg-green-500" },
    { title: "Total Orders", value: "320", bg: "bg-blue-500" },
    { title: "Total Users", value: "150", bg: "bg-purple-500" },
    { title: "Total Products", value: "58", bg: "bg-orange-500" },
  ];

  const recentOrders = [
    { id: "#1001", customer: "John Doe", amount: "$120", status: "Completed" },
    { id: "#1002", customer: "Sarah Smith", amount: "$80", status: "Pending" },
    { id: "#1003", customer: "Michael Lee", amount: "$250", status: "Completed" },
  ];

  const recentUsers = [
    { name: "John Doe", email: "john@email.com" },
    { name: "Sarah Smith", email: "sarah@email.com" },
    { name: "Michael Lee", email: "michael@email.com" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-white p-6 rounded-xl shadow-lg ${stat.bg}`}
          >
            <h2 className="text-lg">{stat.title}</h2>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Users */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;