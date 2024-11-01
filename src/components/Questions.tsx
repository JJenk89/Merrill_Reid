import "../Sass/app.scss";
import "../Sass/questions.scss";
import { useState, useRef } from "react";
import Results from "./Results";
import { QType } from "../types/qtype.type";

const Questions = ({data}: QType) => {

    //State
    let [index, setIndex] = useState<number>(0);
    let [question, setQuestion] = useState(data[index]);
    let [isDisabledNext, setIsDisabledNext] = useState<boolean>(false);
    let [isDisabledPrev, setIsDisabledPrev] = useState<boolean>(true);
    let [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(false);
    let [results, setResults] = useState({});

    //Ref (stores answers in sync)
    let qValueRef = useRef<string[]>([]);

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');
        e.preventDefault();
        
        // Update qValueRef with the selected answer for the current question
        if (checkedRadios.length > 0) {
            checkedRadios.forEach((radio) => {
                let radioValues = radio.value;
                qValueRef.current = [...qValueRef.current, radioValues];
                radio.checked = false;
            });
        }

        setIndex(++index);
        setQuestion(data[index]);
        if (index === 17) {
            setIsDisabledNext(true);
        }
        if (index === 1) {
            setIsDisabledPrev(false);
        }

        console.log("next clicked", qValueRef.current);
    };

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIndex(--index);
        setQuestion(data[index]);
        if (index === 0) {
            setIsDisabledPrev(true);
        }
        if (index === 16) {
            setIsDisabledNext(false);
        }

        // Remove the last answer from qValueRef.current when going back
        qValueRef.current = qValueRef.current.slice(0, -1);
        console.log("prev clicked", qValueRef.current);
    };


    const handleResults = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsDisabledSubmit(true);

        // Ensure the final answer is added to qValueRef before generating countObj
        const checkedRadio = document.querySelector<HTMLInputElement>('input[type="radio"]:checked');
        if (checkedRadio) {
            qValueRef.current = [...qValueRef.current, checkedRadio.value];
        }

        // Generate countObj from qValueRef.current
        const countObj = qValueRef.current.reduce((count: any, currentValue: string) => {
            return (
                count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
                count
            );
        }, {});

        setResults(countObj);  // Store the results in state
        setIsDisabledPrev(true); //Locks the prev button
        console.log("Final results", countObj);
    };

    return ( 
        <>
            <div className="question-wrapper">
                <h1>Questions</h1>
                    <form>
                        <div className="question">
                            <fieldset>
                                <h4>{question.name}</h4>
                                <div className="radio-set">
                                    <div className="answer"> <input type="radio" id="A" name={question.name} value={question.values.a}/> A: <label htmlFor="A">{question.answers.a} </label> </div>                    
                                    <div className="answer"> <input type="radio" id="B" name={question.name} value={question.values.b}/> B: <label htmlFor="B">{question.answers.b} </label> </div>                   
                                    <div className="answer"> <input type="radio" id="C" name={question.name} value={question.values.c}/> C: <label htmlFor="C">{question.answers.c} </label> </div>                    
                                    <div className="answer"> <input type="radio" id="D" name={question.name} value={question.values.d}/> D: <label htmlFor="D">{question.answers.d} </label> </div>                    
                                </div>
                            </fieldset>
                        </div>
                        
                            <div className="question-counter">Question {index + 1} of {data.length}</div>
                        <div className="button-field">
                            <button onClick={handlePrev} disabled={isDisabledPrev}>Prev</button>
                            <button onClick={handleNext} disabled={isDisabledNext}>Next</button>
                            {isDisabledNext ? <button onClick={handleResults} disabled={isDisabledSubmit}>Get Results</button> : null}
                        </div>
                    </form>
            </div>

        <Results results={results}/>
        </>
    );
}

export default Questions;
