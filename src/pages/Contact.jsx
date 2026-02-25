import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-5xl font-bold text-indigo-600 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
        Have any questions, suggestions, or feedback? We'd love to hear from you!
        Fill out the form below and our support team will get back to you.
      </p>

      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="yourname@example.com"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p className="mb-2">Or reach us directly at:</p>
          <p className="font-medium">support@shopease.com</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;