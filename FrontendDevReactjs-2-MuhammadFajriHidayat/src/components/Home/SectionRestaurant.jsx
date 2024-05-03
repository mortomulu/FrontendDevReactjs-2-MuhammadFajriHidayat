import { useEffect, useState } from "react";
import { CardRestaurant } from "./CardRestaurant";
import Placeholder from "./Placeholder";

export default function Sectionrestaurant({ restaurant }) {
  const [isLoading, setIsLoading] = useState(true);
  const skeletonNum = Array(8).fill({ });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [restaurant]);

  return (
    <div className="p-16">
      <div className="mb-8">
        <h1 className="text-3xl font-light m-0">All Restaurant</h1>
      </div>
      {isLoading ? (
        <div className="mt-10">
          <Placeholder skeletonNum={skeletonNum} />
        </div>
      ) : (
        <div className="mt-10">
          <CardRestaurant restaurant={restaurant} />
        </div>
      )}
    </div>
  );
}
