import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
   const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState();

  const fetctAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetctAllRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantinfo) => {
    console.log("Restaurant Clicked");
      navigate("/restaurantMenu", { state: restaurantinfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 mt-6">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurant &&
          restaurant.map((EachRestaurant, idx) => (
            <div
              key={idx}
               onClick={() => handleRestaurantClick(EachRestaurant)}
              className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={EachRestaurant.photo.url}
                  alt={EachRestaurant.restaurantName}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-(--color-secondary)">
                  {EachRestaurant.restaurantName}
                </h3>

                <p className="text-sm text-gray-600">
                  🍴 {EachRestaurant.cuisine}
                </p>

                <p className="text-sm text-gray-600 flex items-start gap-1">
                  <FaMapMarkerAlt className="mt-1 text-(--color-secondary)" />
                  {EachRestaurant.address}, {EachRestaurant.city} -{" "}
                  {EachRestaurant.pin}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaPhoneAlt className="text-(--color-secondary)" />
                  {EachRestaurant.mobileNumber}
                </p>

                <div className="pt-3 flex justify-end">
                  <div className="flex items-center gap-2 text-(--color-secondary) font-semibold group-hover:border-b-2 border-(--color-secondary)">
                    Explore Menu <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderNow;
