import "../Sass/app.scss";
import "../Sass/questions.scss";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Merill-Reid Test</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae sit corrupti error nemo eum dicta delectus? Minima nesciunt nulla sunt dicta nobis officiis repellendus pariatur. Modi in reprehenderit sed?
            Deserunt cupiditate illo quis omnis rerum, atque ut tempora harum doloribus debitis reprehenderit culpa similique quasi quia nihil corrupti adipisci magni recusandae! Consequuntur explicabo odio ipsum quos nam mollitia consectetur?</p>
            <Link to="/test"><button>Start Test</button></Link>
            
        </> 
     );
}
 
export default Home;