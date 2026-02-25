import React from "react";

const Features = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
          <p className="text-gray-600">On orders above $50</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </section>
  );
};

export default Features;