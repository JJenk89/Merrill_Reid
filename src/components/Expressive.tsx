import { useNavigate } from "react-router-dom";
import "../Sass/app.scss";

const Expressive = () => {

    const navigate = useNavigate();
    
    return (
        <div className="expressive-bkg">
            <div className="type-description-container">
                <h1>Expressive</h1>

                <h3>Overview</h3>

                <p>Expressives are enthusiastic, animated and people-oriented. They communicate with energy, enjoy brainstorming, and share ideas freely. They're spontaneous, creative, and natural storytellers. While engaging, they may sometimes overwhelm others or lose focus on details.</p>

                <h3>How to communicate with an expressive / ideas-oriented person</h3>

                
                <ul>
                    <li>Allow time for a discussion</li>
                    <li>Do not get impatient if they go off on a tangent</li>
                    <li>Try to relate the discussion to a broader idea or concept</li>
                    <li>Stress the uniqueness of ideas or suggestions and emphasise future value</li>
                    <li>When writing or presenting, start with a summary and then work towards details later</li>
                </ul>
            </div>

            <button onClick={() => navigate(-1)}>Back</button> 

        </div>
     );
}
 
export default Expressive;