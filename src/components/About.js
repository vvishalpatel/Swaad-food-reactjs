import { Link, Outlet } from "react-router-dom";
import Profile1 from "./Profile";
import Profile from "./ProfileClass";
import React from "react";
import LinkedIn from "../assets/LinkedIn.png"

class About extends React.Component {
    constructor(props) {
        super(props);
        
        console.log("Parent Contructor")

    }
    componentDidMount() {
        //Best Place to make an API call
        
        console.log("Parents - componentDidMount");

    }

    render() {
        console.log("Parents - render")
        return (
            <div className=" font-bold text-center mt-6">
                <h1>About Me</h1>
                <p>
                Hi !! My name is Vishal Patel .
                </p>
                <div className="flex justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/vishal05patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            {/* LinkedIn SVG Icon */}
            <img
                className="mr-3 w-6 h-6" 
                 src={LinkedIn}
                     alt="LinkedIn Logo"
                    />
                Connect with me
          </a>
        </div>
                
            </div>
        );
    }
}

export default About


