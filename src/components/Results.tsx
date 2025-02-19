import "../Sass/results.scss";
import "../Sass/accordion.scss";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styleDetails } from "../data/styleDetails";

interface ResultsObject {
  [key: string]: number;
}

interface ResultsProps {
  results: ResultsObject;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (Object.keys(results).length === 0) {
    return null;
  }

  const totalResponses: number = Object.values(results).reduce((a: number, b: number) => a + b, 0);

  const toggleAccordion = (category: string) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  return (
    <div className="results-wrapper">
      <h1>Your Results</h1>
      <p>Click on each style to find out their strengths and weaknesses</p>
      <div className="category-wrapper">
        {Object.entries(results).map(([category, count]: [string, number]) => {
          const percentage: string = ((count / totalResponses) * 100).toFixed(0);
          const details = styleDetails[category];
          const isOpen = openAccordion === category;

          return (
            <div key={category} className="accordion-wrapper">
              <div className="accordion-btns"
                onClick={() => toggleAccordion(category)}
                
              >
                <div>
                  <div><strong>{category} {isOpen ? `-` : `+`}</strong></div>
                  <div className="percentage"><strong>{percentage}%</strong></div>
                  
                </div>
              </div>

              {isOpen && (
                <div className="strengths-weaknesses-div">
                  <div className="strengths">
                    <h3>Strengths</h3>
                    <ul>
                      {details.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="weaknesses">
                    <h3>Weaknesses</h3>
                    <ul>
                      {details.weaknesses.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/${category}`}>Find out more</Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

        <Link to={"/"}>Return Home</Link>

    </div>
  );
};

export default Results;
