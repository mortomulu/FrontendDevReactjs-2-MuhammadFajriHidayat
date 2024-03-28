import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import axios from "axios";
import { Result } from "postcss";

export default function Sectionrestaurant() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData().then((result) => {
      setRestaurant(result);
    }); // Panggil fungsi fetchDataFromApi di dalam useEffect
  }, []);

  console.log(restaurant);

  return (
    <div className="p-16">
      <div>
        <h1 className="text-3xl font-light">All Restaurant</h1>
      </div>
      <div></div>
    </div>
  );
}
