import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const lat = process.env.REACT_APP_SWIGGY_LAT || "27.952862214938285";
    const lng = process.env.REACT_APP_SWIGGY_LNG || "80.7915697619319";

    const swiggyMenuApiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const encodedUrl = encodeURIComponent(swiggyMenuApiUrl);

    const data = await fetch(`/api/proxy?url=${encodedUrl}`);  // ✅ proxy call
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
