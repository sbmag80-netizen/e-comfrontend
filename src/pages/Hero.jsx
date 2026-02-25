import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
      {/* Overlay for soft effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Elevate Your Shopping Experience
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover premium products with style and quality you can trust. Enjoy free shipping and exclusive offers on your favorite items.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <a
              href="/shop"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Decorative Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white/20 rounded-full shadow-2xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;