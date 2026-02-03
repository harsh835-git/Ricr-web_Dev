import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 to-red-100 px-4 p-5">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 text-white text-center py-8">
          <h1 className="text-4xl font-extrabold">🍔 About GrubGo</h1>
          <p className="mt-2 text-sm tracking-wide">
            Fast • Fresh • Delivered to Your Doorstep
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">

          <p>
            <span className="font-bold text-orange-600">GrubGo</span> is a modern
            food delivery platform built to bring your favorite meals from
            trusted restaurants directly to your home. From street food to
            healthy bowls — we deliver it all.
          </p>

          <p>
            Our goal is to make food ordering{" "}
            <span className="font-semibold">
              simple, fast, and reliable
            </span>
            . With seamless browsing, secure payments, and real-time order
            tracking, GrubGo ensures a delightful experience every time.
          </p>

          <p>
            We collaborate with verified restaurants and professional delivery
            partners to guarantee fresh food, timely delivery, and complete
            customer satisfaction.
          </p>
        </div>

        {/* Features */}
        <div className="px-8 pb-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Why Choose GrubGo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              emoji="🍕"
              title="Wide Food Choices"
              text="Order from multiple cuisines, restaurants, and categories."
            />

            <FeatureCard
              emoji="🚀"
              title="Fast Delivery"
              text="Quick and reliable delivery right to your doorstep."
            />

            <FeatureCard
              emoji="🔒"
              title="Secure Payments"
              text="Multiple safe and secure payment options."
            />

            <FeatureCard
              emoji="📦"
              title="Live Order Tracking"
              text="Track your order in real-time from kitchen to door."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-orange-50 text-center py-4 text-sm text-gray-600">
          Serving happiness, one meal at a time ❤️
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ emoji, title, text }) => (
  <div className="bg-gray-50 border rounded-2xl p-5 hover:shadow-lg transition">
    <h3 className="font-bold text-orange-600 mb-2 text-lg">
      {emoji} {title}
    </h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

export default About;
