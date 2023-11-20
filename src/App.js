import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Entete from './components/Entete';
import Objectifs from "./components/Objectifs";

function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Entete />} />
      <Route path="/objectifs" element={<Objectifs/>}/>
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
