import { createContext } from "react";
//CreateContext is a function -> it takes in some data that we need all across the application 

const UserContext = createContext({
    user:{
        name: "Dummy name",
        email: "Dummy email",
},
});

export default UserContext;