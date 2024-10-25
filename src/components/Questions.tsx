import { QType } from "../types/qtype.type";

const Questions = ({data}: QType) => {

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const checkedRadios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]:checked');
        
        checkedRadios.forEach((radio) => {
            console.log({
                questionName: radio.name,
                selectedValue: radio.value,
                selectedOption: radio.id
            });
        });
    };
    return ( 
        <div className="question-wrapper">
            <h1>Questions</h1>
            <form>
                <div className="question">
                    {data.map((question, id) => {
                    return(
                        <fieldset key={id}>
                            <h4 >{question.name}</h4>
                            <div>A: <input type="radio" id="A" name={question.name} value={question.values.a}/> <label htmlFor="A">{question.answers.a} </label> </div>                    
                            <div>B: <input type="radio" id="B" name={question.name} value={question.values.b}/> <label htmlFor="B">{question.answers.b} </label> </div>                   
                            <div>C: <input type="radio" id="C" name={question.name} value={question.values.c}/> <label htmlFor="C">{question.answers.c} </label> </div>                    
                            <div>D: <input type="radio" id="D" name={question.name} value={question.values.d}/> <label htmlFor="D">{question.answers.d} </label> </div>                    
                        </fieldset>
                    ) 
                    })}
                </div>
                <button type="submit" onClick={handleSubmit}>Submit Results</button>
            </form>
           
            
        </div>
     );
}
 
export default Questions;