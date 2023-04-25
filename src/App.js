import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderTopo from "./Components/HeaderTopo";
import Home from "./Components/Home";
import Escocia from "./Components/Escocia";
import GrandCanyon from "./Components/GrandCanyon";
import Muralhas from "./Components/Muralhas";
import Aruba from "./Components/Aruba";
import Rodape from "./Components/Rodape";


function App() {

  return (
    <div className="App">

      <Router>
        <HeaderTopo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Escócia' element={<Escocia />} />
          <Route path='GrandCanyon' element={<GrandCanyon />} />
          <Route path='Muralha' element={<Muralhas />} />
          <Route path='Aruba' element={<Aruba />} />
        </Routes>
        <Rodape />
      </Router>

    </div>
  );

}

export default App;
