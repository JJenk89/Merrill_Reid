import "../Sass/app.scss";
import "../Sass/questions.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QType } from "../types/qtype.type";


const Questions = ({data}: QType) => {
    const [index, setIndex] = useState<number>(0);
    const [question, setQuestion] = useState(data[index]);
    const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);
    const [isDisabledPrev, setIsDisabledPrev] = useState<boolean>(true);
    const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(true);
    const [, setResults] = useState({});
    const [animationClass, setAnimationClass] = useState<string>('slide-in');
    const [, setIsRadioSelected] = useState<boolean>(false);
    
    // state to track selected answers for each question
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    
    const qValueRef = useRef<string[]>([]);

    const navigate = useNavigate();

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsRadioSelected(true);
        setIsDisabledNext(false);
        
        // Store the selected answer for the current question index
        setSelectedAnswers(prev => ({
            ...prev,
            [index]: e.target.value
        }));

        if (index === data.length - 1) {
            setIsDisabledSubmit(false);
        }
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');
        e.preventDefault();
        
        if (checkedRadios.length > 0) {
            checkedRadios.forEach((radio) => {
                qValueRef.current = [...qValueRef.current, radio.value];
            });
        }

        setAnimationClass('slide-out');
        setTimeout(() => {
            setIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                setQuestion(data[newIndex]);
                return newIndex;
            });

            if (index === data.length - 2) {
                setIsDisabledNext(true);
            }
            if (index >= 0) {
                setIsDisabledPrev(false);
            }

            setAnimationClass('slide-in');
            setIsRadioSelected(false);
            setIsDisabledNext(!selectedAnswers[index + 1]);
        }, 250);
    };

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setAnimationClass('slide-out');
        setTimeout(() => {
            setIndex((prevIndex) => {
                const newIndex = prevIndex - 1;
                setQuestion(data[newIndex]);
                return newIndex;
            });

            if (index <= 1) {
                setIsDisabledPrev(true);
            }
            if (index < data.length - 1) {
                setIsDisabledNext(false);
            }

            qValueRef.current = qValueRef.current.slice(0, -1);
            setAnimationClass('slide-in');
            setIsDisabledNext(false);
        }, 250);
    };

    const handleResults = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsDisabledSubmit(true);

        const checkedRadio = document.querySelector<HTMLInputElement>('input[type="radio"]:checked');
        if (checkedRadio) {
            qValueRef.current = [...qValueRef.current, checkedRadio.value];
        }

        const countObj = qValueRef.current.reduce((count: any, currentValue: string) => {
            return (
                count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
                count
            );
        }, {});

        setResults(countObj);
        setIsDisabledPrev(true);
        navigate('/results', { state: { results: countObj } });
    };

    return ( 
        <>
            <div className="question-wrapper">
                <h1>Questions</h1>
                <form>
                    <div className="question">
                        <fieldset className={`animated-fieldset ${animationClass}`}>
                            <legend>{question.name}</legend>
                            <div className="radio-set">
                                <div className="answer">
                                    <input 
                                        type="radio" 
                                        id={`A-${index}`}
                                        name={question.name} 
                                        value={question.values.a} 
                                        onChange={handleRadioChange}
                                        checked={selectedAnswers[index] === question.values.a}
                                        aria-labelledby={`label-A-${index}`}
                                    /> 
                                    <span className="answer-letter" id={`letter-A-${index}`}>A:</span> 
                                    <label htmlFor={`A-${index}`} id={`label-A-${index}`}>{question.answers.a}</label>
                                </div>
                                <div className="answer">
                                    <input 
                                        type="radio" 
                                        id={`B-${index}`} 
                                        name={question.name} 
                                        value={question.values.b} 
                                        onChange={handleRadioChange}
                                        checked={selectedAnswers[index] === question.values.b}
                                        aria-labelledby={`label-B-${index}`}
                                    /> 
                                    <span className="answer-letter" id={`letter-B-${index}`}>B:</span> 
                                    <label htmlFor={`B-${index}`} id={`label-B-${index}`}>{question.answers.b}</label>
                                </div>
                                <div className="answer">
                                    <input 
                                        type="radio" 
                                        id={`C-${index}`}
                                        name={question.name} 
                                        value={question.values.c} 
                                        onChange={handleRadioChange}
                                        checked={selectedAnswers[index] === question.values.c}
                                        aria-labelledby={`label-C-${index}`}
                                    /> 
                                    <span className="answer-letter" id={`letter-C-${index}`}>C:</span> 
                                    <label htmlFor={`C-${index}`} id={`label-C-${index}`}>{question.answers.c}</label>
                                </div>
                                <div className="answer">
                                    <input 
                                        type="radio" 
                                        id={`D-${index}`}
                                        name={question.name} 
                                        value={question.values.d} 
                                        onChange={handleRadioChange}
                                        checked={selectedAnswers[index] === question.values.d}
                                        aria-labelledby={`label-D-${index}`}
                                    /> 
                                    <span className="answer-letter" id={`letter-D-${index}`}>D:</span> 
                                    <label htmlFor={`D-${index}`} id={`label-D-${index}`}>{question.answers.d}</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    
                    <div className="question-counter">Question {index + 1} of {data.length}</div>
                    <div className="button-field">
                        <button onClick={handlePrev} disabled={isDisabledPrev}>Prev</button>
                        {index === data.length - 1 ? (
                            <button onClick={handleResults} disabled={isDisabledSubmit}>Get Results</button>
                        ) : (
                            <button onClick={handleNext} disabled={isDisabledNext}>Next</button>
                        )}
                    </div>
                </form>
            </div>

       </>
    );
}

export default Questions;