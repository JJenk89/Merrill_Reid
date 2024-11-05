import "../Sass/results.scss";
import { Link } from "react-router-dom";

interface ResultsObject {
  [key: string]: number;
}

interface ResultsProps {
  results: ResultsObject;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  if (Object.keys(results).length === 0) {
    return null;
  }

  // Calculate the total count of responses
  const totalResponses: number = Object.values(results).reduce((a: number, b: number) => a + b, 0);

  return (
    <>
    <div className="results-wrapper">
      <h2>Your Results</h2>
      <div className="category-wrapper">
        {Object.entries(results).map(([category, count]: [string, number]) => {
          // Calculate the percentage for each category
          const percentage: string = ((count / totalResponses) * 100).toFixed(0);

          return (
            <div 
            className="result"
            key={category}
            >

              <div className="category">
                <span><strong>Category:</strong> {category}</span>
              </div>

              <div className="percentage">
                <span><strong>{percentage}%</strong></span>
              </div>
              
            </div>
          );
        })}
      </div>

      <div className="total-responses">
        Total responses: {totalResponses}
      </div>
        <p>Check out the table below for a summary.</p>
        <p>You can click the communication types in the table to get more detailed info and tips...</p>
    </div>

    <div className="table-container">
      <table>
        <tr>
          <th>Type</th>
          <th>Strengths</th>
          <th>Weaknesses</th>
        </tr>
        <tr> 
          {/* ANALYTICAL */}
          <td><Link to="/analytical">Analytical</Link></td>
          {/* STRENGTHS */}
          <td>
            <ul>
              <li>Thinking</li>
              <li>Thorough</li>
              <li>Disciplined</li>
            </ul>
          </td>
          {/* WEAKNESSES */}
          <td>
            <ul>
              <li>Excludes feelings from decisions</li>
              <li>Goes too far and a perfectionist</li>
              <li>Too demanding of self/others</li>
            </ul>
          </td>

        </tr>
        {/* AMIABLE */}
        <tr>
          <td><Link to="/amiable">Amiable</Link></td>

          <td>
            <ul>
              <li>Supportive</li>
              <li>Patient</li>
              <li>Diplomatic</li>
            </ul>
          </td>

          <td>
            <ul>
              <li>Tends to conform to others wishes</li>
              <li>No time boundaries, struggles with getting things done</li>
              <li>Not assertive</li>
            </ul>
          </td>

        </tr>

        <tr>
          <td><Link to="/driver">Driver</Link></td>

          <td>
            <ul>
              <li>Independent</li>
              <li>Decisive</li>
              <li>Determined</li>
            </ul>
          </td>

          <td>
            <ul>
              <li>Has trouble working with others</li>
              <li>Doesn't take time to consider other perspectives</li>
              <li>Domineering: "My way or the highway"</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td><Link to="/expressive">Expressive</Link></td>
          <td>
            <ul>
              <li>Good communicator</li>
              <li>Imaginative</li>
              <li>Enthusiastic</li>
            </ul>
          </td>

          <td>
            <ul>
              <li>Talks too much</li>
              <li>Comes on too strong</li>
              <li>A dreamer - often unrealistic ideas</li>
            </ul>
          </td>
        </tr>
        
      </table>
    </div>
    </>
  );
};

export default Results;
