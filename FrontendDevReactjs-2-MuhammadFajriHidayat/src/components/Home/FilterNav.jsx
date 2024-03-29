import { useState, useEffect } from "react";
import { fetchData } from "../../utils/api";

export default function FilterNav({
  listCategory,
  filterCategory,
  listPrice,
  filterPrice,
  setRestaurant,
}) {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isOpenNow, setIsOpenNow] = useState(false); // Tambahkan state isOpenNow

  useEffect(() => {
    fetchData().then((result) => {
      const filteredData = result.data.filter(
        (_, index) =>
          index !== 4 &&
          index !== 10 &&
          index !== 11 &&
          index !== 12 &&
          index !== 17 &&
          index !== 18 &&
          index !== 21
      );
      setData(filteredData);
    });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterCategory(category);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
    filterPrice(price);
  };

  const handleOpenNowChange = () => {
    setIsOpenNow(!isOpenNow); // Mengubah status isOpenNow ketika radio button diubah
    if (!isOpenNow) {
      // Jika radio button dipilih, filter restoran yang sedang buka
      const openRestaurants = data.filter((restaurant) => {
        // Tambahkan logika untuk memeriksa apakah restoran sedang buka
        return restaurant.open_now_text === "Open Now";
      });
      setRestaurant(openRestaurants);
    } else {
      // Jika radio button tidak dipilih, tampilkan semua restoran
      setRestaurant(data);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedPrice("");
    setIsOpenNow(false); // Reset status isOpenNow
    setRestaurant(data);
  };
  return (
    <div className="w-full border-b-2 border-gray-300 py-6 px-16 flex justify-between">
      <div className=" w-fit flex gap-8 align-middle">
        <div className="text-gray-500 w-fit">Filter By:</div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <input
            type="radio"
            name="openNow"
            id="openNow"
            checked={isOpenNow}
            onChange={handleOpenNowChange}
          />
          <label className="text-blue-900" htmlFor="openNow">
            Open Now
          </label>
        </div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <select
            name="price"
            className="text-blue-900 border-none focus:border-none"
            onChange={handlePriceChange}
            value={selectedPrice}
          >
            <option value="">
              Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
            {listPrice.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        <div className="flex align-middle justify-center items-center gap-2 border-b-2 pb-1">
          <select
            name="category"
            className="text-blue-900 border-none focus:border-none"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">
              Categories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
            {listCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button
          className="border-2 py-1 px-8 text-gray-400"
          onClick={clearAllFilters}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
