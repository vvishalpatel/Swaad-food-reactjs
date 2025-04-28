import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./shimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurant(resId);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItems("grapes"));
    };

    const addFoodItem = (item) => {
        dispatch(addItems(item));
    };

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex flex-col items-center justify-center ">

            {/* Restaurant name and image in one line */}
            <div className="flex items-center justify-center space-x-20 mt-20 mb-10">
                <h1 className="text-2xl font-bold">{restaurant?.cards?.[2]?.card?.card?.info?.name}</h1>
                <img
                    src={IMG_CDN_URL + restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId}
                    alt="Restaurant"
                    className="w-48 h-32 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Horizontal card for info */}
            <div className="flex flex-row items-center justify-between w-[600px] min-h-[50px]  bg-white shadow-md rounded-lg p-4 mb-8">
                <div className="flex-col">
                    <h3 className="text-gray-700 text-lg font-bold ">Area: {restaurant?.cards?.[2]?.card?.card?.info?.areaName}</h3>
                    <h3 className="text-gray-700 text-lg font-bold">City: {restaurant?.cards?.[2]?.card?.card?.info?.city}</h3>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-gray-700 text-lg">Rating: ⭐ {restaurant?.cards?.[2]?.card?.card?.info?.avgRating}</h3>
                    <h3 className="text-gray-700 text-lg">Cost for Two: {restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
                </div>
            </div>

            {/* Menu Section */}
            <div className="w-1/2 max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Menu</h1>
                <ul className="space-y-5">
                    {Object.values(restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]?.card?.card?.itemCards ?? []).map((item) => (
                        <li
                            key={item.card.info.id}
                            className="flex justify-between items-center p-4 bg-gray-100 rounded hover:bg-gray-200"
                        >
                            <span>{item.card.info.name}</span>
                            <button
                                className="p-1 px-3 bg-green-400 rounded bg-[#db7e1e]"
                                onClick={() => addFoodItem(item.card.info)}
                            >
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
