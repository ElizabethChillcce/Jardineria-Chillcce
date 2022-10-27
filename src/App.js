import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/Home/Home.jsx';
import { About } from '../src/components/About/About.jsx';
import { Projects} from '../src/components/Projects/Projects.jsx';

function App() {
  return(
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/projects" element= {<Projects/>} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;

/* import { Nabvar } from "./components/Navbar/Nabvar";
import logo from "./images/logo.png";

function App() {
  return (
   <>
   <Nabvar />
   <img src={logo} className="laptop" />
   <h1>Jardineria Chillcce</h1>
   </>
  );
}

export default App; */