import { useState } from "react";
import { QType } from "../types/qtype.type";

const Questions = ({data}: QType) => {

    let [index, setIndex] = useState<number>(0);
    let [question, setQuestion] = useState(data[index]);
    let [isDisabledNext, setIsDisabledNext] = useState<boolean>(false);
    let [isDisabledPrev, setIsDisabledPrev] = useState<boolean>(true);
    let [qValue, setQValue] = useState<string[]>([]);


    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');
        e.preventDefault();
        setIndex(++index);
        setQuestion(data[index]);
        if (index === 17) {
            setIsDisabledNext(true)
        }
        if (index === 1) {
            setIsDisabledPrev(false)
        }
        
        checkedRadios.forEach((radio) => {
            let radioValues = radio.value;
            setQValue([...qValue, radioValues]);
            radio.checked = false;
            console.log(radioValues)
            console.log(qValue)
        });
        console.log("next clicked")
    }

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');

        e.preventDefault();
        setIndex(--index);
        setQuestion(data[index]);
        if (index === 0) {
            setIsDisabledPrev(true)
        }
        if (index === 16) {
            setIsDisabledNext(false)
        }
        checkedRadios.forEach((radio) => {
            let radioValues = radio.value;
            
            radio.checked = false;
            
        });
        setQValue([...qValue].slice(0, -1));
        console.log("prev clicked")
    }

    const handleRadio = () => {
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');
        checkedRadios.forEach((radio) => {
            let radioValues = radio.value;
            
            console.log(radioValues)
        });
        console.log(qValue)
        
    }

    const handleResults = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }


    return ( 
        <div className="question-wrapper">
            <h1>Questions</h1>
            <form>
                <div className="question">
                    
                        <fieldset>
                            <h4 > {question.name}</h4>
                            <div className="radio-set" onChange={handleRadio}>
                            <div>A: <input type="radio" id="A" name={question.name} value={question.values.a}/> <label htmlFor="A">{question.answers.a} </label> </div>                    
                            <div>B: <input type="radio" id="B" name={question.name} value={question.values.b}/> <label htmlFor="B">{question.answers.b} </label> </div>                   
                            <div>C: <input type="radio" id="C" name={question.name} value={question.values.c}/> <label htmlFor="C">{question.answers.c} </label> </div>                    
                            <div>D: <input type="radio" id="D" name={question.name} value={question.values.d}/> <label htmlFor="D">{question.answers.d} </label> </div>                    
                            </div>
                        </fieldset>
                    
                </div>
                <div>Question {index+1} of {data.length}</div>
                <button onClick={handlePrev} disabled={isDisabledPrev}>Prev</button>
                <button onClick={handleNext} disabled={isDisabledNext}>Next</button>
                {isDisabledNext ? <button onClick={handleResults}>Get Results</button> : null}
            </form>
            <p>{`Your results are: ${qValue}`}</p>
        </div>
     );
}
 
export default Questions;