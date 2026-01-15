import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center font-serif mb-2">
          About GrubGo
        </h1>

        <p className="text-lg text-gray-600 text-center mb-6 font-serif">
          Fast • Fresh • Delivered at Your Doorstep
        </p>

        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <p>
            <span className="font-semibold text-indigo-600">GrubGo</span> is a
            modern food delivery and ordering platform designed to bring your
            favorite meals from top restaurants straight to your doorstep.
            Whether you're craving fast food, traditional meals, or healthy
            options — we’ve got you covered.
          </p>

          <p>
            Our mission is to make food ordering{" "}
            <span className="font-semibold">simple, fast, and reliable</span>.
            With an easy-to-use interface, secure payments, and real-time order
            tracking, GrubGo ensures a smooth experience from browsing to
            delivery.
          </p>

          <p>
            We partner with trusted restaurants and skilled delivery partners to
            guarantee fresh food, on-time delivery, and complete customer
            satisfaction.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4 font-serif">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-indigo-600 mb-1">
                🍕 Wide Food Choices
              </h3>
              <p className="text-sm text-gray-600">
                Order from multiple cuisines, restaurants, and food categories.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-indigo-600 mb-1">
                🚀 Fast Delivery
              </h3>
              <p className="text-sm text-gray-600">
                Quick and reliable delivery right to your home.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-indigo-600 mb-1">
                🔒 Secure Payments
              </h3>
              <p className="text-sm text-gray-600">
                Multiple safe and secure payment options available.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-indigo-600 mb-1">
                📦 Live Order Tracking
              </h3>
              <p className="text-sm text-gray-600">
                Track your order in real-time from kitchen to doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Line */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Serving happiness, one meal at a time ❤️
        </p>
      </div>
    </div>
  );
};

export default About;
