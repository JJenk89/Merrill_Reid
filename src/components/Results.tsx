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
    <div>
      <h2>Your Results</h2>
      <div>
        {Object.entries(results).map(([category, count]: [string, number]) => {
          // Calculate the percentage for each category
          const percentage: string = ((count / totalResponses) * 100).toFixed(0);

          return (
            <div key={category}>
              <div>
                <span>Category: {category}</span>
                <div>
                  <div />
                </div>
              </div>
              <span>{percentage}%</span>
            </div>
          );
        })}
      </div>
      <div>
        Total responses: {totalResponses}
      </div>
    </div>
  );
};

export default Results;
