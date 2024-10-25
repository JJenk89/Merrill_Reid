import { useState } from "react";
import { NameProps } from "../types/name.types";

const Greet = ({name}: NameProps) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        setLoggedIn(true)
    }
    const handleLogOut = () => {
        setLoggedIn(false)
    }

    return (
        <>
            <div>
               <h1>Home</h1>
               <div>Welcome {loggedIn ? `${name}! You are logged in` : `Guest`}</div>
               <button onClick={handleLogIn}>Log In</button>
               <button onClick={handleLogOut}>Log Out</button>
            </div>

        </> 
     );
}
 
export default Greet;