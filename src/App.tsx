import "./Sass/app.scss";
import Questions from './components/Questions';
import {data} from './data/data';

function App() {



  return (
    <>
      <Questions data={data}/>
    </>
  )
}

export default App
