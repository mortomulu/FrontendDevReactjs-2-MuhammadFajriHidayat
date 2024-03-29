import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterNav from "../components/Home/FilterNav"; 
import Sectionrestaurant from "../components/Home/SectionRestaurant";
import { fetchData } from "../utils/api";

export default function Home() {
  // state fetch data
  const [restaurant, setRestaurant] = useState([]) 

  // variabel filter category
  const listCategory = [
    ...new Set(restaurant.map((val) => val.cuisine[0].name)),
  ]

  // variabel filter price
  const listPrice = [...new Set(restaurant.map((val) => val.price))]

  // fetch data api restaurant
  useEffect(() => {
    fetchData().then((result) => {
      // Filter data yang rusak
      const filteredData = result.data.filter(
        (_, index) =>
          index !== 4 &&
          index !== 10 &&
          index !== 11 &&
          index !== 12 &&
          index !== 17 &&
          index !== 18 &&
          index !== 21
      ) 
      setRestaurant(filteredData) 
    }) 
  }, []) 

  // fungsi filter kategori
  const filterCategory = (cat) => {
    const newCategory = restaurant.filter(
      (prev) => prev.cuisine[0].name === cat
    ) 
    setRestaurant(newCategory) 
  } 

  // fungsi filter price
  const filterPrice = (price) => {
    const newPrice = restaurant.filter((prev) => prev.price === price)
    setRestaurant(newPrice)
  }

  return (
    <>
      <Header />
      <FilterNav
        listCategory={listCategory}
        filterCategory={filterCategory}
        listPrice={listPrice}
        filterPrice={filterPrice}
        setRestaurant={setRestaurant}
      />
      <Sectionrestaurant restaurant={restaurant} />
    </>
  ) 
}
