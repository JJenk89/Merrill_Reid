import "./Sass/app.scss";
import Footer from "./components/Footer";
import Questions from './components/Questions';
import Home from "./components/Home";
import {data} from './data/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <div className="overlay">
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Questions data={data}/>} />
            
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
