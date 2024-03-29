import { useEffect, useState } from "react";
import { CardRestaurant } from "./CardRestaurant";
import Skeleton from "./Skeleton";

export default function Sectionrestaurant({restaurant}) {
  const skeletonNum = Array(8).fill(null);
  // const skeleton = null;
   

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
