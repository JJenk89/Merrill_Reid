import './App.css';
import Greet from './components/Greet';
import Questions from './components/Questions';
import {data} from './data/data';

function App() {



  return (
    <>
    <Greet name="Jason"/>
    <Questions data={data}/>
    
    </>
  )
}

export default App
