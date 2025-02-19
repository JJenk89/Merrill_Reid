import "../Sass/app.scss";
import "../Sass/error.scss";
import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="error">
            <h1>Oops!</h1>
            <p>Something went wrong!</p>
            <p>Click <Link to="/">here</Link> to return home</p>
        </div>
     );
}
 
export default Error;