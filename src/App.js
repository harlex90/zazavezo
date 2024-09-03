import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Entete from "./views/Entete";
import Objectifs from "./views/Objectifs";
import Realisations from "./views/Realisations";
import Contribuer from "./views/Contribuer";
import Apropos from "./views/Apropos";
import TestTitleAndNavbar from "./views/TestTitleAndNavbar";

function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Entete />} />
      <Route path="/objectifs" element={<Objectifs/>}/>
      <Route path="/realisations" element={<Realisations/>}/>
      <Route path="/contribuer" element={<Contribuer/>}/>
      <Route path="/apropos" element={<Apropos/>}/>
      {/* <Route path="/test" element={<TestTitleAndNavbar/>}/> */}
    </Routes>
  </BrowserRouter>
  )
}







function App() {
  return (
    <Router />
  );
}

export default App;
