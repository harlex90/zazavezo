import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Entete from './components/Entete';
import Objectifs from "./components/Objectifs";
import Realisations from "./components/Realisations";
import Contribuer from "./components/Contribuer";
import Apropos from "./components/Apropos";
import PhonePopUp from "./components/PhonePopUp";

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
