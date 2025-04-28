//Named Export
import { useState, useEffect } from "react";
import {restrauantList} from "./config";
//Default Export
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


function filterData(searchText, restaurants){

    const filterData = restaurants.filter((restaurants) =>
    restaurants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;

}
const Body = () => {
//useState Hook
    const[allRestaurants, setAllRestaurants] = useState([]);

//Everytime we want your variable to sync with UI we use "State variable"
    const [searchText, setsearchText] = useState(""); //returns [variable name, function to update the variable]

    const [filteredrestaurants, setFilteredRestaurants] = useState([]);

    //useEffect() Hook
    //empty dependency - Once after render
    //dep array [ searchText ] - One after render + everytime when i write (searchText changes)
    useEffect(() => {
        //API call
        fetch("")
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const apiUrl = process.env.REACT_APP_SWIGGY_API_URL;
        const lat = process.env.REACT_APP_SWIGGY_LAT;
        const lng = process.env.REACT_APP_SWIGGY_LNG;

    
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.952862214938285&lng=80.7915697619319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        //below written code is not a good way to write code , please use optional chaining
        //setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        //Optional Chaining:
        setAllRestaurants(json?.data?.cards[4] ?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4] ?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")
 
    //Conditional Rendering
    //if restaurant is empty => Shimmer UI
    //if restaurant has data => actual data UI   

    const isOnline = useOnline();
    if(!isOnline) {
        return <h1> 👺 Offline , check your Internet Connection !!</h1>
    }



    return (filteredrestaurants?.length == 0) ? <Shimmer/> : (
        //SEARCH BAR
        <>
        <div className = "flex justify-center p-8">
            <input
             type="text"
              className="p-3 w-80 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Type Restaurant name.." 
              value={searchText} 
              onChange={(e) =>{
            // e.target.value => what ever you write in input
                setsearchText(e.target.value);
            }}
            />
            <button 
                className="p-3 bg-blue-400 text-white rounded-r-full hover:bg-blue-500 transition-colors"
                onClick={() =>{
                    //need to filter data
                    const data = filterData(searchText, allRestaurants); //-> filtering the text written in searchtext  from the restaurant list

                    //update the state - restrauant
                    setFilteredRestaurants(data);

            }}
            >
            Search
            </button>
        </div>
    
        <div className="flex flex-wrap">
{/* It is like a function call - {restrauantList[0]} => this is like an argument passed in, but we called it as props. When you passed in props in some functional component , it received as a parameter at above  and we can use props just like any other variable. */}

{/* Spread Operator --  ...restrauantList[0].info */}
            {/* <RestrauantCard {...restrauantList[0].info}/>  
            <RestrauantCard {...restrauantList[1].info}/>
            <RestrauantCard {...restrauantList[2].info}/>
            <RestrauantCard {...restrauantList[3].info}/>
            <RestrauantCard {...restrauantList[4].info}/>
            <RestrauantCard {...restrauantList[5].info}/> */}

{/* Map function */}
            {filteredrestaurants?.map((restaurants) => {
              return (
              <Link
               to = {"/restaurant/"+ restaurants.info.id}
               key = {restaurants.info.id}>
                <RestaurantCard {...restaurants.info}/>
                </Link>
              );
            })}            
        </div>
        </>
    );
};
export default Body;