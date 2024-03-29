import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import { CardRestaurant } from "./CardRestaurant";
import Skeleton from "./Skeleton";

export default function Sectionrestaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const skeletonNum = Array(8).fill(null);
  const skeleton = null;

  useEffect(() => {
    fetchData().then((result) => {
      // Melompati indeks 8, 11, dan 18 dari array data sebelum menetapkannya
      const filteredData = result.data.filter(
        (_, index) => index !== 4 && index !== 11 && index !== 18
      );
      setRestaurant(filteredData);
    });
  }, []);

  // if (!skeleton) return (
  //   <div className="p-16">
  //     <div className="-mb-8">
  //       <h1 className="text-3xl font-light m-0">All Restaurant</h1>
  //     </div>
  //     <div className="mt-10">
  //       <Skeleton skeletonNum={skeletonNum}/>
  //     </div>
  //   </div>
  // )

  return (
    <div className="p-16">
      <div className="-mb-8">
        <h1 className="text-3xl font-light m-0">All Restaurant</h1>
      </div>
      <div className="all restaurant  mt-10">
        <CardRestaurant restaurant={restaurant} />
      </div>
    </div>
  );
}
