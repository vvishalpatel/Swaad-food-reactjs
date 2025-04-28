import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        //Create State
        this.state = {
            userInfo: {
                name: "dummy Name",
                Location: "dummy location",
            },
        };
        console.log("child - constructor")
    };

    async componentDidMount() {
        // const data = await fetch("https://api.github.com/users/vvishalpatel")
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo: json,
        // });
        console.log("child - componentDidmount")
    }
    componentDidUpdate() {
        console.log("Component DiDUpdate")
    }
    // componentWillUnmount(){
    //     console.log("componentWillUnMount")
    // }


    render() {
        console.log("child- render")
        return (
            <div>
                <h1> Profile Class Component</h1>
                <h2> Name : {this.state.userInfo?.name}</h2>
                <h3>Location: {this.state.userInfo?.Location}</h3>
                
            </div>
        )
    }
}
export default Profile;

/*
NOTES - CLASS BASED COMPONENT


 1- How to pass props in class components?
      -- we use "this" keyword to pass props e.g {this.props.name}

2- How to create a State in class component?
(see written notes)

React Lifecycle:

 In class component first constructor is called then its render!! Constructor => render  

How to fetch api in class Component?



 onClick={() => {
                //DO NOT MUTATE STATE DIRECTLY
                //NEVER DO this.state = something
                    this.setState({
                        count: 1,
                    });
                }}


 Functional component                 Class based Component
 Render                               Constructor   
 Update -- useEffect() after 
 every render                         Render
 Render                               componentDidMount -- right place to fetch api because before fetching first render should happen



According to REACT LIFECYCLE and code here

*child constructor
*child render
*child componentDidMount (called after 1st render)

*API call
*Set state
*render
*componentDidUpdate (called after every next render when state change)



 * Why we use componentWillUnmount() in react?
 * - Unmounting refers to the process of removing a component from the DOM. in SPA its very usefull to unmount the component from the UI otherwise it will run in bg.
 * For Example - we can check it by using setInterval inside componentDidMount() and 
 *              to remove it or unmount it so clearInterval in componentWillMount() 
 */



