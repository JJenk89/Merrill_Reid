import "../Sass/questions.scss";
import "../Sass/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        
        <>
            
            <div className="home">
                <h1>Merrill-Reid Test</h1>
                <p>
                The Merrill-Reid test assesses personality types to improve communication and teamwork. It identifies four main styles: <strong>Analytical, Driver, Amiable, and Expressive</strong>. Understanding these types helps people interact better by tailoring communication strategies for different personalities.</p>

                <p>The following test consists of 18 questions. Answer each question honestly, as if you were at work. You will see a button at the end of the test to get your results.</p>

                <p>Ready? Click the button below to begin!</p>
                <Link to="/test"><button>Start Test</button></Link>
            </div>
            <Link to="/about">About the app</Link>
        </>
     );
}
 
export default Home;