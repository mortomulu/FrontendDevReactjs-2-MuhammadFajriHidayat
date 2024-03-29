import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Rating from "../../utils/rating";

export const CardRestaurant = (props) => {
  const data = props.restaurant;

  const [loadedCards, setLoadedCards] = useState(8);

  // fungsi untuk + load cards yg di load
  const handleLoadMore = () => {
    setLoadedCards((prev) => prev + 8);
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.slice(0, loadedCards).map((restaurant, i) => (
        <div className="card-wrapper h-96" key={i}>
          <div className="h-52 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={restaurant.photo.images.medium.url}
              alt=""
            />
          </div>
          <div className="h-28">
            <div className="w-full text-xl mt-4 overflow-auto">
              <h1>{restaurant.name}</h1>
            </div>
            <div className="mt-2">
              <Rating rating={restaurant.rating} />
            </div>
            <div className="flex justify-between text-gray-400 text-sm mt-2">
              <div className="flex gap-2">
                <p>{restaurant.cuisine[0].name}</p>
                <p>•</p>
                <p>{restaurant.price_level}</p>
              </div>
              <div className="flex items-center gap-1">
                {restaurant.open_now_text === "Closed Now" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fc0303"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#63E6BE"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                    />
                  </svg>
                )}
                <p>{restaurant.open_now_text}</p>
              </div>
            </div>
          </div>
          <Link to={`/detail/${restaurant.location_id}`} state={{ restaurant }}> {/* Pass restaurant object in state */}
            <button className="flex-row-reverse w-full bg-indigo-950 text-white py-3">
              Learn More
            </button>
          </Link>
        </div>
      ))}
      {data.length > loadedCards && (
        <div className="flex justify-center w-full mt-4 col-span-4">
          <button
            className="border-2 border-indigo-950 text-indigo-950 w-1/3 py-2 px-4 mt-6"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
