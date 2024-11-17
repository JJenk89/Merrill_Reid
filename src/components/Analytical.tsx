import "../Sass/app.scss";
import { useNavigate} from "react-router-dom";


const Analytical = () => {

    const navigate = useNavigate();

    return ( 
    <div className="analytical-bkg">
        <div className="type-description-container">
                <h1>Analytical</h1>

                <h3>Overview</h3>

                <p>Analytical communicators are logical, data-driven and detail-oriented. They prefer thorough information and systematic approaches. They focus on accuracy and objectivity, often asking probing questions. They may come across as reserved and can be slow to make decisions while gathering facts.</p>

                <h3>How to communicate with an analytical / process-oriented person</h3>

                
                <ul>
                    <li>Be precise - stick to the facts</li>
                    <li>Organise your points and be logical</li>
                    <li>Background - present situation - outcome</li>
                    <li>Include alternatives along with their pros and cons</li>
                    <li>Do not rush them</li>
                </ul>
            </div>
            
            <button onClick={() => navigate(-1)}>Back</button> 

        </div>
     );
}
 
export default Analytical;