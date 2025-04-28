import { Link } from "react-router-dom";
import AppLogo from "../assets/AppLogo.png"
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Home from "../assets/Home.png"
import Contact from "../assets/Contact.png"
import About from "../assets/About.png";


const Title = () => (
    <div className="flex items-center">
        <img src={AppLogo} alt="swaad" className="w-40 h-auto pl-10 " />
    </div>
);


/*SPA - Single Page Application
Two type of Routing - 
 1- Client side Routing
 2 - Server side Routing*/

 //We are not using anchor tag because it load whole page which is not needed, we just have to load another component from the code for that we gonna use {Link} from react-router-dom

const Header = () => {

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);



    return (
        <div className="flex items-center justify-end z-20 bg-[#db7e1e] shadow-md w-full top-0 left-0 right-0">
            <Title />
            <div className="nav-items ml-auto">
                <ul className="flex items-end py-2 space-x-2 text-sm">
                <Link to="/">
                <li className="flex  px-4">
                   <img src={Home} alt="Home" className="w-4 h-4 mr-2" />
                    Home
                </li>
                    </Link>
                    <Link to="/About">
                <li className="flex items-center px-4">
                   <img src={About} alt="About" className="w-4 h-4 mr-2" />
                    About
                </li>
                    </Link>
                    <Link to="/SignIn">
                <li className="flex items-center px-4">
                   <img src={Contact} alt="SignIn" className="w-4 h-4 mr-2" />
                    SignIn
                </li>
                </Link>
                    <Link to ="/cart">
                    <li className=" flex items-center px-4">🛒 Cart ({cartItems.length})</li>
                    </Link>
                </ul>
            </div>
            {/* {user.name} */}
        </div>
    );
};

export default Header;
