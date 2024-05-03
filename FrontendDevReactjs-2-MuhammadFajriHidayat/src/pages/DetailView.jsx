import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Rating from "../utils/Rating";
import ReviewItem from "../components/DetailView/ReviewItem";

const DetailView = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { state } = useLocation();
  const data = state.restaurant;

  useEffect(() => {
    setRestaurant(data);
  }, []);

  return (
    <>
      <Header />
      {restaurant && (
        <div className="ml-28 mt-20">
          <div>
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <Rating rating={restaurant.rating} />
          </div>
          <ReviewItem restaurant={restaurant} />
        </div>
      )}
    </>
  );
};

export default DetailView;
