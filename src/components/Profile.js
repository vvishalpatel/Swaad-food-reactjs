import {useState} from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Profile component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(1)}>Count</button>
        </div>
    );
};

export default Profile;