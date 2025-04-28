import {useRouteError} from "react-router-dom"; // it catches all error and show it in console, we can also display it on page  for user like -

//{err.status + " : " + err.statusText}

//Error component
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Oops !!!!</h1>
            <h2>Something went wrong !!</h2>
        </div>

    );
};

export default Error;