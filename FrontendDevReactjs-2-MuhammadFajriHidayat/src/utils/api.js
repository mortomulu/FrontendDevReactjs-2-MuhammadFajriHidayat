import axios from "axios";

export const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      params: {
        latitude: '-7.9797',
        longitude: '112.6304',
        limit: '21',
        currency: 'USD',
        prices_restaurants: '10',
        distance: '2',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': 'f72c913201mshcb2bab2a4e2c68cp17594bjsn58de53086949',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const {data} = response.data
      return {data}
    } catch (error) {
      console.error(error);
    }
  };