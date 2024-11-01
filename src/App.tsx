import "./Sass/app.scss";
import Footer from "./components/Footer";
import Questions from './components/Questions';
import {data} from './data/data';

function App() {



  return (
    <>
    <div className="overlay">
      <Questions data={data}/>
      <Footer />
    </div>
    </>
  )
}

export default App
