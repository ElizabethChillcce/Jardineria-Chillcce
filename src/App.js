import { Nabvar } from "./components/Navbar/Nabvar";
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

export default App;
