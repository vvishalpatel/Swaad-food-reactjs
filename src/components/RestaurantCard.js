import { IMG_CDN_URL } from "./config";

const RestrauantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-72 p-4 m-4 rounded-2xl shadow-lg hover:scale-95 transition-transform">
      <img
        className="w-full h-48 object-cover rounded-2xl"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="pt-3">
        <h2 className="font-bold text-lg mb-1 truncate">{name}</h2>
        <h3 className="text-gray-600 text-sm mb-1">{cuisines.join(", ")}</h3>
        <h4 className="text-[#db7e1e] font-semibold">{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestrauantCard;
