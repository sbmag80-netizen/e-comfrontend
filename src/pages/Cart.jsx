import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../redux/cartSlice";
import { useCreateOrderMutation } from "../redux/orderApi";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
 const [placeorder]=useCreateOrderMutation()
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
const handlePlaceOrder = async () => {
  try {
    const formattedItems = cartItems.map((item) => ({
      product: item._id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      image: item.images?.[0],
    }));

    const orderData = {
      orderItems: formattedItems,
      shippingAddress: {
        address: "Demo Street 123",
        city: "Mumbai",
        postalCode: "400001",
        country: "India",
      },
      paymentMethod: "COD",
      totalPrice: total,
    };

    const res = await placeorder(orderData).unwrap();

    console.log("Order Success:", res);
    alert("Order Placed Successfully ✅");
  } catch (error) {
    console.error("Order Failed:", error);
  }
};
  const shipping = subtotal > 0 ? 20 : 0;
  const total = subtotal + shipping;


  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">
          Your Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white p-10 rounded-xl shadow text-center">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Your cart is empty 🛒
                </h2>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center gap-6"
                >
                  <img
                    src={item.images?.[0]}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-indigo-600 font-bold mt-2">
                      ₹ {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQty({ id: item._id })
                          )
                        }
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold">{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(
                            increaseQty({ id: item._id })
                          )
                        }
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch(removeItem(item._id))}
                        className="ml-6 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-gray-800">
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-xl shadow h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹ {shipping.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
            </div>

            <button   onClick={handlePlaceOrder} className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;