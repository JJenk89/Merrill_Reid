//Sass imports
import "./Sass/app.scss";

//components
import Error from "./components/ErrorPage";
import { Analytics } from "@vercel/analytics/react"


//pages
import Questions from './components/Questions';
import Home from "./components/Home";
import Results from "./components/Results";


//data
import {data} from './data/data';
import {
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider,
  useLocation
} from "react-router-dom";
import Analytical from "./components/Analytical";
import Amiable from "./components/Amiable";
import Driver from "./components/Driver";
import Expressive from "./components/Expressive";
import About from "./components/About";

const ResultsWrapper = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return <Results results={results} />;
};

if (window.location.hostname.includes('github.io')) {
  //GitHub Pages
  document.head.querySelector('base')?.setAttribute('href', '/Merrill_Reid/');
}

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>   
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Questions data={data}/>} errorElement={<Error />}/>
            <Route path="/results" element={<ResultsWrapper />} errorElement={<Error />}/>
            <Route path="/analytical" element={<Analytical />} errorElement={<Error />}/>
            <Route path="/amiable" element={<Amiable />} errorElement={<Error />}/>
            <Route path="/driver" element={<Driver />} errorElement={<Error />}/>
            <Route path="/expressive" element={<Expressive />} errorElement={<Error />}/>
            <Route path="*" element={<Error />} />
          </Route>
          
  )
)
function App() {

  return (
    <>
          <RouterProvider router={router} />
          <Analytics />
    </>
  )
}



export default App
