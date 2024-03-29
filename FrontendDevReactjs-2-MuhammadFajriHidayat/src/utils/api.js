import axios from "axios";

export const fetchData = async () => {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list",
    params: {
      location_id: "293919",
      restaurant_tagcategory: "10591",
      restaurant_tagcategory_standalone: "10591",
      currency: "USD",
      lunit: "km",
      limit: "16",
      open_now: "false",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "2765f4ad2bmsh6ac4b8481a9cad1p12bcb5jsna9c34e6f503e",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const { data } = response.data;
    return { data };
  } catch (error) {
    console.error(error);
  }
};
