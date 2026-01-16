import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            🍕 Hungry? Order with GrubGo
          </h1>
          <p className="text-lg mb-6">
            Fast • Fresh • Delivered to your doorstep
          </p>

          <Link
            to="/login"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Order Now 🚀
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Restaurants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map((res) => (
              <div
                key={res.name}
                className="border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-40 bg-orange-200 flex items-center justify-center text-5xl">
                  🍽️
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{res.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {res.cuisine}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>⭐ {res.rating}</span>
                    <span>⏱ {res.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GrubGo */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose GrubGo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <WhyCard emoji="🚀" title="Fast Delivery" />
          <WhyCard emoji="🍔" title="Best Restaurants" />
          <WhyCard emoji="🔒" title="Secure Payments" />
          <WhyCard emoji="📦" title="Live Tracking" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-50 text-center py-4 text-sm text-gray-600">
        © 2026 GrubGo • Serving happiness, one meal at a time ❤️
      </footer>
    </div>
  );
};

/* Data */
const categories = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Biryani", emoji: "🍛" },
  { name: "Chinese", emoji: "🥡" },
  { name: "Desserts", emoji: "🍰" },
  { name: "Healthy", emoji: "🥗" },
];

const restaurants = [
  {
    name: "Spicy Hub",
    cuisine: "Indian, Chinese",
    rating: "4.5",
    time: "30 min",
  },
  {
    name: "Burger Nation",
    cuisine: "Fast Food",
    rating: "4.3",
    time: "25 min",
  },
  {
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: "4.6",
    time: "35 min",
  },
];

/* Components */
const WhyCard = ({ emoji, title }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
    <div className="text-4xl mb-3">{emoji}</div>
    <h3 className="font-bold">{title}</h3>
  </div>
);

export default Home;
