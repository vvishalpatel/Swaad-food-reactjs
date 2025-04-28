// Customs Hooks

import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
    const[restaurant, setRestaurant] = useState(null);

    //Get data from API
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.952862214938285&lng=80.7915697619319&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

        const json =  await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }
    //return restaurant data
    return restaurant;

}

export default useRestaurant;