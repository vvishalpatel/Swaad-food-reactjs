import { IMG_CDN_URL } from "./config"

const FoodItem = ({ name, cuisines, cloudinaryImageId,price }) => {
  
    return (
        <div className="card w-full sm:w-[200px] md:w-[250px] lg:w-[300px] p-4 m-4 shadow-lg rounded-lg bg-white flex flex-col items-center">
        
        <h2 className="font-bold text-xl text-center text-gray-800 mb-2">{name}</h2>
        <h3 className="text-center text-sm text-gray-600 mb-2">{cuisines?.join(", ")}</h3>
        <h4 className="font-semibold text-lg text-green-600"> Rs {price / 100}</h4>
      </div>
    )
}
export default FoodItem 


