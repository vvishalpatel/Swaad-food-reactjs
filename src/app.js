/**
 * Parcel - Advantages
 * 
 * Created a Server
 * HMS - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production build
 * Super Fast Build Algorithm
 * Image Optimization
 * Caching while development 
 * Compression
 * compatable with older version of browser
 * HTTPS on dev
 * Port number
 * Consistent hashing ALgorithm
 * Zero Configuration
 * 
 */


import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
//Named Import
// import { Title } from "./components/Header";
//Default import
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./components/config";
import Error from "./components/Error";
// import SignIn from "./components/Contact";
import SignIn from "./components/SignIn";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//Chunking
//Code Splitting
//Lazy Loading
//Dynamic Bundling
//On Demand Loading
//Dynamic Import
const About = lazy(() => import("./components/About")) // We dont need to import About above if we are doing "  lazy loading" 



// React.createElement => Object => Html(DOM)

//Call createElement to create a React element with the given type, props, and children.
// const heading = React.createElement(
//     "div",
//      {
//          id: "title",
//          key: "h1"
//     },
//      "Heading 1"
// );

// JSX => React.createElement => Object => HTML(DOM) 



// Config Driven UI



 
// const BurgerKing = {
//     name: "Burger King",
//     image: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp",
//     cusines: ["South Indian, North Indian"],
//     rating: "4.3"
    
// }

// Here Props is like a parameter in js 

//Instead of props we write {restraunt} i.e called destructuring . so we dont need to use props term like - props.restrauant.info


const AppLayout = () => {
    return(
        <Provider store = {store}>
        <Header />
        <Outlet/> 
        <Footer />
        </Provider> 
    );
};


//Routing Configuration - this is the place i will tell if there is "/about" then load "About us" component
//We can say that i am creating a router
//Always create this below AppLayout
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        //Nested Routing
        //All Children will go to the Outlet according to the route
        
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/SignIn",
                element: <SignIn/>,
            },
            {
                path: "/about",
                element: <Suspense fallback= {<h1>Loading...</h1>}>
                    <About/>
                     </Suspense>,
                children: [
                    {
                    path: "profile",   // parentPath/{path} => localhost:1234/about/profile
                    element: <Profile/>,
                },
            ],
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
        ],
    },
]);

//This JavaScript function selects the HTML element with the id of "root". It’s the place where the React app will be rendered on the webpage.
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element and react component inside the root
root.render(<RouterProvider router={appRouter}/>);
{/* <RouterProvider router={appRouter}/> */} // it help to get wherever according to the app router instead for just going to a single page i.e AppLayout or about